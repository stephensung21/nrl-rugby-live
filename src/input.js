// Keyboard + gamepad abstraction. Polled once per fixed simulation tick so edges are tick-accurate.
const KEYMAP = {
  up: ['KeyW', 'ArrowUp'], down: ['KeyS', 'ArrowDown'], left: ['KeyA', 'ArrowLeft'], right: ['KeyD', 'ArrowRight'],
  sprint: ['ShiftLeft', 'ShiftRight'],
  passL: ['KeyQ'], passR: ['KeyE'],
  step: ['Space', 'KeyJ'],          // attack: sidestep   | defence: tackle
  fend: ['KeyF', 'KeyK'],           // attack: fend       | defence: big hit
  bump: ['KeyR', 'KeyL'],           // attack: shoulder   | defence: dive tackle
  kick: ['KeyG', 'KeyI'],           // hold for power
  dummy: ['KeyX', 'KeyU'],
  kickNext: ['Tab'],
  foot: ['KeyV', 'KeyO'],
  k1: ['Digit1'], k2: ['Digit2'], k3: ['Digit3'], k4: ['Digit4'], k5: ['Digit5'],
  camera: ['KeyC'],
  pause: ['Escape', 'KeyP'],
  help: ['KeyH'],
  confirm: ['Enter', 'NumpadEnter'],
};
// Standard gamepad mapping indices
const PADMAP = {
  step: [0], fend: [1], bump: [2], kick: [3], passL: [4], passR: [5], dummy: [6], sprint: [7],
  camera: [8], pause: [9], foot: [12], kickPrev: [14], kickNext: [15], camDown: [13],
  confirm: [0], back: [1],
};
const ACTIONS = [...new Set([...Object.keys(KEYMAP), ...Object.keys(PADMAP), 'kickPrev', 'back'])];

export class Input {
  constructor() {
    this.keys = new Set();
    this.tapped = new Set();
    this.state = {}; this.prev = {}; this.holdT = {}; this.lastHold = {};
    this.move = { x: 0, y: 0 };
    this.usingPad = false;
    this.enabled = true;
    for (const a of ACTIONS) { this.state[a] = false; this.prev[a] = false; this.holdT[a] = 0; this.lastHold[a] = 0; }
    this._pressed = {}; this._released = {};
    const gameCodes = new Set(Object.values(KEYMAP).flat());
    window.addEventListener('keydown', (e) => {
      if (gameCodes.has(e.code) && !(e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName))) e.preventDefault();
      if (!e.repeat) this.tapped.add(e.code);
      this.keys.add(e.code);
      this.usingPad = false;
    });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.code); });
    window.addEventListener('blur', () => { this.keys.clear(); });
  }

  _pad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) if (p && p.connected && p.buttons.length >= 16) return p;
    return null;
  }

  poll(dt) {
    const pad = this._pad();
    let mx = 0, my = 0;
    const k = (a) => KEYMAP[a] && KEYMAP[a].some((c) => this.keys.has(c) || this.tapped.has(c));
    const kHeld = (a) => KEYMAP[a] && KEYMAP[a].some((c) => this.keys.has(c));
    if (kHeld('left')) mx -= 1;
    if (kHeld('right')) mx += 1;
    if (kHeld('up')) my += 1;
    if (kHeld('down')) my -= 1;
    const padBtn = (a) => pad && PADMAP[a] && PADMAP[a].some((i) => pad.buttons[i] && (pad.buttons[i].pressed || pad.buttons[i].value > 0.5));
    if (pad) {
      const ax = pad.axes[0] || 0, ay = pad.axes[1] || 0;
      const mag = Math.hypot(ax, ay);
      if (mag > 0.22) {
        const s = Math.min(1, (mag - 0.22) / 0.7) / mag;
        mx = ax * s; my = -ay * s; this.usingPad = true;
      }
      if (pad.buttons.some((b) => b.pressed)) this.usingPad = true;
      if (padBtn('kickPrev') || padBtn('kickNext')) this.usingPad = true;
    }
    const len = Math.hypot(mx, my);
    if (len > 1) { mx /= len; my /= len; }
    this.move.x = mx; this.move.y = my;

    for (const a of ACTIONS) {
      this.prev[a] = this.state[a];
      const tappedNow = KEYMAP[a] && KEYMAP[a].some((c) => this.tapped.has(c));
      const held = !!(kHeld(a) || padBtn(a));
      this.state[a] = held;
      this._pressed[a] = (held && !this.prev[a]) || (tappedNow && !this.prev[a]);
      this._released[a] = (!held && this.prev[a]) || (tappedNow && !held);
      if (held) this.holdT[a] += dt;
      if (this._released[a]) { this.lastHold[a] = this.holdT[a]; this.holdT[a] = 0; }
      if (!held && !this._released[a]) this.holdT[a] = 0;
    }
    // menu-style directions (edges)
    this._pressed.menuUp = (kHeld('up') && !this._mU) || (pad && pad.buttons[12]?.pressed && !this._pU);
    this._pressed.menuDown = (kHeld('down') && !this._mD) || (pad && pad.buttons[13]?.pressed && !this._pD);
    this._mU = kHeld('up'); this._mD = kHeld('down');
    this._pU = !!(pad && pad.buttons[12]?.pressed); this._pD = !!(pad && pad.buttons[13]?.pressed);
    this.tapped.clear();
    if (!this.enabled) { for (const a of ACTIONS) { this._pressed[a] = false; } this.move.x = this.move.y = 0; }
  }
  held(a) { return this.enabled && !!this.state[a]; }
  pressed(a) { return !!this._pressed[a]; }
  released(a) { return this.enabled && !!this._released[a]; }
  holdTime(a) { return this.holdT[a]; }
  releasedHold(a) { return this.lastHold[a]; }
  clearEdges() { for (const a of ACTIONS) { this._pressed[a] = false; this._released[a] = false; } }
}
