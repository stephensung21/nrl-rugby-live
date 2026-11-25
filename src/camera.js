// Camera director: behind-the-play / broadcast views plus set-piece and celebration shots.
import * as THREE from 'three';
import { FIELD } from './config.js';
import { clamp, damp, rand } from './util.js';

export class CameraRig {
  constructor(camera) {
    this.cam = camera; this.mode = 'behind';
    this.pos = new THREE.Vector3(-30, 14, 0); this.tgt = new THREE.Vector3();
    this.dPos = new THREE.Vector3(); this.dTgt = new THREE.Vector3();
    this.shakeT = 0; this.shakeA = 0; this.orbit = 0; this.lastPhase = '';
    this.fwd = { x: 1, z: 0 };
  }
  shake(a) { this.shakeA = Math.max(this.shakeA, a); this.shakeT = 0.3; }
  toggle() { this.mode = this.mode === 'behind' ? 'broadcast' : this.mode === 'broadcast' ? 'high' : 'behind'; }
  screenRight() { return { x: -this.fwd.z, z: this.fwd.x }; }
  inputToWorld(ix, iy) {
    const f = this.fwd, r = this.screenRight();
    return { x: r.x * ix + f.x * iy, z: r.z * ix + f.z * iy };
  }
  update(dt, m) {
    if (this.override) { // debug / test hook: fixed camera
      const o = this.override; this.cam.position.set(o.pos[0], o.pos[1], o.pos[2]); this.cam.lookAt(o.tgt[0], o.tgt[1], o.tgt[2]); return;
    }
    const b = m.ball, ph = m.phase, pd = m.pd;
    const du = m.humanTeam ? m.humanTeam.dir : (m.attackTeam()?.dir ?? 1);
    let snap = false;
    if (ph !== this.lastPhase) { if (['kickoff', 'goalKick', 'scrum', 'touchKick'].includes(ph) || (ph === 'ptb' && pd.extra === undefined)) snap = true; this.lastPhase = ph; }
    if (ph === 'ptb' || ph === 'play') snap = false;
    let lp = 4, lt = 6;
    if ((ph === 'goalKick' && pd.stage !== 'result') || ((ph === 'kickoff' || ph === 'touchKick') && pd.stage === 'aim')) {
      const yaw = pd.yaw, fx = Math.sin(yaw), fz = Math.cos(yaw);
      const bp = b.p;
      if (ph === 'goalKick' && pd.stage === 'flight') {
        const hv = Math.hypot(b.v.x, b.v.z) || 1;
        this.dPos.set(bp.x - (b.v.x / hv) * 7, Math.max(2.5, bp.y * 0.7 + 1.5), bp.z - (b.v.z / hv) * 7);
        this.dTgt.set(pd.team.dir * FIELD.half, 4, 0); lp = 2.2; lt = 3;
      } else {
        const back = ph === 'goalKick' ? 7 : 9.5, up = ph === 'goalKick' ? 2.7 : 4.2, side = ph === 'goalKick' ? 1.5 : 2.2;
        // over the kicker's left shoulder so the posts stay in view
        const rx = -Math.cos(yaw), rz = Math.sin(yaw);
        this.dPos.set(bp.x - fx * back - rx * side, up, bp.z - fz * back - rz * side);
        this.dTgt.set(bp.x + fx * 30, ph === 'goalKick' ? 3.2 : 1, bp.z + fz * 30); lp = 5; lt = 6;
      }
    } else if (ph === 'tryCelebration' && pd.scorer) {
      this.orbit += dt * 0.45;
      const s = pd.scorer.p;
      this.dPos.set(s.x + Math.cos(this.orbit) * 9, 3.8, s.z + Math.sin(this.orbit) * 9);
      this.dTgt.set(s.x, 1.2, s.z); lp = 2; lt = 3;
    } else {
      // focus: ball, blended with the controlled player
      const f = new THREE.Vector3(b.p.x, 0, b.p.z);
      const c = m.controlled;
      if (ph === 'ptb') f.set(pd.mark.x, 0, pd.mark.z);
      if (c && b.state !== 'held' && m.kickTarget && !m.kickTarget.pass) { f.x = (b.p.x + m.kickTarget.x + c.p.x) / 3; f.z = (b.p.z + m.kickTarget.z + c.p.z) / 3; }
      else if (c && dist(c.p, f) < 18) { f.x += (c.p.x - f.x) * 0.3; f.z += (c.p.z - f.z) * 0.3; }
      const air = b.state === 'air' && b.kind === 'kick' ? clamp(b.p.y / 20, 0, 1) : 0;
      if (this.mode === 'broadcast') {
        this.dPos.set(f.x * 0.94, 17 + air * 6, du * 42 + f.z * 0.25);
        this.dTgt.set(f.x, 0, f.z * 0.6);
      } else if (this.mode === 'high') {
        this.dPos.set(f.x - du * 20, 24 + air * 6, f.z * 0.7);
        this.dTgt.set(f.x + du * 8, 0, f.z * 0.9);
      } else {
        this.dPos.set(f.x - du * 15.5, 10 + air * 7, f.z * 0.82);
        this.dTgt.set(f.x + du * 6.5, 0.5 + air * 3, f.z * 0.95);
      }
      lp = 3.6; lt = 5;
    }
    if (snap || this.pos.distanceTo(this.dPos) > 70) { this.pos.copy(this.dPos); this.tgt.copy(this.dTgt); }
    else {
      const kp = 1 - Math.exp(-lp * dt), kt = 1 - Math.exp(-lt * dt);
      this.pos.lerp(this.dPos, kp); this.tgt.lerp(this.dTgt, kt);
    }
    this.cam.position.copy(this.pos);
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const a = this.shakeA * (this.shakeT / 0.3);
      this.cam.position.x += (rand() - 0.5) * a; this.cam.position.y += (rand() - 0.5) * a;
      if (this.shakeT <= 0) this.shakeA = 0;
    }
    this.cam.lookAt(this.tgt);
    const fx = this.tgt.x - this.pos.x, fz = this.tgt.z - this.pos.z, fl = Math.hypot(fx, fz) || 1;
    this.fwd = { x: fx / fl, z: fz / fl };
  }
}
function dist(a, b) { return Math.hypot(a.x - b.x, a.z - b.z); }
