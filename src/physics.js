// Pure ball-flight physics (no DOM / three.js) so it can also be used for AI prediction and tests.
import { BALL, FIELD, GRAVITY } from './config.js';

// state: { p:{x,y,z}, v:{x,y,z}, curve, drag }  wind: {x,z}
export function stepFlight(s, dt, wind) {
  const v = s.v, p = s.p;
  const hFac = Math.min(1, 0.35 + p.y / 10);           // wind is stronger higher up
  const wx = wind.x * BALL.windMul * hFac, wz = wind.z * BALL.windMul * hFac;
  const rx = v.x - wx, ry = v.y, rz = v.z - wz;
  const sp = Math.hypot(rx, ry, rz);
  const k = (s.drag ?? 1) * BALL.drag * sp;
  let ax = -k * rx, ay = -GRAVITY - k * ry, az = -k * rz;
  if (s.curve) {
    const hs = Math.hypot(v.x, v.z);
    if (hs > 0.5) {
      // left of travel = (fz, 0, -fx); positive curve bends left
      const fx = v.x / hs, fz = v.z / hs, m = s.curve * Math.min(1, hs / 18);
      ax += fz * m; az += -fx * m;
    }
    s.curve *= Math.exp(-0.25 * dt);
  }
  v.x += ax * dt; v.y += ay * dt; v.z += az * dt;
  p.x += v.x * dt; p.y += v.y * dt; p.z += v.z * dt;
}

// Simulate a flight without randomness. Returns the first point where the ball comes down through
// `catchH` (descending) and the ground landing point.
export function predictFlight(p0, v0, curve, wind, drag = 1, catchH = 1.5, maxT = 8) {
  const s = { p: { ...p0 }, v: { ...v0 }, curve, drag };
  const dt = 1 / 60;
  let t = 0, catchPt = null;
  while (t < maxT) {
    stepFlight(s, dt, wind); t += dt;
    if (!catchPt && s.v.y < 0 && s.p.y <= catchH) catchPt = { x: s.p.x, y: s.p.y, z: s.p.z, t };
    if (s.p.y <= BALL.radius) return { catchPt: catchPt || { x: s.p.x, y: s.p.y, z: s.p.z, t }, land: { x: s.p.x, z: s.p.z, t }, vLand: { ...s.v } };
  }
  return { catchPt: catchPt || { ...s.p, t }, land: { x: s.p.x, z: s.p.z, t }, vLand: { ...s.v } };
}

// Distance a kick travels (no wind / curve) — used for aim reticles and AI power selection.
const rangeCache = {};
export function kickRange(kickDef, key, power, elev = kickDef.elev) {
  const ck = key + ':' + elev.toFixed(3);
  let table = rangeCache[ck];
  if (!table) {
    table = [];
    for (let i = 0; i <= 20; i++) {
      const sp = kickDef.vMin + (kickDef.vMax - kickDef.vMin) * (i / 20);
      const r = predictFlight({ x: 0, y: 0.5, z: 0 }, { x: Math.cos(elev) * sp, y: Math.sin(elev) * sp, z: 0 }, 0, { x: 0, z: 0 });
      table.push(r.land.x);
    }
    rangeCache[ck] = table;
  }
  const f = Math.max(0, Math.min(1, power)) * 20, i = Math.min(19, Math.floor(f));
  return table[i] + (table[i + 1] - table[i]) * (f - i);
}
export function powerForRange(kickDef, key, dist, elev = kickDef.elev) {
  let lo = 0, hi = 1;
  if (kickRange(kickDef, key, 1, elev) < dist) return 1;
  for (let i = 0; i < 18; i++) { const m = (lo + hi) / 2; if (kickRange(kickDef, key, m, elev) < dist) lo = m; else hi = m; }
  return (lo + hi) / 2;
}

// Goal posts collision. Returns true if the ball struck woodwork.
export function collidePosts(p, v) {
  let hit = false;
  for (const sx of [-FIELD.half, FIELD.half]) {
    if (Math.abs(p.x - sx) > 1.2) continue;
    for (const z0 of [-FIELD.postGap, FIELD.postGap]) {
      if (p.y > FIELD.postH) continue;
      const dx = p.x - sx, dz = p.z - z0, d = Math.hypot(dx, dz);
      const r = (p.y < 2 ? 0.26 : 0.08) + BALL.radius * 0.8;
      if (d < r && d > 1e-4) {
        const nx = dx / d, nz = dz / d, vn = v.x * nx + v.z * nz;
        if (vn < 0) { v.x -= 1.55 * vn * nx; v.z -= 1.55 * vn * nz; v.x *= 0.85; v.z *= 0.85; hit = true; }
        p.x = sx + nx * r; p.z = z0 + nz * r;
      }
    }
    if (Math.abs(p.z) < FIELD.postGap) {
      const dx = p.x - sx, dy = p.y - FIELD.crossbar, d = Math.hypot(dx, dy), r = 0.07 + BALL.radius * 0.8;
      if (d < r && d > 1e-4) {
        const nx = dx / d, ny = dy / d, vn = v.x * nx + v.y * ny;
        if (vn < 0) { v.x -= 1.5 * vn * nx; v.y -= 1.5 * vn * ny; hit = true; }
        p.x = sx + nx * r; p.y = FIELD.crossbar + ny * r;
      }
    }
  }
  return hit;
}
