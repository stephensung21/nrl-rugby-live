// Small math + RNG helpers shared by every module.
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const sign = (v) => (v < 0 ? -1 : 1);
export const smooth01 = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };

export function wrapAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}
export function dampAngle(a, b, lambda, dt) {
  return a + wrapAngle(b - a) * (1 - Math.exp(-lambda * dt));
}
// heading convention: forward = (sin h, 0, cos h)  (matches three.js rotation.y for a +z facing model)
export const headingOf = (x, z) => Math.atan2(x, z);
export const fwdX = (h) => Math.sin(h);
export const fwdZ = (h) => Math.cos(h);

export const dist2D = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);

// Seeded RNG (mulberry32) so matches can be reproduced in tests.
let seed = (Date.now() ^ 0x5bd1e995) >>> 0;
export function setSeed(s) { seed = (s >>> 0) || 1; }
export function rand() {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
export const randRange = (a, b) => a + (b - a) * rand();
export const randInt = (a, b) => Math.floor(randRange(a, b + 1));
export const chance = (p) => rand() < p;
export const pick = (arr) => arr[Math.floor(rand() * arr.length)];
export function gauss() {
  let u = 0, v = 0;
  while (u === 0) u = rand();
  while (v === 0) v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
