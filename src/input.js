// Keyboard + gamepad abstraction. Polled once per fixed simulation tick so edges are tick-accurate.
// Keyboard layout mirrors a console pad: WASD = left stick, arrows = right stick,
// I/J/K/L = the four face buttons (Y/X/A/B), Space = left trigger, Q/E = bumpers, Shift = right trigger.
const KEYMAP = {
  up: ['KeyW'], down: ['KeyS'], left: ['KeyA'], right: ['KeyD'],
  rsUp: ['ArrowUp'], rsDown: ['ArrowDown'], rsLeft: ['ArrowLeft'], rsRight: ['ArrowRight'],
  sprint: ['ShiftLeft', 'ShiftRight'],
  passL: ['KeyQ'], passR: ['KeyE'],
  faceA: ['KeyK'], faceB: ['KeyL'], faceX: ['KeyJ'], faceY: ['KeyI'],
  fieldGoal: ['KeyU'],
  kickMod: ['Space'],
  foot: ['KeyV'],
  k1: ['Digit1'], k2: ['Digit2'], k3: ['Digit3'],
  camera: ['KeyC'],
  pause: ['Escape', 'KeyP'],
  help: ['KeyH'],
  confirm: ['Enter', 'NumpadEnter'],
  menuUp: ['KeyW', 'ArrowUp'], menuDown: ['KeyS', 'ArrowDown'], menuLeft: ['KeyA', 'ArrowLeft'], menuRight: ['KeyD', 'ArrowRight'],
};
// Standard gamepad mapping indices
const PADMAP = {
  faceA: [0], faceB: [1], faceX: [2], faceY: [3], passL: [4], passR: [5], kickMod: [6], sprint: [7],
  camera: [8], pause: [9], fieldGoal: [11], foot: [12],
  menuUp: [12], menuDown: [13], menuLeft: [14], menuRight: [15], confirm: [0], back: [1],
};
// right stick (axes 2/3) acts as four flick "buttons"
const STICK = { rsLeft: [2, -1], rsRight: [2, 1], rsUp: [3, -1], rsDown: [3, 1] };
const ACTIONS = [...new Set([...Object.keys(KEYMAP), ...Object.keys(PADMAP), ...Object.keys(STICK), 'back'])];

export class Input {
  constructor() {
    this.keys = new Set();
    this.tapped = new Set();
    this.state = {}; this.prev = {}; this.holdT = {}; this.lastHold = {};
    this.move = { x: 0, y: 0 };
    this.usingPad = false;
    this.enabled = true;
    for (const a of ACTIONS) { this.state[a] = false; this.prev[a] = false; this.holdT[a] = 0; this.lastHold[a] = 0; }
    this._pressed = {}; this._released = {}; this._dbl = {}; this.lastPress = {}; this.clock = 0;
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
    const padBtn = (a) => pad && ((PADMAP[a] && PADMAP[a].some((i) => pad.buttons[i] && (pad.buttons[i].pressed || pad.buttons[i].value > 0.5)))
      || (STICK[a] && (pad.axes[STICK[a][0]] || 0) * STICK[a][1] > 0.55));
    if (pad) {
      const ax = pad.axes[0] || 0, ay = pad.axes[1] || 0;
      const mag = Math.hypot(ax, ay);
      if (mag > 0.22) {
        const s = Math.min(1, (mag - 0.22) / 0.7) / mag;
        mx = ax * s; my = -ay * s; this.usingPad = true;
      }
      if (pad.buttons.some((b) => b.pressed)) this.usingPad = true;
    }
    const len = Math.hypot(mx, my);
    if (len > 1) { mx /= len; my /= len; }
    this.move.x = mx; this.move.y = my;

    this.clock += dt;
    for (const a of ACTIONS) {
      this.prev[a] = this.state[a];
      const tappedNow = KEYMAP[a] && KEYMAP[a].some((c) => this.tapped.has(c));
      const held = !!(kHeld(a) || padBtn(a));
      this.state[a] = held;
      this._pressed[a] = (held && !this.prev[a]) || (tappedNow && !this.prev[a]);
      this._released[a] = (!held && this.prev[a]) || (tappedNow && !held);
      this._dbl[a] = false;
      if (this._pressed[a]) { this._dbl[a] = this.clock - (this.lastPress[a] ?? -9) < 0.3; this.lastPress[a] = this.clock; }
      if (held) this.holdT[a] += dt;
      if (this._released[a]) { this.lastHold[a] = this.holdT[a]; this.holdT[a] = 0; }
      if (!held && !this._released[a]) this.holdT[a] = 0;
    }
    this.tapped.clear();
    if (!this.enabled) { for (const a of ACTIONS) { this._pressed[a] = false; } this.move.x = this.move.y = 0; }
  }
  held(a) { return this.enabled && !!this.state[a]; }
  pressed(a) { return !!this._pressed[a]; }
  released(a) { return this.enabled && !!this._released[a]; }
  holdTime(a) { return this.holdT[a]; }
  doubleTapped(a) { return !!this._dbl[a]; }
  releasedHold(a) { return this.lastHold[a]; }
  clearEdges() { for (const a of ACTIONS) { this._pressed[a] = false; this._released[a] = false; } }
}
