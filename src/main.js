// Entry point: renderer, fixed-step simulation loop, menus and the attract-mode demo match.
import * as THREE from 'three';
import { DT } from './config.js';
import { setSeed, rand } from './util.js';
import { Input } from './input.js';
import { AudioFX } from './audio.js';
import { HUD } from './hud.js';
import { Menu, PauseMenu } from './menu.js';
import { CameraRig } from './camera.js';
import { buildStadium } from './stadium.js';
import { Match } from './match.js';
import { TEAMS } from './teams.js';

const params = new URLSearchParams(location.search);
if (params.get('seed')) setSeed(+params.get('seed'));
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: params.has('test') });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
app.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.3, 1600);
const input = new Input(), audio = new AudioFX(), camRig = new CameraRig(camera);
const hud = new HUD(app);
let scene = null, stadium = null, match = null, mode = 'menu', paused = false, acc = 0, lastCfg = null, screenKey = '';
let speed = +(params.get('speed') || 1);

function newMatch(cfg, demo = false) {
  hud.closeModal();
  scene = new THREE.Scene();
  const s = cfg.settings;
  stadium = buildStadium(scene, renderer, {
    time: s.time, homeName: cfg.homeDef.name, awayName: cfg.awayDef.name,
    homeColor: cfg.homeDef.primary, homeColor2: cfg.homeDef.secondary, awayColor: cfg.awayDef.primary, awayColor2: cfg.awayDef.secondary,
  });
  match = new Match({ scene, audio, hud, input, camRig, settings: { ...s, autoSwitch: true }, homeDef: cfg.homeDef, awayDef: cfg.awayDef, humanIdx: demo ? -1 : cfg.humanIdx });
  camRig.mode = demo ? 'behind' : s.camera;
  hud.attach(match);
  match.showResults = !demo;
  match.start();
  acc = 0; screenKey = '';
  window.__game.match = match; window.__game.scene = scene;
}

function demoConfig() {
  const a = Math.floor(rand() * TEAMS.length); let b = Math.floor(rand() * TEAMS.length); if (b === a) b = (a + 3) % TEAMS.length;
  return { homeDef: TEAMS[a], awayDef: TEAMS[b], humanIdx: -1, settings: { halfLen: 5, difficulty: 'normal', wind: 'breezy', time: 'day', camera: 'behind', goldenPoint: true } };
}
function startDemo() { mode = 'menu'; paused = false; pause.hide(); newMatch(demoConfig(), true); hud.setVisible(false); menu.show(); }
function startGame(cfg) {
  audio.init(); lastCfg = cfg; mode = 'playing'; paused = false;
  menu.hide(); pause.hide(); hud.setVisible(true);
  newMatch(cfg, cfg.humanIdx < 0 ? false : false);
}

const menu = new Menu(app, (cfg) => startGame(cfg));
const pause = new PauseMenu(app, {
  resume: () => setPaused(false),
  restart: () => { setPaused(false); startGame(lastCfg); },
  quit: () => startDemo(),
  camera: () => camRig.toggle(),
  cameraName: () => ({ behind: 'Behind play', broadcast: 'Broadcast', high: 'High' })[camRig.mode],
  sound: () => audio.setMuted(!audio.muted),
  soundName: () => (audio.muted ? 'Off' : 'On'),
  teams: () => (match ? match.teams.map((t) => t.def) : []),
});
hud.onMenu = () => startDemo();
hud.onRematch = () => startGame(lastCfg);
function setPaused(v) { paused = v; if (v) pause.show(); else pause.hide(); }

function globalKeys() {
  if (mode === 'playing' && input.pressed('pause') && !match.over) setPaused(!paused);
  if (mode === 'playing' && input.pressed('help') && !paused) { setPaused(true); pause.act('controls'); }
  if (input.pressed('camera') && mode === 'playing') camRig.toggle();
}
window.addEventListener('pointerdown', () => audio.init(), { once: false });
window.addEventListener('keydown', () => { if (mode === 'playing') audio.init(); });
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
});

function updateScreen() {
  const [a, b] = match.teams;
  const key = `${a.score}-${b.score}-${Math.floor(match.clock / 60)}-${match.half}`;
  if (key === screenKey) return;
  screenKey = key;
  stadium.drawScreen({ title: 'FOOTY 13 · LIVE', score: `${a.short} ${a.score} – ${b.score} ${b.short}`, sub: `${match.clockText()}  ${match.half === 1 ? '1st half' : match.half === 2 ? '2nd half' : 'Golden point'}`, foot: 'Grab a pie at Big Pie Co.' });
}

let last = performance.now(), time = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000); last = now; time += dt;
  if (match && mode === 'menu' && match.over && match.phaseT > 6 && !params.has('autoplay')) newMatch(demoConfig(), true);
  if (match && !paused) {
    acc += dt * speed;
    let steps = 0;
    const maxSteps = 10 * Math.max(1, speed);
    while (acc >= DT && steps < maxSteps) {
      input.poll(DT);
      globalKeys();
      if (paused) break;
      if (mode === 'menu') menu.update(input);
      hud.pollModal(input); hud.pollBreak(input);
      match.update(DT);
      acc -= DT; steps++;
    }
    if (steps >= maxSteps) acc = 0;
  } else {
    input.poll(dt); globalKeys();
    if (mode === 'menu') menu.update(input);
  }
  if (match) {
    match.syncVisuals(dt, time);
    camRig.update(dt, match);
    stadium.update(dt, time, match.wind, match.excite);
    audio.update(dt, mode === 'playing' ? match.excite : 0);
    hud.update(match, camera, dt);
    updateScreen();
    renderer.render(scene, camera);
  }
}

// test / debug hooks
window.__game = {
  match: null,
  input, camRig,
  sim(seconds) { const n = Math.round(seconds / DT); for (let i = 0; i < n; i++) match.update(DT); return this.summary(); },
  summary() { const [a, b] = match.teams; return { phase: match.phase, half: match.half, clock: match.clockText(), score: `${a.short} ${a.score}-${b.score} ${b.short}`, tackle: match.tackleCount, over: match.over }; },
  start(cfg) { startGame(cfg); },
  setSpeed(s) { speed = s; },
};

if (params.has('autoplay')) {
  const cfg = demoConfig();
  cfg.settings.halfLen = +(params.get('half') || 5);
  if (params.get('time')) cfg.settings.time = params.get('time');
  mode = 'playing'; lastCfg = cfg; menu.hide(); newMatch(cfg, true); hud.setVisible(true);
} else startDemo();
requestAnimationFrame(frame);
