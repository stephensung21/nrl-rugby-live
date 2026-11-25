// Dev tool: renders close-up screenshots of players mid-play so animation / model changes can be eyeballed.
// usage: SHOTS=dir node scripts/pose-shots.mjs
import { createServer } from 'node:http';
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = process.cwd();
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  const p = join(root, u === '/' ? 'index.html' : u);
  if (!existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); res.end(readFileSync(p));
}).listen(0);
const port = server.address().port;
const out = process.env.SHOTS || 'shots';
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1100, height: 700 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message + '\n' + e.stack));
await page.goto(`http://localhost:${port}/index.html?autoplay&test&seed=${process.env.SEED || 3}&half=5`);
await page.waitForFunction(() => window.__game && window.__game.match, null, { timeout: 20000 });
await page.evaluate(() => window.__game.setSpeed(0));
await page.evaluate(() => window.__game.sim(4));

// run the sim in small steps and grab frames whenever an event of interest is live
const want = (process.env.WANT || 'tackled,tackling,ground,pass,run,ptb').split(',');
const got = {};
for (let i = 0; i < 2400 && Object.keys(got).length < want.length * 2; i++) {
  const hit = await page.evaluate((want) => {
    const g = window.__game, m = g.match;
    for (let k = 0; k < 3; k++) m.update(1 / 60);
    const pick = (p) => p && { x: p.p.x, z: p.p.z, h: p.heading };
    for (const w of want) {
      let p = null;
      if (w === 'pass') p = m.players.find((q) => q.passAnim > 0.12 || q.pendingPass);
      else if (w === 'run') p = m.ball.carrier && m.ball.carrier.speedH > 5 ? m.ball.carrier : null;
      else p = m.players.find((q) => q.state === w && (w !== 'ground' || q.anim.fall > 0.9));
      if (p) return { w, ...pick(p), extra: w === 'tackled' ? +(p.engage?.progress ?? 0).toFixed(2) : 0 };
    }
    return null;
  }, want);
  if (!hit) continue;
  const n = (got[hit.w] = (got[hit.w] || 0) + 1);
  if (n > 2) continue;
  await page.evaluate((hit) => {
    const g = window.__game, side = { x: -Math.cos(hit.h), z: Math.sin(hit.h) };
    const ang = +(new URLSearchParams(location.search).get('seed') || 0) * 0.7 + (window.__shotN = (window.__shotN || 0) + 1) * 1.1;
    g.camRig.override = { pos: [hit.x + Math.cos(ang) * 4.6, 2.3, hit.z + Math.sin(ang) * 4.6], tgt: [hit.x, 0.7, hit.z] };
    // hide everyone not involved so the subject is visible
    for (const q of g.match.players) q.model.root.visible = Math.hypot(q.p.x - hit.x, q.p.z - hit.z) < 2.6;
    g.setSpeed(0);
  }, hit);
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${out}/${hit.w}-${n}${hit.extra ? '-p' + hit.extra : ''}.png` });
  await page.evaluate(() => { window.__game.camRig.override = null; for (const q of window.__game.match.players) q.model.root.visible = true; });
  // skip ahead so the next grab is a different moment
  await page.evaluate(() => { for (let k = 0; k < 40; k++) window.__game.match.update(1 / 60); });
}
console.log('captured', JSON.stringify(got));
if (errors.length) console.log('ERRORS', errors.slice(0, 5).join('\n'));
await browser.close(); server.close();
