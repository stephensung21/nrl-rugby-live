// DOM heads-up display: scorebug, tackle count, messages, kick meter, wind, minimap, pass tags, stat screens.
import * as THREE from 'three';
import { FIELD, KICKS, OPEN_PLAY_KICKS, POSITION_NAMES } from './config.js';
import { clamp } from './util.js';
import { pickReceiver } from './actions.js';

const el = (tag, cls, parent, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; if (parent) parent.appendChild(e); return e; };

export class HUD {
  constructor(root) {
    this.root = el('div', 'hud', root);
    this.score = el('div', 'scorebug', this.root);
    this.tackles = el('div', 'tackles', this.root);
    this.msgBox = el('div', 'msg', this.root);
    this.msgMain = el('div', 'msg-main', this.msgBox); this.msgSub = el('div', 'msg-sub', this.msgBox);
    this.feed = el('div', 'feed', this.root);
    this.card = el('div', 'pcard', this.root);
    this.kick = el('div', 'kickpanel', this.root);
    this.meter = el('div', 'meter', this.root, '<div class="meter-label"></div><div class="meter-bar"><div class="meter-fill"></div><div class="meter-tick"></div></div>');
    this.hint = el('div', 'hint', this.root);
    this.mini = el('canvas', 'minimap', this.root); this.mini.width = 240; this.mini.height = 150;
    this.tags = [el('div', 'ptag', this.root), el('div', 'ptag', this.root)];
    this.offTag = el('div', 'ptag off', this.root, 'OFFSIDE');
    this.fade = el('div', 'fade', root);
    this.modal = el('div', 'modal hidden', root);
    this.msgT = 0; this.v3 = new THREE.Vector3();
    this.visible = true;
  }
  setVisible(v) { this.visible = v; this.root.style.display = v ? '' : 'none'; }
  attach(m) {
    this.m = m;
    this.feed.innerHTML = '';
    m.on((e) => this.onEvent(e));
  }
  onEvent(e) {
    const m = this.m;
    const who = e.player ? e.player.name : '';
    const map = {
      beaten: () => ({ step: 'SIDESTEP!', fend: 'FEND!', bump: 'BUMPED OFF!', broken: 'TACKLE BUST!' }[e.how] + ` ${who}`),
      bighit: () => `BIG HIT — ${who}`,
      offload: () => null,
      tackle: () => (e.n >= 3 ? `Gang tackle (${e.n})` : null),
      try: () => `TRY ${e.team.short} — ${who}`,
      goal: () => `${e.team.short} ${e.kind} ${e.good ? 'kicked' : 'missed'}`,
      fieldgoal: () => `FIELD GOAL ${e.team.short} — ${who}`,
      intercept: () => `Intercept — ${who}`,
      '4020': () => `${e.label} ${e.team.short}`,
      penalty: () => `Penalty ${e.team.short}: ${e.reason}`,
      chargedown: () => `Charge-down — ${who}`,
      error: () => `${e.why} — ${e.team.short}`,
      missed: () => null,
    };
    const f = map[e.type];
    const text = f && f();
    if (!text) return;
    const line = el('div', 'feed-line', this.feed, text);
    if (e.team) line.style.borderLeftColor = e.team.kit.primary;
    setTimeout(() => line.classList.add('gone'), 3800);
    setTimeout(() => line.remove(), 4400);
    while (this.feed.children.length > 5) this.feed.firstChild.remove();
  }
  message(text, sub = '', dur = 2, style = '') {
    this.msgMain.textContent = text; this.msgSub.textContent = sub;
    this.msgBox.className = 'msg show ' + style; this.msgT = dur;
    this.msgMain.style.animation = 'none'; void this.msgMain.offsetWidth; this.msgMain.style.animation = '';
  }
  flashScore() { this.score.classList.remove('flash'); void this.score.offsetWidth; this.score.classList.add('flash'); }
  fadeOut() { this.fade.classList.add('on'); }
  fadeIn() { setTimeout(() => this.fade.classList.remove('on'), 30); }

  penaltyChoice(cb) {
    const pad = this.m?.input.usingPad;
    this.modal.className = 'modal';
    this.modal.innerHTML = `<div class="panel"><h2>PENALTY</h2><p>Your call, skipper</p>
      <button data-c="goal"><b>${pad ? 'A' : '1'}</b> Kick for goal (2 pts)</button>
      <button data-c="touch"><b>${pad ? 'B' : '2'}</b> Kick for touch (keep the ball)</button>
      <button data-c="tap"><b>${pad ? 'X' : '3'}</b> Tap and go</button></div>`;
    const done = (c) => { this.modal.className = 'modal hidden'; this.modal.innerHTML = ''; this._pc = null; cb(c); };
    this.modal.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => done(b.dataset.c)));
    this._pc = done;
  }
  pollModal(input) {
    if (!this._pc) return;
    if (input.pressed('k1') || input.pressed('step')) this._pc('goal');
    else if (input.pressed('k2') || input.pressed('fend')) this._pc('touch');
    else if (input.pressed('k3') || input.pressed('bump')) this._pc('tap');
  }

  showBreak(m, title, onContinue, note = '') {
    const [a, b] = m.teams;
    const tot = a.stats.possT + b.stats.possT || 1;
    const rows = [
      ['Tries', a.stats.tries, b.stats.tries], ['Conversions', `${a.stats.convM}/${a.stats.convA}`, `${b.stats.convM}/${b.stats.convA}`],
      ['Penalty goals', a.stats.penGoals, b.stats.penGoals], ['Field goals', a.stats.fieldGoals, b.stats.fieldGoals],
      ['Possession', Math.round((a.stats.possT / tot) * 100) + '%', Math.round((b.stats.possT / tot) * 100) + '%'],
      ['Runs', a.stats.runs, b.stats.runs], ['Tackles', a.stats.tackles, b.stats.tackles], ['Missed tackles', a.stats.missed, b.stats.missed],
      ['Tackle busts', a.stats.busts, b.stats.busts], ['Line breaks', a.stats.linebreaks, b.stats.linebreaks], ['Offloads', a.stats.offloads, b.stats.offloads],
      ['Kicks', a.stats.kicks, b.stats.kicks], ['Errors', a.stats.errors, b.stats.errors], ['Penalties conceded', a.stats.pensConceded, b.stats.pensConceded],
    ];
    const winner = a.score === b.score ? 'Draw' : (a.score > b.score ? a.name : b.name) + ' win';
    this.modal.className = 'modal';
    this.modal.innerHTML = `<div class="panel wide"><h2>${title}</h2>${note ? `<p>${note}</p>` : ''}
      <div class="final"><span style="--c:${a.kit.primary}">${a.name}</span><b>${a.score} – ${b.score}</b><span style="--c:${b.kit.primary}">${b.name}</span></div>
      ${title === 'FULL TIME' ? `<p class="winner">${winner}</p>` : ''}
      <table>${rows.map((r) => `<tr><td>${r[1]}</td><th>${r[0]}</th><td>${r[2]}</td></tr>`).join('')}</table>
      <div class="btns">${onContinue ? '<button data-a="go">Continue ▶</button>' : '<button data-a="menu">Main menu</button><button data-a="again">Rematch</button>'}</div></div>`;
    const close = () => { this.modal.className = 'modal hidden'; this.modal.innerHTML = ''; this._brk = null; };
    const act = (a) => { close(); if (a === 'go') onContinue(); else if (a === 'menu') this.onMenu?.(); else this.onRematch?.(); };
    this.modal.querySelectorAll('button').forEach((bt) => bt.addEventListener('click', () => act(bt.dataset.a)));
    this._brk = { act, cont: !!onContinue, t: performance.now() };
  }
  pollBreak(input) {
    if (!this._brk || performance.now() - this._brk.t < 600) return;
    if (input.pressed('confirm') || input.pressed('step') || input.pressed('kick')) this._brk.act(this._brk.cont ? 'go' : 'again');
  }
  closeModal() { this.modal.className = 'modal hidden'; this.modal.innerHTML = ''; this._brk = null; this._pc = null; }

  update(m, camera, dt) {
    if (!this.visible) return;
    const [a, b] = m.teams;
    const half = m.half === 1 ? '1ST' : m.half === 2 ? '2ND' : 'GP';
    this.score.innerHTML = `<span class="tm" style="--c:${a.kit.primary};--c2:${a.kit.secondary}">${a.short}</span><span class="sc">${a.score}</span>
      <span class="clock">${m.clockText()}<small>${m.siren ? 'SIREN' : half}</small></span><span class="sc">${b.score}</span><span class="tm" style="--c:${b.kit.primary};--c2:${b.kit.secondary}">${b.short}</span>`;
    const showT = m.phase === 'play' || m.phase === 'ptb';
    const at = m.attackTeam();
    if (showT && at) {
      const n = m.tackleCount;
      this.tackles.style.display = '';
      const pips = Array.from({ length: 6 }, (_, i) => `<i class="${i < n ? 'on' : ''}"></i>`).join('');
      this.tackles.innerHTML = `<span class="who" style="--c:${at.kit.primary}">${at.short}</span><b>${n === 5 ? 'LAST TACKLE' : n === 0 ? 'ZERO TACKLE' : 'TACKLE ' + n}</b><span class="pips">${pips}</span>`;
    } else this.tackles.style.display = 'none';
    if (this.msgT > 0) { this.msgT -= dt; if (this.msgT <= 0) this.msgBox.className = 'msg'; }
    // player card
    const c = m.controlled;
    if (c && m.humanTeam) {
      this.card.style.display = '';
      this.card.innerHTML = `<div class="num" style="--c:${c.team.kit.primary};--c2:${c.team.kit.secondary}">${c.num}</div><div class="info"><b>${c.name}</b><small>${POSITION_NAMES[c.pos]}</small>
        <div class="stam"><i style="width:${Math.round(c.stamina * 100)}%;background:${c.stamina < 0.3 ? '#ff5a3a' : '#7dff5a'}"></i></div></div>`;
    } else this.card.style.display = 'none';
    // kick panel + wind
    const pad = m.input.usingPad;
    const foot = (m.kickAim && m.kickAim.foot) || (['goalKick', 'kickoff', 'touchKick'].includes(m.phase) && m.pd.foot) || m.humanFoot || (c ? c.attr.foot : 'R');
    const cr = m.camRig; const f = cr.fwd;
    const wAng = Math.atan2(m.wind.x * -f.z + m.wind.z * f.x, m.wind.x * f.x + m.wind.z * f.z); // relative to camera forward
    const kmh = Math.round(m.wind.speed * 3.6);
    const sel = m.kickAim ? OPEN_PLAY_KICKS.indexOf(m.kickAim.type) : m.selectedKick;
    this.kick.innerHTML = `<div class="wind"><div class="arrow" style="transform:rotate(${(wAng * 180) / Math.PI}deg)">➤</div><div><b>${kmh} km/h</b><small>WIND</small></div></div>
      ${m.humanTeam ? `<div class="ktypes">${OPEN_PLAY_KICKS.map((k, i) => `<span class="${i === sel ? 'sel' : ''}">${pad ? '' : i + 1 + ' '}${KICKS[k].label}</span>`).join('')}</div>
      <div class="foot">FOOT: <b>${foot === 'L' ? 'LEFT' : 'RIGHT'}</b> <small>(${pad ? 'D-pad ↑' : 'V'})</small></div>` : ''}`;
    // meter
    let meterOn = false, val = 0, label = '', tick = -1;
    if (m.kickAim) { meterOn = true; val = m.kickAim.power; label = KICKS[m.kickAim.type].label + (m.kickAim.over > 0 ? ' — OVERCOOKED!' : ''); }
    else if ((m.phase === 'goalKick' && m.pd.team?.human && m.pd.stage === 'power') || ((m.phase === 'kickoff' || m.phase === 'touchKick') && m.pd.team?.human && m.pd.powering)) {
      meterOn = true; val = m.pd.power; label = m.phase === 'goalKick' ? 'POWER' : KICKS[m.pd.type].label;
    }
    this.meter.style.display = meterOn ? '' : 'none';
    if (meterOn) {
      this.meter.querySelector('.meter-fill').style.width = `${clamp(val, 0, 1) * 100}%`;
      this.meter.querySelector('.meter-fill').style.background = val > 0.93 ? '#ff4a2a' : val > 0.75 ? '#ffc21a' : '#5ae05a';
      this.meter.querySelector('.meter-label').textContent = label;
      const tk = this.meter.querySelector('.meter-tick'); tk.style.display = tick >= 0 ? '' : 'none';
    }
    this.hint.innerHTML = this.hintText(m, pad);
    this.drawMini(m);
    this.updateTags(m, camera, pad);
  }

  hintText(m, pad) {
    const k = (kb, gp) => `<kbd>${pad ? gp : kb}</kbd>`;
    const T = m.humanTeam; if (!T) return '';
    const pd = m.pd;
    if (m.phase === 'goalKick' && pd.team === T) {
      if (pd.stage === 'place') return `${k('W/S', 'L-stick ↕')} move the ball back / forward (${pd.dist.toFixed(0)}m out) · ${k('Space', 'A')} set ball · ${k('V', 'D-pad ↑')} foot`;
      if (pd.stage === 'aim') return `${k('A/D', 'L-stick ↔')} aim · ${k('W/S', 'L-stick ↕')} height · hold ${k('Space/G', 'A/Y')} for power · watch the wind!`;
      if (pd.stage === 'power') return 'Release to kick — the meter swings back!';
    }
    if ((m.phase === 'kickoff' || m.phase === 'touchKick') && pd.team === T && pd.stage === 'aim') {
      return `${k('A/D', 'L-stick ↔')} aim · hold ${k('Space/G', 'A/Y')} for power${m.phase === 'kickoff' && pd.type !== 'dropout' ? ` · ${k('1/2', 'D-pad ↔')} long / short (${KICKS[pd.type].label})` : ''}`;
    }
    if (m.phase === 'ptb' && pd.team === T) return `Play-the-ball… ${k('Q/E', 'LB/RB')} pass from dummy half, or run it`;
    if (m.phase !== 'play') return '';
    const b = m.ball, c = m.controlled;
    if (m.kickAim) return `${k('A/D', 'L-stick ↔')} aim · release ${k('G', 'Y')} to kick · ${k('1-5', 'D-pad ↔')} change kick · ${k('Q/E', 'LB/RB')} cancel`;
    if (b.carrier && b.carrier === c) {
      if (c.state === 'tackled') return `In the tackle: ${k('Q/E', 'LB/RB')} offload · ${k('F/R', 'B/X')} fight free · mash ${k('Shift', 'RT')} leg drive`;
      if (c.p.x * T.dir > FIELD.half) return `${k('Space', 'A')} ground the ball — run toward the posts for an easier conversion!`;
      if (c.p.x * T.dir < -FIELD.half) return `In your in-goal: ${k('Space', 'A')} touch down, or run it out`;
      return `${k('Q/E', 'LB/RB')} pass (hold = cut-out) · ${k('Space', 'A')} step · ${k('F', 'B')} fend · ${k('R', 'X')} shoulder · hold ${k('G', 'Y')} kick · ${k('X', 'LT')} dummy`;
    }
    if (b.carrier && b.carrier.team !== T) return `${k('Space', 'A')} tackle · ${k('F', 'B')} big hit · ${k('R', 'X')} dive · ${k('Q/E', 'LB/RB')} switch player`;
    return `Chase it down! ${k('Q/E', 'LB/RB')} switch player`;
  }

  drawMini(m) {
    const g = this.mini.getContext('2d'), w = this.mini.width, h = this.mini.height;
    const sx = w / 124, sz = h / 76;
    const flip = m.humanTeam ? m.humanTeam.dir : 1;
    const X = (x) => (x * flip + 62) * sx, Z = (z) => (z * flip + 38) * sz;
    g.clearRect(0, 0, w, h);
    g.fillStyle = 'rgba(20,70,25,0.78)'; g.fillRect(X(-58 * flip) < X(58 * flip) ? X(-58 * flip) : X(58 * flip), Z(-34 * flip) < Z(34 * flip) ? Z(-34 * flip) : Z(34 * flip), 116 * sx, 68 * sz);
    g.strokeStyle = 'rgba(255,255,255,0.5)'; g.lineWidth = 1;
    for (let x = -50; x <= 50; x += 10) { g.beginPath(); g.moveTo(X(x), Z(-34)); g.lineTo(X(x), Z(34)); g.stroke(); }
    g.strokeRect(Math.min(X(-58), X(58)), Math.min(Z(-34), Z(34)), 116 * sx, 68 * sz);
    for (const p of m.players) {
      g.fillStyle = p.team.kit.primary; g.strokeStyle = p.team.kit.secondary;
      g.beginPath(); g.arc(X(p.p.x), Z(p.p.z), p === m.controlled ? 4 : 3, 0, Math.PI * 2); g.fill(); g.stroke();
      if (p === m.controlled) { g.strokeStyle = '#ffe14a'; g.lineWidth = 2; g.beginPath(); g.arc(X(p.p.x), Z(p.p.z), 6, 0, Math.PI * 2); g.stroke(); g.lineWidth = 1; }
    }
    g.fillStyle = '#fff'; g.beginPath(); g.arc(X(m.ball.p.x), Z(m.ball.p.z), 2.5, 0, Math.PI * 2); g.fill();
  }

  updateTags(m, camera, pad) {
    const b = m.ball, c = m.controlled;
    const hideAll = () => { this.tags.forEach((t) => (t.style.display = 'none')); };
    this.offTag.style.display = 'none';
    if (c && (c.offside || c.kickOffside) && m.phase === 'play') this.project(this.offTag, c, camera);
    if (!c || b.carrier !== c || m.phase !== 'play' || c.state === 'tackled' || m.kickAim) return hideAll();
    const sides = [-1, 1];
    sides.forEach((s, i) => {
      const q = pickReceiver(m, c, s, false);
      const t = this.tags[i];
      if (!q) { t.style.display = 'none'; return; }
      t.textContent = s < 0 ? (pad ? 'LB' : 'Q') : (pad ? 'RB' : 'E');
      this.project(t, q, camera);
    });
  }
  project(elm, p, camera) {
    this.v3.set(p.p.x, 2.35, p.p.z).project(camera);
    if (this.v3.z > 1) { elm.style.display = 'none'; return; }
    elm.style.display = '';
    elm.style.left = `${(this.v3.x * 0.5 + 0.5) * window.innerWidth}px`;
    elm.style.top = `${(-this.v3.y * 0.5 + 0.5) * window.innerHeight}px`;
  }
}
