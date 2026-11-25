// Headless smoke test: loads the game, fast-simulates CPU v CPU matches and checks the rules engine
// produced a sensible match (tackles, play-the-balls, kicks, scoring) without runtime errors.
import { createServer } from 'node:http';
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = process.cwd();
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = createServer((req, res) => {
  const p = join(root, decodeURIComponent(req.url.split('?')[0]) === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]));
  if (!existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); res.end(readFileSync(p));
}).listen(0);
const port = server.address().port;
const shots = process.env.SHOTS || '';
if (shots) mkdirSync(shots, { recursive: true });

const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message + '\n' + e.stack));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

const seeds = (process.env.SEEDS || '1,2,3').split(',').map(Number);
let failed = false;
for (const seed of seeds) {
  await page.goto(`http://localhost:${port}/index.html?autoplay&test&seed=${seed}&half=${process.env.HALF || 4}`);
  await page.waitForFunction(() => window.__game && window.__game.match, null, { timeout: 20000 });
  await page.evaluate(() => window.__game.setSpeed(0));
  if (shots) { await page.evaluate(() => window.__game.sim(6)); await page.waitForTimeout(400); await page.screenshot({ path: `${shots}/seed${seed}-a.png` }); }
  let res;
  for (let i = 0; i < 400; i++) {
    res = await page.evaluate(() => window.__game.sim(15));
    if (res.over) break;
    if (shots && i === 6) { await page.evaluate(() => window.__game.setSpeed(1)); await page.waitForTimeout(600); await page.evaluate(() => window.__game.setSpeed(0)); await page.screenshot({ path: `${shots}/seed${seed}-b.png` }); }
  }
  const info = await page.evaluate(() => {
    const m = window.__game.match;
    const counts = {};
    for (const e of m.eventLog) counts[e.type] = (counts[e.type] || 0) + 1;
    const ptbT = m.eventLog.filter((e) => e.type === 'ptb').map((e) => e.t); let gaps = []; for (let i = 1; i < ptbT.length; i++) gaps.push(ptbT[i] - ptbT[i - 1]); gaps.sort((a, b) => a - b);
    const medGap = gaps.length ? gaps[Math.floor(gaps.length / 2)].toFixed(1) : '-';
    const notes = m.eventLog.filter((e) => ['fumble','error','beaten','penalty'].includes(e.type)).map((e) => `${e.type}:${e.team}:${e.note || e.how || e.why || ''}`);
    return { medGap, notes, counts, stats: m.teams.map((t) => ({ team: t.short, score: t.score, ...t.stats, possT: Math.round(t.stats.possT) })), last: m.eventLog.slice(-12) };
  });
  console.log(`\n=== seed ${seed}: ${JSON.stringify(res)}`);
  console.log('events (last 400):', JSON.stringify(info.counts), 'median PTB gap', info.medGap);
  for (const s of info.stats) console.log(JSON.stringify(s));
  if (process.env.NOTES) console.log(info.notes.join('\n'));
  if (!res.over) { console.log('!! match did not finish'); console.log(JSON.stringify(info.last)); failed = true; }
}
if (errors.length) { console.log('\nERRORS:\n' + [...new Set(errors)].slice(0, 15).join('\n')); failed = true; }
await browser.close(); server.close();
console.log(failed ? '\nSMOKE TEST FAILED' : '\nSMOKE TEST PASSED');
process.exit(failed ? 1 : 0);
