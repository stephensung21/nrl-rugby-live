import * as THREE from 'three';
import { BALL } from './config.js';
import { stepFlight, collidePosts } from './physics.js';
import { rand, randRange, gauss } from './util.js';

function ballTexture() {
  const c = document.createElement('canvas'); c.width = 128; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#f6eec8'; g.fillRect(0, 0, 128, 64);
  // end bands (v runs pole to pole = along the long axis)
  g.fillStyle = '#d4202c'; g.fillRect(0, 6, 128, 6); g.fillRect(0, 52, 128, 6);
  g.fillStyle = '#1d3d8f'; g.fillRect(0, 13, 128, 3); g.fillRect(0, 48, 128, 3);
  g.strokeStyle = 'rgba(60,40,20,0.55)'; g.lineWidth = 1.5;
  for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(i * 32 + 1, 0); g.lineTo(i * 32 + 1, 64); g.stroke(); }
  g.fillStyle = '#222'; g.font = 'bold 10px Arial'; g.fillText('FOOTY 13', 40, 36);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class Ball {
  constructor(scene) {
    const geo = new THREE.SphereGeometry(1, 14, 10);
    geo.scale(0.125, 0.19, 0.125); geo.rotateX(Math.PI / 2); // long axis along local z
    this.mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: ballTexture() }));
    scene.add(this.mesh);
    const sh = new THREE.Mesh(new THREE.CircleGeometry(0.2, 12), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false }));
    sh.rotation.x = -Math.PI / 2; scene.add(sh); this.shadow = sh;
    this.p = new THREE.Vector3(0, BALL.radius, 0);
    this.v = new THREE.Vector3();
    this.state = 'dead';         // held | air | ground | dead
    this.carrier = null;
    this.kind = 'loose';         // pass | kick | loose
    this.info = null;            // passInfo / kickInfo
    this.curve = 0; this.drag = 1;
    this.spin = 'endover'; this.spinAngle = 0; this.spinRate = 0;
    this.grubber = false;
    this.ignore = new Map();     // player -> time until which they can't touch the ball
    this.airTime = 0; this.bounces = 0;
    this.lastTouch = null;
    this.landedThisTick = false; this.hitPostThisTick = false;
    this.tmpQ = new THREE.Quaternion(); this.tmpQ2 = new THREE.Quaternion();
    this.axisZ = new THREE.Vector3(0, 0, 1); this.axisX = new THREE.Vector3(1, 0, 0);
    this.lookDir = new THREE.Vector3(1, 0, 0);
  }

  give(player) {
    this.state = 'held'; this.carrier = player; this.kind = 'loose'; this.info = null;
    this.v.set(0, 0, 0); this.curve = 0; this.grubber = false; this.lastTouch = player; this.bounces = 0;
  }
  release(kind, info) {
    this.carrier = null; this.state = 'air'; this.kind = kind; this.info = info; this.airTime = 0; this.bounces = 0;
  }
  setIgnore(player, until) { this.ignore.set(player, until); }
  canTouch(player, now) { const t = this.ignore.get(player); return t === undefined || now >= t; }

  step(dt, wind) {
    this.landedThisTick = false; this.hitPostThisTick = false;
    if (this.state === 'held' || this.state === 'dead') return;
    this.airTime += dt;
    if (this.state === 'air') {
      stepFlight(this, dt, wind);
      if (collidePosts(this.p, this.v)) this.hitPostThisTick = true;
      if (this.p.y <= BALL.radius) {
        this.p.y = BALL.radius;
        this.landedThisTick = true;
        const hs = Math.hypot(this.v.x, this.v.z);
        if (this.v.y < -1.4 || (this.grubber && hs > 2.5)) this._bounce(hs);
        else { this.v.y = 0; this.state = 'ground'; }
      }
    } else if (this.state === 'ground') {
      const hs = Math.hypot(this.v.x, this.v.z);
      if (hs < 0.12) { this.v.set(0, 0, 0); }
      else {
        const dec = Math.min(hs, 3.4 * dt);
        this.v.x -= (this.v.x / hs) * dec; this.v.z -= (this.v.z / hs) * dec;
        // oval wobble
        const a = gauss() * 0.04;
        const c = Math.cos(a), s = Math.sin(a), vx = this.v.x, vz = this.v.z;
        this.v.x = vx * c - vz * s; this.v.z = vx * s + vz * c;
        this.p.x += this.v.x * dt; this.p.z += this.v.z * dt;
      }
      this.p.y = BALL.radius;
      if (collidePosts(this.p, this.v)) this.hitPostThisTick = true;
    }
    // visual spin
    const sp = this.v.length();
    if (this.state === 'air') this.spinAngle += dt * (this.spin === 'spiral' ? 14 : this.spin === 'grubber' ? sp * 2.2 : 9);
    else this.spinAngle += dt * sp * 3;
  }

  _bounce(hs) {
    this.bounces++;
    // A rugby ball bounces like a drunk kangaroo: random restitution and deflection.
    let e = randRange(0.32, 0.62), keep = randRange(0.68, 0.86), dev = gauss() * 0.32;
    if (this.grubber) {
      e = randRange(0.2, 0.95); keep = randRange(0.78, 0.93); dev = gauss() * 0.22;
      const pop = randRange(0.4, 3.6) * Math.min(1, hs / 12);
      this.v.y = Math.max(-this.v.y * e, pop);
      if (hs < 3) this.grubber = false;
    } else {
      if (rand() < 0.18) { e *= 1.5; keep *= 0.6; }      // sits up
      else if (rand() < 0.2) { e *= 0.5; keep = Math.min(0.95, keep * 1.15); } // skids through
      this.v.y = -this.v.y * e;
    }
    const c = Math.cos(dev), s = Math.sin(dev), vx = this.v.x * keep, vz = this.v.z * keep;
    this.v.x = vx * c - vz * s; this.v.z = vx * s + vz * c;
    this.curve *= 0.3;
    if (this.v.y < 1.0 && !this.grubber) { this.v.y = 0; this.state = 'ground'; }
  }

  syncMesh(anchorWorld, carrierHeading) {
    const m = this.mesh;
    if (this.state === 'held' && anchorWorld) {
      this.p.copy(anchorWorld);
      m.position.copy(anchorWorld);
      m.rotation.set(0.35, carrierHeading, 0, 'YXZ');
    } else {
      m.position.copy(this.p);
      const hs = Math.hypot(this.v.x, this.v.z);
      if (hs > 0.3) this.lookDir.set(this.v.x, this.state === 'air' ? this.v.y * 0.6 : 0, this.v.z).normalize();
      // align long axis with travel, then spin
      this.tmpQ.setFromUnitVectors(this.axisZ, this.lookDir);
      if (this.spin === 'spiral' && this.state === 'air') this.tmpQ2.setFromAxisAngle(this.axisZ, this.spinAngle);
      else this.tmpQ2.setFromAxisAngle(this.axisX, this.spinAngle);
      if (this.state === 'ground' && hs < 0.12) this.tmpQ2.setFromAxisAngle(this.axisX, Math.PI / 2 * 0.0);
      m.quaternion.copy(this.tmpQ).multiply(this.tmpQ2);
      if (this.state === 'dead' && this.p.y <= BALL.radius + 0.01) m.rotation.set(0, m.rotation.y, 0);
    }
    this.shadow.position.set(this.p.x, 0.02, this.p.z);
    const h = Math.max(0, this.p.y);
    this.shadow.scale.setScalar(1 + h * 0.08);
    this.shadow.material.opacity = Math.max(0.08, 0.35 - h * 0.02);
  }
}
