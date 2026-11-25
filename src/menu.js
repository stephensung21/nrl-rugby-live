// Title / match-setup / pause / controls screens.
import { TEAMS, squadOf, clubRatings } from './teams.js';
import { ATTRS, ATTR_LABEL, ATTR_NAME, playerOverall } from './ratings.js';
import { POSITION_NAMES } from './config.js';

const el = (tag, cls, parent, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; if (parent) parent.appendChild(e); return e; };

const touchOnly = () => { try { return matchMedia('(pointer: coarse)').matches && !matchMedia('(any-pointer: fine)').matches; } catch { return false; } };

// Console-style layout: WASD = left stick, arrows = right stick, I J K L = Y X A B, Space = left trigger.
export const CONTROLS = [
  ['Move', 'W A S D', 'Left stick', 'Joystick (left half)'],
  ['Sprint', 'Shift', 'RT', 'Push the joystick to the edge'],
  ['— ATTACK —', '', '', ''],
  ['Pass left / right to the next man', 'Q / E', 'LB / RB', 'Tap ◀ PASS / PASS ▶'],
  ['Pick the 1st / 2nd / 3rd man (cut-out)', 'hold Q or E + K / L / I', 'hold LB or RB + A / B / Y', 'Hold PASS for a cut-out'],
  ['Flat pass (runner hits it at pace, riskier)', 'double-tap', 'double-tap', 'Double-tap PASS'],
  ['Sidestep', '← / →', 'Flick right stick ← →', 'Swipe ← → (right half)'],
  ['Fend (hold to keep the arm out)', '↓', 'Right stick ↓', 'Swipe ↓ and hold'],
  ['Shoulder charge / bust a tackle', '↑', 'Right stick ↑', 'Swipe ↑'],
  ['Dummy pass', 'I', 'Y', 'DUMMY'],
  ['Quick kick: punt / grubber / chip / field goal', 'K / L / J / U', 'A / B / X / R3', 'PUNT / GRUBBER / CHIP / FIELD GOAL'],
  ['Aimed kick: hold, steer, release', 'hold Space + K L J I U', 'hold LT + A B X Y R3', 'Tap AIM, then hold a kick button'],
  ['   …aimed kick types', 'punt · grubber · chip · bomb · field goal', '', ''],
  ['Kicking foot (left / right)', 'V', 'D-pad ↑', 'FOOT'],
  ['In a tackle: offload / fight / leg drive', 'Q,E / arrows / mash Shift or K', 'LB,RB / R-stick / mash RT or A', 'OFFLOAD / swipe / mash DRIVE'],
  ['Ground the ball in-goal', 'K', 'A', 'GROUND'],
  ['— DEFENCE —', '', '', ''],
  ['Low tackle (safe, but arms stay free)', 'K', 'A', 'TACKLE'],
  ['Arm-grip "ball and all" (no offload, risky)', 'L — keep held to hold down', 'B', 'GRIP'],
  ['Dive tackle', 'I', 'Y', 'DIVE'],
  ['Strip (one-on-one) / jump for a high ball', 'J', 'X', 'STRIP / JUMP'],
  ['Switch player (nearest / next)', 'Q / E', 'LB / RB (or LT)', '◀ SWITCH / SWITCH ▶'],
  ['— SET PIECES —', '', '', ''],
  ['Conversion: move the ball back, then set', 'W / S, then K', 'Left stick ↕, then A', 'Joystick ↕, then SET'],
  ['Aim (line up the seam) / trajectory', 'A D / W S', 'Left stick', 'Joystick'],
  ['Power — release before the red zone', 'hold K', 'hold A', 'Hold KICK'],
  ['Short kick-off', 'hold L', 'hold B', 'Hold SHORT'],
  ['Penalty: goal / touch / tap', 'K / L / J', 'A / B / X', 'Tap your choice'],
  ['— GENERAL —', '', '', ''],
  ['Camera (behind / broadcast / high)', 'C', 'View', 'CAM'],
  ['Pause', 'Esc / P', 'Start', 'II'],
];

const tier = (v) => (v >= 90 ? 'r90' : v >= 80 ? 'r80' : v >= 70 ? 'r70' : 'r60');
function swatchOf(t) {
  const p = t.primary, s = t.secondary;
  const bg = { hoops: `repeating-linear-gradient(180deg,${p} 0 8px,${s} 8px 16px)`, stripes: `repeating-linear-gradient(90deg,${p} 0 6px,${s} 6px 12px)`,
    vee: `linear-gradient(160deg,${p} 40%,${s} 40% 55%,${p} 55%)`, sash: `linear-gradient(135deg,${p} 38%,${s} 38% 58%,${p} 58%)`, yoke: `linear-gradient(180deg,${s} 30%,${p} 30%)` }[t.pattern] || p;
  return `<span class="swatch" style="background:${bg}"></span>`;
}
// A club's squad sheet: physical details, overall rating and every attribute.
export function squadHTML(t) {
  const tr = clubRatings(t);
  const rows = squadOf(t).map((p) => {
    const ovr = playerOverall(p.pos, p.attr);
    return `<tr><td class="n">${p.num}</td><td class="nm">${p.star ? '<span class="star" title="Star player">★</span> ' : ''}${p.first} ${p.last}</td>
      <td title="${POSITION_NAMES[p.pos]}">${p.pos}</td><td>${p.age}</td><td>${p.heightCm}</td><td>${p.weightKg}</td>
      <td><b class="rt ${tier(ovr)}">${ovr}</b></td>${ATTRS.map((k) => `<td><span class="rt ${tier(p.attr[k])}">${p.attr[k]}</span></td>`).join('')}<td>${p.attr.foot}</td></tr>`;
  }).join('');
  return `<div class="sq-head">${swatchOf(t)}<div><b>${t.name}</b><div class="sq-chips"><span>OVR <b>${tr.ovr}</b></span><span>ATT <b>${tr.attack}</b></span><span>DEF <b>${tr.defence}</b></span><span>PACK <b>${tr.pack}</b></span></div></div></div>
    <div class="sq-wrap"><table class="sq"><thead><tr><th>#</th><th class="nm">Player</th><th>Pos</th><th>Age</th><th>cm</th><th>kg</th><th>OVR</th>
    ${ATTRS.map((k) => `<th title="${ATTR_NAME[k]}">${ATTR_LABEL[k]}</th>`).join('')}<th title="Kicking foot">Ft</th></tr></thead><tbody>${rows}</tbody></table></div>
    <div class="sq-key">${ATTRS.map((k) => `<span><b>${ATTR_LABEL[k]}</b> ${ATTR_NAME[k]}</span>`).join('')}<span><b>★</b> Star player</span></div>`;
}

export function controlsHTML() {
  const cell = (v) => (v ? `<kbd>${v}</kbd>` : '');
  return `<div class="ctrl-wrap"><table class="ctrl"><tr class="hdr"><th></th><th>Keyboard</th><th>Gamepad</th><th>Touch</th></tr>${CONTROLS.map((r) => r[1] === '' ? `<tr class="sec"><th colspan="4">${r[0]}</th></tr>` : `<tr><td>${r[0]}</td><td>${cell(r[1])}</td><td>${cell(r[2])}</td><td>${cell(r[3])}</td></tr>`).join('')}</table></div>`;
}

export class Menu {
  constructor(root, onStart) {
    this.onStart = onStart;
    this.root = el('div', 'menu', root);
    this.cfg = { home: 0, away: 5, side: 0, halfLen: 1, difficulty: 1, wind: 1, time: 0, camera: 0, goldenPoint: 0, gameSpeed: 0 };
    this.rows = [
      { key: 'home', label: 'Home team', vals: TEAMS.map((t) => t.name) },
      { key: 'away', label: 'Away team', vals: TEAMS.map((t) => t.name) },
      { key: 'side', label: 'You play as', vals: ['Home', 'Away', 'Watch (CPU v CPU)'] },
      { key: 'halfLen', label: 'Half length', vals: ['3 min', '5 min', '8 min', '10 min', '20 min'], nums: [3, 5, 8, 10, 20] },
      { key: 'gameSpeed', label: 'Game speed', vals: ['Steady (75%)', 'Brisk (90%)', 'Full (100%)'], nums: [0.75, 0.9, 1.0] },
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
        time: R('time').ids[c.time], camera: R('camera').ids[c.camera], goldenPoint: c.goldenPoint === 0,
        gameSpeed: R('gameSpeed').nums[c.gameSpeed] },
    };
  }
  swatch(t) { return swatchOf(t); }
  render() {
    const r = this.root;
    if (this.page === 'controls') {
      r.innerHTML = `<div class="menu-panel"><h1 class="logo small">CONTROLS</h1>${controlsHTML()}<div class="btns"><button data-a="back">◀ Back</button></div></div>`;
    } else if (this.page === 'squads') {
      r.innerHTML = `<div class="menu-panel wide"><h1 class="logo small">SQUADS</h1>
        <div class="sq-nav"><button data-a="sqprev">◀</button><span>${this.squadIdx + 1} / ${TEAMS.length}</span><button data-a="sqnext">▶</button></div>
        ${squadHTML(TEAMS[this.squadIdx])}<div class="btns"><button data-a="back">◀ Back</button></div>
        <div class="foot">A/D or ←/→ change club · Esc to go back</div></div>`;
    } else {
      const c = this.cfg;
      r.innerHTML = `<div class="menu-panel"><h1 class="logo">FOOTY<span>13</span></h1><div class="tag">Rugby League · 13 v 13 · Single Match</div>
        <div class="rows">${this.rows.map((row, i) => `<div class="row ${i === this.sel ? 'sel' : ''}" data-i="${i}"><span class="lbl">${row.label}</span>
          <span class="val"><button data-i="${i}" data-d="-1">◀</button><span>${row.key === 'home' || row.key === 'away' ? this.swatch(TEAMS[c[row.key]]) : ''}${row.vals[c[row.key]]}${row.key === 'home' || row.key === 'away' ? ` <em class="ovr">${clubRatings(TEAMS[c[row.key]]).ovr}</em>` : ''}</span><button data-i="${i}" data-d="1">▶</button></span></div>`).join('')}</div>
        <div class="btns"><button class="go" data-a="start">KICK OFF ▶</button><button data-a="squads">Squads</button><button data-a="controls">Controls</button></div>
        ${touchOnly() ? '<div class="touchnote">Touch screen: turn your phone sideways. Joystick on the left, swipe and buttons on the right.</div>' : ''}
        <div class="foot">Keyboard, gamepad or touch · W/S choose · A/D change · Enter to start · H for controls</div></div>`;
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
    else if (a === 'squads') { this.page = 'squads'; this.squadIdx = this.cfg.home; this.render(); }
    else if (a === 'sqprev' || a === 'sqnext') { this.squadIdx = (this.squadIdx + (a === 'sqnext' ? 1 : TEAMS.length - 1)) % TEAMS.length; this.render(); }
  }
  show() { this.visible = true; this.page = 'main'; this.root.style.display = ''; this.render(); }
  hide() { this.visible = false; this.root.style.display = 'none'; }
  update(input) {
    if (!this.visible) return;
    if (this.page === 'controls' || this.page === 'squads') {
      if (this.page === 'squads' && input.pressed('menuLeft')) this.act('sqprev');
      if (this.page === 'squads' && input.pressed('menuRight')) this.act('sqnext');
      if (input.pressed('pause') || input.pressed('confirm') || input.pressed('faceB') || input.pressed('back')) this.act('back');
      return;
    }
    if (input.pressed('menuUp')) { this.sel = (this.sel + this.rows.length - 1) % this.rows.length; this.render(); }
    if (input.pressed('menuDown')) { this.sel = (this.sel + 1) % this.rows.length; this.render(); }
    if (input.pressed('menuLeft')) this.change(this.sel, -1);
    if (input.pressed('menuRight')) this.change(this.sel, 1);
    if (input.pressed('confirm')) this.act('start');
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
    const sides = this.h.teams ? this.h.teams() : [];
    this.root.innerHTML = this.page === 'controls'
      ? `<div class="menu-panel"><h1 class="logo small">CONTROLS</h1>${controlsHTML()}<div class="btns"><button data-a="back">◀ Back</button></div></div>`
      : this.page === 'squads' && sides.length
      ? `<div class="menu-panel wide"><h1 class="logo small">SQUADS</h1><div class="sq-nav"><button data-a="sqswap">◀ ▶ ${sides[1 - (this.side || 0)].short}</button></div>
        ${squadHTML(sides[this.side || 0])}<div class="btns"><button data-a="back">◀ Back</button></div></div>`
      : `<div class="menu-panel narrow"><h1 class="logo small">PAUSED</h1><div class="btns col">
        <button data-a="resume">Resume</button><button data-a="camera">Camera: ${this.h.cameraName()}</button><button data-a="squads">Squads</button><button data-a="controls">Controls</button>
        <button data-a="sound">Sound: ${this.h.soundName()}</button><button data-a="restart">Restart match</button><button data-a="quit">Quit to menu</button></div></div>`;
    this.root.querySelectorAll('button[data-a]').forEach((b) => b.addEventListener('click', () => this.act(b.dataset.a)));
  }
  act(a) {
    if (a === 'controls') { this.page = 'controls'; return this.render(); }
    if (a === 'back') { this.page = 'main'; return this.render(); }
    if (a === 'squads') { this.page = 'squads'; this.side = 0; return this.render(); }
    if (a === 'sqswap') { this.side = 1 - (this.side || 0); return this.render(); }
    if (a === 'camera') { this.h.camera(); return this.render(); }
    if (a === 'sound') { this.h.sound(); return this.render(); }
    this.h[a]();
  }
}
