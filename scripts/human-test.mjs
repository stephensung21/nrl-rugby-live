// Drives the real keyboard controls through a match: menu → kick-off → attack/defence inputs → set pieces.
import { createServer } from 'node:http';
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = process.cwd();
const server = createServer((req, res) => {
  const p = join(root, req.url.split('?')[0] === '/' ? 'index.html' : req.url.split('?')[0]);
  if (!existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }[extname(p)] || 'application/octet-stream' }); res.end(readFileSync(p));
}).listen(0);
const shots = process.env.SHOTS || '';
if (shots) mkdirSync(shots, { recursive: true });
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message + '\n' + e.stack));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto(`http://localhost:${server.address().port}/index.html?test&seed=${process.env.SEED || 7}&speed=${process.env.SPEED || 3}`);
await page.waitForFunction(() => window.__game && window.__game.match);
await page.waitForTimeout(800);
if (shots) await page.screenshot({ path: `${shots}/menu.png` });
// shorten the halves: move to "Half length" row and pick 3 min (default index 1 = 5 min → press left)
for (let i = 0; i < 3; i++) await page.keyboard.press('ArrowDown');
await page.keyboard.press('ArrowLeft');
await page.keyboard.press('Enter');
await page.waitForTimeout(500);
const tap = async (k, ms = 60) => { await page.keyboard.down(k); await page.waitForTimeout(ms); await page.keyboard.up(k); };
const state = () => page.evaluate(() => {
  const m = window.__game.match; const c = m.controlled; const b = m.ball;
  return { phase: m.phase, stage: m.pd && m.pd.stage, over: m.over, humanKicks: m.pd && m.pd.team && m.pd.team.human,
    attacking: b.carrier ? b.carrier.team.human : null, carrierIsMe: b.carrier && b.carrier === c, modal: !document.querySelector('.modal').classList.contains('hidden'),
    score: m.teams.map((t) => t.score).join('-'), clock: m.clockText(), half: m.half };
});
const seen = new Set();
let shotN = 0;
const t0 = Date.now();
const LIMIT = +(process.env.LIMIT || 150) * 1000;
while (Date.now() - t0 < LIMIT) {
  const s = await state();
  seen.add(s.phase + (s.stage ? ':' + s.stage : ''));
  if (s.over) { if (shots) await page.screenshot({ path: `${shots}/fulltime.png` }); break; }
  if (s.modal) { if (shots && shotN < 12) await page.screenshot({ path: `${shots}/modal-${shotN++}.png` }); await tap('Digit1'); await tap('Enter'); await page.waitForTimeout(300); continue; }
  if ((s.phase === 'kickoff' || s.phase === 'touchKick') && s.humanKicks && s.stage === 'aim') {
    await tap('KeyD', 150); await page.keyboard.down('KeyG'); await page.waitForTimeout(450); await page.keyboard.up('KeyG'); continue;
  }
  if (s.phase === 'goalKick' && s.humanKicks) {
    if (s.stage === 'place') { await tap('KeyS', 200); if (shots && shotN < 12) await page.screenshot({ path: `${shots}/goal-${shotN++}.png` }); await tap('Space'); }
    else if (s.stage === 'aim') { await tap('KeyV'); await tap('KeyW', 100); await page.keyboard.down('Space'); await page.waitForTimeout(380); if (shots && shotN < 12) await page.screenshot({ path: `${shots}/power-${shotN++}.png` }); await page.keyboard.up('Space'); }
    await page.waitForTimeout(200); continue;
  }
  if (s.phase === 'play' && s.carrierIsMe) {
    await page.keyboard.down('KeyW'); await page.keyboard.down('ShiftLeft');
    const r = Math.random();
    if (r < 0.25) await tap(Math.random() < 0.5 ? 'KeyQ' : 'KeyE');
    else if (r < 0.32) await tap('KeyE', 350);
    else if (r < 0.45) await tap('Space');
    else if (r < 0.55) await tap('KeyF');
    else if (r < 0.62) await tap('KeyR');
    else if (r < 0.66) await tap('KeyX');
    else if (r < 0.74) { await tap('Digit' + (1 + Math.floor(Math.random() * 4))); await page.keyboard.down('KeyG'); await tap('KeyA', 200); if (shots && shotN < 12) await page.screenshot({ path: `${shots}/kickaim-${shotN++}.png` }); await page.waitForTimeout(300); await page.keyboard.up('KeyG'); }
    else await page.waitForTimeout(250);
    await page.keyboard.up('ShiftLeft');
    continue;
  }
  if (s.phase === 'play' && s.attacking === false) {
    await page.keyboard.down('KeyW');
    const r = Math.random();
    if (r < 0.4) await tap('Space'); else if (r < 0.5) await tap('KeyF'); else if (r < 0.6) await tap('KeyR'); else if (r < 0.7) await tap('KeyQ'); else if (r < 0.75) await tap('KeyE');
    await page.waitForTimeout(120);
    await page.keyboard.up('KeyW');
    continue;
  }
  if (shots && shotN < 12 && Math.random() < 0.03) await page.screenshot({ path: `${shots}/play-${shotN++}.png` });
  await page.waitForTimeout(120);
}
const fin = await state();
const ev = await page.evaluate(() => { const c = {}; for (const e of window.__game.match.eventLog) c[e.type] = (c[e.type] || 0) + 1; return c; });
console.log('final', JSON.stringify(fin));
console.log('phases seen', [...seen].sort().join(', '));
console.log('events', JSON.stringify(ev));
if (errors.length) console.log('\nERRORS:\n' + [...new Set(errors)].slice(0, 12).join('\n'));
await browser.close(); server.close();
process.exit(errors.length ? 1 : 0);
