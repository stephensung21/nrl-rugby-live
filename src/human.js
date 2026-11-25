// Translates player input into actions for the controlled player, and handles player switching.
import { FIELD, OPEN_PLAY_KICKS } from './config.js';
import { clamp, dist2D, headingOf, wrapAngle } from './util.js';
import { MOBILE_STATES } from './player.js';
import * as A from './actions.js';
import { attemptTackle, tryBreak } from './contact.js';

const H = FIELD.half;
const hold = { passL: false, passR: false };

export function updateHuman(m, dt) {
  const T = m.humanTeam, inp = m.input;
  if (!T) return;
  for (let i = 1; i <= 5; i++) if (inp.pressed('k' + i) && m.phase === 'play') { m.selectedKick = i - 1; if (m.kickAim) m.kickAim.type = OPEN_PLAY_KICKS[i - 1]; }
  if (m.phase === 'play' || m.phase === 'ptb') {
    if (inp.pressed('kickNext')) cycleKick(m, 1);
    if (inp.pressed('kickPrev')) cycleKick(m, -1);
  }
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
      const D = p.team, lim = m.pd.onsideAx * D.dir;
      if (!p.ai.marker && p.p.x * D.dir > m.pd.onsideAx - 0.3 && p.wish.x * D.dir > 0 && !p.offside) p.wish.x = 0; // can't creep offside
    }
    if (inp.pressed('passL')) switchNearest(m, 0);
    if (inp.pressed('passR')) switchNearest(m, 1);
    return;
  }
  if (MOBILE_STATES.has(p.state) && p.state !== 'kick') {
    p.wish.x = mv.x; p.wish.z = mv.z; p.wantSprint = inp.held('sprint'); p.faceTarget = null;
  }
  if (b.state === 'held' && b.carrier === p) return carrier(m, p, mv, dt);
  if (b.state === 'held' && b.carrier && b.carrier.team !== T) return defend(m, p, dt);
  if (b.state !== 'held') {
    if (inp.pressed('passL')) switchToBall(m, 0);
    if (inp.pressed('passR')) switchToBall(m, 1);
  }
}

function cycleKick(m, d) {
  m.selectedKick = (m.selectedKick + d + OPEN_PLAY_KICKS.length) % OPEN_PLAY_KICKS.length;
  if (m.kickAim) m.kickAim.type = OPEN_PLAY_KICKS[m.selectedKick];
  m.audio.ui();
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
function switchToBall(m, rank) { switchNearest(m, rank); }

function sideFromInput(m, p, mv, fallbackAway = true) {
  const r = p.right, lat = mv.x * r.x + mv.z * r.z;
  if (Math.abs(lat) > 0.3) return lat > 0 ? 1 : -1;
  if (!fallbackAway) return 1;
  const e = m.nearest(p.team.opp.players, p.p.x, p.p.z, (q) => q.isUpright());
  if (!e) return 1;
  const s = (e.p.x - p.p.x) * r.x + (e.p.z - p.p.z) * r.z;
  return s > 0 ? -1 : 1;
}

function carrier(m, p, mv, dt) {
  const inp = m.input, T = p.team;
  if (p.state === 'tackled') {
    if (inp.pressed('passL')) A.offload(m, p, -1);
    else if (inp.pressed('passR')) A.offload(m, p, 1);
    if (inp.pressed('fend') || inp.pressed('bump')) tryBreak(m, p);
    if ((inp.pressed('sprint') || inp.pressed('step')) && p.engage) p.engage.legDrive = Math.min(1.6, p.engage.legDrive + 0.35);
    return;
  }
  if (m.kickAim) return kickAim(m, p, mv, dt);
  // passing: tap = to the nearest runner, hold = cut-out / long ball
  for (const [btn, side] of [['passL', -1], ['passR', 1]]) {
    if (inp.pressed(btn)) hold[btn] = false;
    const fire = (long) => {
      hold[btn] = true;
      const q = A.pickReceiver(m, p, side, long);
      if (q) A.passBall(m, p, q, { long });
    };
    if (!hold[btn] && inp.held(btn) && inp.holdTime(btn) > 0.24) fire(true);
    else if (!hold[btn] && inp.released(btn)) fire(false);
    if (m.ball.carrier !== p) return;
  }
  if (p.p.x * T.dir <= H) {
    if (inp.pressed('step')) p.doStep(sideFromInput(m, p, mv));
    if (inp.pressed('fend')) {
      const e = m.nearest(T.opp.players, p.p.x, p.p.z, (q) => q.isUpright());
      const r = p.right; const s = e ? ((e.p.x - p.p.x) * r.x + (e.p.z - p.p.z) * r.z > 0 ? 1 : -1) : 1;
      p.doFend(s);
    }
    if (inp.pressed('bump')) p.doBump();
  }
  if (inp.pressed('dummy')) A.dummyPass(m, p, sideFromInput(m, p, mv));
  if (inp.pressed('kick') && p.canAct()) {
    const type = OPEN_PLAY_KICKS[m.selectedKick];
    const yaw = type === 'fieldgoal' ? headingOf(T.dir * H - p.p.x, -p.p.z) : headingOf(T.dir, 0);
    m.kickAim = { type, yaw, holdT: 0, power: 0, foot: m.humanFoot || p.attr.foot, over: 0 };
  }
}

function kickAim(m, p, mv, dt) {
  const inp = m.input, ka = m.kickAim, T = p.team;
  if (!inp.held('kick') && !inp.released('kick')) { m.kickAim = null; return; }
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
  if (inp.released('kick')) {
    const k = m.kickAim; m.kickAim = null;
    A.kickBall(m, p, k.type, k.yaw, Math.max(0.05, k.power), { foot: k.foot, extraErr: Math.min(0.12, k.over * 0.1) });
  }
}

function defend(m, p) {
  const inp = m.input, c = m.ball.carrier;
  if (inp.pressed('passL')) return switchNearest(m, 0);
  if (inp.pressed('passR')) return switchNearest(m, 1);
  if (!c || p.state !== 'free') return;
  const dd = dist2D(p.p.x, p.p.z, c.p.x, c.p.z);
  if (inp.pressed('step')) attemptTackle(m, p, p.speedH > 6.5 && dd > 2.1 ? 'dive' : 'normal', { human: true });
  else if (inp.pressed('fend')) attemptTackle(m, p, 'hit', { human: true });
  else if (inp.pressed('bump')) attemptTackle(m, p, 'dive', { human: true });
}
