// Team AI: attacking shape + support lines, ball-carrier decisions, defensive line, kick chase/receive.
import { FIELD } from './config.js';
import { clamp, rand, randRange, chance, dist2D, headingOf, pick } from './util.js';
import { MOBILE_STATES } from './player.js';
import * as A from './actions.js';
import { attemptTackle, tryBreak } from './contact.js';

const H = FIELD.half, W = FIELD.halfW;

function goTo(p, x, z, o = {}) {
  const dx = x - p.p.x, dz = z - p.p.z, d = Math.hypot(dx, dz);
  if (d < (o.stop ?? 0.4)) { p.wish.x = p.wish.z = 0; p.wantSprint = false; return d; }
  const s = Math.min(1, d / (o.arrive ?? 2.5)) * (o.speed ?? 1);
  p.wish.x = (dx / d) * s; p.wish.z = (dz / d) * s;
  p.wantSprint = !!o.sprint && d > (o.sprintDist ?? 3);
  return d;
}
const face = (p, x, z) => { p.faceTarget = headingOf(x - p.p.x, z - p.p.z); };
const faceDir = (p, dir) => { p.faceTarget = headingOf(dir, 0); };
const mobile = (p) => MOBILE_STATES.has(p.state);

export function updateAI(m, dt) {
  for (const p of m.players) { p.readyStance = false; p.speedCap = 1; }
  if (m.phase === 'play') livePlay(m, dt);
  else if (m.phase === 'ptb') ptbPositions(m, dt);
  else setPiece(m, dt);
}

// ------------------------------------------------------------------ set pieces
function setPiece(m, dt) {
  const ph = m.phase, b = m.ball;
  for (const p of m.players) {
    if (!mobile(p)) continue;
    if (p.controlled && ph !== 'tryCelebration' && ph !== 'whistle' && ph !== 'transition' && ph !== 'penaltyChoice') { p.wish.x = p.wish.z = 0; if (p.ai.hold) goTo(p, p.ai.hold.x, p.ai.hold.z, { speed: 0.5 }); face(p, b.p.x, b.p.z); continue; }
    face(p, b.p.x, b.p.z);
    if (ph === 'tryCelebration') {
      const pd = m.pd, s = pd.scorer;
      if (p.team === pd.team) {
        if (p === s) continue;
        const d = goTo(p, s.p.x - p.team.dir * 1.5, s.p.z + (p.num % 3 - 1) * 1.2, { sprint: true, stop: 1.6 });
        if (d < 2.2 && m.phaseT > 0.6) p.setState('celebrate');
      } else {
        goTo(p, p.team.dir * -H - p.team.dir * 1.5, clamp(p.p.z * 0.3, -12, 12), { speed: 0.45, stop: 1.0 });
      }
    } else if (ph === 'whistle' || ph === 'transition' || ph === 'halftime' || ph === 'fulltime') {
      p.wish.x = p.wish.z = 0; p.wantSprint = false;
    } else if (ph === 'penaltyChoice') {
      const T = m.pd.team;
      if (p.team !== T && p.p.x * p.team.dir > m.onsideAx - 0.5) goTo(p, (m.onsideAx - 2) * p.team.dir, p.p.z, { speed: 0.8 });
      else p.wish.x = p.wish.z = 0;
    } else if (p.ai.hold) goTo(p, p.ai.hold.x, p.ai.hold.z, { speed: 0.6, stop: 0.3 });
    else p.wish.x = p.wish.z = 0;
  }
}

// ------------------------------------------------------------------ play-the-ball positioning
function ptbPositions(m) {
  const pd = m.pd, T = pd.team, D = T.opp, mk = pd.mark, d = T.dir;
  const plan = pd.plan;
  for (const p of T.players) {
    if (p === pd.ptbPlayer || !mobile(p)) continue;
    if (p === pd.dummy) { const dd = goTo(p, mk.x - d * 1.3, mk.z, { sprint: true, arrive: 1.2, stop: 0.2 }); faceDir(p, d); if (dd < 0.8) p.readyStance = true; continue; }
    if (p.controlled) continue;
    let s = A.attackSlotFor(m, T, p, mk.x, mk.z);
    if (plan && plan.target === p) {
      if (plan.kind === 'hitup') { const side = (p.p.z - mk.z) * d >= 0 ? 1 : -1; s = { x: mk.x - d * 6, z: mk.z + side * d * 3.5 }; }
      if (plan.kind === 'kick' || plan.kind === 'shift') s = { x: mk.x - d * 6, z: s.z };
    }
    const dd = goTo(p, s.x, s.z, { sprint: dist2D(p.p.x, p.p.z, s.x, s.z) > 7 });
    faceDir(p, d);
    if (dd < 0.6) p.readyStance = true;
  }
  const lineAx = pd.onsideAx;
  const lineX = lineAx * D.dir;
  const late = m.tackleCount >= 4;
  const line = [];
  for (const p of D.players) {
    if (!mobile(p) || p.controlled) continue;
    if (p.ai.marker) {
      const k = pd.markers.indexOf(p);
      goTo(p, mk.x + d * 1.1, mk.z + (k === 0 ? 0 : 0.6), { sprint: true, stop: 0.2 }); faceDir(p, -d); p.readyStance = true; continue;
    }
    if (p.num === 1) { const ax = Math.max(-H - 3, lineAx - (late ? 26 : 16)); goTo(p, ax * D.dir, mk.z * 0.4, { sprint: true }); faceDir(p, -d); continue; }
    if (late && (p.num === 2 || p.num === 5)) { const ax = Math.max(-H - 2, lineAx - 20); goTo(p, ax * D.dir, (p.p.z > 0 ? 1 : -1) * 22, { sprint: true }); faceDir(p, -d); continue; }
    line.push(p);
  }
  assignLine(m, D, line, T.players.filter((a) => a !== pd.ptbPlayer), () => lineX, mk.z, false);
}

// Play-the-ball standoff: the markers stand square and the line waits on the 10 m line until the
// dummy half passes, kicks or runs.
function holdDefence(m, D, c) {
  const h = m.dhHold, mk = h.mark, d = D.opp.dir, lineAx = h.onsideAx, late = m.tackleCount >= 4;
  const line = [];
  for (const p of D.players) {
    if (!mobile(p) || p.controlled) continue;
    if (h.markers.includes(p)) {
      const k = h.markers.indexOf(p);
      goTo(p, mk.x + d * 1.1, mk.z + (k === 0 ? 0 : 0.6), { speed: 0.6, stop: 0.25 }); faceDir(p, -d); p.readyStance = true; continue;
    }
    if (p.offside) { goTo(p, (lineAx - 1.5) * D.dir, p.p.z, { sprint: true }); continue; }
    if (p.num === 1) { const ax = Math.max(-H - 3, lineAx - (late ? 26 : 16)); goTo(p, ax * D.dir, mk.z * 0.4, {}); faceDir(p, -d); continue; }
    if (late && (p.num === 2 || p.num === 5)) { const ax = Math.max(-H - 2, lineAx - 20); goTo(p, ax * D.dir, (p.p.z > 0 ? 1 : -1) * 22, {}); faceDir(p, -d); continue; }
    line.push(p);
  }
  assignLine(m, D, line, D.opp.players.filter((a) => a !== c), () => lineAx * D.dir, c.p.z, false);
}

// Defensive line: match line defenders to attackers laterally with sensible spacing.
function assignLine(m, D, defs, attackers, xFor, ballZ, live, opts = {}) {
  if (!defs.length) return;
  const atk = attackers.filter((a) => a.isUpright() || a.state === 'getup').map((a) => ({ a, imp: Math.abs(a.p.z - ballZ) })).sort((x, y) => x.imp - y.imp).slice(0, defs.length).map((o) => o.a);
  let targets = atk.map((a) => ({ z: a.p.z + (ballZ - a.p.z) * 0.12, a }));
  while (targets.length < defs.length) targets.push({ z: ballZ + (targets.length % 2 ? 1 : -1) * (6 + targets.length * 3), a: null });
  targets.sort((x, y) => x.z - y.z);
  for (let i = 1; i < targets.length; i++) if (targets[i].z - targets[i - 1].z < 2.4) targets[i].z = targets[i - 1].z + 2.4;
  const over = targets[targets.length - 1].z - (W - 1.5); if (over > 0) for (const t of targets) t.z -= over;
  for (let i = 0; i < targets.length; i++) if (targets[i].z < -W + 1.5) targets[i].z = -W + 1.5 + i * 2.4;
  const sorted = [...defs].sort((x, y) => x.p.z - y.p.z);
  const dirA = D.opp.dir;
  for (let i = 0; i < sorted.length; i++) {
    const p = sorted[i], t = targets[i];
    let x = xFor(t.a);
    const dd = goTo(p, x, t.z, { speed: live ? opts.lineSpeed ?? 0.95 : 1, sprint: dist2D(p.p.x, p.p.z, x, t.z) > (live ? 6 : 4), arrive: 2 });
    p.faceTarget = headingOf(-dirA, 0);
    if (dd < 1.2) p.readyStance = true;
  }
}

// ------------------------------------------------------------------ live play
function livePlay(m, dt) {
  const b = m.ball;
  if (b.state === 'held' && b.carrier) {
    const c = b.carrier;
    attackLive(m, c.team, c, null, dt);
    if (m.dhHold) holdDefence(m, c.team.opp, c);
    else defendLive(m, c.team.opp, c, false, dt);
  } else if (b.kind === 'pass' && b.state === 'air' && b.info) {
    const info = b.info;
    attackLive(m, info.team, null, info.target, dt);
    defendLive(m, info.team.opp, info.target, true, dt);
  } else looseBall(m, dt);
}

function attackLive(m, T, carrier, receiver, dt) {
  const d = T.dir, b = m.ball;
  const bx = carrier ? carrier.p.x : b.p.x, bz = carrier ? carrier.p.z : b.p.z;
  const broken = m.lineBreakDone;
  for (const p of T.players) {
    if (p.controlled) continue;
    if (p === carrier) { aiCarrier(m, p, dt); continue; }
    if (!mobile(p)) continue;
    if (p === receiver) {
      const kt = m.kickTarget || b.p;
      goTo(p, kt.x + d * 0.6, kt.z, { sprint: true, arrive: 0.6, stop: 0 });
      continue;
    }
    let s = A.attackSlotFor(m, T, p, bx, bz);
    let sprint = false;
    if (carrier) {
      const dc = dist2D(p.p.x, p.p.z, carrier.p.x, carrier.p.z);
      const side = (p.p.z - carrier.p.z) * d >= 0 ? 1 : -1;
      if (broken && dc < 35) { s = { x: carrier.p.x - d * 3.5, z: carrier.p.z + side * d * (4 + (p.num % 3) * 3.5) }; sprint = true; }
      else if (carrier.ai.plan && carrier.ai.plan.target === p && carrier.ai.dummyHalf && m.time - (m.playStartT || 0) < 1.4) { s = { x: carrier.p.x - d * 0.9, z: carrier.p.z + side * d * 3.2 }; sprint = true; }
      else if (dc < 15) { s.x = carrier.p.x - d * Math.max(2.2, Math.abs(s.x - bx) * 0.55); sprint = true; }
    }
    if ((s.x - bx) * d > -0.8) s.x = bx - d * 0.8;
    s.z = clamp(s.z, -W + 1.5, W - 1.5);
    goTo(p, s.x, s.z, { sprint: sprint || dist2D(p.p.x, p.p.z, s.x, s.z) > 6 });
    if (p.speedH < 0.5) faceDir(p, d);
  }
}

// Open running room straight ahead (toward the try line) in a lane around z.
function gapAhead(m, x, z, T) {
  const d = T.dir; let best = 25;
  for (const e of T.opp.players) {
    if (!e.isUpright() && e.state !== 'getup') continue;
    const fwd = (e.p.x - x) * d, lat = Math.abs(e.p.z - z);
    if (fwd < -1 || lat > 3.5 + Math.max(0, fwd) * 0.35) continue;
    const g = Math.max(0, fwd) + lat * 0.6;
    if (g < best) best = g;
  }
  if (Math.abs(z) > W - 3) best -= 4;
  return best;
}
function spaceAt(m, x, z, D, lookahead = 0.4) {
  let best = 14;
  for (const e of D.players) {
    if (!e.isUpright() && e.state !== 'getup') continue;
    const dd = dist2D(e.p.x, e.p.z, x, z) - e.topSpeed * lookahead * (e.state === 'getup' ? 0.3 : 0.8);
    if (dd < best) best = dd;
  }
  return best;
}

function aiCarrier(m, c, dt) {
  const T = c.team, d = T.dir, ai = c.ai, D = T.opp;
  ai.passCd = Math.max(0, (ai.passCd || 0) - dt);
  if (c.state === 'tackled') {
    const e = c.engage;
    const support = e && c.team.players.some((q) => q !== c && q.isUpright() && dist2D(q.p.x, q.p.z, c.p.x, c.p.z) < 5 && (c.p.x - q.p.x) * c.team.dir > -1);
    if (e && support && !e.noOffload && e.tacklers.length === 1 && !e.offloadTried && e.progress < 0.45 && chance(dt * 0.35 * (c.attr.hand > 82 ? 1.6 : 1))) A.offload(m, c, 0);
    if (e && !e.breakTried && e.progress < 0.3 && c.isForward && chance(dt * 0.8)) tryBreak(m, c);
    return;
  }
  if (!c.canAct() || c.pendingPass) return;
  const ax = c.p.x * d;
  if (ax > H) { goTo(c, d * (H + 3), 0, { sprint: true }); return; }
  if (ax < -H && c.ai.inGoalCatch) { goTo(c, -d * (H - 2), c.p.z, { sprint: true }); }
  let nearest = null, nd = 99;
  for (const e of D.players) { if (!e.isUpright()) continue; const dd = dist2D(e.p.x, e.p.z, c.p.x, c.p.z); if (dd < nd) { nd = dd; nearest = e; } }

  // dummy-half / scrum-half set play
  if (ai.dummyHalf && ai.plan) {
    ai.passDelay -= dt;
    if (ai.passDelay > 0) { c.wish.x = c.wish.z = 0; faceDir(c, d); return; }
    const plan = ai.plan; ai.dummyHalf = false; ai.plan = null;
    if (plan.kind !== 'run') {
      let tgt = plan.target && plan.target !== c && plan.target.isUpright() ? plan.target : null;
      if (tgt) {
        const behind = (c.p.x - tgt.p.x) * d;
        if (behind < -2 || dist2D(tgt.p.x, tgt.p.z, c.p.x, c.p.z) > 24) tgt = null;
      }
      if (!tgt) tgt = A.pickReceiver(m, c, (c.p.z * d) > 0 ? -1 : 1, false) || A.pickReceiver(m, c, (c.p.z * d) > 0 ? 1 : -1, false);
      if (tgt) {
        A.passBall(m, c, tgt, { long: dist2D(tgt.p.x, tgt.p.z, c.p.x, c.p.z) > 12 });
        if (plan.kind === 'kick') { tgt.ai.plan = { kind: 'kick' }; tgt.ai.kickDelay = randRange(0.35, 1.0); }
        if (plan.kind === 'shift') tgt.ai.shift = chance(0.6) ? 0.9 : 0;
        return;
      }
    }
  }
  // last tackle
  const kickers = [7, 6, 1];
  if ((ai.plan && ai.plan.kind === 'kick') || (m.tackleCount === 5 && kickers.includes(c.num))) {
    ai.kickDelay = (ai.kickDelay ?? randRange(0.3, 0.9)) - dt;
    if (ai.kickDelay <= 0 || nd < 4.5) { ai.plan = null; ai.kickDelay = null; A.cpuOpenPlayKick(m, c); return; }
  } else if (m.tackleCount === 5 && ai.passCd <= 0) {
    const k = [T.get(7), T.get(6), T.get(1)].find((q) => q !== c && q.isUpright() && (c.p.x - q.p.x) * d > -1.5 && dist2D(q.p.x, q.p.z, c.p.x, c.p.z) < 20);
    if (k && nd > 1.5) { A.passBall(m, c, k, {}); k.ai.plan = { kind: 'kick' }; k.ai.kickDelay = randRange(0.3, 0.8); return; }
  }
  // evasion
  if (nearest && nd < 3.3) {
    const tx = (nearest.p.x - c.p.x) / nd, tz = (nearest.p.z - c.p.z) / nd;
    const f = c.fwd, r = c.right;
    if (f.x * tx + f.z * tz > 0.15 && ai.evadeFor !== nearest) {
      ai.evadeFor = nearest;
      const ev = T.human ? 1 : m.diff.cpuEvade;
      const defSide = r.x * tx + r.z * tz > 0 ? 1 : -1;
      const roll = rand();
      if (c.attr.agility >= 76 && roll < 0.26 * ev) c.doStep(-defSide);
      else if (c.isForward && c.attr.strength > 80 && roll < 0.36 * ev) c.doBump();
      else if (roll < 0.4 * ev) c.doFend(defSide);
    }
  }
  // passing
  ai.think = (ai.think || 0) - dt;
  if (ai.think <= 0) {
    ai.think = 0.1;
    if (ai.shift) ai.shift -= 0.1;
    if (ai.passCd <= 0 && maybePass(m, c, nd)) return;
  }
  runLine(m, c, dt, nd);
}

function maybePass(m, c, nd) {
  const T = c.team, ai = c.ai;
  const playmaker = [7, 6, 1, 9].includes(c.num);
  const passiness = playmaker ? 0.75 : c.num === 2 || c.num === 5 ? 0.2 : c.isForward ? 0.2 : 0.45;
  const shifting = ai.shift > 0;
  if (nd > 4 && !shifting) return false;
  const myGap = gapAhead(m, c.p.x, c.p.z, T) + (c.isForward && m.tackleCount < 4 ? 2 : 0);
  let best = null, bestVal = -1e9;
  for (const side of [-1, 1]) {
    for (const cand of A.passCandidates(m, c, side).slice(0, 2)) {
      const q = cand.q;
      if (cand.behind > 7) continue;
      const v = gapAhead(m, q.p.x + q.v.x * 0.5, q.p.z + q.v.z * 0.5, T) - cand.behind * 0.6 - cand.lat * 0.04 + ((q.num === 2 || q.num === 5) ? 1 : 0);
      if (v > bestVal) { bestVal = v; best = cand; }
    }
  }
  if (!best) return false;
  const threshold = shifting ? 1 : 3;
  if (bestVal > myGap + threshold && chance(passiness * (nd < 2.8 ? 0.8 : 0.4) + (shifting ? 0.3 : 0))) {
    const idx = A.passCandidates(m, c, Math.sign((best.q.p.z - c.p.z) * T.dir) || 1).indexOf(best);
    A.passBall(m, c, best.q, { long: best.lat > 11 || idx > 0 });
    if (playmaker && chance(0.2)) best.q.ai.shift = 0.5;
    ai.shift = 0;
    return true;
  }
  return false;
}

function runLine(m, c, dt, nd) {
  const T = c.team, d = T.dir, D = T.opp, ai = c.ai;
  ai.lineT = (ai.lineT || 0) - dt;
  if (ai.lineT <= 0) {
    ai.lineT = 0.15;
    const baseH = headingOf(d, 0);
    const sp = Math.max(5, c.topSpeed * 0.9);
    const hitUp = c.isForward && m.tackleCount < 4;
    let bestS = -1e9, bestA = 0;
    for (let a = -55; a <= 55; a += 11) {
      const h = baseH + (a * Math.PI) / 180;
      const fx = Math.sin(h), fz = Math.cos(h);
      let s = fx * d * (hitUp ? 14 : 10) - Math.abs(Math.sin((a * Math.PI) / 180)) * 3;
      for (const t of [0.4, 0.8, 1.2]) {
        const px = c.p.x + fx * sp * t, pz = c.p.z + fz * sp * t;
        if (Math.abs(pz) > W - 3) s -= 25 * t;
        for (const e of D.players) {
          if (!e.isUpright()) continue;
          const de = dist2D(e.p.x, e.p.z, px, pz) - Math.min(e.topSpeed, 8.5) * t * 0.8 - 0.9;
          if (de < 0) s += (de * (hitUp ? 0.8 : 1.6)) / t;
        }
      }
      s -= Math.abs(a - (ai.runA || 0)) * 0.02;
      if (s > bestS) { bestS = s; bestA = a; }
    }
    ai.runA = bestA;
  }
  const h = headingOf(d, 0) + ((ai.runA || 0) * Math.PI) / 180;
  c.wish.x = Math.sin(h); c.wish.z = Math.cos(h);
  c.wantSprint = c.stamina > 0.15 || nd < 8;
}

// Earliest time a defender running at full speed can meet the carrier's projected path.
function intercept(p, c) {
  const dx = c.p.x - p.p.x, dz = c.p.z - p.p.z, vx = c.v.x, vz = c.v.z;
  const s = Math.max(5, p.topSpeed * 0.97);
  const a = vx * vx + vz * vz - s * s, b = 2 * (dx * vx + dz * vz), cc = dx * dx + dz * dz;
  let t = null;
  if (Math.abs(a) < 1e-6) { if (b < 0) t = -cc / b; }
  else {
    const disc = b * b - 4 * a * cc;
    if (disc >= 0) {
      const r = Math.sqrt(disc), t1 = (-b - r) / (2 * a), t2 = (-b + r) / (2 * a);
      t = [t1, t2].filter((x) => x > 0).sort((x, y) => x - y)[0] ?? null;
    }
  }
  if (t === null || t > 4) return { t: Math.hypot(dx, dz) / s + 4, x: c.p.x + vx * 0.9, z: c.p.z + vz * 0.9 };
  return { t, x: c.p.x + vx * t, z: clamp(c.p.z + vz * t, -W + 0.5, W - 0.5) };
}

function defendLive(m, D, c, isPass, dt) {
  if (!c) return;
  const A_ = D.opp, d = A_.dir;
  const broken = m.lineBreakDone;
  const react = D.human ? 0.17 : m.diff.cpuReact;
  const free = D.players.filter((p) => !p.controlled && mobile(p) && !p.engage && p.state !== 'kick');
  const scored = free.filter((p) => !p.offside).map((p) => {
    const ic = intercept(p, c);
    let tti = ic.t;
    if ((p.p.x - c.p.x) * d < -1.5 && !broken) tti += 1.5;
    return { p, tti, ic };
  }).sort((x, y) => x.tti - y.tti);
  const icOf = new Map(scored.map((o) => [o.p, o.ic]));
  const ctl = m.controlled && m.controlled.team === D && dist2D(m.controlled.p.x, m.controlled.p.z, c.p.x, c.p.z) < 6;
  const nChase = broken ? 4 : ctl ? 1 : 2;
  const chasers = new Set(scored.slice(0, nChase).map((o) => o.p));
  const late = m.tackleCount >= 4;
  const line = [];
  for (const p of free) {
    if (p.offside) { goTo(p, (m.onsideAx - 1.5) * D.dir, p.p.z, { sprint: true }); continue; }
    if (chasers.has(p)) {
      if (p.ai.bite > 0) { goTo(p, p.ai.biteX, p.ai.biteZ, { sprint: true, stop: 0 }); continue; }
      const dd = dist2D(p.p.x, p.p.z, c.p.x, c.p.z);
      const ic = icOf.get(p);
      // close in on the intercept point, but don't overshoot when already on top of him
      const lead = dd < 3 ? clamp(dd / Math.max(5, p.topSpeed), 0, 0.35) : null;
      if (lead !== null) goTo(p, c.p.x + c.v.x * lead, c.p.z + c.v.z * lead, { sprint: true, arrive: 0.6, stop: 0 });
      else goTo(p, ic.x, ic.z, { sprint: true, arrive: 0.6, stop: 0 });
      const markerWait = p.ai.marker && m.time - (m.playStartT || 0) < 0.55; // markers stand square until the ball is out
      if (!isPass && m.ball.carrier === c && c.state !== 'tackled' && !markerWait) {
        // judge reach against where the carrier will be, not where he is
        const n22 = dist2D(p.p.x, p.p.z, c.p.x + c.v.x * 0.22, c.p.z + c.v.z * 0.22);
        const n40 = dist2D(p.p.x, p.p.z, c.p.x + c.v.x * 0.4, c.p.z + c.v.z * 0.4);
        if (dd < 1.95 && n22 < 1.8) {
          p.ai.react += dt;
          if (p.ai.react > react) {
            p.ai.react = 0;
            const headOn = (c.fwd.x * (p.p.x - c.p.x) + c.fwd.z * (p.p.z - c.p.z)) / Math.max(0.1, dd) > 0.5;
            attemptTackle(m, p, headOn && p.attr.strength > 80 && chance(0.15) ? 'grip' : chance(0.3) ? 'low' : 'normal');
          }
        } else if (dd < 3.4 && n40 < 3.2 && (p.p.x - c.p.x) * d < 0.5 && c.speedH > p.speedH * 0.9 && chance(dt * 3)) attemptTackle(m, p, 'dive');
        else p.ai.react = Math.max(0, p.ai.react - dt * 0.5);
      }
      continue;
    }
    if ((p.p.x - c.p.x) * d < -1.5) { // beaten: cover defence chases the intercept
      const ic = intercept(p, c); goTo(p, ic.x, ic.z, { sprint: true }); continue;
    }
    if (p.num === 1) {
      if (broken || Math.abs(c.p.x - p.p.x) < 18) { const ic = intercept(p, c); goTo(p, ic.x, ic.z, { sprint: true }); continue; }
      const x = clamp(c.p.x + d * (late ? 22 : 14), -H - 2, H + 2); goTo(p, x, c.p.z * 0.6, {}); p.faceTarget = headingOf(-d, 0); continue;
    }
    if (late && (p.num === 2 || p.num === 5) && !broken) { const x = clamp(c.p.x + d * 20, -H - 2, H + 2); goTo(p, x, (p.p.z > 0 ? 1 : -1) * 22); continue; }
    line.push(p);
  }
  const atk = A_.players.filter((a) => a !== c);
  assignLine(m, D, line, atk, (a) => {
    const ref = a || c;
    let x = ref.p.x + d * 2.2;
    if ((x - c.p.x) * d < 0.5) x = c.p.x + d * 0.5;
    return x;
  }, c.p.z, true, { lineSpeed: D.human ? 0.95 : m.diff.lineSpeed });
}

// ------------------------------------------------------------------ kicks in the air / loose ball
function looseBall(m, dt) {
  const b = m.ball, info = b.info;
  const kt = m.kickTarget || { x: b.p.x + b.v.x * 0.4, z: b.p.z + b.v.z * 0.4 };
  const K = b.kind === 'kick' && info && info.team ? info.team : null;
  for (const T of m.teams) {
    const d = T.dir;
    const ps = T.players.filter((p) => !p.controlled && mobile(p)).map((p) => ({ p, t: dist2D(p.p.x, p.p.z, kt.x, kt.z) / Math.max(5, p.topSpeed) })).sort((x, y) => x.t - y.t);
    ps.forEach((o, i) => {
      const p = o.p;
      if (K === T) {
        if (p.kickOffside) { p.wish.x = -d * 0.3; p.wish.z = 0; p.wantSprint = false; return; }
        if (i < 4) goTo(p, kt.x, kt.z, { sprint: true, stop: 0.2, arrive: 0.8 });
        else goTo(p, kt.x - d * (8 + i), clamp(kt.z + (i % 2 ? 1 : -1) * (4 + i * 2), -W + 2, W - 2), { sprint: false });
      } else if (K) {
        if (i === 0) goTo(p, kt.x, kt.z, { sprint: true, stop: 0.05, arrive: 0.7 });
        else if (i === 1) goTo(p, kt.x - d * 4, kt.z + 2, { sprint: true });
        else goTo(p, kt.x + d * (5 + (i % 4) * 3), clamp(kt.z + (i % 2 ? 1 : -1) * (3 + i * 2.2), -W + 2, W - 2), { sprint: i < 5 });
      } else {
        if (i < 2) goTo(p, kt.x, kt.z, { sprint: true, stop: 0, arrive: 0.5 });
        else { const s = A.attackSlotFor(m, T, p, b.p.x, b.p.z); goTo(p, s.x, s.z, {}); }
      }
      if (p.speedH < 0.5) face(p, b.p.x, b.p.z);
    });
  }
}
