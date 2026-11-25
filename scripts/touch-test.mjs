// Drives the on-screen touch controls on an emulated phone (landscape): joystick, swipes, buttons, set pieces.
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
const ctx = await browser.newContext({ viewport: { width: 844, height: 390 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message + '\n' + e.stack));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto(`http://localhost:${server.address().port}/index.html?test&seed=6`);
await page.waitForFunction(() => window.__game && window.__game.match);
await page.waitForTimeout(500);
await page.tap('button[data-a="start"]');
await page.waitForTimeout(800);
const log = (...a) => console.log(...a);
// synthetic pointer helpers (multi-touch capable)
const ptr = (sel, type, x, y, id = 1) => page.evaluate(([sel, type, x, y, id]) => {
  const elm = document.querySelector(sel); const r = elm.getBoundingClientRect();
  const cx = x ?? r.left + r.width / 2, cy = y ?? r.top + r.height / 2;
  elm.dispatchEvent(new PointerEvent(type, { pointerId: id, pointerType: 'touch', clientX: cx, clientY: cy, bubbles: true, cancelable: true }));
}, [sel, type, x, y, id]);
const hold = async (sel, ms, id = 3) => { await ptr(sel, 'pointerdown', null, null, id); await page.waitForTimeout(ms); await ptr(sel, 'pointerup', null, null, id); };
const st = () => page.evaluate(() => { const m = window.__game.match; return { phase: m.phase, stage: m.pd.stage, touch: document.querySelector('.touchpad').classList.contains('show'), events: m.eventLog.slice(-6).map((e) => e.type + (e.kind ? ':' + e.kind : '')).join(' ') }; });
const waitFor = async (f, ms = 15000) => { const t = Date.now(); while (Date.now() - t < ms) { if (await page.evaluate(f)) return true; await page.waitForTimeout(100); } return false; };
const kicks = () => page.evaluate(() => window.__game.match.eventLog.filter((e) => e.type === 'kick').length);
const passes = () => page.evaluate(() => window.__game.match.eventLog.filter((e) => e.type === 'pass').length);
log('touch overlay visible:', (await st()).touch);

// 1. kick-off: hold LONG
await page.evaluate(() => { const m = window.__game.match; m.setupKickoff(m.humanTeam); });
await waitFor(() => window.__game.match.phase === 'kickoff' && window.__game.match.pd.stage === 'aim');
if (shots) await page.screenshot({ path: `${shots}/t1-kickoff.png` });
let k0 = await kicks();
await hold('.fa', 650);
await waitFor(() => window.__game.match.phase === 'play');
log('kick-off by touch:', (await kicks()) > k0 ? 'ok' : 'FAILED');

// 2. ball in hand: joystick forward, swipe to step, tap pass
const giveBall = async () => {
  await page.evaluate(() => { const m = window.__game.match; m.setPhase('play', {}); m.setupPTB(m.humanTeam, { x: m.humanTeam.dir * -15, z: 0 }, { restart: true, zero: true }); });
  await waitFor(() => { const m = window.__game.match; return m.phase === 'play' && m.ball.carrier === m.controlled; });
  await page.evaluate(() => { const m = window.__game.match; for (const d of m.humanTeam.opp.players) { d.p.x += m.humanTeam.dir * 16; d.v.set(0, 0, 0); } });
};
await giveBall();
await ptr('.tp-left', 'pointerdown', 150, 300, 1);
await ptr('.tp-left', 'pointermove', 150, 238, 1);           // full push = sprint
await page.waitForTimeout(400);
if (shots) await page.screenshot({ path: `${shots}/t2-run.png` });
const sp = await page.evaluate(() => ({ v: window.__game.match.controlled.speedH.toFixed(1), sprint: window.__game.input.state.sprint }));
log('joystick run speed', sp.v, 'sprinting', sp.sprint);
const stepsBefore = await page.evaluate(() => window.__game.match.controlled.cd.step);
await ptr('.tp-right', 'pointerdown', 560, 300, 2); await ptr('.tp-right', 'pointermove', 620, 300, 2); await ptr('.tp-right', 'pointerup', 620, 300, 2);
await page.waitForTimeout(150);
log('swipe → sidestep:', (await page.evaluate(() => window.__game.match.controlled.cd.step)) > stepsBefore ? 'ok' : 'FAILED');
let p0 = await passes();
await hold('.ppr', 80);
await page.waitForTimeout(500);
log('tap PASS ▶:', (await passes()) > p0 ? 'ok' : 'FAILED');
await ptr('.tp-left', 'pointerup', 150, 238, 1);

// 3. aimed kick: AIM then hold PUNT
await giveBall();
await ptr('.saim', 'pointerdown'); await ptr('.saim', 'pointerup');
k0 = await kicks();
await ptr('.fa', 'pointerdown', null, null, 4); await page.waitForTimeout(500);
if (shots) await page.screenshot({ path: `${shots}/t3-aim.png` });
await ptr('.fa', 'pointerup', null, null, 4); await page.waitForTimeout(300);
log('AIM + hold PUNT:', (await kicks()) > k0 ? 'ok' : 'FAILED', await page.evaluate(() => window.__game.match.eventLog.filter((e) => e.type === 'kick').slice(-1)[0]?.kind));

// 4. defence labels + tackle button
await page.evaluate(() => { const m = window.__game.match; m.setPhase('play', {}); m.setupPTB(m.humanTeam.opp, { x: 0, z: 0 }, { restart: true, zero: true }); });
await waitFor(() => { const m = window.__game.match; return m.phase === 'play' && m.ball.carrier && m.ball.carrier.team !== m.humanTeam; });
const labels = await page.evaluate(() => [...document.querySelectorAll('.tp-btn.face, .tp-btn.pill')].map((b) => b.textContent).join(' | '));
log('defence labels:', labels);
await hold('.fa', 80);

// 5. conversion: SET then hold KICK
await page.evaluate(() => { const m = window.__game.match; m.setPhase('play', {}); m.setupGoalKick(m.humanTeam, 'conversion', m.humanTeam.dir * 50, 10); });
await waitFor(() => window.__game.match.phase === 'goalKick' && window.__game.match.pd.stage === 'place');
await hold('.fa', 80);
await waitFor(() => window.__game.match.pd.stage === 'aim');
await hold('.fa', 700);
await waitFor(() => window.__game.match.pd.stage === 'result', 10000);
log('conversion by touch:', (await st()).stage === 'result' ? 'ok' : 'FAILED', await page.evaluate(() => document.querySelector('.msg-main').textContent));
if (shots) await page.screenshot({ path: `${shots}/t5-goal.png` });

// 6. portrait shows the rotate prompt
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(300);
log('portrait rotate prompt:', await page.evaluate(() => document.querySelector('.rotate').classList.contains('show')));
if (shots) await page.screenshot({ path: `${shots}/t6-portrait.png` });
if (errors.length) console.log('\nERRORS:\n' + [...new Set(errors)].slice(0, 10).join('\n'));
await browser.close(); server.close();
process.exit(errors.length ? 1 : 0);
