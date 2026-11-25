// On-screen touch controls. They drive the same actions as the keyboard / pad layout:
//   left half  = floating joystick (left stick; push to the edge to sprint)
//   right half = swipe pad (right stick: swipe ←/→ sidestep, ↑ shoulder, ↓ fend; keep the finger down to hold a fend)
//   buttons    = A / B / X / Y face buttons, ◀ PASS / PASS ▶ (bumpers), AIM (latched left trigger), FG, FOOT
// Button labels follow the situation (attack, defence, set pieces).
import { FIELD } from './config.js';

const el = (tag, cls, parent, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; if (parent) parent.appendChild(e); return e; };
const STICK_R = 56;
const capture = (elm, id) => { try { elm.setPointerCapture(id); } catch { /* pointer already gone */ } };

export class TouchControls {
  constructor(root, input, handlers = {}) {
    this.input = input; this.h = handlers;
    this.root = el('div', 'touchpad', root);
    this.aim = false; this.bufferedPass = null;
    // left stick
    const zl = el('div', 'tp-zone tp-left', this.root);
    this.base = el('div', 'tp-base', zl); this.knob = el('div', 'tp-knob', this.base);
    this.bindStick(zl);
    // right stick (swipes)
    const zr = el('div', 'tp-zone tp-right', this.root);
    el('div', 'tp-swipe-hint', zr, 'SWIPE &nbsp;←→ step &nbsp;↑ shoulder &nbsp;↓ fend');
    this.bindSwipe(zr);
    // buttons
    this.btn = {};
    const mk = (key, cls, action) => { const b = el('button', 'tp-btn ' + cls, this.root); b.type = 'button'; b.dataset.key = key; this.btn[key] = b; this.bindHold(b, action); return b; };
    mk('A', 'face fa', 'faceA'); mk('B', 'face fb', 'faceB'); mk('X', 'face fx', 'faceX'); mk('Y', 'face fy', 'faceY');
    mk('FG', 'small sfg', 'fieldGoal');
    for (const [key, side] of [['PL', 'passL'], ['PR', 'passR']]) {
      const b = el('button', 'tp-btn pill ' + (key === 'PL' ? 'ppl' : 'ppr'), this.root); b.type = 'button'; this.btn[key] = b;
      this.bindPass(b, side);
    }
    const tapBtn = (key, cls, fn) => { const b = el('button', 'tp-btn small ' + cls, this.root); b.type = 'button'; this.btn[key] = b; b.addEventListener('pointerdown', (e) => { e.preventDefault(); this.touched(e); fn(); }); return b; };
    tapBtn('AIM', 'saim', () => { this.aim = !this.aim; this.input.virt.kickMod = this.aim; });
    tapBtn('FOOT', 'sfoot', () => this.input.virtTap.add('foot'));
    tapBtn('PAUSE', 'top tpause', () => this.input.virtTap.add('pause')).textContent = 'II';
    tapBtn('CAM', 'top tcam', () => this.input.virtTap.add('camera')).textContent = 'CAM';
    tapBtn('FS', 'top tfs', () => this.h.fullscreen?.()).textContent = '⛶';
    this.rotate = el('div', 'rotate', root, '<div><b>Turn your phone sideways</b><span>Footy 13 plays in landscape</span></div>');
    // any touch anywhere switches the game into touch mode (labels, layout)
    window.addEventListener('touchstart', () => this.markTouch(), { passive: true });
  }
  markTouch() { if (!this.input.usingTouch) { this.input.usingTouch = true; this.input.usingPad = false; } }
  touched(e) { if (e.pointerType === 'touch' || e.pointerType === 'pen') this.markTouch(); }

  bindHold(b, action) {
    const v = this.input.virt;
    const up = () => {
      v[action] = false; b.classList.remove('on');
      // the AIM latch only lasts for the kick it started
      if (this.aim && ['faceA', 'faceB', 'faceX', 'faceY', 'fieldGoal'].includes(action)) { this.aim = false; v.kickMod = false; }
    };
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); this.touched(e); capture(b, e.pointerId); v[action] = true; b.classList.add('on'); });
    b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up);
  }
  // tap = next man, double-tap = flat ball, hold ≥ 0.3 s = cut-out to the second man
  bindPass(b, action) {
    let t0 = 0, timer = null;
    b.addEventListener('pointerdown', (e) => {
      e.preventDefault(); this.touched(e); capture(b, e.pointerId); b.classList.add('on'); t0 = performance.now();
      timer = setTimeout(() => b.classList.add('long'), 300);
    });
    const up = () => {
      if (!t0) return;
      clearTimeout(timer); b.classList.remove('on', 'long');
      const long = performance.now() - t0 >= 300; t0 = 0;
      const act = long && this.canCut ? (action === 'passL' ? 'cutL' : 'cutR') : action;
      if (this.bufferPasses) this.bufferedPass = act; // dummy half: fire it as soon as the ball is played
      else this.input.virtTap.add(act);
    };
    b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up);
  }
  bindStick(zone) {
    let id = null, ox = 0, oy = 0;
    const vs = this.input.virtStick, v = this.input.virt;
    zone.addEventListener('pointerdown', (e) => {
      if (id !== null) return;
      e.preventDefault(); this.touched(e); id = e.pointerId; capture(zone, id);
      const r = zone.getBoundingClientRect(); ox = e.clientX; oy = e.clientY;
      this.base.style.left = `${ox - r.left}px`; this.base.style.top = `${oy - r.top}px`; this.base.classList.add('show');
      vs.active = true; vs.x = vs.y = 0;
    });
    zone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== id) return;
      let dx = (e.clientX - ox) / STICK_R, dy = (e.clientY - oy) / STICK_R;
      const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; }
      vs.x = dx; vs.y = -dy;
      const sprint = l > 0.92; v.sprint = sprint;
      this.knob.style.transform = `translate(${dx * STICK_R}px, ${dy * STICK_R}px)`;
      this.knob.classList.toggle('sprint', sprint);
    });
    const end = (e) => {
      if (e.pointerId !== id) return;
      id = null; vs.active = false; vs.x = vs.y = 0; v.sprint = false;
      this.knob.style.transform = ''; this.knob.classList.remove('sprint'); this.base.classList.remove('show');
    };
    zone.addEventListener('pointerup', end); zone.addEventListener('pointercancel', end);
  }
  bindSwipe(zone) {
    let id = null, sx = 0, sy = 0, fired = false;
    const v = this.input.virt;
    zone.addEventListener('pointerdown', (e) => {
      if (id !== null) return;
      e.preventDefault(); this.touched(e); id = e.pointerId; capture(zone, id); sx = e.clientX; sy = e.clientY; fired = false;
    });
    zone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== id || fired) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.hypot(dx, dy) < 28) return;
      fired = true;
      const dir = Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 'rsLeft' : 'rsRight') : (dy < 0 ? 'rsUp' : 'rsDown');
      if (dir === 'rsDown') v.rsDown = true; // held while the finger stays down
      else this.input.virtTap.add(dir);
    });
    const end = (e) => { if (e.pointerId !== id) return; id = null; v.rsDown = false; };
    zone.addEventListener('pointerup', end); zone.addEventListener('pointercancel', end);
  }

  // Per-frame: visibility, labels for the situation, buffered dummy-half passes.
  update(m, playing, paused) {
    const show = this.input.usingTouch && playing && !!m && !m.over;
    document.body.classList.toggle('touch', this.input.usingTouch);
    this.root.classList.toggle('show', show && !paused);
    this.rotate.classList.toggle('show', this.input.usingTouch && playing && window.innerHeight > window.innerWidth);
    if (!show) return;
    const L = { A: '', B: '', X: '', Y: '', PL: '', PR: '', FG: '', AIM: '', FOOT: '' };
    const T = m.humanTeam, c = m.controlled, b = m.ball, pd = m.pd, ph = m.phase;
    this.bufferPasses = false; this.canCut = false;
    if (T && ph === 'play') {
      if (b.state === 'held' && b.carrier === c) {
        const ax = c.p.x * T.dir;
        if (c.state === 'tackled') Object.assign(L, { A: 'DRIVE', PL: '◀ OFFLOAD', PR: 'OFFLOAD ▶' });
        else if (ax > FIELD.half) L.A = 'GROUND';
        else if (ax < -FIELD.half) Object.assign(L, { A: 'TOUCH DOWN', PL: '◀ PASS', PR: 'PASS ▶' });
        else if (m.kickAim) L[{ faceA: 'A', faceB: 'B', faceX: 'X', faceY: 'Y', fieldGoal: 'FG' }[m.kickAim.btn]] = 'RELEASE';
        else {
          Object.assign(L, { A: 'PUNT', B: 'GRUBBER', X: 'CHIP', Y: this.aim ? 'BOMB' : 'DUMMY', FG: 'FIELD GOAL', PL: '◀ PASS', PR: 'PASS ▶', AIM: this.aim ? 'AIM ON' : 'AIM', FOOT: 'FOOT ' + (m.humanFoot || c.attr.foot) });
          this.canCut = true;
        }
      } else if (b.state === 'held' && b.carrier && b.carrier.team !== T) {
        Object.assign(L, { A: 'TACKLE', B: 'GRIP', Y: 'DIVE', X: c && c.state === 'tackling' ? 'STRIP' : '', PL: '◀ SWITCH', PR: 'SWITCH ▶' });
      } else Object.assign(L, { X: 'JUMP', PL: '◀ SWITCH', PR: 'SWITCH ▶' });
    } else if (T && ph === 'ptb') {
      if (pd.team === T) { Object.assign(L, { PL: '◀ PASS', PR: 'PASS ▶' }); this.bufferPasses = true; this.canCut = true; }
      else Object.assign(L, { PL: '◀ SWITCH', PR: 'SWITCH ▶' });
    } else if (T && ph === 'goalKick' && pd.team === T) {
      Object.assign(L, { A: pd.stage === 'place' ? 'SET' : pd.stage === 'aim' || pd.stage === 'power' ? 'HOLD: KICK' : '', FOOT: 'FOOT ' + (pd.foot || 'R') });
    } else if (T && (ph === 'kickoff' || ph === 'touchKick') && pd.team === T && pd.stage === 'aim') {
      Object.assign(L, { A: ph === 'kickoff' && pd.type !== 'dropout' ? 'HOLD: LONG' : 'HOLD: KICK', B: ph === 'kickoff' && pd.type !== 'dropout' ? 'HOLD: SHORT' : '', FOOT: 'FOOT ' + (pd.foot || 'R') });
    }
    if (this.bufferedPass && ph === 'play') { this.input.virtTap.add(this.bufferedPass); this.bufferedPass = null; }
    if (ph !== 'ptb' && ph !== 'play') this.bufferedPass = null;
    for (const k in L) {
      const btn = this.btn[k]; if (!btn) continue;
      if (btn.dataset.label !== L[k]) { btn.dataset.label = L[k]; btn.textContent = L[k]; }
      btn.classList.toggle('idle', !L[k]);
    }
    this.btn.AIM.classList.toggle('latched', this.aim);
  }
}
