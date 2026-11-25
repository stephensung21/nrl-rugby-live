// Title / match-setup / pause / controls screens.
import { TEAMS } from './teams.js';

const el = (tag, cls, parent, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; if (parent) parent.appendChild(e); return e; };

const touchOnly = () => { try { return matchMedia('(pointer: coarse)').matches && !matchMedia('(any-pointer: fine)').matches; } catch { return false; } };

export const CONTROLS = [
  ['Move', 'W A S D / Arrows', 'Left stick'],
  ['Sprint', 'Shift', 'RT'],
  ['— ATTACK —', '', ''],
  ['Pass left / right (tap)', 'Q / E', 'LB / RB'],
  ['Cut-out pass (hold)', 'Hold Q / E', 'Hold LB / RB'],
  ['Sidestep (push a direction)', 'Space or J', 'A'],
  ['Fend (hand-off)', 'F or K', 'B'],
  ['Shoulder charge', 'R or L', 'X'],
  ['Dummy pass', 'X or U', 'LT'],
  ['Kick: hold for power, steer aim', 'Hold G or I', 'Hold Y'],
  ['Kick type: punt / bomb / grubber / chip / field goal', '1-5 or Tab', 'D-pad ← →'],
  ['Kicking foot (left / right)', 'V or O', 'D-pad ↑'],
  ['In a tackle: offload / fight / leg drive', 'Q,E / F,R / mash Shift', 'LB,RB / B,X / mash RT'],
  ['Ground the ball in-goal', 'Space', 'A'],
  ['— DEFENCE —', '', ''],
  ['Tackle', 'Space or J', 'A'],
  ['Big hit (risky)', 'F or K', 'B'],
  ['Dive tackle', 'R or L', 'X'],
  ['Switch player (nearest / next)', 'Q / E', 'LB / RB'],
  ['— SET PIECES —', '', ''],
  ['Goal kick: move ball back', 'W / S', 'Left stick ↕'],
  ['Aim / height', 'A D / W S', 'Left stick'],
  ['Power (meter swings back!)', 'Hold Space or G', 'Hold A or Y'],
  ['— GENERAL —', '', ''],
  ['Camera (behind / broadcast / high)', 'C', 'View'],
  ['Pause', 'Esc / P', 'Start'],
];

export function controlsHTML() {
  return `<table class="ctrl">${CONTROLS.map((r) => r[1] === '' ? `<tr class="sec"><th colspan="3">${r[0]}</th></tr>` : `<tr><td>${r[0]}</td><td><kbd>${r[1]}</kbd></td><td><kbd>${r[2]}</kbd></td></tr>`).join('')}</table>`;
}

export class Menu {
  constructor(root, onStart) {
    this.onStart = onStart;
    this.root = el('div', 'menu', root);
    this.cfg = { home: 0, away: 5, side: 0, halfLen: 1, difficulty: 1, wind: 1, time: 0, camera: 0, goldenPoint: 0 };
    this.rows = [
      { key: 'home', label: 'Home team', vals: TEAMS.map((t) => t.name) },
      { key: 'away', label: 'Away team', vals: TEAMS.map((t) => t.name) },
      { key: 'side', label: 'You play as', vals: ['Home', 'Away', 'Watch (CPU v CPU)'] },
      { key: 'halfLen', label: 'Half length', vals: ['3 min', '5 min', '8 min', '10 min', '20 min'], nums: [3, 5, 8, 10, 20] },
      { key: 'difficulty', label: 'Difficulty', vals: ['Easy', 'Normal', 'Hard'], ids: ['easy', 'normal', 'hard'] },
      { key: 'wind', label: 'Wind', vals: ['Calm', 'Breezy', 'Gusty'], ids: ['calm', 'breezy', 'gusty'] },
      { key: 'time', label: 'Kick-off time', vals: ['Afternoon', 'Twilight', 'Night (floodlights)'], ids: ['day', 'dusk', 'night'] },
      { key: 'camera', label: 'Camera', vals: ['Behind play', 'Broadcast', 'High'], ids: ['behind', 'broadcast', 'high'] },
      { key: 'goldenPoint', label: 'Golden point', vals: ['On', 'Off'] },
    ];
    this.sel = 0; this.page = 'main'; this.visible = true;
    this.render();
  }
  config() {
    const c = this.cfg, R = (k) => this.rows.find((r) => r.key === k);
    return {
      homeDef: TEAMS[c.home], awayDef: TEAMS[c.away], humanIdx: c.side === 2 ? -1 : c.side,
      settings: { halfLen: R('halfLen').nums[c.halfLen], difficulty: R('difficulty').ids[c.difficulty], wind: R('wind').ids[c.wind],
        time: R('time').ids[c.time], camera: R('camera').ids[c.camera], goldenPoint: c.goldenPoint === 0 },
    };
  }
  swatch(t) {
    const p = t.primary, s = t.secondary;
    const bg = { hoops: `repeating-linear-gradient(180deg,${p} 0 8px,${s} 8px 16px)`, stripes: `repeating-linear-gradient(90deg,${p} 0 6px,${s} 6px 12px)`,
      vee: `linear-gradient(160deg,${p} 40%,${s} 40% 55%,${p} 55%)`, sash: `linear-gradient(135deg,${p} 38%,${s} 38% 58%,${p} 58%)`, yoke: `linear-gradient(180deg,${s} 30%,${p} 30%)` }[t.pattern] || p;
    return `<span class="swatch" style="background:${bg}"></span>`;
  }
  render() {
    const r = this.root;
    if (this.page === 'controls') {
      r.innerHTML = `<div class="menu-panel"><h1 class="logo small">CONTROLS</h1>${controlsHTML()}<div class="btns"><button data-a="back">◀ Back</button></div></div>`;
    } else {
      const c = this.cfg;
      r.innerHTML = `<div class="menu-panel"><h1 class="logo">FOOTY<span>13</span></h1><div class="tag">Rugby League · 13 v 13 · Single Match</div>
        <div class="rows">${this.rows.map((row, i) => `<div class="row ${i === this.sel ? 'sel' : ''}" data-i="${i}"><span class="lbl">${row.label}</span>
          <span class="val"><button data-i="${i}" data-d="-1">◀</button><span>${row.key === 'home' || row.key === 'away' ? this.swatch(TEAMS[c[row.key]]) : ''}${row.vals[c[row.key]]}</span><button data-i="${i}" data-d="1">▶</button></span></div>`).join('')}</div>
        <div class="btns"><button class="go" data-a="start">KICK OFF ▶</button><button data-a="controls">Controls</button></div>
        ${touchOnly() ? '<div class="touchnote">Footy 13 is played with a keyboard or a gamepad. Connect one to take control, or pick “Watch” to see a CPU match.</div>' : ''}
        <div class="foot">Keyboard or gamepad · ↑↓ choose · ←→ change · Enter to start</div></div>`;
    }
    r.querySelectorAll('button[data-d]').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); this.change(+b.dataset.i, +b.dataset.d); }));
    r.querySelectorAll('.row').forEach((row) => row.addEventListener('click', () => { this.sel = +row.dataset.i; this.render(); }));
    r.querySelectorAll('button[data-a]').forEach((b) => b.addEventListener('click', () => this.act(b.dataset.a)));
  }
  change(i, d) {
    const row = this.rows[i], c = this.cfg, n = row.vals.length;
    c[row.key] = (c[row.key] + d + n) % n;
    if ((row.key === 'home' || row.key === 'away') && c.home === c.away) c[row.key] = (c[row.key] + d + n) % n;
    this.sel = i; this.render();
  }
  act(a) {
    if (a === 'start') this.onStart(this.config());
    else if (a === 'controls') { this.page = 'controls'; this.render(); }
    else if (a === 'back') { this.page = 'main'; this.render(); }
  }
  show() { this.visible = true; this.page = 'main'; this.root.style.display = ''; this.render(); }
  hide() { this.visible = false; this.root.style.display = 'none'; }
  update(input) {
    if (!this.visible) return;
    if (this.page === 'controls') { if (input.pressed('pause') || input.pressed('confirm') || input.pressed('fend')) this.act('back'); return; }
    if (input.pressed('menuUp')) { this.sel = (this.sel + this.rows.length - 1) % this.rows.length; this.render(); }
    if (input.pressed('menuDown')) { this.sel = (this.sel + 1) % this.rows.length; this.render(); }
    if (input.pressed('left') || input.pressed('kickPrev')) this.change(this.sel, -1);
    if (input.pressed('right') || input.pressed('kickNext')) this.change(this.sel, 1);
    if (input.pressed('confirm') || input.pressed('pause') && false) this.act('start');
    if (input.pressed('help')) this.act('controls');
  }
}

export class PauseMenu {
  constructor(root, handlers) {
    this.h = handlers;
    this.root = el('div', 'menu pause', root); this.root.style.display = 'none';
    this.visible = false; this.page = 'main';
  }
  show() { this.visible = true; this.page = 'main'; this.root.style.display = ''; this.render(); }
  hide() { this.visible = false; this.root.style.display = 'none'; }
  render() {
    this.root.innerHTML = this.page === 'controls'
      ? `<div class="menu-panel"><h1 class="logo small">CONTROLS</h1>${controlsHTML()}<div class="btns"><button data-a="back">◀ Back</button></div></div>`
      : `<div class="menu-panel narrow"><h1 class="logo small">PAUSED</h1><div class="btns col">
        <button data-a="resume">Resume</button><button data-a="camera">Camera: ${this.h.cameraName()}</button><button data-a="controls">Controls</button>
        <button data-a="sound">Sound: ${this.h.soundName()}</button><button data-a="restart">Restart match</button><button data-a="quit">Quit to menu</button></div></div>`;
    this.root.querySelectorAll('button[data-a]').forEach((b) => b.addEventListener('click', () => this.act(b.dataset.a)));
  }
  act(a) {
    if (a === 'controls') { this.page = 'controls'; return this.render(); }
    if (a === 'back') { this.page = 'main'; return this.render(); }
    if (a === 'camera') { this.h.camera(); return this.render(); }
    if (a === 'sound') { this.h.sound(); return this.render(); }
    this.h[a]();
  }
}
