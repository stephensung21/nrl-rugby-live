// Ball actions (pass, kick, offload, dummy, spill), gather rules, field-boundary rules and kick solvers.
import * as THREE from 'three';
import { FIELD, KICKS, GRAVITY, BALL } from './config.js';
import { clamp, rand, randRange, chance, gauss, dist2D, headingOf, pick, sign } from './util.js';
import { predictFlight, kickRange, powerForRange, stepFlight } from './physics.js';

const H = FIELD.half, W = FIELD.halfW;

// ============================================================== passing
export function passCandidates(m, p, side) {
  const T = p.team, d = T.dir;
  const out = [];
  for (const q of T.players) {
    if (q === p || !q.isUpright() || q.state === 'ptb' || q.state === 'kick') continue;
    const lat = (q.p.z - p.p.z) * d * side;      // + = on requested side (right = +z*dir)
    const behind = (p.p.x - q.p.x) * d;          // + = behind the passer
    if (lat < 1.2 || lat > 32 || behind < -2.5 || behind > 22) continue;
    out.push({ q, lat, behind, dist: Math.hypot(lat, behind) });
  }
  out.sort((a, b) => a.lat - b.lat);
  return out;
}
export function pickReceiver(m, p, side, long) {
  const c = passCandidates(m, p, side);
  if (!c.length) return null;
  if (long && c.length > 1) return c[1].q;
  return c[0].q;
}

export function passBall(m, p, q, o = {}) {
  const b = m.ball;
  if (!q || b.carrier !== p) return false;
  const T = p.team, f = p.fwd;
  const sx = p.p.x + f.x * 0.15, sy = 1.1, sz = p.p.z + f.z * 0.15;
  let speed = o.offload ? 9.5 : 12.5 + p.attr.pass * 0.07 + (o.long ? 3 : 0);
  let t = Math.hypot(q.p.x - sx, q.p.z - sz) / speed, tx = q.p.x, tz = q.p.z;
  for (let i = 0; i < 4; i++) {
    tx = q.p.x + q.v.x * t * 0.92; tz = q.p.z + q.v.z * t * 0.92;
    t = Math.hypot(tx - sx, tz - sz) / speed;
  }
  t = clamp(t, 0.12, 1.7);
  const dist = Math.hypot(tx - sx, tz - sz);
  let sigma = (1 - p.attr.pass / 100) * 0.07 + dist * 0.0018 + (o.offload ? 0.07 : 0) + (p.state === 'tackled' ? 0.04 : 0) + (o.long ? 0.015 : 0);
  if (!T.human) sigma *= m.diff.cpuPassErr; else sigma *= 0.8;
  const ux = (tx - sx) / Math.max(0.01, dist), uz = (tz - sz) / Math.max(0.01, dist);
  const latE = gauss() * sigma * dist, lonE = gauss() * sigma * dist * 0.5;
  tx += -uz * latE + ux * lonE; tz += ux * latE + uz * lonE;
  const ty = 1.15 + gauss() * sigma * 2.5;
  b.release('pass', { team: T, passer: p, target: q, rx: sx, rz: sz, pvx: p.v.x, t: m.time, offload: !!o.offload, tx, tz });
  b.p.set(sx, sy, sz);
  b.v.set((tx - sx) / t, (ty - sy) / t + 0.5 * GRAVITY * t, (tz - sz) / t);
  b.drag = 0; b.curve = 0; b.spin = 'spiral'; b.grubber = false;
  b.lastTouch = p; b.setIgnore(p, m.time + 0.35);
  p.passAnim = 0.3;
  const lat = (q.p.x - p.p.x) * p.right.x + (q.p.z - p.p.z) * p.right.z;
  p.passSide = lat > 0 ? -1 : 1;
  q.ai.passCd = (q.isForward || q.num === 2 || q.num === 5 ? 0.7 : 0.45) + rand() * 0.4; q.ai.dummyHalf = false; q.ai.plan = null;
  m.kickTarget = { x: tx, z: tz, t: m.time + t, pass: true };
  m.audio.catchBall();
  m.emit('pass', { team: T, player: p, to: q, offload: !!o.offload });
  if (o.offload) T.stats.offloads++;
  return true;
}

export function offload(m, c, side) {
  const e = c.engage;
  if (!e || m.ball.carrier !== c || e.progress > 0.88 || e.offloadTried) return false;
  e.offloadTried = true;
  const T = c.team;
  let q = null, bd = 9.5;
  for (const t of T.players) {
    if (t === c || !t.isUpright()) continue;
    const dd = dist2D(t.p.x, t.p.z, c.p.x, c.p.z);
    const behind = (c.p.x - t.p.x) * T.dir;
    const lat = (t.p.z - c.p.z) * T.dir * side;
    if (behind < -1.5 || dd > bd) continue;
    if (side && lat < -1) continue;
    bd = dd; q = t;
  }
  if (!q) return false;
  const n = e.tacklers.length;
  const p = 0.26 + c.attr.hand / 260 + (1 - e.progress) * 0.32 - (n - 1) * 0.24 - Math.max(0, e.dom) * 0.25;
  if (chance(clamp(p, 0.04, 0.85))) { passBall(m, c, q, { offload: true }); m.message('OFFLOAD!', `${c.name} gets the arm free`, 1.2, 'good'); }
  else spillBall(m, c, 'offload');
  return true;
}

export function dummyPass(m, p, side) {
  if (p.cd.dummy > 0) return;
  p.cd.dummy = 1.1; p.passAnim = 0.3; p.passSide = side > 0 ? -1 : 1;
  for (const d of p.team.opp.players) {
    if (d.controlled || !d.isUpright()) continue;
    const dd = dist2D(d.p.x, d.p.z, p.p.x, p.p.z);
    if (dd > 8) continue;
    if (chance(0.6 - (d.attr.tackle - 70) / 180)) {
      d.ai.bite = 0.6; d.ai.biteX = p.p.x - p.team.dir * 1.5; d.ai.biteZ = p.p.z + side * p.team.dir * 7;
    }
  }
  m.emit('dummy', { team: p.team, player: p });
}

export function spillBall(m, c, cause) {
  const b = m.ball;
  b.carrier = null; b.state = 'air'; b.kind = 'loose'; b.info = { spilledBy: c, team: c.team, cause };
  b.lastTouch = c; b.drag = 1; b.curve = 0; b.grubber = false;
  b.p.set(c.p.x, 1.0, c.p.z);
  const fwd = chance(0.68);
  b.v.set(c.team.dir * (fwd ? randRange(1.5, 4) : -randRange(1, 3)) + c.v.x * 0.4, randRange(1, 3), gauss() * 1.5 + c.v.z * 0.4);
  b.setIgnore(c, m.time + 1.0);
  m.emit('spill', { team: c.team, player: c, cause });
  if (fwd) m.knockOn(c.team, c.p.x, c.p.z);
  else m.message('LOOSE BALL!', 'Spilled backwards — play on', 1.2, 'warn');
}

// ============================================================== kicking
export function kickBall(m, p, type, yaw, power, o = {}) {
  const def = KICKS[type], T = p.team, b = m.ball;
  const foot = o.foot || p.attr.foot, weak = foot !== p.attr.foot;
  let sigma = 0.006 + (1 - p.attr.kick / 100) * 0.045;
  if (weak) sigma *= 1.9;
  const pw = clamp(power, 0, 1.1) * (weak ? 0.93 : 1);
  if (power > 0.93) sigma += (power - 0.93) * 0.45;
  if (!o.place && !o.restart) {
    const nd = m.nearest(T.opp.players, p.p.x, p.p.z, (d) => d.isUpright());
    if (nd && dist2D(nd.p.x, nd.p.z, p.p.x, p.p.z) < 3) sigma *= 1.6;
  }
  if (!T.human) sigma *= m.diff.cpuKickErr;
  sigma += o.extraErr || 0;
  const yawE = yaw + gauss() * sigma;
  const elev = (o.elev ?? def.elev) + gauss() * sigma * 0.5;
  const sp = (def.vMin + (def.vMax - def.vMin) * clamp(pw, 0, 1.05)) * (1 + gauss() * sigma * 0.25);
  const place = !!o.place;
  const sx = place || o.restart ? b.p.x : p.p.x + Math.sin(yaw) * 0.45;
  const sz = place || o.restart ? b.p.z : p.p.z + Math.cos(yaw) * 0.45;
  const sy = place ? 0.3 : type === 'grubber' ? 0.25 : 0.5;
  const info = { team: T, kicker: p, type, fromX: sx, fromZ: sz, t: m.time, bounced: false, touchedAfter: false, restart: !!o.restart,
    penaltyTouch: !!o.penaltyTouch, goal: !!o.goal, fieldGoal: type === 'fieldgoal', chargedDown: false, prevX: sx };
  b.release('kick', info);
  b.p.set(sx, sy, sz);
  const ch = Math.cos(elev);
  b.v.set(Math.sin(yawE) * ch * sp, Math.sin(elev) * sp, Math.cos(yawE) * ch * sp);
  if (!place && !o.restart && type !== 'fieldgoal') { b.v.x += p.v.x * 0.4; b.v.z += p.v.z * 0.4; }
  if (type === 'grubber') b.v.y = randRange(-1.6, 0.4);
  b.curve = def.curve * (foot === 'R' ? 1 : -1) * randRange(0.8, 1.2) * clamp(pw, 0.4, 1);
  b.spin = def.spin; b.grubber = type === 'grubber'; b.drag = 1; b.lastTouch = p;
  b.setIgnore(p, m.time + 0.5);
  // charge-down
  if (!place && !o.restart && !o.penaltyTouch) {
    for (const d of T.opp.players) {
      if (!d.isUpright() && d.state !== 'lunge' && d.state !== 'dive') continue;
      const dx = d.p.x - p.p.x, dz = d.p.z - p.p.z, dd = Math.hypot(dx, dz);
      if (dd > 1.8 || (dx * Math.sin(yaw) + dz * Math.cos(yaw)) / Math.max(0.01, dd) < 0.3) continue;
      if (chance(0.33 + (d.state === 'lunge' || d.state === 'dive' ? 0.25 : 0))) {
        b.v.set(-b.v.x * 0.15 + gauss() * 2, randRange(1.5, 4), -b.v.z * 0.15 + gauss() * 2);
        b.curve = 0; b.grubber = false; b.kind = 'loose'; b.info = { chargedDown: true, team: T, by: d }; b.lastTouch = d;
        m.message('CHARGED DOWN!', d.name, 1.4, 'warn'); m.audio.thud(0.5); m.emit('chargedown', { team: d.team, player: d });
        break;
      }
    }
  }
  if (!o.goal) for (const q of T.players) q.kickOffside = q !== p && (q.p.x - p.p.x) * T.dir > 0.5;
  p.anim.foot = foot;
  if (!place && !o.restart) { p.setState('kick', 0.55); p.stateT = 0.14; }
  m.audio.kick(pw); T.stats.kicks++;
  m.emit('kick', { team: T, player: p, kind: type });
  m.kickAim = null;
  updateKickTarget(m);
}

export function updateKickTarget(m) {
  const b = m.ball;
  if (b.state === 'air' && b.kind !== 'pass') {
    const pr = predictFlight(b.p, b.v, b.curve, m.wind, b.drag, 1.5);
    let x = pr.catchPt.x, z = pr.catchPt.z;
    if (b.grubber) { const hs = Math.hypot(pr.vLand.x, pr.vLand.z); if (hs > 0.5) { const r = (hs * hs) / (2 * 3.4) * 0.55; x = pr.land.x + (pr.vLand.x / hs) * r; z = pr.land.z + (pr.vLand.z / hs) * r; } }
    m.kickTarget = { x, z, t: m.time + pr.catchPt.t, land: pr.land };
  } else if (b.state === 'ground') {
    const hs = Math.hypot(b.v.x, b.v.z), r = hs > 0.2 ? (hs * hs) / (2 * 3.4) * 0.6 : 0;
    m.kickTarget = { x: b.p.x + (hs > 0.2 ? (b.v.x / hs) * r : 0), z: b.p.z + (hs > 0.2 ? (b.v.z / hs) * r : 0), t: m.time + 0.5 };
  }
}

// ============================================================== live ball rules
export function ballLive(m, dt) {
  const b = m.ball;
  if (b.state === 'held' || b.state === 'dead') return;
  const info = b.info;
  if (b.landedThisTick || (b.state === 'ground' && Math.floor(m.time * 4) !== Math.floor((m.time - dt) * 4))) updateKickTarget(m);
  if (b.landedThisTick && b.kind === 'kick' && info && !info.bounced) {
    info.bounced = true; info.bounceX = b.p.x; info.bounceZ = b.p.z;
    if (info.restart && !info.touchedAfter && Math.abs(b.p.z) < W && Math.abs(b.p.x) < H) {
      const dist = (b.p.x - info.fromX) * info.team.dir;
      if (dist < 10) return m.awardPenalty(info.team.opp, info.type === 'dropout' ? info.fromX + info.team.dir * 10 : 0, 0, 'Kick did not go 10m');
    }
  }
  // field goal through the posts
  if (b.kind === 'kick' && info && info.fieldGoal && !info.touchedAfter && b.state === 'air') {
    const gx = info.team.dir * H;
    if ((info.prevX - gx) * (b.p.x - gx) <= 0 && info.prevX !== b.p.x && !info.fgDone) {
      info.fgDone = true;
      if (Math.abs(b.p.z) < FIELD.postGap - 0.05 && b.p.y > FIELD.crossbar) return fieldGoalScored(m, info.team, info.kicker);
    }
    info.prevX = b.p.x;
  }
  const low = b.state === 'ground' || b.landedThisTick || b.p.y < 0.3;
  if (low && (Math.abs(b.p.x) > FIELD.dead || (Math.abs(b.p.x) > H && Math.abs(b.p.z) > W))) return deadInGoal(m);
  if (low && Math.abs(b.p.z) > W) return ballOut(m);
  tryGather(m);
}

function fieldGoalScored(m, T, k) {
  T.score += 1; T.stats.fieldGoals++;
  m.audio.roar(1.2); m.audio.whistle();
  m.message('FIELD GOAL!', `${k.name} — 1 point`, 2.4, 'try');
  m.emit('fieldgoal', { team: T, player: k });
  m.hud.flashScore();
  if (m.goldenPoint) { m.ball.state = 'dead'; return m.endMatch(); }
  m.ball.kind = 'loose'; m.ball.info = null;
  m.setPhase('whistle', { restart: { type: 'kickoff', team: T.opp }, dur: 2.6 });
}

function ballOut(m) {
  const b = m.ball, info = b.info, x = clamp(b.p.x, -H + 1, H - 1), z = b.p.z;
  const s = z > 0 ? 1 : -1;
  if (b.kind === 'kick' && info && !info.touchedAfter) {
    const K = info.team;
    if (info.penaltyTouch) {
      m.emit('foundtouch', { team: K });
      return m.whistleStop('FOUND TOUCH', `${K.short} tap restart 10m in`, { type: 'ptb', team: K, x, z: s * (W - 10) }, { style: 'good' });
    }
    if (info.restart && !info.bounced) return m.awardPenalty(K.opp, info.type === 'dropout' ? info.fromX + K.dir * 10 : 0, 0, 'Out on the full');
    if (!info.bounced) return m.scrumRestart(K.opp, info.fromX, info.fromZ, 'OUT ON THE FULL', `Scrum, ${K.opp.short} feed`);
    const fromAx = info.fromX * K.dir, outAx = x * K.dir;
    const bounceIn = Math.abs(info.bounceZ ?? 99) < W;
    if (bounceIn && ((fromAx < -10 && outAx > 30) || (fromAx < -30 && outAx > 10))) {
      const label = fromAx < -10 && outAx > 30 ? '40/20!' : '20/40!';
      m.emit('4020', { team: K, label });
      m.audio.roar(1.0);
      return m.whistleStop(label, `${K.short} keep the ball — fresh set`, { type: 'ptb', team: K, x, z: s * (W - 10) }, { style: 'good' });
    }
    return m.scrumRestart(K.opp, x, z, 'INTO TOUCH', `Scrum, ${K.opp.short} feed`);
  }
  const last = b.lastTouch ? b.lastTouch.team : m.poss;
  m.scrumRestart(last.opp, x, z, 'INTO TOUCH', `Scrum, ${last.opp.short} feed`);
}

function deadInGoal(m) {
  const b = m.ball, info = b.info;
  const endSign = b.p.x > 0 ? 1 : -1;
  const D = m.teams.find((T) => T.dir === -endSign); // team defending this end
  const last = b.lastTouch ? b.lastTouch.team : null;
  if (b.kind === 'kick' && info && !info.touchedAfter && info.team) {
    const K = info.team;
    if (K === D) return m.whistleStop('DEAD IN-GOAL', `Goal-line drop-out ${D.short}`, { type: 'dropout', team: D });
    if (info.restart && !info.bounced) return m.awardPenalty(D, 0, 0, 'Dead on the full');
    return m.whistleStop('DEAD BALL', `20m restart ${D.short}`, { type: 'ptb', team: D, x: -D.dir * 30, z: 0 });
  }
  if (last === D) return m.whistleStop('DEAD IN-GOAL', `Goal-line drop-out ${D.short}`, { type: 'dropout', team: D });
  return m.whistleStop('DEAD BALL', `20m restart ${D.short}`, { type: 'ptb', team: D, x: -D.dir * 30, z: 0 });
}

function catchChance(m, p, contested) {
  const b = m.ball, info = b.info;
  let c;
  const sp = Math.hypot(b.v.x, b.v.y, b.v.z);
  if (b.kind === 'pass' && info) {
    if (info.team === p.team) c = info.target === p ? 0.975 : 0.88;
    else c = (p.controlled ? 0.34 : 0.15) + (p.attr.hand - 70) / 300;
    if (info.offload) c -= 0.08;
  } else if (b.kind === 'kick' && info) {
    if (b.state === 'ground' || b.p.y < 0.45) c = 0.86;
    else if (b.bounces > 0) c = 0.76;
    else c = info.type === 'bomb' ? 0.8 : info.type === 'grubber' ? 0.72 : 0.9;
  } else c = b.p.y < 0.45 ? 0.82 : 0.74;
  c += (p.attr.hand - 75) / (b.kind === 'pass' ? 300 : 160);
  if (b.kind !== 'pass') c -= Math.max(0, sp - 16) * 0.02;
  if (contested) c -= 0.22;
  if (b.grubber) c -= 0.1;
  if (p.team.human) c += m.diff.humanCatch;
  return clamp(c, 0.04, 0.99);
}

export function tryGather(m) {
  const b = m.ball, now = m.time;
  const by = b.p.y;
  if (by > 3.0) return;
  const cands = [];
  for (const p of m.players) {
    if (!p.isUpright() || p.state === 'kick' || p.state === 'celebrate') continue;
    if (!b.canTouch(p, now)) continue;
    if (p.kickOffside && !p.controlled) continue;
    const f = p.fwd;
    const hd = dist2D(p.p.x + f.x * 0.25, p.p.z + f.z * 0.25, b.p.x, b.p.z);
    const reach = by < 0.5 ? 0.9 : 1.05;
    const maxH = 2.35 + (p.attr.hand > 80 ? 0.1 : 0);
    if (hd > reach || by > maxH) continue;
    // AI defenders only go for passes that come right at them
    if (b.kind === 'pass' && b.info && b.info.team !== p.team && hd > 0.75) continue;
    if (b.kind === 'pass' && b.info && b.info.team === p.team && b.info.target !== p && hd > 0.6) continue;
    cands.push({ p, hd });
  }
  if (!cands.length) return;
  cands.sort((a, c) => a.hd - c.hd);
  const first = cands[0].p;
  const rival = cands.find((c) => c.p.team !== first.team);
  const contested = !!rival && rival.hd < 1.5;
  const order = contested && rand() < 0.5 ? [rival.p, first] : [first, ...(rival ? [rival.p] : [])];
  for (const p of order) {
    if (chance(catchChance(m, p, contested))) return catchBall(m, p);
    if (fumble(m, p)) return;
  }
}

function fumble(m, p) {
  const b = m.ball;
  b.setIgnore(p, m.time + 0.6);
  if (b.kind === 'pass' && b.info && b.info.team !== p.team && chance(0.85)) return false; // clean miss of an interception attempt
  if (b.info) b.info.touchedAfter = true;
  b.lastTouch = p;
  const fwd = chance(0.55);
  const base = b.kind === 'pass' ? 0.3 : 0.15;
  b.v.set(p.team.dir * (fwd ? randRange(1.5, 4.5) : -randRange(1, 3.5)) + b.v.x * base, randRange(0.8, 2.5), gauss() * 2 + b.v.z * base);
  b.state = 'air'; b.drag = 1; b.curve = 0; b.grubber = false;
  const wasInfo = b.info;
  b.kind = 'loose'; b.info = { spilledBy: p, team: p.team, prev: wasInfo };
  p.catchAnim = 0.25;
  m.emit('fumble', { team: p.team, player: p, note: `${wasInfo && wasInfo.passer ? 'pass' : wasInfo && wasInfo.kicker ? 'kick:' + wasInfo.type : 'loose'} ${wasInfo && wasInfo.target === p ? 'target' : wasInfo && wasInfo.team !== p.team ? 'opp' : 'mate'} h=${b.p.y.toFixed(2)} fwd=${fwd}` });
  if (fwd) { m.knockOn(p.team, b.p.x, b.p.z); return true; }
  m.message('FUMBLE!', 'Ball goes loose — play on', 1.2, 'warn');
  return true;
}

export function catchBall(m, p) {
  const b = m.ball, info = b.info, kind = b.kind, T = p.team;
  if (kind === 'kick' && info && info.team === T && p.kickOffside) return m.awardPenalty(T.opp, p.p.x, p.p.z, 'Offside from the kick');
  if (kind === 'kick' && info && info.restart && info.team === T && (p.p.x - info.fromX) * T.dir < 10) return m.awardPenalty(T.opp, 0, 0, 'Kick did not go 10m');
  const height = b.p.y;
  b.give(p);
  p.catchAnim = 0.3; p.catchHigh = height > 1.8;
  p.ai.inGoalCatch = false; p.ai.passCd = Math.max(p.ai.passCd || 0, 0.25);
  m.audio.catchBall();
  m.kickTarget = null;
  for (const q of m.players) q.kickOffside = false;
  let newPoss = false;
  if (kind === 'pass' && info) {
    if (info.team === T) {
      const rel = ((p.p.x - info.rx) - info.pvx * (m.time - info.t)) * T.dir;
      if (rel > 1.3) { b.carrier = null; b.state = 'ground'; return m.knockOn(T, info.rx, info.rz, 'FORWARD PASS'); }
      T.stats.passes++;
    } else {
      newPoss = true; m.message('INTERCEPT!', `${p.name} picks it off`, 1.8, 'good'); m.audio.roar(1.0);
      m.emit('intercept', { team: T, player: p });
    }
  } else if (kind === 'kick' && info) {
    if (info.team !== T) {
      newPoss = true;
      if (!info.restart) m.message('ZERO TACKLE', `${T.short} fresh set`, 1.1);
      p.ai.inGoalCatch = p.p.x * T.dir < -H;
    } else if (!info.restart) m.message('REGATHERED!', p.name, 1.3, 'good');
  } else {
    if (T !== m.poss) { newPoss = true; m.message('TURNOVER', `${T.short} ball`, 1.3, 'warn'); }
    if (info && info.prev && info.prev.team && info.prev.team !== T && p.p.x * T.dir < -H) p.ai.inGoalCatch = true;
  }
  if (newPoss) { m.poss = T; m.tackleCount = 0; m.gainLineX = p.p.x; m.lineBreakDone = false; }
  if (T.human) m.setControlled(p);
  m.emit('catch', { team: T, player: p, kind });
  if (p.p.x * T.dir > H) m.scoreTry(p, p.p.z);
}

export function carrierBounds(m, c) {
  const T = c.team, ax = c.p.x * T.dir, az = Math.abs(c.p.z);
  if (az > W && Math.abs(c.p.x) <= H) return m.scrumRestart(T.opp, c.p.x, c.p.z, 'INTO TOUCH', `Scrum, ${T.opp.short} feed`);
  if (c.state === 'tackled') return;
  if (ax > H) {
    const nd = nearestDist(m, T.opp, c);
    let ground;
    if (c.controlled) ground = m.input.pressed('step') || nd < 1.8 || ax > H + 6.5 || az > W - 0.8;
    else ground = nd < 3.8 || Math.abs(c.p.z) < 5 || ax > H + 5 || az > W - 1;
    if (ground) { c.setState('free'); m.scoreTry(c, c.p.z); }
    return;
  }
  if (ax < -H) {
    if (ax < -FIELD.dead || az > W) return m.whistleStop('DEAD IN-GOAL', `Goal-line drop-out ${T.short}`, { type: 'dropout', team: T });
    const nd = nearestDist(m, T.opp, c);
    const ground = c.controlled ? m.input.pressed('step') : (c.ai.inGoalCatch && nd < 10);
    if (ground) {
      if (c.ai.inGoalCatch) return m.whistleStop('TOUCHED DOWN', `20m restart ${T.short}`, { type: 'ptb', team: T, x: -T.dir * 30, z: 0 }, { style: 'good' });
      return m.whistleStop('TOUCHED DOWN', `Goal-line drop-out ${T.short}`, { type: 'dropout', team: T });
    }
  }
}
function nearestDist(m, D, c) {
  let bd = 99;
  for (const d of D.players) if (d.isUpright()) bd = Math.min(bd, dist2D(d.p.x, d.p.z, c.p.x, c.p.z));
  return bd;
}

export function updateKickOffside(m) {
  const info = m.ball.info;
  if (!info || !info.team) return;
  const K = info.team;
  for (const p of K.players) {
    if (!p.kickOffside) continue;
    for (const q of K.players) {
      if (q !== p && !q.kickOffside && (q.p.x - p.p.x) * K.dir >= 0) { p.kickOffside = false; break; }
    }
  }
}

// ============================================================== goal kicking
export function bestConversionDistance(z) { return clamp(9 + Math.abs(z) * 0.5, 9, 28); }

function simCross(sx, sz, yaw, elev, power, def, foot, wind, gx) {
  const sp = def.vMin + (def.vMax - def.vMin) * power;
  const s = { p: { x: sx, y: 0.3, z: sz }, v: { x: Math.sin(yaw) * Math.cos(elev) * sp, y: Math.sin(elev) * sp, z: Math.cos(yaw) * Math.cos(elev) * sp },
    curve: def.curve * (foot === 'R' ? 1 : -1) * clamp(power, 0.4, 1), drag: 1 };
  const dt = 1 / 60;
  for (let t = 0; t < 6; t += dt) {
    const px = s.p.x;
    stepFlight(s, dt, wind);
    if ((px - gx) * (s.p.x - gx) <= 0) return { crossed: true, y: s.p.y, z: s.p.z };
    if (s.p.y < 0) return { crossed: false, y: 0, z: s.p.z };
  }
  return { crossed: false, y: 0, z: s.p.z };
}
export function solveGoal(m, sx, sz, gx, def, foot, elev) {
  let yaw = headingOf(gx - sx, -sz);
  const dist = Math.hypot(gx - sx, sz);
  let power = clamp(powerForRange(def, 'goal', dist + 14, elev), 0.25, 1);
  for (let it = 0; it < 14; it++) {
    const r = simCross(sx, sz, yaw, elev, power, def, foot, m.wind, gx);
    const need = Math.min(6, 2.5 + dist * 0.2);
    if (!r.crossed || r.y < need) power = Math.min(1, power + 0.05);
    else if (r.y > 12 && power > 0.4) power -= 0.03;
    const s = Math.sin(yaw);
    if (Math.abs(s) > 0.15 && r.crossed) yaw += (0.85 * r.z * s * s) / (gx - sx);
  }
  return { yaw, power };
}
export function cpuGoalKick(m, pd) {
  const T = pd.team, k = pd.kicker, gx = T.dir * H;
  const sol = solveGoal(m, pd.x, pd.z, gx, KICKS.goal, pd.foot, pd.elev);
  pd.yaw = sol.yaw; pd.power = sol.power; pd.stage = 'run'; pd.runT = 0;
}
export function goalFlightCheck(m) {
  const pd = m.pd, b = m.ball;
  if (pd.stage !== 'flight' || pd.result !== undefined) return;
  const gx = pd.team.dir * H, prev = pd.prevX, cur = b.p.x;
  if ((prev - gx) * (cur - gx) <= 0 && prev !== cur) {
    goalResult(m, Math.abs(b.p.z) < FIELD.postGap - 0.05 && b.p.y > FIELD.crossbar);
  } else if (b.state === 'ground' || b.bounces > 0) goalResult(m, false);
  pd.prevX = cur;
}
export function goalResult(m, good) {
  const pd = m.pd, T = pd.team;
  if (pd.result !== undefined) return;
  pd.result = good; pd.stage = 'result'; m.phaseT = 0;
  if (good) {
    T.score += 2; T.stats[pd.kind === 'conversion' ? 'convM' : 'penGoals']++;
    m.message('GOAL!', pd.kind === 'conversion' ? 'Conversion successful' : 'Penalty goal', 2.2, 'try');
    m.audio.roar(1.0); m.hud.flashScore();
  } else {
    m.message('MISSED', pd.kind === 'conversion' ? 'No extra points' : 'Penalty attempt fails', 2.0, 'bad'); m.audio.roar(0.6, true);
  }
  m.emit('goal', { team: T, good, kind: pd.kind });
}

// ============================================================== human set-piece aiming
export function pingPong(t, period = 1.1) { const f = (t / period) % 2; return f < 1 ? f : 2 - f; }

export function humanGoalKick(m, dt, pd) {
  const inp = m.input, T = pd.team, gx = T.dir * H;
  if (inp.pressed('foot')) pd.foot = pd.foot === 'R' ? 'L' : 'R';
  if (pd.stage === 'place') {
    const old = pd.dist;
    pd.dist = clamp(pd.dist - inp.move.y * 9 * dt, 8, 40);
    if (pd.dist !== old) { pd.x = T.dir * (H - pd.dist); pd.baseYaw = pd.yaw = headingOf(gx - pd.x, -pd.z); }
    if (inp.pressed('kick') || inp.pressed('step') || inp.pressed('confirm')) { pd.stage = 'aim'; m.audio.ui(); }
  } else if (pd.stage === 'aim') {
    pd.yaw = clamp(pd.yaw - inp.move.x * 0.45 * dt, pd.baseYaw - 0.6, pd.baseYaw + 0.6);
    pd.elev = clamp(pd.elev + inp.move.y * 0.45 * dt, 0.3, 0.95);
    if (inp.pressed('kick') || inp.pressed('step')) { pd.stage = 'power'; pd.holdT = 0; pd.powerBtn = inp.pressed('kick') ? 'kick' : 'step'; }
  } else if (pd.stage === 'power') {
    pd.holdT += dt; pd.power = pingPong(pd.holdT, 1.15);
    if (inp.released(pd.powerBtn) || !inp.held(pd.powerBtn)) { pd.stage = 'run'; pd.runT = 0; }
  }
}
export function humanSetPieceAim(m, dt, pd, types) {
  const inp = m.input;
  if (!pd.baseYaw) pd.baseYaw = pd.yaw;
  if (pd.foot === undefined) pd.foot = m.humanFoot || pd.kicker.attr.foot;
  if (inp.pressed('foot')) pd.foot = pd.foot === 'R' ? 'L' : 'R';
  if (types.length > 1 && (inp.pressed('kickNext') || inp.pressed('kickPrev') || inp.pressed('k1') || inp.pressed('k2'))) {
    pd.type = inp.pressed('k1') ? types[0] : inp.pressed('k2') ? types[1] : types[(types.indexOf(pd.type) + 1) % types.length];
    m.audio.ui();
  }
  if (!pd.powering) {
    pd.yaw = clamp(pd.yaw - inp.move.x * 0.7 * dt, pd.baseYaw - 1.1, pd.baseYaw + 1.1);
    if (inp.pressed('kick') || inp.pressed('step')) { pd.powering = true; pd.holdT = 0; pd.powerBtn = inp.pressed('kick') ? 'kick' : 'step'; }
  } else {
    pd.holdT += dt; pd.power = pingPong(pd.holdT, 1.15);
    pd.yaw = clamp(pd.yaw - inp.move.x * 0.35 * dt, pd.baseYaw - 1.1, pd.baseYaw + 1.1);
    if (inp.released(pd.powerBtn) || !inp.held(pd.powerBtn)) { pd.stage = 'run'; pd.runT = 0; }
  }
}
export function cpuKickoffAim(m, pd) {
  const T = pd.team, d = T.dir, sp = pd.spot || { x: 0, z: 0 };
  pd.foot = pd.kicker.attr.foot;
  if (pd.type === 'dropout') {
    const tx = sp.x + d * randRange(38, 50), tz = randRange(-22, 22);
    pd.yaw = headingOf(tx - sp.x, tz - sp.z);
    pd.power = powerForRange(KICKS.dropout, 'dropout', Math.hypot(tx - sp.x, tz - sp.z));
  } else if (chance(0.08)) {
    pd.type = 'shortko';
    const tz = pick([-1, 1]) * randRange(8, 16), tx = d * randRange(11, 14);
    pd.yaw = headingOf(tx, tz); pd.power = powerForRange(KICKS.shortko, 'shortko', Math.hypot(tx, tz));
  } else {
    const tz = randRange(-24, 24), tx = d * randRange(40, 47);
    pd.yaw = headingOf(tx, tz); pd.power = powerForRange(KICKS.kickoff, 'kickoff', Math.hypot(tx, tz) - 4);
  }
  pd.stage = 'run'; pd.runT = 0;
}
export function cpuTouchAim(m, pd) {
  const T = pd.team, sp = pd.spot, s = sp.z >= 0 ? 1 : -1;
  const tx = sp.x + T.dir * randRange(20, 32), tz = s * (W + 3);
  pd.yaw = headingOf(tx - sp.x, tz - sp.z);
  pd.power = Math.min(1, powerForRange(KICKS.touch, 'touch', Math.hypot(tx - sp.x, tz - sp.z)) * 1.02);
  pd.foot = pd.kicker.attr.foot; pd.stage = 'run';
}
export function cpuPenaltyChoice(m, T, mark) {
  const ax = mark.x * T.dir, D = H - ax;
  const distPosts = Math.hypot(D, mark.z);
  const diff = T.score - T.opp.score;
  const range = 26 + T.goalKicker.attr.kick * 0.2;
  if (distPosts < range && (m.goldenPoint || (m.isLate() && diff >= -2 && diff <= 6) || (D < 30 && chance(0.55)))) return 'goal';
  if (ax < 20) return 'touch';
  return chance(0.55) ? 'tap' : 'touch';
}

// ============================================================== CPU open-play kicking
export function cpuOpenPlayKick(m, c) {
  const T = c.team, d = T.dir, ax = c.p.x * d, D = H - ax;
  const diff = T.score - T.opp.score;
  let type, tx, tz;
  if (D < 40 && m.isLate() && diff >= -1 && diff <= 0 && Math.abs(c.p.z) < 22) {
    type = 'fieldgoal';
    const sol = solveGoal(m, c.p.x, c.p.z, d * H, KICKS.fieldgoal, c.attr.foot, KICKS.fieldgoal.elev);
    return kickBall(m, c, type, sol.yaw, sol.power, {});
  }
  if (D < 15) {
    const r = rand();
    if (r < 0.5) { type = 'grubber'; tx = d * (H + 4); tz = c.p.z * 0.5 + randRange(-8, 8); }
    else if (r < 0.75) { type = 'chip'; tx = d * (H + 2); tz = c.p.z + randRange(-6, 6); }
    else { type = 'bomb'; tx = d * (H - 3); tz = pick([-1, 1]) * randRange(22, 29); }
  } else if (D < 42) {
    type = 'bomb'; tx = d * (H - randRange(0, 8)); tz = chance(0.6) ? randRange(-10, 10) : pick([-1, 1]) * randRange(18, 26);
  } else {
    type = 'punt';
    const fb = T.opp.get(1);
    const side = fb && fb.p.z > 0 ? -1 : 1;
    if (ax < -10 && chance(0.3)) { tx = d * 38; tz = side * (W - 3); }
    else { tx = d * Math.min(H - 4, ax + randRange(38, 48)); tz = side * randRange(8, 24); }
  }
  aimKickAt(m, c, type, tx, tz);
}
export function aimKickAt(m, c, type, tx, tz) {
  const def = KICKS[type];
  let yaw = headingOf(tx - c.p.x, tz - c.p.z);
  let dist = Math.hypot(tx - c.p.x, tz - c.p.z);
  let power;
  if (type === 'grubber') power = clamp((dist - 4) / 26, 0.1, 1);
  else {
    power = powerForRange(def, type, dist);
    // one wind-compensation iteration
    const sp = def.vMin + (def.vMax - def.vMin) * power, ch = Math.cos(def.elev);
    const pr = predictFlight({ x: c.p.x, y: 0.5, z: c.p.z }, { x: Math.sin(yaw) * ch * sp, y: Math.sin(def.elev) * sp, z: Math.cos(yaw) * ch * sp }, def.curve * (c.attr.foot === 'R' ? 1 : -1), m.wind);
    const ex = tx - pr.land.x, ez = tz - pr.land.z;
    const nx = tx + ex, nz = tz + ez;
    yaw = headingOf(nx - c.p.x, nz - c.p.z); dist = Math.hypot(nx - c.p.x, nz - c.p.z);
    power = powerForRange(def, type, dist);
  }
  kickBall(m, c, type, yaw, power, {});
}

// ============================================================== shape / plans
export function attackSlotFor(m, T, p, bx, bz) {
  const d = T.dir, bs = bz * d;
  const spaceR = W - bs, spaceL = W + bs;
  const open = spaceR >= spaceL ? 1 : -1;
  let lat, depth;
  const sideOf = { 2: 1, 3: 1, 12: 1, 5: -1, 4: -1, 11: -1 };
  switch (p.num) {
    case 9: lat = bs + open * 1.5; depth = 2; break;
    case 7: lat = bs + open * 5.5; depth = 4; break;
    case 6: lat = bs + open * 12; depth = 5.5; break;
    case 8: lat = bs + open * 3; depth = 2.5; break;
    case 10: lat = bs - open * 3; depth = 2.5; break;
    case 13: lat = bs - open * 6.5; depth = 3.5; break;
    case 1: lat = bs + open * 19; depth = 7; break;
    case 2: case 5: lat = sideOf[p.num] * 31; depth = 6.5; break;
    case 3: case 4: lat = bs + (sideOf[p.num] * 31 - bs) * 0.62; depth = 6; break;
    default: lat = bs + (sideOf[p.num] * 31 - bs) * 0.33; depth = 4.5;
  }
  lat = clamp(lat, -W + 1.5, W - 1.5);
  return { x: clamp(bx - d * depth, -FIELD.dead + 1, FIELD.dead - 1), z: lat * d };
}
export function choosePlan(m, T) {
  const tc = m.tackleCount;
  const fwds = [8, 10, 11, 12, 13].map((n) => T.get(n)).filter((p) => p.state !== 'ground');
  if (tc === 5) {
    const a = T.get(7), b = T.get(6);
    const kicker = a.state === 'ground' ? b : b.state === 'ground' ? a : (a.attr.kick >= b.attr.kick ? a : b);
    return { kind: 'kick', target: kicker };
  }
  const r = rand();
  if (r < 0.12) return { kind: 'run' };
  if (r < (tc <= 1 ? 0.75 : 0.5) && fwds.length) return { kind: 'hitup', target: pick(fwds) };
  return { kind: 'shift', target: T.get(7).state === 'ground' ? T.get(6) : T.get(7) };
}

// ============================================================== aim visuals
const tmpPts = Array.from({ length: 24 }, () => new THREE.Vector3());
export function syncAimVisuals(m) {
  const line = m.aimLine, ret = m.aimReticle;
  line.visible = false; ret.visible = false;
  let start = null, yaw = 0, type = null, power = 0.6, elev = null, showRet = true;
  if (m.kickAim && m.ball.carrier) {
    const c = m.ball.carrier; start = { x: c.p.x, y: 0.5, z: c.p.z }; yaw = m.kickAim.yaw; type = m.kickAim.type; power = m.kickAim.power || 0.05;
    if (type === 'fieldgoal') showRet = false;
  } else if ((m.phase === 'kickoff' || m.phase === 'touchKick') && m.pd.team?.human && m.pd.stage === 'aim') {
    const b = m.ball; start = { x: b.p.x, y: 0.3, z: b.p.z }; yaw = m.pd.yaw; type = m.pd.type; power = m.pd.powering ? m.pd.power : 0.75;
  } else if (m.phase === 'goalKick' && m.pd.team?.human && (m.pd.stage === 'aim' || m.pd.stage === 'power' || m.pd.stage === 'place')) {
    const b = m.ball; start = { x: b.p.x, y: 0.3, z: b.p.z }; yaw = m.pd.yaw; type = 'goal'; elev = m.pd.elev; power = m.pd.stage === 'power' ? Math.max(0.35, m.pd.power) : 0.7; showRet = false;
  }
  if (!start) return;
  const def = KICKS[type]; const el = elev ?? def.elev;
  const sp = def.vMin + (def.vMax - def.vMin) * power;
  // preview the first part of the flight (no wind!) so wind compensation is up to the player
  const s = { p: { ...start }, v: { x: Math.sin(yaw) * Math.cos(el) * sp, y: Math.sin(el) * sp, z: Math.cos(yaw) * Math.cos(el) * sp }, curve: 0, drag: 1 };
  const T = type === 'grubber' ? 0.25 : type === 'goal' || type === 'fieldgoal' ? 0.6 : 0.45;
  for (let i = 0; i < 24; i++) {
    tmpPts[i].set(s.p.x, Math.max(0.05, s.p.y), s.p.z);
    for (let k = 0; k < 2; k++) stepFlight(s, T / 48, { x: 0, z: 0 });
  }
  line.geometry.setFromPoints(tmpPts); line.computeLineDistances(); line.visible = true;
  if (showRet) {
    let dist = type === 'grubber' ? 4 + power * 26 : kickRange(def, type, power, el);
    ret.position.set(start.x + Math.sin(yaw) * dist, 0.05, start.z + Math.cos(yaw) * dist);
    ret.visible = true;
  }
}
