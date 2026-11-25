// Player entity: locomotion physics, stamina and short-lived action states.
import * as THREE from 'three';
import { clamp, damp, dampAngle, headingOf, wrapAngle } from './util.js';
import { FORWARDS } from './config.js';

export const MOBILE_STATES = new Set(['free', 'step', 'fend', 'bump', 'stumble', 'celebrate', 'kick']);

export class Player {
  constructor(team, r, model) {
    this.team = team; this.num = r.num; this.pos = r.pos; this.name = r.name; this.attr = r.attr; this.mass = r.mass;
    this.fullName = r.fullName || r.name; this.ovr = r.ovr ?? 0; this.age = r.age; this.heightCm = r.heightCm; this.weightKg = r.weightKg; this.star = !!r.star;
    this.isForward = FORWARDS.has(r.num);
    this.model = model;
    this.p = new THREE.Vector3(); this.v = new THREE.Vector3();
    this.heading = 0;
    this.wish = { x: 0, z: 0 }; this.wantSprint = false; this.faceTarget = null; this.speedCap = 1;
    this.state = 'free'; this.stateT = 0; this.stateDur = 0;
    this.anim = { t: 0, side: 1, fall: 0, faceUp: false, kt: 0, foot: 'R', preKick: false, roll: 0, dur: 0.5 };
    this.stamina = 1;
    this.cd = { step: 0, fend: 0, bump: 0, tackle: 0, dummy: 0 };
    this.speedMul = 1;
    this.offside = false;
    this.passAnim = 0; this.passSide = 1; this.catchAnim = 0; this.catchHigh = false; this.refSignal = 0;
    this.hasBall = false; this.carrySide = 1;
    this.lateralLean = 0; this.accelLean = 0; this.readyStance = false; this.legDriveVis = 0; this.jumpY = 0;
    this.jumpT = 0; this.fendHold = 0;
    this.speedH = 0;
    this.ai = { role: 'none', react: 0, bite: 0, biteX: 0, biteZ: 0, evadeChecked: null, think: Math.random() * 0.2 };
    this.engage = null; // tackle engagement reference
    this.lunge = null;  // active tackle lunge
    this.controlled = false;
    this.stats = { tackles: 0, missed: 0, runs: 0, metres: 0, tries: 0 };
  }

  get topSpeed() {
    return (5.6 + this.attr.speed * 0.042) * (this.hasBall ? 0.96 : 1) * (0.84 + 0.16 * this.stamina) * this.speedMul;
  }
  get visualState() { return this.state; }
  get right() { return { x: -Math.cos(this.heading), z: Math.sin(this.heading) }; }
  get fwd() { return { x: Math.sin(this.heading), z: Math.cos(this.heading) }; }
  canAct() { return this.state === 'free' || this.state === 'bump' || this.state === 'step' || this.state === 'fend'; }
  isUpright() { return !['ground', 'getup', 'lunge', 'dive', 'tackling', 'tackled', 'scrum'].includes(this.state); }

  setState(s, dur = 0) {
    this.state = s; this.stateT = 0; this.stateDur = dur; this.anim.t = 0;
  }
  knockDown(dur, faceUp = false) {
    this.setState('ground', dur); this.anim.fall = 1; this.anim.faceUp = faceUp; this.lunge = null;
  }

  update(dt) {
    this.stateT += dt; this.anim.t += dt;
    for (const k in this.cd) if (this.cd[k] > 0) this.cd[k] -= dt;
    if (this.passAnim > 0) this.passAnim -= dt;
    if (this.catchAnim > 0) this.catchAnim -= dt;
    if (this.refSignal > 0) this.refSignal -= dt;
    this.speedMul = damp(this.speedMul, 1, 1.2, dt);
    if (this.ai.bite > 0) this.ai.bite -= dt;
    if (this.jumpT > 0) { this.jumpT = Math.max(0, this.jumpT - dt); this.jumpY = Math.sin((1 - this.jumpT / 0.6) * Math.PI) * 0.55; }
    else this.jumpY = 0;

    // timed state transitions
    const s = this.state;
    if (this.stateDur > 0 && this.stateT >= this.stateDur) {
      if (s === 'ground') { this.setState('getup', 0.45); this.anim.dur = 0.45; }
      else if (s === 'getup' || s === 'step' || s === 'fend' || s === 'bump' || s === 'stumble' || s === 'kick') this.setState('free');
    }
    if (s === 'ground') this.anim.fall = Math.min(1, this.anim.fall + dt * 4);

    const mobile = MOBILE_STATES.has(this.state);
    if (mobile) this.locomote(dt);
    else if (this.state === 'ground' || this.state === 'getup' || this.state === 'scrum' || this.state === 'ptb' || this.state === 'goalkick') {
      // slide to a stop
      const k = Math.exp(-6 * dt); this.v.x *= k; this.v.z *= k;
      this.p.x += this.v.x * dt; this.p.z += this.v.z * dt;
    }
    // lunge/dive/tackle motion is integrated by the contact system
    this.speedH = Math.hypot(this.v.x, this.v.z);
  }

  locomote(dt) {
    const top = this.topSpeed * this.speedCap;
    const jog = top * 0.64;
    let wx = this.wish.x, wz = this.wish.z;
    let wl = Math.hypot(wx, wz);
    if (wl > 1) { wx /= wl; wz /= wl; wl = 1; }
    let target = wl * (this.wantSprint ? top : jog);
    if (this.state === 'stumble') target *= 0.35;
    if (this.state === 'fend') target *= 0.96;
    if (this.state === 'kick') target *= 0.5;
    if (this.state === 'celebrate') target *= 0.5;
    const dx = wl > 0.01 ? (wx / wl) * target : 0, dz = wl > 0.01 ? (wz / wl) * target : 0;
    const sp = Math.hypot(this.v.x, this.v.z);
    const accel = (4.2 + this.attr.accel * 0.04) * (1 - 0.55 * Math.min(1, sp / Math.max(1, top)));
    const decel = 11;
    const lat = (7 + this.attr.agility * 0.06) * (1.25 - 0.55 * Math.min(1, sp / Math.max(1, top)));
    let ax = dx - this.v.x, az = dz - this.v.z;
    let latA = 0, alongA = 0;
    if (sp > 1) {
      const fx = this.v.x / sp, fz = this.v.z / sp;
      let along = ax * fx + az * fz;
      let px = ax - along * fx, pz = az - along * fz;
      along = clamp(along, -decel * dt, accel * dt);
      const pm = Math.hypot(px, pz), maxP = lat * dt;
      if (pm > maxP) { px *= maxP / pm; pz *= maxP / pm; }
      this.v.x += along * fx + px; this.v.z += along * fz + pz;
      // lateral component relative to body right (for leaning into turns)
      const r = this.right; latA = (px * r.x + pz * r.z) / dt; alongA = along / dt;
    } else {
      const m = Math.hypot(ax, az), maxA = accel * 1.5 * dt;
      if (m > maxA) { ax *= maxA / m; az *= maxA / m; }
      this.v.x += ax; this.v.z += az; alongA = m / dt;
    }
    this.p.x += this.v.x * dt; this.p.z += this.v.z * dt;
    // stamina
    const nsp = Math.hypot(this.v.x, this.v.z);
    if (this.wantSprint && nsp > jog * 1.02) this.stamina = Math.max(0, this.stamina - dt * 0.05 * (1.45 - this.attr.stamina / 100));
    else this.stamina = Math.min(1, this.stamina + dt * (nsp < 2 ? 0.07 : 0.04));
    // facing
    if (nsp > 0.8) this.heading = dampAngle(this.heading, headingOf(this.v.x, this.v.z), 14, dt);
    else if (this.faceTarget !== null) this.heading = dampAngle(this.heading, this.faceTarget, 7, dt);
    this.lateralLean = damp(this.lateralLean, clamp(latA / 30, -0.32, 0.32), 10, dt);
    this.accelLean = damp(this.accelLean, clamp(alongA / 8, -0.5, 1), 6, dt);
  }

  // --- ball-carrier actions -------------------------------------------------
  doStep(side) {
    if (this.cd.step > 0 || !(this.state === 'free' || this.state === 'bump')) return false;
    this.setState('step', 0.38); this.anim.side = side;
    const r = this.right, imp = 4.3 + this.attr.agility * 0.035;
    const f = this.fwd, along = this.v.x * f.x + this.v.z * f.z;
    this.v.x = f.x * along * 0.88 + r.x * side * imp + (this.v.x - f.x * along) * 0.3;
    this.v.z = f.z * along * 0.88 + r.z * side * imp + (this.v.z - f.z * along) * 0.3;
    this.cd.step = 0.85; this.stamina = Math.max(0, this.stamina - 0.035);
    return true;
  }
  doFend(threatSide) {
    if (this.cd.fend > 0 || !(this.state === 'free' || this.state === 'step')) return false;
    this.setState('fend', 0.5); this.fendHold = 0;
    // carry the ball away from the threat and fend with the near arm
    if (threatSide) this.carrySide = -threatSide;
    this.cd.fend = 0.95; this.stamina = Math.max(0, this.stamina - 0.03);
    return true;
  }
  doBump() {
    if (this.cd.bump > 0 || !(this.state === 'free' || this.state === 'step')) return false;
    this.setState('bump', 0.5); this.v.x *= 1.05; this.v.z *= 1.05;
    this.cd.bump = 1.0; this.stamina = Math.max(0, this.stamina - 0.04);
    return true;
  }
  doJump() {
    if (this.jumpT > 0 || !(this.state === 'free' || this.state === 'stumble')) return false;
    this.jumpT = 0.6; this.catchAnim = 0.6; this.catchHigh = true; this.stamina = Math.max(0, this.stamina - 0.02);
    return true;
  }
  // holding the fend keeps the arm out (and makes it stronger) for up to ~0.9 s
  holdFend() { if (this.state === 'fend' && this.stateT < 0.9) { this.stateDur = Math.max(this.stateDur, this.stateT + 0.08); this.fendHold = this.stateT; } }
  stepWindow() { return this.state === 'step' && this.stateT > 0.02 && this.stateT < 0.34; }
  fendWindow() { return this.state === 'fend' && (this.stateT < 0.42 || this.fendHold >= this.stateT - 0.05); }
  bumpWindow() { return this.state === 'bump' && this.stateT < 0.45; }

  faceHeading(h) { this.heading = h; }
  lookAt(x, z) { this.faceTarget = headingOf(x - this.p.x, z - this.p.z); }
}
