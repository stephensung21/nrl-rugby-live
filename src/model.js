// Low-poly footballer: tapered, rounded body parts on a 15-bone skeleton, animated procedurally.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { clamp, damp, lerp, smooth01, wrapAngle } from './util.js';

// Each team gets ONE texture atlas (8x8 cells of 128px) holding every number, kit panel, skin tone,
// face and hair colour. Each player is ONE skinned mesh => one draw call per footballer.
import { SKIN_TONES, HAIR_COLS } from './config.js';
export { SKIN_TONES, HAIR_COLS };
const CELL = { back0: 13, front: 14, side: 15, top: 16, sleeve: 17, shorts: 18, socks: 19, boots: 20, gear: 21, skin: 22, face: 30, hair: 38,
  tape: 46, boots2: 47, face2: 48, tattoo: 56 };

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

// Faces are drawn at 64x64 and scaled up. Variant 1 has heavier brows, narrower eyes and a wider mouth.
function drawFace(gg, sk, variant) {
  gg.fillStyle = sk; gg.fillRect(0, 0, 128, 128); gg.scale(2, 2);
  gg.fillStyle = 'rgba(0,0,0,0.10)'; gg.fillRect(0, 0, 64, 8);                 // hairline shadow
  gg.fillStyle = 'rgba(0,0,0,0.13)'; gg.fillRect(29, 27, 6, 14);               // nose shade
  gg.fillStyle = 'rgba(0,0,0,0.08)'; gg.fillRect(6, 34, 10, 10); gg.fillRect(48, 34, 10, 10); // cheeks
  const eh = variant ? 5 : 7;
  gg.fillStyle = '#f4f0ea'; gg.fillRect(14, 23, 12, eh); gg.fillRect(38, 23, 12, eh);
  gg.fillStyle = '#2a1a0c'; gg.fillRect(19, 23, 5, eh); gg.fillRect(40, 23, 5, eh);
  gg.fillStyle = 'rgba(25,15,6,0.9)';
  if (variant) { gg.fillRect(11, 17, 17, 4); gg.fillRect(36, 17, 17, 4); } else { gg.fillRect(13, 18, 14, 3); gg.fillRect(37, 18, 14, 3); }
  gg.fillStyle = '#6e2a22'; gg.fillRect(variant ? 20 : 23, 47, variant ? 24 : 18, 3);
  gg.fillStyle = 'rgba(0,0,0,0.12)'; gg.fillRect(24, 52, 16, 2);              // chin crease
}

function drawTattoo(gg, sk) {
  gg.fillStyle = sk; gg.fillRect(0, 0, 128, 128);
  gg.strokeStyle = 'rgba(15,12,10,0.82)'; gg.fillStyle = 'rgba(15,12,10,0.82)'; gg.lineWidth = 5;
  for (let y = 6; y < 128; y += 26) {
    gg.fillRect(0, y, 128, 4);
    gg.beginPath();
    for (let x = 0; x <= 128; x += 16) { gg.lineTo(x, y + 8); gg.lineTo(x + 8, y + 18); }
    gg.stroke();
  }
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
      gg.strokeText(String(n), w / 2, h * 0.45); gg.fillText(String(n), w / 2, h * 0.45);
    });
  }
  at(CELL.front, (gg, w, h) => {
    drawPattern(gg, w, h, kit, true);
    gg.fillStyle = kit.trim; gg.beginPath(); gg.arc(w * 0.72, h * 0.2, 8, 0, Math.PI * 2); gg.fill();
    if (key !== 'ref') { gg.fillStyle = 'rgba(255,255,255,0.85)'; gg.fillRect(w * 0.16, h * 0.42, w * 0.68, h * 0.14); gg.fillStyle = '#222'; gg.font = 'bold 15px Arial'; gg.textAlign = 'center'; gg.fillText('ROO FUEL', w / 2, h * 0.53); }
  });
  at(CELL.side, (gg, w, h) => drawPattern(gg, w, h, kit, true));
  at(CELL.top, solid(kit.pattern === 'yoke' || kit.pattern === 'vee' ? kit.secondary : kit.primary));
  at(CELL.sleeve, (gg, w, h) => { gg.fillStyle = kit.pattern === 'yoke' ? kit.secondary : kit.primary; gg.fillRect(0, 0, w, h); gg.fillStyle = kit.trim; gg.fillRect(0, h * 0.86, w, h * 0.14); });
  at(CELL.shorts, (gg, w, h) => { gg.fillStyle = kit.shorts; gg.fillRect(0, 0, w, h); gg.fillStyle = kit.secondary === kit.shorts ? kit.primary : kit.secondary; gg.fillRect(0, h * 0.9, w, h * 0.1); });
  at(CELL.socks, (gg, w, h) => { gg.fillStyle = kit.socks; gg.fillRect(0, 0, w, h); gg.fillStyle = kit.secondary; gg.fillRect(0, h * 0.08, w, h * 0.12); gg.fillRect(0, h * 0.27, w, h * 0.06); });
  at(CELL.boots, (gg, w, h) => { gg.fillStyle = '#161616'; gg.fillRect(0, 0, w, h); gg.fillStyle = '#e8e8e8'; gg.fillRect(0, h * 0.4, w, h * 0.1); });
  at(CELL.boots2, (gg, w, h) => { gg.fillStyle = key.charCodeAt(0) % 2 ? '#f26b1d' : '#e9ecef'; gg.fillRect(0, 0, w, h); gg.fillStyle = '#111'; gg.fillRect(0, h * 0.4, w, h * 0.1); });
  at(CELL.gear, solid('#202020'));
  at(CELL.tape, (gg, w, h) => { gg.fillStyle = '#f2f2ee'; gg.fillRect(0, 0, w, h); gg.fillStyle = 'rgba(0,0,0,0.08)'; for (let y = 0; y < h; y += 16) gg.fillRect(0, y, w, 3); });
  SKIN_TONES.forEach((sk, i) => {
    at(CELL.skin + i, solid(sk));
    at(CELL.face + i, (gg) => drawFace(gg, sk, 0));
    at(CELL.face2 + i, (gg) => drawFace(gg, sk, 1));
    at(CELL.tattoo + i, (gg) => drawTattoo(gg, sk));
  });
  HAIR_COLS.forEach((hc, i) => at(CELL.hair + i, solid(hc)));
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  return { tex, mat: new THREE.MeshLambertMaterial({ map: tex }) };
}

// cell spec: index, or [index, v0, v1] to use a horizontal band of the cell (v measured bottom → top)
function cellUV(spec) {
  const i = Array.isArray(spec) ? spec[0] : spec;
  const cx = i % 8, cy = Math.floor(i / 8), e = 4 / 1024;
  const u0 = cx / 8 + e, u1 = (cx + 1) / 8 - e, vb = 1 - (cy + 1) / 8 + e, vt = 1 - cy / 8 - e;
  if (!Array.isArray(spec)) return { u0, u1, v0: vb, v1: vt };
  return { u0, u1, v0: vb + (vt - vb) * spec[1], v1: vb + (vt - vb) * spec[2] };
}
// Remaps a geometry's UVs into atlas cells. `cells` is one spec, or six (px, nx, py, ny, pz=front, nz=back),
// chosen per vertex by its dominant normal so rounded / segmented shapes work too.
function mapCells(g, cells) {
  const uv = g.attributes.uv, nrm = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    let spec = cells;
    if (Array.isArray(cells) && cells.length === 6) {
      const nx = nrm.getX(i), ny = nrm.getY(i), nz = nrm.getZ(i), ax = Math.abs(nx), ay = Math.abs(ny), az = Math.abs(nz);
      const f = ax >= ay && ax >= az ? (nx > 0 ? 0 : 1) : ay >= az ? (ny > 0 ? 2 : 3) : (nz > 0 ? 4 : 5);
      spec = cells[f];
    }
    const r = cellUV(spec);
    uv.setXY(i, r.u0 + clamp(uv.getX(i), 0, 1) * (r.u1 - r.u0), r.v0 + clamp(uv.getY(i), 0, 1) * (r.v1 - r.v0));
  }
}
// Box tapered from bottom (wb x db) to top (wt x dt). round > 0 pulls the corners toward an ellipsoid.
function taperBox(wb, wt, h, db, dt, o = {}) {
  const seg = o.round ? 2 : 1;
  const g = new THREE.BoxGeometry(1, 1, 1, seg, seg, seg);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    if (o.round) {
      const l = Math.hypot(x, y, z) || 1, k = o.round;
      const ex = (x / l) * 0.5 * 1.15, ey = (y / l) * 0.5 * 1.15, ez = (z / l) * 0.5 * 1.15;
      x = lerp(x, clamp(ex, -0.5, 0.5), k); y = lerp(y, clamp(ey, -0.5, 0.5), k); z = lerp(z, clamp(ez, -0.5, 0.5), k);
    }
    const t = y + 0.5;
    p.setXYZ(i, x * lerp(wb, wt, t), y * h, z * lerp(db, dt, t) + (o.lean || 0) * t);
  }
  g.computeVertexNormals();
  return g;
}
// Tapered limb: an 7-sided cylinder hanging down from its joint (top at y = 0) with an elliptical section.
function limb(rt, rb, h, o = {}) {
  const g = new THREE.CylinderGeometry(rt, rb, h, o.sides || 7, 1, false);
  g.scale(1, 1, o.flat || 1);
  g.translate(0, -h / 2, 0);
  return g;
}

function part(geo, cells, bone, off = [0, 0, 0], rot = null) {
  if (rot) geo.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rot[0], rot[1], rot[2])));
  geo.translate(off[0], off[1], off[2]);
  mapCells(geo, cells);
  geo.clearGroups();
  geo.userData.bone = bone;
  return geo;
}

function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

const shadowGeo = new THREE.CircleGeometry(0.45, 14);
const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false });
const HIP_H = 0.96;

// Pose parameters (all radians except body offsets). Every frame a target pose is built, then the live
// pose eases toward it, so state changes blend instead of snapping.
const POSE_KEYS = ['bodyX', 'bodyZ', 'bodyY', 'lean', 'chestX', 'twist', 'headX', 'headY',
  'shLx', 'shLy', 'shLz', 'shRx', 'shRy', 'shRz', 'elL', 'elR', 'hipL', 'hipR', 'hipLz', 'hipRz', 'knL', 'knR'];
function blankPose() { const o = {}; for (const k of POSE_KEYS) o[k] = 0; return o; }

export class PlayerModel {
  constructor(atlas, o) {
    const sx = o.build?.w ?? 1, sy = o.build?.h ?? 1;
    this.root = new THREE.Group();
    const hsh = hashStr(o.fullName || o.name || String(o.number));
    const bit = (n, m) => ((hsh >>> n) % m);
    const skinI = Math.max(0, SKIN_TONES.indexOf(o.skin)), hairI = Math.max(0, HAIR_COLS.indexOf(o.hair));
    const SK = CELL.skin + skinI, HR = CELL.hair + hairI;
    const mass = o.mass || 90, heavy = clamp((mass - 88) / 30, 0, 1);         // 0 = outside back, 1 = big prop
    const arm = 1 + heavy * 0.22, leg = 1 + heavy * 0.16, neckW = 1 + heavy * 0.35;
    this.isRef = !!o.isRef;
    // ---- skeleton (body pivots at the hips so falls rotate around the pelvis, not the boots)
    const B = (name, parent, x, y, z) => { const b = new THREE.Bone(); b.name = name; b.position.set(x, y, z); if (parent) parent.add(b); return b; };
    this.body = B('body', null, 0, HIP_H, 0);
    this.pelvis = B('pelvis', this.body, 0, 0, 0);
    this.spine = B('spine', this.pelvis, 0, 0.1, 0);
    this.chest = B('chest', this.spine, 0, 0.22, 0);
    this.head = B('head', this.chest, 0, 0.31, 0.01);
    const shL = B('shL', this.chest, 0.235, 0.235, 0), elL = B('elL', shL, 0, -0.3, 0);
    const shR = B('shR', this.chest, -0.235, 0.235, 0), elR = B('elR', shR, 0, -0.3, 0);
    const hipL = B('hipL', this.pelvis, 0.105, -0.02, 0), knL = B('knL', hipL, 0, -0.44, 0);
    const hipR = B('hipR', this.pelvis, -0.105, -0.02, 0), knR = B('knR', hipR, 0, -0.44, 0);
    this.torso = this.chest; // ball anchor parent (legacy name)
    this.armL = { sh: shL, el: elL }; this.armR = { sh: shR, el: elR };
    this.legL = { hip: hipL, knee: knL }; this.legR = { hip: hipR, knee: knR };
    const bones = [this.body, this.pelvis, this.spine, this.chest, this.head, shL, elL, shR, elR, hipL, knL, hipR, knR];
    this.body.updateMatrixWorld(true);

    // ---- body parts
    const backCell = o.number >= 1 && o.number <= 13 ? o.number - 1 : CELL.back0;
    const faceCell = (bit(3, 2) ? CELL.face2 : CELL.face) + skinI;
    const W = 1 + heavy * 0.1;
    const parts = [
      // shorts / hips
      part(taperBox(0.37 * W, 0.36 * W, 0.24, 0.25, 0.24, { round: 0.25 }), CELL.shorts, this.pelvis, [0, -0.02, 0]),
      // abdomen (lower jersey) on the spine and chest (upper jersey) so the trunk can bend
      part(taperBox(0.36 * W, 0.4 * W, 0.24, 0.23 + heavy * 0.04, 0.25 + heavy * 0.02, { round: 0.2 }),
        [CELL.side, CELL.side, CELL.top, CELL.shorts, [CELL.front, 0, 0.3], [backCell, 0, 0.3]], this.spine, [0, 0.1, 0]),
      part(taperBox(0.4 * W, 0.5 * W, 0.3, 0.25, 0.27, { round: 0.2, lean: 0.015 }),
        [CELL.side, CELL.side, CELL.top, CELL.top, [CELL.front, 0.3, 1], [backCell, 0.3, 1]], this.chest, [0, 0.13, 0]),
      // trapezius / neck
      part(taperBox(0.3 * neckW, 0.14 * neckW, 0.08, 0.17, 0.12), CELL.top, this.chest, [0, 0.3, -0.01]),
      part(limb(0.06 * neckW, 0.07 * neckW, 0.1), SK, this.head, [0, 0.05, -0.01]),
      // head: rounded skull, jaw, nose, ears
      part(taperBox(0.215, 0.23, 0.25, 0.235, 0.25, { round: 0.42 }), [SK, SK, SK, SK, faceCell, SK], this.head, [0, 0.15, 0]),
      part(taperBox(0.15, 0.2, 0.06, 0.15, 0.2, { round: 0.3 }), SK, this.head, [0, 0.035, 0.03]),
      part(taperBox(0.035, 0.035, 0.07, 0.04, 0.03), SK, this.head, [0, 0.12, 0.125]),
      part(taperBox(0.03, 0.03, 0.06, 0.05, 0.05), SK, this.head, [0.115, 0.14, -0.01]),
      part(taperBox(0.03, 0.03, 0.06, 0.05, 0.05), SK, this.head, [-0.115, 0.14, -0.01]),
    ];
    // hair / headgear
    const hs = o.headgear ? 'gear' : (o.hairStyle || 'short');
    const style = hs === 'short' && bit(5, 4) === 0 ? 'fade' : hs === 'buzz' && bit(5, 3) === 0 ? 'bald' : hs === 'long' && bit(5, 2) ? 'bun' : hs;
    const H = (geo, off) => parts.push(part(geo, HR, this.head, off));
    if (style === 'gear') {
      parts.push(part(taperBox(0.25, 0.22, 0.17, 0.27, 0.23, { round: 0.5 }), CELL.gear, this.head, [0, 0.235, -0.01]),
        part(taperBox(0.05, 0.05, 0.12, 0.08, 0.08), CELL.gear, this.head, [0.12, 0.13, -0.01]),
        part(taperBox(0.05, 0.05, 0.12, 0.08, 0.08), CELL.gear, this.head, [-0.12, 0.13, -0.01]));
    } else if (style === 'short') { H(taperBox(0.235, 0.2, 0.08, 0.255, 0.21, { round: 0.5 }), [0, 0.27, -0.005]); H(taperBox(0.235, 0.235, 0.14, 0.05, 0.05), [0, 0.2, -0.11]); }
    else if (style === 'fade') H(taperBox(0.2, 0.17, 0.07, 0.22, 0.18, { round: 0.5 }), [0, 0.28, 0.005]);
    else if (style === 'buzz') H(taperBox(0.228, 0.2, 0.05, 0.25, 0.21, { round: 0.5 }), [0, 0.27, -0.005]);
    else if (style === 'mohawk') H(taperBox(0.06, 0.05, 0.08, 0.24, 0.2), [0, 0.3, -0.01]);
    else if (style === 'long') { H(taperBox(0.24, 0.21, 0.08, 0.26, 0.22, { round: 0.5 }), [0, 0.275, -0.005]); H(taperBox(0.24, 0.24, 0.26, 0.06, 0.06), [0, 0.13, -0.12]); }
    else if (style === 'bun') { H(taperBox(0.235, 0.2, 0.07, 0.255, 0.21, { round: 0.5 }), [0, 0.275, -0.005]); H(taperBox(0.1, 0.09, 0.09, 0.1, 0.09, { round: 0.6 }), [0, 0.3, -0.12]); }
    else if (style === 'afro') H(taperBox(0.3, 0.27, 0.19, 0.31, 0.27, { round: 0.6 }), [0, 0.28, -0.02]);
    // facial hair
    const beard = this.isRef ? 0 : bit(8, 6);
    if (beard === 1 || beard === 2) H(taperBox(0.16, 0.21, beard === 1 ? 0.07 : 0.1, 0.13, 0.2, { round: 0.3 }), [0, beard === 1 ? 0.03 : 0.025, 0.045]);
    if (beard === 3) H(taperBox(0.07, 0.07, 0.05, 0.05, 0.05), [0, 0.02, 0.12]);
    if (beard === 1 || beard === 4) H(taperBox(0.09, 0.09, 0.02, 0.03, 0.03), [0, 0.085, 0.125]);
    // arms: deltoid (sleeve), upper arm, forearm, hand; optional tattoo sleeve and wrist tape
    const tatSide = !this.isRef && bit(11, 4) === 0 ? (bit(13, 2) ? 1 : -1) : 0;
    const tape = !this.isRef && bit(15, 3) === 0;
    for (const [sh, el, sgn] of [[shL, elL, 1], [shR, elR, -1]]) {
      const ARM = tatSide === sgn ? CELL.tattoo + skinI : SK;
      parts.push(part(taperBox(0.16 * arm, 0.17 * arm, 0.15, 0.15 * arm, 0.15 * arm, { round: 0.5 }), CELL.sleeve, sh, [0.01 * sgn, -0.04, 0]),
        part(limb(0.058 * arm, 0.047 * arm, 0.25, { flat: 1.05 }), ARM, sh, [0.01 * sgn, -0.07, 0]),
        part(limb(0.05 * arm, 0.036 * arm, 0.25, { flat: 0.85 }), ARM, el, [0, 0, 0]),
        part(taperBox(0.065, 0.075, 0.1, 0.05, 0.06, { round: 0.3 }), SK, el, [0, -0.28, 0.005]));
      if (tape) parts.push(part(limb(0.042 * arm, 0.04 * arm, 0.05, { flat: 0.9 }), CELL.tape, el, [0, -0.19, 0]));
    }
    // legs: shorts leg, thigh, sock / calf, boot
    const socksDown = !this.isRef && bit(17, 5) === 0;
    const boots = !this.isRef && bit(20, 4) === 0 ? CELL.boots2 : CELL.boots;
    for (const [hip, kn] of [[hipL, knL], [hipR, knR]]) {
      parts.push(part(limb(0.1 * leg, 0.092 * leg, 0.24, { flat: 1.05 }), CELL.shorts, hip, [0, 0.03, 0]),
        part(limb(0.088 * leg, 0.064 * leg, 0.26, { flat: 1.08 }), SK, hip, [0, -0.19, 0.005]));
      if (socksDown) {
        parts.push(part(limb(0.064 * leg, 0.068 * leg, 0.17, { flat: 1.05 }), SK, kn, [0, 0.01, -0.005]),
          part(limb(0.068 * leg, 0.046, 0.25, { flat: 1.05 }), CELL.socks, kn, [0, -0.16, -0.005]));
      } else {
        parts.push(part(limb(0.064 * leg, 0.07 * leg, 0.17, { flat: 1.05 }), CELL.socks, kn, [0, 0.01, -0.005]),
          part(limb(0.07 * leg, 0.044, 0.25, { flat: 1.05 }), CELL.socks, kn, [0, -0.16, -0.005]));
      }
      parts.push(part(taperBox(0.1, 0.095, 0.085, 0.27, 0.22, { round: 0.25 }), boots, kn, [0, -0.475, 0.045]));
    }
    for (const g of parts) {
      const bi = bones.indexOf(g.userData.bone);
      g.applyMatrix4(g.userData.bone.matrixWorld);
      const n = g.attributes.position.count;
      const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
      for (let i = 0; i < n; i++) { si[i * 4] = bi; sw[i * 4] = 1; }
      g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
      g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
      if (g.index) { /* mergeGeometries needs all-indexed or all-non-indexed */ }
    }
    const geo = mergeGeometries(parts.map((g) => (g.index ? g.toNonIndexed() : g)), false);
    for (const g of parts) g.dispose();
    this.mesh = new THREE.SkinnedMesh(geo, atlas.mat);
    this.mesh.add(this.body);
    this.mesh.bind(new THREE.Skeleton(bones));
    this.mesh.frustumCulled = false;
    this.mesh.scale.set(sx, sy, sx);
    this.root.add(this.mesh);
    this.ballAnchor = new THREE.Object3D(); this.ballAnchor.position.set(-0.19, 0.1, 0.19); this.chest.add(this.ballAnchor);
    this.handL = new THREE.Object3D(); this.handL.position.set(-0.03, -0.3, 0.06); elL.add(this.handL);
    this.handR = new THREE.Object3D(); this.handR.position.set(0.03, -0.3, 0.06); elR.add(this.handR);
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat); this.shadow.rotation.x = -Math.PI / 2; this.shadow.position.y = 0.015;
    this.root.add(this.shadow);
    this.phase = Math.random() * 6;
    this.j = blankPose(); this.j.shLz = 0.1; this.j.shRz = -0.1; this.j.elL = this.j.elR = -0.3; this.j.knL = this.j.knR = 0.1;
    this._t = blankPose(); this._a = blankPose(); this._b = blankPose();
    this.twoHand = 0; this.lastSt = 'free'; this.blendL = 16;
    this._v = new THREE.Vector3(); this._w = new THREE.Vector3();
  }

  // World position the ball should sit at: tucked under one arm, or between both hands when passing.
  ballWorld(out) {
    if (this.twoHand > 0.5) {
      this.handL.getWorldPosition(out); this.handR.getWorldPosition(this._w);
      return out.add(this._w).multiplyScalar(0.5);
    }
    return this.ballAnchor.getWorldPosition(out);
  }

  // ------------------------------------------------------------------ pose library
  run(t, pl, sp, time) {
    const amp = clamp(sp / 7, 0, 1), s = Math.sin(this.phase), c = Math.cos(this.phase);
    const stride = 0.3 + 0.62 * amp;
    t.lean = 0.05 + amp * 0.2 + pl.accelLean * 0.16; t.chestX = 0.02 * amp;
    t.twist = -s * 0.1 * amp; t.bodyZ = pl.lateralLean; t.bodyX = 0;
    t.bodyY = amp * (0.05 * Math.abs(s) - 0.04) - 0.01;
    t.hipL = -s * stride; t.hipR = s * stride;
    // knee folds most just after toe-off (leg behind and swinging through), stays soft on landing
    t.knL = 0.12 + amp * (1.55 * Math.pow(Math.max(0, Math.cos(this.phase + 0.8)), 1.4) + 0.25 * Math.max(0, -c));
    t.knR = 0.12 + amp * (1.55 * Math.pow(Math.max(0, Math.cos(this.phase + 0.8 + Math.PI)), 1.4) + 0.25 * Math.max(0, c));
    t.hipLz = 0.02; t.hipRz = -0.02;
    const armA = 0.2 + 0.75 * amp;
    t.shLx = s * armA - 0.1 * amp; t.shRx = -s * armA - 0.1 * amp; t.shLz = 0.12; t.shRz = -0.12; t.shLy = 0.1; t.shRy = -0.1;
    t.elL = -0.35 - amp * (1.05 + 0.25 * Math.max(0, -s)); t.elR = -0.35 - amp * (1.05 + 0.25 * Math.max(0, s));
    t.headX = -t.lean * 0.8; t.headY = 0;
    if (sp < 0.3) this.idle(t, pl, time);
  }
  idle(t, pl, time) {
    const br = Math.sin(time * 2.1 + this.phase) * 0.015, sway = Math.sin(time * 0.6 + this.phase * 2) * 0.03;
    if (pl.readyStance) {
      // on the toes, knees bent, hands up ready to tackle
      const bob = Math.sin(time * 5 + this.phase) * 0.015;
      t.lean = 0.32; t.chestX = 0.08; t.bodyY = -0.1 + bob; t.bodyX = 0; t.bodyZ = 0;
      t.hipL = -0.4; t.hipR = -0.3; t.knL = 0.75; t.knR = 0.65; t.hipLz = 0.12; t.hipRz = -0.12;
      t.shLx = -0.75; t.shRx = -0.75; t.shLz = 0.25; t.shRz = -0.25; t.shLy = -0.3; t.shRy = 0.3; t.elL = t.elR = -1.25;
      t.headX = -0.35;
    } else {
      t.lean = 0.04 + br; t.chestX = -0.02; t.bodyY = -0.005; t.bodyZ = sway * 0.5; t.bodyX = 0;
      t.hipL = -0.05; t.hipR = 0.05; t.knL = 0.1; t.knR = 0.06; t.hipLz = 0.06 + sway; t.hipRz = -0.06 + sway;
      t.shLx = 0.05; t.shRx = 0.02; t.shLz = 0.14; t.shRz = -0.14; t.shLy = 0.15; t.shRy = -0.15; t.elL = -0.3; t.elR = -0.25;
      t.headX = 0;
    }
  }
  // lying on the ground. dir = +1 face down, -1 face up. pile = extra height when on top of someone.
  ground(t, f, dir, pile = 0, carry = 0) {
    t.bodyX = dir * 1.42 * f; t.bodyY = (-HIP_H + 0.16 + pile) * f; t.bodyZ = 0; t.lean = 0.05; t.chestX = 0; t.twist = 0;
    if (dir > 0) {
      t.shLx = -2.3; t.shRx = -2.0; t.shLz = 0.55; t.shRz = -0.45; t.shLy = 0; t.shRy = 0; t.elL = -0.7; t.elR = -0.9;
      t.hipL = 0.12; t.hipR = -0.05; t.knL = 0.75; t.knR = 0.25; t.hipLz = 0.12; t.hipRz = -0.08; t.headX = -0.55; t.headY = 0.6;
      if (carry) { const k = carry > 0 ? 'R' : 'L'; t['sh' + k + 'x'] = -0.6; t['el' + k] = -2.1; t['sh' + k + 'z'] = carry > 0 ? 0.2 : -0.2; }
    } else {
      t.shLx = -0.4; t.shRx = -0.2; t.shLz = 1.0; t.shRz = -0.8; t.shLy = 0; t.shRy = 0; t.elL = -0.5; t.elR = -0.9;
      t.hipL = -0.9; t.hipR = -0.1; t.knL = 1.5; t.knR = 0.2; t.hipLz = 0.1; t.hipRz = -0.12; t.headX = 0.35; t.headY = -0.3;
      if (carry) { const k = carry > 0 ? 'R' : 'L'; t['sh' + k + 'x'] = -0.6; t['el' + k] = -2.1; t['sh' + k + 'z'] = carry > 0 ? 0.25 : -0.25; }
    }
  }
  // one knee down, pushing up off the turf
  kneel(t) {
    t.bodyX = 0.15; t.bodyY = -0.42; t.bodyZ = 0; t.lean = 0.55; t.chestX = 0.1; t.twist = 0.1;
    t.hipL = -1.45; t.knL = 1.5; t.hipR = 0.15; t.knR = 1.65; t.hipLz = 0.1; t.hipRz = -0.05;
    t.shLx = -0.9; t.shLz = 0.1; t.elL = -0.6; t.shRx = -0.4; t.shRz = -0.25; t.elR = -0.4; t.shLy = 0; t.shRy = 0; t.headX = -0.4;
  }
  wrap(t, time, drive) {
    // tackler: head beside the hip, arms locked round the carrier, legs pumping
    const s = Math.sin(time * 11 + this.phase);
    t.bodyX = 0.18; t.bodyY = -0.2; t.bodyZ = 0; t.lean = 0.55; t.chestX = 0.3; t.twist = 0.18;
    t.shLx = -1.25; t.shRx = -1.35; t.shLy = -1.05; t.shRy = 1.05; t.shLz = 0.15; t.shRz = -0.15; t.elL = -1.35; t.elR = -1.45;
    t.hipL = -0.75 - s * 0.35 * drive; t.hipR = -0.55 + s * 0.35 * drive; t.knL = 0.95 + Math.max(0, s) * 0.4 * drive; t.knR = 0.85 + Math.max(0, -s) * 0.4 * drive;
    t.hipLz = 0.15; t.hipRz = -0.15; t.headX = -0.8; t.headY = 0.55;
  }

  // Reads presentational fields from the Player entity and poses the skeleton.
  update(pl, dt, time, ball) {
    this.root.position.set(pl.p.x, 0, pl.p.z);
    this.root.rotation.y = pl.heading;
    if (dt <= 0) return; // paused: hold the pose
    const t = this._t;
    const sp = pl.speedH;
    const a = pl.anim; const st = pl.visualState;
    // stride rate: ~1 cycle/s walking up to ~1.7 cycles/s flat out
    this.phase += dt * (sp > 0.25 ? 4.4 + 0.72 * sp : 0);
    this.run(t, pl, sp, time);
    const carry = pl.hasBall && !['ground', 'goalkick', 'ptb', 'scrum'].includes(st);
    let twoHand = 0;
    if (carry) {
      const cs = pl.carrySide; // 1 = right arm, -1 = left
      const k = cs > 0 ? 'R' : 'L';
      if (pl.pendingPass || (sp < 2.5 && st === 'free')) twoHand = 1;
      else { t['sh' + k + 'x'] = -0.5; t['sh' + k + 'z'] = cs > 0 ? 0.22 : -0.22; t['sh' + k + 'y'] = cs > 0 ? 0.25 : -0.25; t['el' + k] = -1.85; }
      this.ballAnchor.position.set(-0.17 * cs, 0.1, 0.18);
    }
    let L = 15;
    switch (st) {
      case 'step': {
        const k = smooth01(a.t / 0.1) * (1 - smooth01((a.t - 0.24) / 0.14));
        t.bodyZ = a.side * 0.38 * k; t.hipLz = (0.02 + 0.3 * k); t.hipRz = -(0.02 + 0.3 * k); t.twist = -a.side * 0.25 * k;
        t.bodyY -= 0.08 * k; t.knL += 0.3 * k; t.knR += 0.3 * k; t.headY = -a.side * 0.2 * k; L = 26; break;
      }
      case 'fend': {
        const k = Math.min(1, a.t / 0.08) * (1 - smooth01((a.t - 0.35) / 0.15));
        const armK = pl.carrySide > 0 ? 'L' : 'R', sg = armK === 'L' ? 1 : -1;
        t['sh' + armK + 'x'] = lerp(t['sh' + armK + 'x'], -1.45, k); t['sh' + armK + 'z'] = sg * 0.3 * k; t['sh' + armK + 'y'] = 0;
        t['el' + armK] = lerp(t['el' + armK], -0.05, k);
        t.twist = -sg * 0.35 * k; t.lean += 0.1 * k; t.headY = sg * 0.2 * k; L = 24; break;
      }
      case 'bump': {
        const k = Math.min(1, a.t / 0.1) * (1 - smooth01((a.t - 0.4) / 0.15));
        t.lean = lerp(t.lean, 0.7, k); t.chestX += 0.2 * k; t.twist = 0.5 * k * -pl.carrySide; t.headX = -0.2 * k; t.bodyY -= 0.12 * k;
        const k2 = pl.carrySide > 0 ? 'L' : 'R'; t['sh' + k2 + 'x'] = lerp(t['sh' + k2 + 'x'], -0.3, k); t['el' + k2] = lerp(t['el' + k2], -1.9, k); L = 22; break;
      }
      case 'lunge': {
        const k = Math.min(1, a.t / 0.12);
        t.bodyX = 0.35 * k; t.bodyY = -0.22 * k; t.lean = 0.45; t.chestX = 0.25;
        t.shLx = t.shRx = -1.35; t.shLz = 0.55; t.shRz = -0.55; t.shLy = -0.5; t.shRy = 0.5; t.elL = t.elR = -0.7;
        t.hipL = -0.9; t.hipR = 0.45; t.knL = 0.9; t.knR = 0.35; t.headX = -0.6; L = 26; break;
      }
      case 'dive': {
        const k = Math.min(1, a.t / 0.18);
        t.bodyX = 1.3 * k; t.bodyY = -0.5 * k; t.lean = 0.05; t.chestX = -0.1;
        t.shLx = t.shRx = -2.6; t.shLz = 0.3; t.shRz = -0.3; t.shLy = t.shRy = 0; t.elL = t.elR = -0.25;
        t.hipL = 0.15; t.hipR = 0.3; t.knL = 0.25; t.knR = 0.5; t.headX = -1.0; L = 22; break;
      }
      case 'tackling': {
        // wrap up; as the tackle completes, go to ground on top of the carrier
        this.wrap(t, time, 1);
        const f = smooth01(a.fall ?? 0);
        if (f > 0) { this.ground(this._a, 1, 1, 0.16); this.blend(t, this._a, f); }
        L = 18; break;
      }
      case 'tackled': {
        const drive = pl.legDriveVis, s = Math.sin(this.phase), dir = a.faceUp ? -1 : 1;
        t.lean = 0.42; t.chestX = 0.15; t.bodyY = -0.1; t.bodyX = 0.05;
        t.hipL = -0.45 - s * 0.5 * drive; t.hipR = -0.45 + s * 0.5 * drive;
        t.knL = 0.6 + Math.max(0, -Math.cos(this.phase)) * 0.8 * drive; t.knR = 0.6 + Math.max(0, Math.cos(this.phase)) * 0.8 * drive;
        const free = pl.carrySide > 0 ? 'L' : 'R';
        t['sh' + free + 'x'] = -0.9; t['sh' + free + 'z'] = free === 'L' ? 0.5 : -0.5; t['el' + free] = -0.5;
        t.headX = -0.3;
        this.phase += dt * 9 * drive;
        // knees buckle, then the fall
        const f = a.fall ?? 0, buckle = smooth01(f / 0.55), down = smooth01((f - 0.3) / 0.7);
        t.bodyY -= 0.18 * buckle; t.knL += 0.4 * buckle; t.knR += 0.4 * buckle;
        if (down > 0) { this.ground(this._a, 1, dir, 0, pl.hasBall ? pl.carrySide : 0); this.blend(t, this._a, down); }
        L = 14; break;
      }
      case 'ground': {
        const f = smooth01(a.fall ?? 1);
        this.ground(this._a, 1, a.faceUp ? -1 : 1, a.pile || 0, pl.hasBall ? pl.carrySide : 0);
        this.blend(t, this._a, Math.max(f, 0.001));
        L = 9; break;
      }
      case 'getup': {
        if (a.quick) break; // e.g. scrum breaking up: just straighten
        // roll to one knee, then stand
        const u = clamp(a.t / (a.dur || 0.45), 0, 1), dir = a.faceUp ? -1 : 1;
        this.ground(this._a, 1, dir, a.pile || 0); this.kneel(this._b);
        if (u < 0.5) { this.blend(this._b, this._a, 1 - smooth01(u / 0.5)); this.blend(t, this._b, 1); }
        else this.blend(t, this._b, 1 - smooth01((u - 0.5) / 0.5));
        L = 18; break;
      }
      case 'ptb': {
        t.bodyX = 0.1; t.lean = 0.5; t.chestX = 0.35; t.shLx = t.shRx = -0.55; t.shLz = 0.2; t.shRz = -0.2; t.shLy = t.shRy = 0; t.elL = t.elR = -0.5;
        t.knL = t.knR = 0.45; t.hipL = t.hipR = -0.45; t.hipLz = 0.12; t.hipRz = -0.12;
        if (a.roll > 0) { const r = Math.sin(clamp(a.roll, 0, 1) * Math.PI); t.hipR = -0.45 + r * 1.0; t.knR = 0.45 + r * 0.7; }
        t.bodyY = -0.12; t.headX = -0.4; L = 10; break;
      }
      case 'kick': case 'goalkick': {
        const kt = a.kt ?? 0; // seconds since kick start
        const leg = a.foot === 'L' ? 'L' : 'R', other = leg === 'L' ? 'R' : 'L';
        let hipA, knA;
        if (kt < 0.16) { const k = kt / 0.16; hipA = lerp(0, 0.9, k); knA = lerp(0.2, 1.5, k); }
        else if (kt < 0.24) { const k = (kt - 0.16) / 0.08; hipA = lerp(0.9, -1.2, k); knA = lerp(1.5, 0.1, k); }
        else { const k = clamp((kt - 0.24) / 0.3, 0, 1); hipA = lerp(-1.6, -0.2, k); knA = lerp(0.05, 0.3, k); }
        if (a.preKick) { hipA = 0; knA = 0.15; }
        t['hip' + leg] = hipA; t['kn' + leg] = knA; t['hip' + other] = 0.1; t['kn' + other] = 0.25;
        t.shLz = 0.9; t.shRz = -0.9; t.shLx = t.shRx = -0.2; t.shLy = t.shRy = 0; t.elL = t.elR = -0.3;
        t.lean = kt > 0.16 && kt < 0.4 ? -0.15 : 0.15; t.chestX = 0; t.headX = 0.25;
        if (!a.preKick && kt < 0.6) { t.bodyY = 0; t.bodyZ = 0; }
        twoHand = 0; L = 30; break;
      }
      case 'celebrate': {
        const b = Math.abs(Math.sin(time * 7 + this.phase));
        t.shLx = t.shRx = -2.8; t.shLz = 0.3; t.shRz = -0.3; t.elL = t.elR = -0.2; t.bodyY = b * 0.25; t.lean = -0.1; t.headX = -0.3;
        t.knL = t.knR = 0.3 * (1 - b); break;
      }
      case 'scrum': {
        t.lean = 0.7; t.chestX = 0.55; t.bodyY = -0.3; t.shLx = t.shRx = -1.3; t.shLz = 0.5; t.shRz = -0.5; t.elL = t.elR = -0.6;
        t.hipL = -0.85 + Math.sin(time * 3 + this.phase) * 0.1; t.hipR = -0.7; t.knL = 1.1; t.knR = 1.0; t.headX = -0.6; break;
      }
      case 'signal': {
        t.shRx = -2.6; t.shRz = -0.2; t.elR = -0.05; break;
      }
    }
    if (twoHand) {
      // ball held in front in both hands, ready to give it
      t.shLx = -0.55; t.shRx = -0.55; t.shLz = -0.05; t.shRz = 0.05; t.shLy = -0.55; t.shRy = 0.55; t.elL = t.elR = -1.25;
    }
    const upright = !['ground', 'getup', 'tackled', 'tackling', 'dive'].includes(st);
    if (pl.pendingPass && upright) {
      // wind-up: swing the ball across to the hip away from the target
      const side = pl.pendingPass.side, k = smooth01(1 - pl.pendingPass.t / pl.pendingPass.dur);
      t.twist = -side * 0.55 * k; t.chestX += 0.1 * k; t.headY = side * 0.5;
      t.shLz = lerp(t.shLz, -side * 0.35, k); t.shRz = lerp(t.shRz, -side * 0.35, k);
      t.shLx = lerp(t.shLx, -0.35, k); t.shRx = lerp(t.shRx, -0.35, k); L = 30;
    } else if (pl.passAnim > 0 && upright) {
      // release + follow-through: arms sweep across and point at the receiver
      const u = 1 - clamp(pl.passAnim / 0.35, 0, 1), k = u < 0.6 ? 1 : 1 - smooth01((u - 0.6) / 0.4), side = pl.passSide; // +1 = to model's left
      t.shLx = lerp(t.shLx, -1.3, k); t.shRx = lerp(t.shRx, -1.3, k); t.elL = lerp(t.elL, -0.12, k); t.elR = lerp(t.elR, -0.12, k);
      t.shLy = lerp(t.shLy, 0, k); t.shRy = lerp(t.shRy, 0, k);
      t.shLz = lerp(t.shLz, 0.12 + side * 0.55, k); t.shRz = lerp(t.shRz, -0.12 + side * 0.55, k);
      t.twist = lerp(t.twist, side * 0.5, k); t.headY = side * 0.55 * k; L = 26;
    }
    if (pl.catchAnim > 0 && !['ground', 'getup'].includes(st)) {
      const k = Math.min(1, pl.catchAnim / 0.15);
      t.shLx = lerp(t.shLx, pl.catchHigh ? -2.6 : -1.2, k); t.shRx = lerp(t.shRx, pl.catchHigh ? -2.6 : -1.2, k);
      t.elL = lerp(t.elL, -0.5, k); t.elR = lerp(t.elR, -0.5, k); t.shLz = 0.15; t.shRz = -0.15; t.shLy = -0.3; t.shRy = 0.3;
    }
    if (pl.refSignal > 0) { t.shRx = -2.7; t.elR = -0.05; t.shRz = -0.25; }
    // eyes on the ball when not carrying it
    if (ball && !pl.hasBall && upright && st !== 'kick' && st !== 'goalkick') {
      const rel = wrapAngle(Math.atan2(ball.x - pl.p.x, ball.z - pl.p.z) - pl.heading);
      t.headY = clamp(rel, -1.0, 1.0) * 0.8; t.twist += clamp(rel, -1, 1) * 0.12;
    }
    // coming up off the ground blends more slowly so players don't pop upright
    if ((this.lastSt === 'ground' || this.lastSt === 'getup' || this.lastSt === 'tackled') && upright) this.blendL = 7;
    this.blendL = damp(this.blendL, L, 3, dt);
    this.lastSt = st;
    this.twoHand = damp(this.twoHand, twoHand, 22, dt);
    const j = this.j, Lb = Math.min(L, this.blendL);
    for (const k of POSE_KEYS) j[k] = damp(j[k], t[k], Lb, dt);
    this.body.rotation.set(j.bodyX, 0, j.bodyZ);
    this.body.position.y = HIP_H + j.bodyY + (pl.jumpY || 0);
    this.spine.rotation.set(j.lean * 0.5, j.twist * 0.5, 0);
    this.chest.rotation.set(j.lean * 0.5 + j.chestX, j.twist * 0.5, 0);
    this.head.rotation.set(j.headX - j.lean * 0.4 - j.chestX * 0.5, j.headY, 0);
    this.armL.sh.rotation.set(j.shLx, j.shLy, j.shLz); this.armR.sh.rotation.set(j.shRx, j.shRy, j.shRz);
    this.armL.el.rotation.x = j.elL; this.armR.el.rotation.x = j.elR;
    this.legL.hip.rotation.set(j.hipL, 0, j.hipLz); this.legR.hip.rotation.set(j.hipR, 0, j.hipRz);
    this.legL.knee.rotation.x = j.knL; this.legR.knee.rotation.x = j.knR;
    const lying = clamp(-j.bodyY / 0.7, 0, 1);
    this.shadow.scale.set(1 + lying * 0.3, 1 + lying * 0.9, 1);
    this.shadow.position.z = Math.sin(j.bodyX) * 0.45;
  }

  blend(t, src, k) { for (const key of POSE_KEYS) t[key] = lerp(t[key], src[key], k); }
}
