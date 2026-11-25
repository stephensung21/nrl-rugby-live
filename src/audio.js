// All sound is synthesised with WebAudio: no audio files needed.
export class AudioFX {
  constructor() {
    this.ctx = null; this.master = null; this.crowdGain = null; this.excite = 0; this.muted = false;
  }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain(); this.master.gain.value = 0.7; this.master.connect(this.ctx.destination);
    // shared noise buffer
    const len = this.ctx.sampleRate * 2;
    this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    let b = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = 0.97 * b + 0.03 * w; d[i] = w * 0.5 + b * 2.5; }
    this._startCrowd();
  }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.7; }

  _startCrowd() {
    const c = this.ctx;
    const src = c.createBufferSource(); src.buffer = this.noise; src.loop = true;
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 700; bp.Q.value = 0.6;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400;
    this.crowdGain = c.createGain(); this.crowdGain.gain.value = 0.05;
    src.connect(bp); bp.connect(lp); lp.connect(this.crowdGain); this.crowdGain.connect(this.master);
    src.start();
    this.crowdFilter = bp;
  }
  // Called every frame with 0..1 excitement (ball carrier near try line, line breaks...)
  update(dt, excitement) {
    if (!this.ctx) return;
    this.excite += (excitement - this.excite) * Math.min(1, dt * 1.5);
    const t = this.ctx.currentTime;
    this.crowdGain.gain.setTargetAtTime(0.045 + this.excite * 0.16, t, 0.25);
    this.crowdFilter.frequency.setTargetAtTime(600 + this.excite * 700, t, 0.3);
  }
  _env(node, t0, a, peak, dec) {
    node.gain.setValueAtTime(0.0001, t0);
    node.gain.exponentialRampToValueAtTime(peak, t0 + a);
    node.gain.exponentialRampToValueAtTime(0.0001, t0 + a + dec);
  }
  whistle(long = false) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime, dur = long ? 0.9 : 0.35;
    const g = c.createGain(); g.connect(this.master);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.22, t + 0.02);
    g.gain.setValueAtTime(0.22, t + dur - 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const trem = c.createOscillator(); trem.frequency.value = 38; const tg = c.createGain(); tg.gain.value = 120;
    trem.connect(tg);
    for (const f of [2750, 2890]) {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f; tg.connect(o.frequency);
      o.connect(g); o.start(t); o.stop(t + dur);
    }
    trem.start(t); trem.stop(t + dur);
  }
  hooter() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const g = c.createGain(); g.connect(this.master); this._env(g, t, 0.05, 0.18, 1.6);
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.connect(g);
    for (const f of [220, 221.5, 330]) { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(lp); o.start(t); o.stop(t + 1.7); }
  }
  thud(power = 1) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const g = c.createGain(); g.connect(this.master); this._env(g, t, 0.005, 0.35 * power, 0.25);
    const o = c.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.2);
    o.connect(g); o.start(t); o.stop(t + 0.3);
    const n = c.createBufferSource(); n.buffer = this.noise; const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380;
    const ng = c.createGain(); this._env(ng, t, 0.003, 0.5 * power, 0.12); n.connect(lp); lp.connect(ng); ng.connect(this.master);
    n.start(t, Math.random()); n.stop(t + 0.2);
  }
  kick(power = 1) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const g = c.createGain(); g.connect(this.master); this._env(g, t, 0.002, 0.4 * (0.5 + power * 0.5), 0.12);
    const o = c.createOscillator(); o.type = 'triangle'; o.frequency.setValueAtTime(180, t); o.frequency.exponentialRampToValueAtTime(70, t + 0.1);
    o.connect(g); o.start(t); o.stop(t + 0.15);
    const n = c.createBufferSource(); n.buffer = this.noise; const hp = c.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1500;
    const ng = c.createGain(); this._env(ng, t, 0.001, 0.25, 0.05); n.connect(hp); hp.connect(ng); ng.connect(this.master); n.start(t, Math.random()); n.stop(t + 0.08);
  }
  catchBall() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const g = c.createGain(); g.connect(this.master); this._env(g, t, 0.002, 0.12, 0.06);
    const o = c.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(320, t); o.frequency.exponentialRampToValueAtTime(160, t + 0.06);
    o.connect(g); o.start(t); o.stop(t + 0.1);
  }
  roar(amount = 1, groan = false) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const n = c.createBufferSource(); n.buffer = this.noise; n.loop = true;
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = groan ? 330 : 900; bp.Q.value = 0.5;
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.32 * amount, t + 0.35);
    g.gain.exponentialRampToValueAtTime(0.0001, t + (groan ? 1.4 : 3.2));
    n.connect(bp); bp.connect(g); g.connect(this.master); n.start(t, Math.random()); n.stop(t + 3.4);
  }
  ui() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const g = c.createGain(); g.connect(this.master); this._env(g, t, 0.002, 0.08, 0.05);
    const o = c.createOscillator(); o.type = 'square'; o.frequency.value = 660; o.connect(g); o.start(t); o.stop(t + 0.07);
  }
}
