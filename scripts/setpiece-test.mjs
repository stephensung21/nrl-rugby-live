// Exercises human-controlled set pieces directly: conversion, penalty choice (goal / touch / tap), kick-off, goal-line drop-out.
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
await page.goto(`http://localhost:${server.address().port}/index.html?test&seed=11`);
await page.waitForFunction(() => window.__game && window.__game.match);
await page.keyboard.press('Enter');
await page.waitForTimeout(600);
const st = () => page.evaluate(() => { const m = window.__game.match; return { phase: m.phase, stage: m.pd.stage, score: m.teams.map((t) => t.score).join('-'), poss: m.poss.short, human: m.humanTeam.short, tc: m.tackleCount, msg: document.querySelector('.msg-main').textContent }; });
const waitPhase = async (pred, ms = 15000) => { const t = Date.now(); while (Date.now() - t < ms) { const s = await st(); if (pred(s)) return s; await page.waitForTimeout(100); } return await st(); };
const tap = async (k, ms = 60) => { await page.keyboard.down(k); await page.waitForTimeout(ms); await page.keyboard.up(k); };
const log = (...a) => console.log(...a);

// 1. Kick-off by the human
await page.evaluate(() => { const m = window.__game.match; m.setupKickoff(m.humanTeam); });
let s = await waitPhase((s) => s.phase === 'kickoff' && s.stage === 'aim');
await tap('KeyA', 200);
if (shots) await page.screenshot({ path: `${shots}/1-kickoff-aim.png` });
await page.keyboard.down('KeyK'); await page.waitForTimeout(700);
if (shots) await page.screenshot({ path: `${shots}/1-kickoff-power.png` });
await page.keyboard.up('KeyK');
s = await waitPhase((s) => s.phase === 'play'); log('kick-off →', JSON.stringify(s));
await page.waitForTimeout(1500);
if (shots) await page.screenshot({ path: `${shots}/1-kickoff-flight.png` });

// 2. Conversion from wide out
await page.evaluate(() => { const m = window.__game.match; m.setupGoalKick(m.humanTeam, 'conversion', m.humanTeam.dir * 50, 24); });
s = await waitPhase((s) => s.phase === 'goalKick' && s.stage === 'place'); log('conversion stage', s.stage);
await tap('KeyS', 600);
if (shots) await page.screenshot({ path: `${shots}/2-conv-place.png` });
await tap('KeyK');
s = await waitPhase((s) => s.stage === 'aim');
await tap('KeyV'); await tap('KeyD', 150); await tap('KeyW', 150);
if (shots) await page.screenshot({ path: `${shots}/2-conv-aim.png` });
await page.keyboard.down('KeyK'); await page.waitForTimeout(800);
if (shots) await page.screenshot({ path: `${shots}/2-conv-power.png` });
await page.keyboard.up('KeyK');
await page.waitForTimeout(1200);
if (shots) await page.screenshot({ path: `${shots}/2-conv-flight.png` });
s = await waitPhase((s) => s.stage === 'result'); log('conversion result', JSON.stringify(s));
s = await waitPhase((s) => s.phase === 'kickoff'); log('after conversion →', s.phase);

// 3. Penalty: kick for goal (choice 1)
for (const [choice, key] of [['goal', 'Digit1'], ['touch', 'Digit2'], ['tap', 'Digit3']]) {
  await page.evaluate(() => { const m = window.__game.match; m.setPhase('play', {}); m.awardPenalty(m.humanTeam, m.humanTeam.dir * 22, -10, 'Test'); });
  s = await waitPhase((s) => s.phase === 'penaltyChoice');
  if (shots && choice === 'goal') await page.screenshot({ path: `${shots}/3-penalty-choice.png` });
  await tap(key);
  if (choice === 'goal') {
    s = await waitPhase((s) => s.phase === 'goalKick' && s.stage === 'aim');
    await page.keyboard.down('KeyK'); await page.waitForTimeout(650); await page.keyboard.up('KeyK');
    s = await waitPhase((s) => s.stage === 'result'); log('penalty goal', JSON.stringify(s));
  } else if (choice === 'touch') {
    s = await waitPhase((s) => s.phase === 'touchKick' && s.stage === 'aim');
    if (shots) await page.screenshot({ path: `${shots}/4-touch-aim.png` });
    await page.keyboard.down('KeyK'); await page.waitForTimeout(800); await page.keyboard.up('KeyK');
    s = await waitPhase((s) => s.phase === 'ptb' || s.phase === 'scrum', 12000); log('kick for touch →', JSON.stringify(s));
  } else {
    s = await waitPhase((s) => s.phase === 'play', 8000); log('tap →', JSON.stringify(s));
  }
}
// 4. goal-line drop-out kicked by the human
await page.evaluate(() => { const m = window.__game.match; m.setPhase('play', {}); m.whistleStop('TEST', '', { type: 'dropout', team: m.humanTeam }); });
s = await waitPhase((s) => s.phase === 'kickoff' && s.stage === 'aim');
await page.keyboard.down('KeyK'); await page.waitForTimeout(900); await page.keyboard.up('KeyK');
s = await waitPhase((s) => s.phase === 'play'); log('drop-out →', JSON.stringify(s));
// 4b. short kick-off with L
await page.evaluate(() => { const m = window.__game.match; m.setPhase('play', {}); m.setupKickoff(m.humanTeam); });
s = await waitPhase((s) => s.phase === 'kickoff' && s.stage === 'aim');
await page.keyboard.down('KeyL'); await page.waitForTimeout(500); await page.keyboard.up('KeyL');
s = await waitPhase((s) => s.phase === 'play'); log('short kick-off →', JSON.stringify(s), await page.evaluate(() => window.__game.match.eventLog.filter((e) => e.type === 'kick').slice(-1)[0].kind));
// 5. scrum
await page.evaluate(() => { const m = window.__game.match; m.scrumRestart(m.humanTeam, 0, 10, 'KNOCK ON', 'test'); });
s = await waitPhase((s) => s.phase === 'scrum');
await page.waitForTimeout(1500);
if (shots) await page.screenshot({ path: `${shots}/5-scrum.png` });
s = await waitPhase((s) => s.phase === 'play'); log('scrum →', JSON.stringify(s));
if (errors.length) console.log('\nERRORS:\n' + [...new Set(errors)].slice(0, 12).join('\n'));
await browser.close(); server.close();
process.exit(errors.length ? 1 : 0);
