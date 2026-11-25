// Chunky low-poly footballer built from boxes, animated procedurally.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { clamp, damp, lerp, smooth01 } from './util.js';

// Each team gets ONE texture atlas (8x8 cells of 128px) holding every number, kit panel, skin tone,
// face and hair colour. Each player is ONE skinned mesh => one draw call per footballer.
export const SKIN_TONES = ['#f1c9a5', '#e0ac82', '#c68a5e', '#a36a42', '#7a4a2c', '#5a3520', '#d9a47a', '#8d5a3a'];
export const HAIR_COLS = ['#1a1209', '#2b1a0d', '#4a2c14', '#7a5229', '#c9a25a', '#0d0d0d', '#5e3a1c', '#3a2a1a'];
const CELL = { back0: 13, front: 14, side: 15, top: 16, sleeve: 17, shorts: 18, socks: 19, boots: 20, gear: 21, skin: 22, face: 30, hair: 38 };

function drawPattern(g, w, h, kit, front) {
  g.fillStyle = kit.primary; g.fillRect(0, 0, w, h);
  g.fillStyle = kit.secondary;
  switch (kit.pattern) {
    case 'vee':
      g.beginPath(); g.moveTo(0, 0); g.lineTo(w * 0.5, h * 0.55); g.lineTo(w, 0); g.lineTo(w, h * 0.18);
      g.lineTo(w * 0.5, h * 0.75); g.lineTo(0, h * 0.18); g.closePath(); g.fill(); break;
    case 'hoops':
      for (let i = 0; i < 5; i++) if (i % 2 === 1) g.fillRect(0, (i * h) / 5, w, h / 5); break;
    case 'sash':
      g.beginPath(); g.moveTo(front ? 0 : w, h * 0.05); g.lineTo(front ? w * 0.28 : w * 0.72, 0);
      g.lineTo(front ? w : 0, h * 0.72); g.lineTo(front ? w : 0, h); g.lineTo(front ? w * 0.78 : w * 0.22, h); g.closePath(); g.fill(); break;
    case 'stripes':
      for (let i = 0; i < 7; i++) if (i % 2 === 1) g.fillRect((i * w) / 7, 0, w / 7, h); break;
    case 'yoke':
      g.fillRect(0, 0, w, h * 0.3); g.fillStyle = kit.trim; g.fillRect(0, h * 0.3, w, h * 0.04); break;
    default:
      g.fillRect(0, h * 0.88, w, h * 0.12);
  }
  g.fillStyle = kit.trim; g.fillRect(w * 0.36, 0, w * 0.28, h * 0.05);
}

export function makeKitMaterials(kit, key) {
  const c = document.createElement('canvas'); c.width = c.height = 1024;
  const g = c.getContext('2d');
  const at = (i, fn) => { g.save(); g.translate((i % 8) * 128, Math.floor(i / 8) * 128); g.beginPath(); g.rect(0, 0, 128, 128); g.clip(); fn(g, 128, 128); g.restore(); };
  const solid = (col) => (gg, w, h) => { gg.fillStyle = col; gg.fillRect(0, 0, w, h); };
  const light = (col) => ['#ffffff', '#f2f2f2', '#f1e3c4', '#ffd21f', '#f2d21f', '#f2b51d', '#c6f01e'].includes(col);
  for (let n = 1; n <= 14; n++) {
    at(n === 14 ? CELL.back0 : n - 1, (gg, w, h) => {
      drawPattern(gg, w, h, kit, false);
      if (n === 14 || key === 'ref') return;
      gg.font = 'bold 66px Arial Black, Arial'; gg.textAlign = 'center'; gg.textBaseline = 'middle';
      gg.lineWidth = 7; gg.strokeStyle = light(kit.primary) ? kit.secondary : '#111';
      gg.fillStyle = kit.trim === kit.primary ? kit.secondary : (light(kit.primary) && light(kit.trim) ? kit.secondary : kit.trim);
      gg.strokeText(String(n), w / 2, h * 0.52); gg.fillText(String(n), w / 2, h * 0.52);
    });
  }
  at(CELL.front, (gg, w, h) => {
    drawPattern(gg, w, h, kit, true);
    gg.fillStyle = kit.trim; gg.beginPath(); gg.arc(w * 0.72, h * 0.25, 8, 0, Math.PI * 2); gg.fill();
    if (key !== 'ref') { gg.fillStyle = 'rgba(255,255,255,0.85)'; gg.fillRect(w * 0.16, h * 0.55, w * 0.68, h * 0.14); gg.fillStyle = '#222'; gg.font = 'bold 15px Arial'; gg.textAlign = 'center'; gg.fillText('ROO FUEL', w / 2, h * 0.66); }
  });
  at(CELL.side, (gg, w, h) => drawPattern(gg, w, h, kit, true));
  at(CELL.top, solid(kit.pattern === 'yoke' || kit.pattern === 'vee' ? kit.secondary : kit.primary));
  at(CELL.sleeve, solid(kit.pattern === 'yoke' ? kit.secondary : kit.primary));
  at(CELL.shorts, solid(kit.shorts));
  at(CELL.socks, (gg, w, h) => { gg.fillStyle = kit.socks; gg.fillRect(0, 0, w, h); gg.fillStyle = kit.secondary; gg.fillRect(0, h * 0.1, w, h * 0.12); gg.fillRect(0, h * 0.3, w, h * 0.06); gg.fillStyle = '#f4f4f4'; gg.fillRect(0, h * 0.85, w, h * 0.15); });
  at(CELL.boots, solid('#161616'));
  at(CELL.gear, solid('#202020'));
  SKIN_TONES.forEach((sk, i) => {
    at(CELL.skin + i, solid(sk));
    at(CELL.face + i, (gg) => {
      gg.fillStyle = sk; gg.fillRect(0, 0, 128, 128); gg.scale(2, 2);
      gg.fillStyle = 'rgba(0,0,0,0.12)'; gg.fillRect(28, 26, 8, 16);
      gg.fillStyle = '#fff'; gg.fillRect(14, 22, 12, 7); gg.fillRect(38, 22, 12, 7);
      gg.fillStyle = '#2a1a0c'; gg.fillRect(19, 22, 5, 7); gg.fillRect(40, 22, 5, 7);
      gg.fillStyle = 'rgba(30,18,8,0.85)'; gg.fillRect(12, 16, 15, 3); gg.fillRect(37, 16, 15, 3);
      gg.fillStyle = '#7a2a22'; gg.fillRect(22, 46, 20, 4);
    });
  });
  HAIR_COLS.forEach((hc, i) => at(CELL.hair + i, solid(hc)));
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  return { tex, mat: new THREE.MeshLambertMaterial({ map: tex }) };
}

function cellUV(i) {
  const cx = i % 8, cy = Math.floor(i / 8), e = 4 / 1024;
  return { u0: cx / 8 + e, u1: (cx + 1) / 8 - e, v0: 1 - (cy + 1) / 8 + e, v1: 1 - cy / 8 - e };
}
// faces: px, nx, py, ny, pz(front), nz(back)
function boxPart(w, h, d, cells, bone, off, pivotTop) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (pivotTop) g.translate(0, -h / 2, 0);
  g.translate(off[0], off[1], off[2]);
  const uv = g.attributes.uv;
  for (let f = 0; f < 6; f++) {
    const r = cellUV(Array.isArray(cells) ? cells[f] : cells);
    for (let k = 0; k < 4; k++) { const i = f * 4 + k; uv.setXY(i, r.u0 + uv.getX(i) * (r.u1 - r.u0), r.v0 + uv.getY(i) * (r.v1 - r.v0)); }
  }
  g.clearGroups();
  g.userData.bone = bone;
  return g;
}

const shadowGeo = new THREE.CircleGeometry(0.45, 14);
const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false });

export class PlayerModel {
  constructor(atlas, o) {
    const sx = o.build?.w ?? 1, sy = o.build?.h ?? 1;
    this.root = new THREE.Group();
    const skinI = Math.max(0, SKIN_TONES.indexOf(o.skin)), hairI = Math.max(0, HAIR_COLS.indexOf(o.hair));
    const SK = CELL.skin + skinI, HR = CELL.hair + hairI;
    // skeleton
    const B = (name, parent, x, y, z) => { const b = new THREE.Bone(); b.name = name; b.position.set(x, y, z); if (parent) parent.add(b); return b; };
    this.body = B('body', null, 0, 0, 0);
    this.pelvis = B('pelvis', this.body, 0, 0.98, 0);
    this.torso = B('torso', this.pelvis, 0, 0.1, 0);
    this.head = B('head', this.torso, 0, 0.66, 0);
    const shL = B('shL', this.torso, 0.31, 0.55, 0), elL = B('elL', shL, 0, -0.32, 0);
    const shR = B('shR', this.torso, -0.31, 0.55, 0), elR = B('elR', shR, 0, -0.32, 0);
    const hipL = B('hipL', this.pelvis, 0.11, 0, 0), knL = B('knL', hipL, 0, -0.44, 0);
    const hipR = B('hipR', this.pelvis, -0.11, 0, 0), knR = B('knR', hipR, 0, -0.44, 0);
    this.armL = { sh: shL, el: elL }; this.armR = { sh: shR, el: elR };
    this.legL = { hip: hipL, knee: knL }; this.legR = { hip: hipR, knee: knR };
    const bones = [this.body, this.pelvis, this.torso, this.head, shL, elL, shR, elR, hipL, knL, hipR, knR];
    this.body.updateMatrixWorld(true);
    const backCell = o.number >= 1 && o.number <= 13 ? o.number - 1 : CELL.back0;
    const parts = [
      boxPart(0.38, 0.2, 0.25, CELL.shorts, this.pelvis, [0, 0.02, 0]),
      boxPart(0.5, 0.6, 0.29, [CELL.side, CELL.side, CELL.top, CELL.shorts, CELL.front, backCell], this.torso, [0, 0.3, 0]),
      boxPart(0.11, 0.08, 0.11, SK, this.torso, [0, 0.63, 0]),
      boxPart(0.24, 0.28, 0.26, [SK, SK, SK, SK, CELL.face + skinI, SK], this.head, [0, 0.14, 0]),
    ];
    const hs = o.headgear ? 'gear' : (o.hairStyle || 'short');
    if (hs === 'gear') parts.push(boxPart(0.27, 0.16, 0.29, CELL.gear, this.head, [0, 0.22, -0.005]), boxPart(0.27, 0.1, 0.06, CELL.gear, this.head, [0, 0.12, -0.12]));
    else if (hs === 'short') parts.push(boxPart(0.255, 0.07, 0.275, HR, this.head, [0, 0.29, -0.005]), boxPart(0.255, 0.16, 0.05, HR, this.head, [0, 0.2, -0.12]));
    else if (hs === 'buzz') parts.push(boxPart(0.248, 0.03, 0.268, HR, this.head, [0, 0.285, 0]));
    else if (hs === 'mohawk') parts.push(boxPart(0.06, 0.09, 0.26, HR, this.head, [0, 0.32, 0]));
    else if (hs === 'long') parts.push(boxPart(0.26, 0.07, 0.28, HR, this.head, [0, 0.29, -0.005]), boxPart(0.26, 0.3, 0.06, HR, this.head, [0, 0.1, -0.13]));
    else if (hs === 'afro') parts.push(boxPart(0.32, 0.18, 0.32, HR, this.head, [0, 0.3, -0.02]));
    for (const [sh, el] of [[shL, elL], [shR, elR]]) {
      parts.push(boxPart(0.15, 0.15, 0.15, CELL.sleeve, sh, [0, -0.04, 0]), boxPart(0.12, 0.3, 0.12, SK, sh, [0, -0.06, 0], true),
        boxPart(0.11, 0.27, 0.11, SK, el, [0, 0, 0], true), boxPart(0.1, 0.1, 0.1, SK, el, [0, -0.26, 0], true));
    }
    for (const [hip, kn] of [[hipL, knL], [hipR, knR]]) {
      parts.push(boxPart(0.19, 0.24, 0.2, CELL.shorts, hip, [0, 0.04, 0], true), boxPart(0.15, 0.26, 0.16, SK, hip, [0, -0.18, 0], true),
        boxPart(0.135, 0.44, 0.145, CELL.socks, kn, [0, 0, 0], true), boxPart(0.125, 0.09, 0.27, CELL.boots, kn, [0, -0.42, 0.05], true));
    }
    for (const g of parts) {
      const bi = bones.indexOf(g.userData.bone);
      g.applyMatrix4(g.userData.bone.matrixWorld);
      const n = g.attributes.position.count;
      const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
      for (let i = 0; i < n; i++) { si[i * 4] = bi; sw[i * 4] = 1; }
      g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
      g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
    }
    const geo = mergeGeometries(parts, false);
    for (const g of parts) g.dispose();
    this.mesh = new THREE.SkinnedMesh(geo, atlas.mat);
    this.mesh.add(this.body);
    this.mesh.bind(new THREE.Skeleton(bones));
    this.mesh.frustumCulled = false;
    this.mesh.scale.set(sx, sy, sx);
    this.root.add(this.mesh);
    this.ballAnchor = new THREE.Object3D(); this.ballAnchor.position.set(-0.2, 0.26, 0.2); this.torso.add(this.ballAnchor);
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat); this.shadow.rotation.x = -Math.PI / 2; this.shadow.position.y = 0.015;
    this.root.add(this.shadow);
    this.phase = Math.random() * 6;
    this.j = { lean: 0, twist: 0, roll: 0, bodyX: 0, bodyZ: 0, bodyY: 0, shLx: 0, shLz: 0.1, shRx: 0, shRz: -0.1, elL: -0.3, elR: -0.3,
      hipL: 0, hipR: 0, knL: 0.1, knR: 0.1, hipLz: 0, hipRz: 0, head: 0 };
    this._t = {};
  }

  // Reads presentational fields from the Player entity and poses the skeleton.
  update(pl, dt, time) {
    const j = this.j, t = this._t;
    const sp = pl.speedH;
    this.root.position.set(pl.p.x, 0, pl.p.z);
    this.root.rotation.y = pl.heading;
    const a = pl.anim; const st = pl.visualState;
    // defaults: run cycle
    const amp = clamp(sp / 8.5, 0, 1);
    this.phase += dt * (1.35 * sp + (sp > 0.25 ? 1.5 : 0));
    const ph = this.phase, s = Math.sin(ph), c = Math.cos(ph);
    t.lean = 0.06 + amp * 0.22 + pl.accelLean * 0.15; t.twist = s * 0.12 * amp; t.roll = 0;
    t.bodyX = 0; t.bodyZ = pl.lateralLean; t.bodyY = Math.abs(c) * 0.05 * amp;
    t.hipL = -s * 0.95 * amp; t.hipR = s * 0.95 * amp;
    t.knL = 0.15 + Math.max(0, -c) * 1.4 * amp; t.knR = 0.15 + Math.max(0, c) * 1.4 * amp;
    t.hipLz = 0; t.hipRz = 0;
    t.shLx = s * 0.85 * amp; t.shRx = -s * 0.85 * amp; t.shLz = 0.12; t.shRz = -0.12;
    t.elL = -0.25 - amp * 1.1; t.elR = -0.25 - amp * 1.1; t.head = 0;
    if (sp < 0.3) { // idle / ready stance
      const br = Math.sin(time * 2.2 + this.phase) * 0.02;
      t.lean = pl.readyStance ? 0.3 : 0.05 + br; t.knL = t.knR = pl.readyStance ? 0.45 : 0.08; t.hipL = t.hipR = pl.readyStance ? -0.25 : 0;
      t.shLx = t.shRx = pl.readyStance ? -0.45 : 0.05; t.elL = t.elR = pl.readyStance ? -0.9 : -0.2; t.bodyY = pl.readyStance ? -0.08 : 0;
    }
    const carry = pl.hasBall && !['ground', 'goalkick'].includes(st);
    if (carry) {
      const cs = pl.carrySide; // 1 = right arm, -1 = left
      const k = cs > 0 ? 'R' : 'L';
      t['sh' + k + 'x'] = -0.55; t['sh' + k + 'z'] = cs > 0 ? 0.25 : -0.25; t['el' + k] = -1.75;
      this.ballAnchor.position.set(-0.19 * cs, 0.27, 0.2);
    }
    // overlays by state
    switch (st) {
      case 'step': {
        const k = smooth01(a.t / 0.12) * (1 - smooth01((a.t - 0.25) / 0.15));
        t.bodyZ = a.side * 0.45 * k; t.hipLz = 0.25 * k; t.hipRz = -0.25 * k; break;
      }
      case 'fend': {
        const k = Math.min(1, a.t / 0.08) * (1 - smooth01((a.t - 0.35) / 0.15));
        const arm = pl.carrySide > 0 ? 'L' : 'R';
        t['sh' + arm + 'x'] = lerp(t['sh' + arm + 'x'], -1.5, k); t['sh' + arm + 'z'] = (arm === 'L' ? 0.25 : -0.25) * k; t['el' + arm] = lerp(t['el' + arm], -0.05, k);
        t.twist = (arm === 'L' ? -0.3 : 0.3) * k; break;
      }
      case 'bump': {
        const k = Math.min(1, a.t / 0.1) * (1 - smooth01((a.t - 0.4) / 0.15));
        t.lean = lerp(t.lean, 0.75, k); t.twist = 0.45 * k * -pl.carrySide; t.head = -0.3 * k; break;
      }
      case 'lunge': case 'dive': {
        const k = Math.min(1, a.t / 0.15);
        t.bodyX = (st === 'dive' ? 1.25 : 0.75) * k; t.bodyY = -(st === 'dive' ? 0.35 : 0.1) * k;
        t.shLx = t.shRx = -1.7; t.shLz = 0.35; t.shRz = -0.35; t.elL = t.elR = -0.35;
        t.hipL = 0.4; t.hipR = 0.6; t.knL = t.knR = 0.4; break;
      }
      case 'tackling': {
        t.bodyX = 0.55; t.lean = 0.35; t.shLx = t.shRx = -1.45; t.shLz = 0.55; t.shRz = -0.55; t.elL = t.elR = -0.9;
        t.knL = t.knR = 0.6; t.hipL = -0.3; t.hipR = -0.1; break;
      }
      case 'tackled': {
        const drive = pl.legDriveVis;
        t.lean = 0.45; t.bodyX = 0.15 * a.fall; t.hipL = -s * 0.6 * drive; t.hipR = s * 0.6 * drive; t.knL = 0.5 + Math.max(0, -c) * 0.8 * drive; t.knR = 0.5 + Math.max(0, c) * 0.8 * drive;
        this.phase += dt * 9 * drive; break;
      }
      case 'ground': {
        const f = a.fall ?? 1, dir = a.faceUp ? -1 : 1;
        t.bodyX = dir * 1.5 * f; t.bodyY = -0.72 * f; t.lean = 0; t.twist = 0;
        t.shLx = t.shRx = dir > 0 ? -2.4 * f : -0.2; t.shLz = 0.4; t.shRz = -0.4; t.elL = t.elR = -0.3;
        t.hipL = 0.05; t.hipR = -0.1; t.knL = 0.3; t.knR = 0.1; t.bodyZ = 0; break;
      }
      case 'getup': {
        const f = 1 - smooth01(a.t / a.dur), dir = a.faceUp ? -1 : 1;
        t.bodyX = dir * 1.5 * f; t.bodyY = -0.72 * f; t.knL = t.knR = 0.3 + f * 0.8; t.hipL = t.hipR = -0.6 * f; break;
      }
      case 'ptb': {
        t.lean = 0.55; t.shLx = t.shRx = -0.3; t.elL = t.elR = -0.6; t.knL = t.knR = 0.3; t.hipL = t.hipR = -0.25;
        if (a.roll > 0) { const r = Math.sin(clamp(a.roll, 0, 1) * Math.PI); t.hipR = -0.25 + r * 0.9; t.knR = 0.3 + r * 0.6; }
        t.bodyY = -0.05; break;
      }
      case 'kick': case 'goalkick': {
        const kt = a.kt ?? 0; // seconds since kick start
        const leg = a.foot === 'L' ? 'L' : 'R', other = leg === 'L' ? 'R' : 'L';
        let hipA, knA;
        if (kt < 0.16) { const k = kt / 0.16; hipA = lerp(0, 0.9, k); knA = lerp(0.2, 1.5, k); }
        else if (kt < 0.24) { const k = (kt - 0.16) / 0.08; hipA = lerp(0.9, -1.2, k); knA = lerp(1.5, 0.1, k); }
        else { const k = clamp((kt - 0.24) / 0.3, 0, 1); hipA = lerp(-1.6, -0.2, k); knA = lerp(0.05, 0.3, k); }
        if (a.preKick) { hipA = 0; knA = 0.15; }
        t['hip' + leg] = hipA; t['kn' + leg] = knA; t['hip' + other] = 0.1; t['kn' + other] = 0.15;
        t.shLz = 0.9; t.shRz = -0.9; t.shLx = t.shRx = -0.2; t.elL = t.elR = -0.3; t.lean = kt > 0.16 && kt < 0.4 ? -0.15 : 0.15;
        if (!a.preKick && kt < 0.6) { t.bodyY = 0; t.bodyZ = 0; }
        break;
      }
      case 'celebrate': {
        const b = Math.abs(Math.sin(time * 7 + this.phase));
        t.shLx = t.shRx = -2.8; t.shLz = 0.3; t.shRz = -0.3; t.elL = t.elR = -0.2; t.bodyY = b * 0.25; t.lean = -0.1;
        t.knL = t.knR = 0.3 * (1 - b); break;
      }
      case 'scrum': {
        t.lean = 1.25; t.bodyY = -0.28; t.shLx = t.shRx = -1.3; t.shLz = 0.5; t.shRz = -0.5; t.elL = t.elR = -0.6;
        t.hipL = -0.75 + Math.sin(time * 3 + this.phase) * 0.1; t.hipR = -0.6; t.knL = 1.1; t.knR = 1.0; t.head = -0.5; break;
      }
      case 'signal': {
        t.shRx = -2.6; t.shRz = -0.2; t.elR = -0.05; break;
      }
    }
    if (pl.passAnim > 0 && !['ground', 'getup', 'tackled'].includes(st)) {
      const k = Math.sin(clamp(pl.passAnim / 0.3, 0, 1) * Math.PI), side = pl.passSide; // +1 = to model's left
      t.shLx = t.shRx = lerp(t.shLx, -1.2, k); t.elL = t.elR = lerp(t.elL, -0.35, k);
      t.shLz = 0.2 + side * 0.5 * k; t.shRz = -0.2 + side * 0.5 * k; t.twist = side * 0.7 * k;
    }
    if (pl.catchAnim > 0 && !['ground', 'getup'].includes(st)) {
      const k = Math.min(1, pl.catchAnim / 0.15);
      t.shLx = t.shRx = lerp(t.shLx, pl.catchHigh ? -2.6 : -1.3, k); t.elL = t.elR = lerp(t.elL, -0.4, k); t.shLz = 0.3; t.shRz = -0.3;
    }
    if (pl.refSignal > 0) { t.shRx = -2.7; t.elR = -0.05; t.shRz = -0.25; }
    const L = st === 'lunge' || st === 'dive' || st === 'step' ? 30 : 16;
    for (const k in t) j[k] = damp(j[k], t[k], L, dt);
    this.body.rotation.set(j.bodyX, 0, j.bodyZ);
    this.body.position.y = j.bodyY + (pl.jumpY || 0);
    this.torso.rotation.set(j.lean, j.twist, 0);
    this.head.rotation.x = j.head - j.lean * 0.6;
    this.armL.sh.rotation.set(j.shLx, 0, j.shLz); this.armR.sh.rotation.set(j.shRx, 0, j.shRz);
    this.armL.el.rotation.x = j.elL; this.armR.el.rotation.x = j.elR;
    this.legL.hip.rotation.set(j.hipL, 0, j.hipLz); this.legR.hip.rotation.set(j.hipR, 0, j.hipRz);
    this.legL.knee.rotation.x = j.knL; this.legR.knee.rotation.x = j.knR;
    this.shadow.scale.setScalar(st === 'ground' ? 1.6 : 1);
  }
}
