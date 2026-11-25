// Translates player input into actions for the controlled player, and handles player switching.
//
// Layout (keyboard / pad):
//   move WASD / L-stick · sprint Shift / RT · pass Q E / LB RB (hold + K L I / A B Y picks the 1st/2nd/3rd man,
//   double-tap = flat pass) · right stick = arrows: ←/→ sidestep, ↑ shoulder, ↓ fend (hold it to keep the arm out)
//   quick kicks: K punt, L grubber, J chip, U field goal · aimed kicks: hold Space / LT + K L J I U
//   defence: K low tackle, L arm-grip ("ball and all"), I dive, J strip / jump · Q E switch player
import { FIELD } from './config.js';
import { clamp, dist2D, headingOf, wrapAngle } from './util.js';
import { MOBILE_STATES } from './player.js';
import * as A from './actions.js';
import { attemptTackle, tryBreak, tryStrip } from './contact.js';

const H = FIELD.half;
const QUICK = { faceA: 'punt', faceB: 'grubber', faceX: 'chip', fieldGoal: 'fieldgoal' };
const AIMED = { faceA: 'punt', faceB: 'grubber', faceX: 'chip', faceY: 'bomb', fieldGoal: 'fieldgoal' };
const RECEIVER = { faceA: 0, faceB: 1, faceY: 2 };
// per-bumper pass state: used = a face button already chose the receiver; tapWait = first tap of a
// possible double-tap (a second press inside the window throws the flat ball instead)
const passSt = { passL: { used: false, pending: null, tapWait: 0 }, passR: { used: false, pending: null, tapWait: 0 } };

export function updateHuman(m, dt) {
  const T = m.humanTeam, inp = m.input;
  if (!T) return;
  if (m.phase === 'play' && inp.pressed('foot') && !m.kickAim) { m.humanFoot = (m.humanFoot || m.controlled?.attr.foot || 'R') === 'R' ? 'L' : 'R'; m.audio.ui(); }
  if (m.phase !== 'play' && m.phase !== 'ptb') return;
  autoSwitch(m);
  const p = m.controlled;
  if (!p) return;
  const mv = m.camRig.inputToWorld(inp.move.x, inp.move.y);
  const b = m.ball;
  if (m.phase === 'ptb') {
    if (p.team === m.pd.team) return; // dummy half is walked into place by the AI
    if (MOBILE_STATES.has(p.state)) {
      p.wish.x = mv.x; p.wish.z = mv.z; p.wantSprint = inp.held('sprint'); p.faceTarget = headingOf(-p.team.opp.dir, 0);
      const D = p.team;
      if (!p.ai.marker && p.p.x * D.dir > m.pd.onsideAx - 0.3 && p.wish.x * D.dir > 0 && !p.offside) p.wish.x = 0; // can't creep offside
    }
    if (inp.pressed('passL')) switchNearest(m, 0);
    if (inp.pressed('passR') || inp.pressed('kickMod')) switchNearest(m, inp.pressed('kickMod') ? 0 : 1);
    return;
  }
  if (MOBILE_STATES.has(p.state) && p.state !== 'kick') {
    p.wish.x = mv.x; p.wish.z = mv.z; p.wantSprint = inp.held('sprint'); p.faceTarget = null;
  }
  if (b.state === 'held' && b.carrier === p) return carrier(m, p, mv, dt);
  if (b.state === 'held' && b.carrier && b.carrier.team !== T) return defend(m, p);
  if (p.state === 'tackling') return defend(m, p);
  if (b.state !== 'held') {
    if (inp.pressed('passL')) switchNearest(m, 0);
    if (inp.pressed('passR')) switchNearest(m, 1);
    if (inp.pressed('faceX')) p.doJump();          // contest the high ball
  }
}

function autoSwitch(m) {
  const b = m.ball, T = m.humanTeam;
  if (b.state === 'held' && b.carrier) {
    if (b.carrier.team === T) { m.setControlled(b.carrier); return; }
    if (!m.controlled || m.controlled.team !== T) m.setControlled(m.nearest(T.players, b.carrier.p.x, b.carrier.p.z, (p) => p.isUpright()));
    return;
  }
  if (b.state === 'air' && b.kind === 'pass' && b.info) {
    if (b.info.team === T) { m.setControlled(b.info.target); return; }
    if (m.lastSwitchFor !== b.info && m.settings.autoSwitch !== false) {
      m.lastSwitchFor = b.info;
      const tx = b.info.tx, tz = b.info.tz;
      const best = m.nearest(T.players, tx, tz, (p) => p.isUpright());
      const cur = m.controlled;
      if (best && cur && best !== cur && dist2D(cur.p.x, cur.p.z, tx, tz) > dist2D(best.p.x, best.p.z, tx, tz) + 4) m.setControlled(best);
    }
    return;
  }
  // kicks and loose balls: pick our best-placed player once per kick / bounce
  const key = b.info ? b.info : b;
  const stamp = `${b.bounces}`;
  if (m.lastSwitchFor !== key || m.lastSwitchStamp !== stamp) {
    m.lastSwitchFor = key; m.lastSwitchStamp = stamp;
    const kt = m.kickTarget || b.p;
    const best = m.nearest(T.players, kt.x, kt.z, (p) => p.isUpright() && !p.kickOffside);
    if (best) m.setControlled(best);
  }
}

function switchNearest(m, rank) {
  const T = m.humanTeam, b = m.ball;
  const ref = b.carrier || b;
  const rx = ref.p.x, rz = ref.p.z;
  const list = T.players.filter((p) => p.isUpright() || p.state === 'getup').sort((a, c) => dist2D(a.p.x, a.p.z, rx, rz) - dist2D(c.p.x, c.p.z, rx, rz));
  if (!list.length) return;
  let pick = list[0];
  if (rank === 0 && pick === m.controlled && list[1]) pick = list[1];
  if (rank === 1) {
    const i = list.indexOf(m.controlled);
    pick = list[(i + 1) % Math.min(list.length, 5)] || list[0];
  }
  m.setControlled(pick); m.audio.ui();
}

// Converts a screen-space flick (right stick / arrow keys) to the carrier's left (-1) or right (+1).
function flickSide(m, p, sx) {
  const w = m.camRig.inputToWorld(sx, 0), r = p.right;
  return w.x * r.x + w.z * r.z >= 0 ? 1 : -1;
}
function sideFromInput(m, p, mv) {
  const r = p.right, lat = mv.x * r.x + mv.z * r.z;
  if (Math.abs(lat) > 0.3) return lat > 0 ? 1 : -1;
  const c = A.passCandidates(m, p, 1).length, l = A.passCandidates(m, p, -1).length;
  return c >= l ? 1 : -1;
}

function carrier(m, p, mv, dt) {
  const inp = m.input, T = p.team;
  if (p.state === 'tackled') {
    if (inp.pressed('passL')) A.offload(m, p, -1);
    else if (inp.pressed('passR')) A.offload(m, p, 1);
    if (inp.pressed('rsUp') || inp.pressed('rsDown') || inp.pressed('rsLeft') || inp.pressed('rsRight')) tryBreak(m, p);
    if ((inp.pressed('sprint') || inp.pressed('faceA')) && p.engage) p.engage.legDrive = Math.min(1.6, p.engage.legDrive + 0.35);
    return;
  }
  if (m.kickAim) return kickAim(m, p, dt);
  const inGoal = p.p.x * T.dir > H;
  // ---- passing: bumper picks the side; tap = next man, bumper + face button = choose the man, double-tap = flat
  for (const btn of ['passL', 'passR']) {
    const side = btn === 'passL' ? -1 : 1, st = passSt[btn];
    if (inp.pressed(btn)) {
      if (st.tapWait > 0) { st.tapWait = 0; st.used = true; firePass(m, p, side, 0, true); if (m.ball.carrier !== p) return; continue; }
      st.used = false; st.pending = null;
    }
    if (inp.held(btn)) {
      for (const f in RECEIVER) {
        if (!inp.pressed(f)) continue;
        st.used = true;
        if (st.pending && st.pending.face === f && inp.doubleTapped(f)) { firePass(m, p, side, RECEIVER[f], true); st.pending = null; }
        else st.pending = { face: f, t: 0.22 };
      }
    }
    if (st.pending) {
      st.pending.t -= dt;
      if (st.pending.t <= 0) { firePass(m, p, side, RECEIVER[st.pending.face], false); st.pending = null; }
    }
    if (inp.released(btn) && !st.used) { st.used = true; st.tapWait = 0.2; }
    if (st.tapWait > 0 && !inp.held(btn)) {
      st.tapWait -= dt;
      if (st.tapWait <= 0) { st.tapWait = 0; firePass(m, p, side, 0, false); }
    }
    if (m.ball.carrier !== p) return;
  }
  // touch: hold the pass button for a cut-out to the second man
  if (inp.pressed('cutL')) { firePass(m, p, -1, 1, false); if (m.ball.carrier !== p) return; }
  if (inp.pressed('cutR')) { firePass(m, p, 1, 1, false); if (m.ball.carrier !== p) return; }
  const passHeld = inp.held('passL') || inp.held('passR');
  // ---- right stick: evasion
  if (!inGoal) {
    if (inp.pressed('rsLeft')) p.doStep(flickSide(m, p, -1));
    if (inp.pressed('rsRight')) p.doStep(flickSide(m, p, 1));
    if (inp.pressed('rsUp')) p.doBump();
    if (inp.pressed('rsDown')) {
      const e = m.nearest(T.opp.players, p.p.x, p.p.z, (q) => q.isUpright());
      const r = p.right; const s = e ? ((e.p.x - p.p.x) * r.x + (e.p.z - p.p.z) * r.z > 0 ? 1 : -1) : 1;
      p.doFend(s);
    }
    if (inp.held('rsDown')) p.holdFend();
  }
  if (passHeld || inGoal || !p.canAct()) return;
  // ---- kicks: hold the left trigger (Space) for an aimed kick, otherwise a quick kick where you're facing
  const aimed = inp.held('kickMod');
  for (const f of Object.keys(aimed ? AIMED : QUICK)) {
    if (!inp.pressed(f)) continue;
    const type = (aimed ? AIMED : QUICK)[f];
    const foot = m.humanFoot || p.attr.foot;
    if (aimed) {
      const yaw = type === 'fieldgoal' ? headingOf(T.dir * H - p.p.x, -p.p.z) : headingOf(T.dir, 0);
      m.kickAim = { type, btn: f, yaw, holdT: 0, power: 0, foot, over: 0 };
    } else A.quickKick(m, p, type, foot);
    return;
  }
  if (!aimed && inp.pressed('faceY')) A.dummyPass(m, p, sideFromInput(m, p, mv));
}

function firePass(m, p, side, idx, flat) {
  if (m.ball.carrier !== p || p.state === 'tackled') return;
  const list = A.passCandidates(m, p, side);
  if (!list.length) return;
  const c = list[Math.min(idx, list.length - 1)];
  A.passBall(m, p, c.q, { long: idx > 0 || c.lat > 12, flat });
}

function kickAim(m, p, dt) {
  const inp = m.input, ka = m.kickAim, T = p.team;
  if (!inp.held(ka.btn) && !inp.released(ka.btn)) { m.kickAim = null; return; }
  ka.holdT += dt;
  // turn the aim toward screen-right when pushing right
  const cr = m.camRig.screenRight();
  const dh = Math.cos(ka.yaw) * cr.x - Math.sin(ka.yaw) * cr.z;
  ka.yaw += inp.move.x * 1.7 * dt * (dh >= 0 ? 1 : -1);
  const base = headingOf(T.dir, 0);
  ka.yaw = base + clamp(wrapAngle(ka.yaw - base), -1.5, 1.5);
  ka.power = Math.min(1, ka.holdT / 1.0);
  ka.over = Math.max(0, ka.holdT - 1.0);
  // keep running roughly straight while lining it up
  const fwd = clamp(0.7 + inp.move.y * 0.3, 0.25, 1);
  p.wish.x = T.dir * fwd; p.wish.z = 0;
  if (inp.pressed('foot')) { ka.foot = ka.foot === 'R' ? 'L' : 'R'; m.humanFoot = ka.foot; }
  if (inp.pressed('passL') || inp.pressed('passR')) { m.kickAim = null; return; }
  if (inp.released(ka.btn)) {
    const k = m.kickAim; m.kickAim = null;
    A.kickBall(m, p, k.type, k.yaw, Math.max(0.05, k.power), { foot: k.foot, extraErr: Math.min(0.12, k.over * 0.1) });
  }
}

function defend(m, p) {
  const inp = m.input, c = m.ball.carrier;
  if (p.state === 'tackling') {
    if (inp.pressed('faceX')) tryStrip(m, p);
    return;
  }
  if (inp.pressed('passL') || inp.pressed('kickMod')) return switchNearest(m, 0);
  if (inp.pressed('passR')) return switchNearest(m, 1);
  if (!c || p.state !== 'free') return;
  if (inp.pressed('faceA')) attemptTackle(m, p, 'low', { human: true });
  else if (inp.pressed('faceB')) attemptTackle(m, p, 'grip', { human: true });
  else if (inp.pressed('faceY')) attemptTackle(m, p, 'dive', { human: true });
}
