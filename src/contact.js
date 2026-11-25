// Tackling: lunges, evasion contests (step / fend / shoulder), wrap-up engagements, gang tackles, collisions.
import { FIELD } from './config.js';
import { clamp, rand, randRange, chance, gauss, dist2D, headingOf, damp, dampAngle, wrapAngle } from './util.js';
import * as A from './actions.js';

const H = FIELD.half, W = FIELD.halfW;
// low = round the legs (safe, but arms stay free to offload); grip = arm-grip "ball and all" (stops offloads,
// can jar the ball loose, risks high tackles); dive = desperation; hit = AI shoulder-led hit; auto = ran into him.
const REACH = { normal: 2.0, low: 1.9, grip: 1.8, hit: 1.8, dive: 3.4, auto: 1.0 };
const LUNGE_T = { normal: 0.22, low: 0.22, grip: 0.24, hit: 0.26, dive: 0.42, auto: 0.12 };
// distance between carrier and tackler centres while locked in a tackle (bodies touch, don't overlap)
const ENGAGE_R = 0.64;
const CONTACT_R = { normal: 0.85, low: 0.85, grip: 0.8, hit: 0.8, dive: 1.0, auto: 0.95 };

export function attemptTackle(m, d, kind, o = {}) {
  const b = m.ball, c = b.carrier;
  if (m.phase !== 'play' || m.dhHold || !c || b.state !== 'held' || c.team === d.team) return false;
  if (d.state !== 'free' || d.cd.tackle > 0 || d.lunge) return false;
  if (c.state === 'ground' || c.state === 'getup') return false;
  const dist = dist2D(d.p.x, d.p.z, c.p.x, c.p.z);
  if (d.offside) {
    if (d.controlled && dist < REACH[kind] + 0.5) { m.awardPenalty(c.team, c.p.x, c.p.z, 'Offside'); return false; }
    return false;
  }
  if (dist > REACH[kind]) {
    if (o.human && dist < 5) startLunge(m, d, kind, c, true);
    return false;
  }
  startLunge(m, d, kind, c, false);
  return true;
}

function startLunge(m, d, kind, c, whiff) {
  const T = LUNGE_T[kind];
  const tx = c.p.x + c.v.x * T * 0.85, tz = c.p.z + c.v.z * T * 0.85;
  const dx = tx - d.p.x, dz = tz - d.p.z, dd = Math.hypot(dx, dz) || 1;
  const sp = clamp(Math.max(dd / T, d.speedH + 1.5, kind === 'dive' ? 7.5 : 5.5), 3.5, kind === 'dive' ? 10.8 : 9.4);
  d.lunge = { kind, t: 0, dur: whiff ? T * 0.8 : T, target: c, whiff };
  d.setState(kind === 'dive' ? 'dive' : 'lunge');
  d.v.x = (dx / dd) * sp; d.v.z = (dz / dd) * sp;
  d.heading = headingOf(dx, dz);
  d.cd.tackle = 0.7;
}

function updateLunge(m, d, dt) {
  const L = d.lunge; L.t += dt;
  const c = m.ball.carrier, tgt = L.target;
  const live = c === tgt && !L.whiff && m.ball.state === 'held' && tgt.state !== 'ground';
  if (live) {
    const homing = L.kind === 'dive' ? (L.t < 0.1 ? 6 : 0) : 8;
    if (homing > 0) {
      const dx = c.p.x - d.p.x, dz = c.p.z - d.p.z, dd = Math.hypot(dx, dz) || 1;
      const sp = Math.hypot(d.v.x, d.v.z), k = 1 - Math.exp(-homing * dt);
      d.v.x += ((dx / dd) * sp - d.v.x) * k; d.v.z += ((dz / dd) * sp - d.v.z) * k;
    }
  }
  d.p.x += d.v.x * dt; d.p.z += d.v.z * dt;
  d.speedH = Math.hypot(d.v.x, d.v.z);
  if (live && dist2D(d.p.x, d.p.z, c.p.x, c.p.z) < CONTACT_R[L.kind]) {
    d.lunge = null; resolveContact(m, d, c, L.kind); return;
  }
  if (L.t >= L.dur) {
    d.lunge = null;
    const near = tgt && dist2D(d.p.x, d.p.z, tgt.p.x, tgt.p.z) < 3.5 && !L.whiff;
    if (L.kind === 'dive') d.knockDown(1.0); else d.setState('stumble', L.kind === 'hit' ? 0.6 : 0.42);
    if (near) { d.stats.missed++; d.team.stats.missed++; m.emit('missed', { team: d.team, player: d }); }
  }
}

function beaten(m, d, c, how, downFor = 0) {
  if (downFor > 0) d.knockDown(downFor, how !== 'step');
  else d.setState('stumble', 0.55);
  d.stats.missed++; d.team.stats.missed++; c.team.stats.busts++;
  m.emit('beaten', { team: c.team, player: c, how, defender: d });
}

export function resolveContact(m, d, c, kind) {
  if (c.engage) return joinEngagement(m, c.engage, d);
  const cs = c.speedH, ds = d.speedH;
  const cfx = cs > 1 ? c.v.x / cs : c.fwd.x, cfz = cs > 1 ? c.v.z / cs : c.fwd.z;
  let tx = d.p.x - c.p.x, tz = d.p.z - c.p.z; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
  const front = cfx * tx + cfz * tz;            // >0: defender in front of the carrier
  const r = c.right, sideR = r.x * tx + r.z * tz; // >0: defender on carrier's right
  const closing = Math.max(0, -((d.v.x - c.v.x) * tx + (d.v.z - c.v.z) * tz));
  const mod = d.team.human ? (d.controlled ? m.diff.humanTackle : 0.02) : m.diff.cpuTackle;

  // --- sidestep: defender committed, carrier is already gone
  if (c.stepWindow()) {
    let pE = 0.56 + (c.attr.agility - d.attr.tackle) / 140 + (front > 0.3 ? 0.12 : -0.25) + (kind === 'dive' ? 0.1 : 0) + (kind === 'hit' ? 0.08 : 0) - mod;
    if (Math.sign(sideR) === c.anim.side && Math.abs(sideR) > 0.3) pE -= 0.35; // stepped into him
    if (chance(clamp(pE, 0.05, 0.95))) { beaten(m, d, c, 'step', kind === 'dive' ? 1.0 : 0); return; }
  }
  // --- fend (hand-off)
  if (c.fendWindow() && front > -0.4) {
    const armSide = -c.carrySide; // fend arm is the free arm: +1 right
    let pF = 0.38 + (c.attr.strength - d.attr.strength) / 110 + (c.attr.strength - d.attr.tackle) / 220 + (kind === 'dive' ? 0.18 : 0) - (kind === 'hit' ? 0.12 : 0) - mod;
    pF += (armSide > 0 ? sideR > -0.2 : sideR < 0.2) ? 0.1 : -0.15;
    if (c.fendHold > 0.2) pF += 0.1;                       // a held fend locks the arm out
    pF += (c.stamina - d.stamina) * 0.12;
    if (chance(clamp(pF, 0.05, 0.92))) {
      d.v.x = tx * 3.5; d.v.z = tz * 3.5; c.speedMul *= 0.9;
      beaten(m, d, c, 'fend', 0.9); m.audio.thud(0.5); return;
    }
  }
  // --- shoulder charge / bump
  let forceDom = null;
  if (c.bumpWindow() && front > 0) {
    const cm = c.mass * Math.max(2, cs) * 1.3, dm = d.mass * Math.max(2, ds) * (kind === 'hit' ? 1.3 : 1.0);
    const pB = 0.26 + ((cm - dm) / (cm + dm)) * 1.1 + (c.attr.strength - d.attr.tackle) / 240 - mod;
    if (chance(clamp(pB, 0.05, 0.9))) {
      d.v.x = tx * 4; d.v.z = tz * 4; c.speedMul *= 0.72; c.v.x *= 0.8; c.v.z *= 0.8;
      beaten(m, d, c, 'bump', 1.1); m.audio.thud(1.0); m.camRig.shake(0.25); return;
    }
    forceDom = 0.55; // lost the collision: smashed
  }
  // --- standard tackle
  const base = { normal: 0.9, low: 0.93, grip: 0.85, hit: 0.72, dive: 0.78, auto: 0.8 }[kind];
  let pW = base + (d.attr.tackle - 72) / 180 - (c.attr.agility - 70) / 450 - Math.max(0, cs - 6) * 0.018 + (front < -0.3 ? -0.06 : 0) + mod;
  pW -= Math.max(0, c.attr.strength - d.attr.strength) / 500;
  pW -= (1 - d.stamina) * 0.16; pW += (1 - c.stamina) * 0.06;   // tired defences drop off tackles
  if (c.isForward && d.mass < 85 && c.mass > 100) pW -= 0.06;
  if (forceDom === null && !chance(clamp(pW, 0.1, 0.97))) {
    const down = c.attr.strength > d.attr.strength + randRange(-15, 25) ? 0.7 : 0;
    c.speedMul *= 0.82;
    beaten(m, d, c, 'broken', down);
    m.audio.thud(0.6);
    return;
  }
  let dom = forceDom ?? (d.attr.strength * 0.45 + d.attr.tackle * 0.45 + (kind === 'hit' ? 28 : kind === 'grip' ? 14 : kind === 'low' ? -8 : 0) + closing * 3.5 - c.attr.strength * 0.75 - cs * 2.2) / 50;
  dom = clamp(dom + gauss() * 0.15, -1, 1);
  const e = startEngagement(m, c, d, dom, kind);
  d.stamina = Math.max(0, d.stamina - 0.05); c.stamina = Math.max(0, c.stamina - 0.04);
  if (kind === 'grip') { e.noOffload = true; e.gripBy = d; }
  if ((kind === 'hit' || kind === 'grip') && dom > 0.25) {
    m.emit('bighit', { team: d.team, player: d }); m.camRig.shake(0.35);
    if (chance((kind === 'grip' ? 0.07 : 0.1) + dom * 0.14 - (c.attr.hand - 70) / 400)) { endEngagement(m, e, false); A.spillBall(m, c, 'hit'); return; }
  }
  if ((kind === 'grip' || kind === 'hit') && chance(d.controlled ? 0.06 : 0.015)) e.penalty = 'High tackle';
}

export function startEngagement(m, c, d, dom, kind) {
  const e = { carrier: c, tacklers: [d], progress: 0, dom, t: 0, legDrive: 0, kind, inGoalChecked: false, heldUp: false, offloadTried: false, breakTried: false };
  m.engagements.push(e);
  c.setState('tackled'); c.engage = e; c.anim.fall = 0; c.lunge = null;
  d.setState('tackling'); d.engage = e; d.anim.fall = 0;
  const ox = d.p.x - c.p.x, oz = d.p.z - c.p.z, ol = Math.hypot(ox, oz) || 1;
  d.engageOff = { x: (ox / ol) * ENGAGE_R, z: (oz / ol) * ENGAGE_R };
  // How the carrier goes down: a dominant hit from the front drives him onto his back; otherwise he is
  // twisted and falls forward / sideways. He turns to that heading as the tackle goes in.
  const toT = headingOf(ox, oz), rel = wrapAngle(toT - c.heading);
  if (Math.abs(rel) < Math.PI / 2) { // tackler in front
    e.faceUp = dom > 0.15;
    e.fallHeading = e.faceUp ? toT : toT + (rel >= 0 ? -1.3 : 1.3);
  } else { e.faceUp = false; e.fallHeading = toT + Math.PI; }
  const keep = dom > 0.4 ? 0.2 : 0.55; c.v.x *= keep; c.v.z *= keep;
  m.audio.thud(0.6 + Math.max(0, dom) * 0.7);
  if (dom > 0.5) m.camRig.shake(0.2);
  m.emit('contact', { team: d.team, player: d, dom });
  // AI carriers sometimes fight through straight away
  if (!c.controlled && chance(0.25 * (m.diff.cpuEvade || 1))) tryBreak(m, c);
  return e;
}

function joinEngagement(m, e, d) {
  if (e.tacklers.includes(d) || e.tacklers.length >= 3) return;
  e.tacklers.push(d); d.setState('tackling'); d.engage = e; d.lunge = null; d.anim.fall = 0;
  // come in from the side he's actually on, but not on top of a team-mate already in the tackle
  let ang = Math.atan2(d.p.z - e.carrier.p.z, d.p.x - e.carrier.p.x);
  for (let k = 0; k < 4; k++) {
    const clash = e.tacklers.some((t) => t !== d && t.engageOff && Math.abs(wrapAngle(Math.atan2(t.engageOff.z, t.engageOff.x) - ang)) < 1.2);
    if (!clash) break; ang += 1.3;
  }
  d.engageOff = { x: Math.cos(ang) * ENGAGE_R, z: Math.sin(ang) * ENGAGE_R };
  e.dom = clamp(e.dom + 0.14, -1, 1); e.progress += 0.08;
  m.audio.thud(0.4);
}

// One-on-one strip. Legal only when the tackler is alone; a second man in the tackle makes it a penalty.
export function tryStrip(m, d) {
  const e = d.engage;
  if (!e || e.stripTried || m.ball.carrier !== e.carrier || e.progress > 0.9) return false;
  e.stripTried = true;
  const c = e.carrier;
  if (e.tacklers.length > 1) { e.penalty = 'Two-man strip'; return false; }
  const p = 0.24 + (d.attr.strength - c.attr.hand) / 260 + Math.max(0, e.dom) * 0.15;
  if (chance(clamp(p, 0.05, 0.55))) {
    endEngagement(m, e, false);
    c.knockDown(0.7);
    m.ball.give(d); d.setState('free');
    m.poss = d.team; m.tackleCount = 0; m.gainLineX = d.p.x; m.lineBreakDone = false;
    m.message('STRIPPED!', `${d.name} rips it free`, 1.6, 'good'); m.audio.roar(0.9);
    m.emit('strip', { team: d.team, player: d });
    if (d.team.human) m.setControlled(d);
    return true;
  }
  e.progress += 0.05;
  if (chance(0.2)) e.penalty = 'Strip (ball not held by one)';
  return false;
}

export function tryBreak(m, c) {
  const e = c.engage;
  if (!e || e.breakTried || e.progress > 0.5) return false;
  e.breakTried = true;
  if (e.tacklers.length > 1) { e.progress += 0.05; return false; }
  const d = e.tacklers[0];
  const p = 0.16 + (c.attr.strength - d.attr.strength) / 140 + (c.attr.agility - 70) / 300 - Math.max(0, e.dom) * 0.4;
  if (chance(clamp(p, 0.03, 0.6))) {
    endEngagement(m, e, false);
    c.setState('free'); c.speedMul = 0.6;
    d.knockDown(0.8);
    d.stats.missed++; d.team.stats.missed++; c.team.stats.busts++;
    m.emit('beaten', { team: c.team, player: c, how: 'broken', defender: d });
    return true;
  }
  e.progress += 0.1;
  return false;
}

function endEngagement(m, e, knockAll) {
  const i = m.engagements.indexOf(e);
  if (i >= 0) m.engagements.splice(i, 1);
  e.carrier.engage = null;
  e.tacklers.forEach((t, k) => {
    t.engage = null;
    if (knockAll) t.knockDown(0.45 + rand() * 0.6 + k * 0.3, false, { fall: Math.max(0.35, t.anim.fall || 0), pile: 0.16 });
    else if (t.state === 'tackling') t.setState('stumble', 0.4);
  });
}

function updateEngagement(m, e, dt) {
  const c = e.carrier, T = c.team, n = e.tacklers.length;
  const hasBall = m.ball.carrier === c && m.ball.state === 'held';
  e.t += dt;
  e.legDrive *= Math.exp(-2.5 * dt);
  let rate = 0.85 + 0.6 * (n - 1) + e.dom * 0.35 - e.legDrive * 0.25;
  if (!c.controlled) rate -= (c.attr.strength - 75) / 300;
  e.progress += Math.max(0.35, rate) * dt;
  const avgStr = e.tacklers.reduce((s, t) => s + t.attr.strength, 0) / n;
  let drive = 2.4 + (c.attr.strength - avgStr) / 28 - (n - 1) * 1.3 + e.legDrive * 1.6 - e.dom * 2.5;
  if (!c.controlled && hasBall) drive += randRange(0, 0.6);
  drive = clamp(drive, -2.2, 3.6) * (1 - Math.min(1, e.progress) * 0.7);
  c.v.x = damp(c.v.x, T.dir * drive, 4, dt); c.v.z = damp(c.v.z, 0, 3, dt);
  c.p.x += c.v.x * dt; c.p.z += c.v.z * dt;
  c.legDriveVis = clamp(0.3 + e.legDrive * 0.6 + Math.max(0, drive) / 4, 0, 1);
  c.speedH = Math.hypot(c.v.x, c.v.z);
  c.anim.fall = Math.min(1, e.progress); c.anim.faceUp = e.faceUp;
  c.heading = dampAngle(c.heading, e.fallHeading, 5, dt);
  // tacklers stay locked on; once he starts to go down they go with him and land across his legs
  const down = clamp((e.progress - 0.3) / 0.7, 0, 1), reach = ENGAGE_R + down * 0.3;
  for (const d of e.tacklers) {
    const ol = Math.hypot(d.engageOff.x, d.engageOff.z) || 1;
    const tx = c.p.x + (d.engageOff.x / ol) * reach, tz = c.p.z + (d.engageOff.z / ol) * reach;
    d.p.x = damp(d.p.x, tx, 14, dt); d.p.z = damp(d.p.z, tz, 14, dt);
    d.v.copy(c.v); d.heading = dampAngle(d.heading, headingOf(c.p.x - d.p.x, c.p.z - d.p.z), 12, dt);
    d.anim.fall = down;
  }
  // holding the arm-grip on = holding down: slows the play-the-ball, but the referee may penalise it
  if (e.gripBy && e.gripBy.controlled && m.input.held('faceB')) e.holdDown = (e.holdDown || 0) + dt;
  // AI defenders pile in
  if (hasBall && n < 3 && e.progress < 0.8) {
    for (const d of T.opp.players) {
      if (d.controlled || d.state !== 'free' || d.offside || d.engage) continue;
      if (dist2D(d.p.x, d.p.z, c.p.x, c.p.z) < 2.0 && chance(dt * 4)) { joinEngagement(m, e, d); break; }
    }
  }
  if (!hasBall) { if (e.progress >= 1) endEngagement(m, e, true), c.knockDown(1.0, !!e.faceUp, { fall: 1 }); return; }
  const ax = c.p.x * T.dir;
  if (Math.abs(c.p.z) > W) { endEngagement(m, e, true); return m.scrumRestart(T.opp, c.p.x, c.p.z, 'INTO TOUCH', `Bundled out — scrum ${T.opp.short} feed`); }
  if (ax > H && !e.inGoalChecked) {
    e.inGoalChecked = true;
    e.heldUp = chance(0.1 + 0.13 * n + (e.dom > 0.3 ? 0.15 : 0));
    if (!e.heldUp) { endEngagement(m, e, true); c.setState('free'); return m.scoreTry(c, c.p.z); }
  }
  if (e.progress >= 1) {
    if (ax > H && e.heldUp) { endEngagement(m, e, true); c.knockDown(1); return m.whistleStop('HELD UP!', `Goal-line drop-out ${T.opp.short}`, { type: 'dropout', team: T.opp }, { style: 'warn' }); }
    if (ax > H - 1.2 && chance(0.55 - 0.2 * (n - 1))) {
      // reach out and plant it on the line
      endEngagement(m, e, true); c.setState('free'); c.p.x = T.dir * (H + 0.3);
      m.message('REACHES OUT!', '', 1.0, 'good');
      return m.scoreTry(c, c.p.z);
    }
    completeTackle(m, e);
  }
}

function completeTackle(m, e) {
  const c = e.carrier;
  if ((e.holdDown || 0) > 0.7) {
    e.dom = Math.min(1, e.dom + 0.6);
    if (!e.penalty && chance(0.32)) e.penalty = 'Holding down';
  }
  endEngagement(m, e, true);
  c.knockDown(99, !!e.faceUp, { fall: 1 });
  const d = e.tacklers[0];
  d.stats.tackles++; d.team.stats.tackles++;
  for (let i = 1; i < e.tacklers.length; i++) e.tacklers[i].stats.tackles++;
  m.emit('tackle', { team: d.team, player: d, carrier: c, n: e.tacklers.length, dom: e.dom });
  m.onTackleComplete(e);
}

export function updateContact(m, dt) {
  for (const p of m.players) if (p.lunge) updateLunge(m, p, dt);
  for (const e of [...m.engagements]) if (m.engagements.includes(e)) updateEngagement(m, e, dt);
}

const SKIP = new Set(['ground', 'scrum', 'tackled', 'tackling', 'ptb', 'goalkick']);
// Players locked in a tackle or lying on the turf don't get shoved about, but nobody runs through them:
// upright players are pushed around them. A body on the ground is a capsule along its length.
const BODY_R = 0.36;
function pushOffStatic(a, s) {
  let cx = s.p.x, cz = s.p.z, r = BODY_R;
  if (s.state === 'ground' || s.state === 'getup') {
    const fx = Math.sin(s.heading), fz = Math.cos(s.heading);
    const t = clamp((a.p.x - s.p.x) * fx + (a.p.z - s.p.z) * fz, -0.75, 0.85);
    cx += fx * t; cz += fz * t; r = 0.3;
  }
  const dx = a.p.x - cx, dz = a.p.z - cz, minD = r + BODY_R;
  if (Math.abs(dx) > minD || Math.abs(dz) > minD) return;
  const d = Math.hypot(dx, dz);
  if (d >= minD) return;
  const nx = d > 1e-4 ? dx / d : 1, nz = d > 1e-4 ? dz / d : 0;
  a.p.x += nx * (minD - d); a.p.z += nz * (minD - d);
  const vn = a.v.x * nx + a.v.z * nz;
  if (vn < 0) { a.v.x -= nx * vn; a.v.z -= nz * vn; }
}
export function resolveCollisions(m) {
  const ps = m.players, n = ps.length;
  const carrier = m.ball.state === 'held' ? m.ball.carrier : null;
  const live = m.phase === 'play' || m.phase === 'ptb';
  if (live) {
    for (const s of ps) {
      if (!SKIP.has(s.state) || s.state === 'goalkick') continue;
      for (const a of ps) {
        if (a === s || SKIP.has(a.state) || a.lunge) continue;
        if (Math.abs(a.p.x - s.p.x) > 2 || Math.abs(a.p.z - s.p.z) > 2) continue;
        pushOffStatic(a, s);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    const a = ps[i]; if (SKIP.has(a.state)) continue;
    for (let j = i + 1; j < n; j++) {
      const b = ps[j]; if (SKIP.has(b.state)) continue;
      const dx = b.p.x - a.p.x, dz = b.p.z - a.p.z;
      if (Math.abs(dx) > 0.8 || Math.abs(dz) > 0.8) continue;
      const d = Math.hypot(dx, dz), minD = 0.72;
      if (d >= minD || d < 1e-4) continue;
      const nx = dx / d, nz = dz / d, push = minD - d;
      const wa = b.mass / (a.mass + b.mass), wb = 1 - wa;
      a.p.x -= nx * push * wa; a.p.z -= nz * push * wa; b.p.x += nx * push * wb; b.p.z += nz * push * wb;
      const rel = (b.v.x - a.v.x) * nx + (b.v.z - a.v.z) * nz;
      if (rel < 0) { a.v.x += nx * rel * wa * 0.8; a.v.z += nz * rel * wa * 0.8; b.v.x -= nx * rel * wb * 0.8; b.v.z -= nz * rel * wb * 0.8; }
      if (carrier && m.phase === 'play' && !m.dhHold && (a === carrier || b === carrier)) {
        const def = a === carrier ? b : a;
        if (def.team !== carrier.team && def.state === 'free' && !def.offside && def.cd.tackle <= 0 && !def.lunge && carrier.state !== 'tackled') {
          def.cd.tackle = 0.7; resolveContact(m, def, carrier, 'auto');
        }
      }
    }
  }
}
