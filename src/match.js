// Match engine: phases, rules (six-tackle sets, play-the-ball, restarts, scoring) and the main tick.
import * as THREE from 'three';
import { FIELD, KICKS, DIFFICULTY, WIND_PRESETS } from './config.js';
import { Player } from './player.js';
import { PlayerModel, makeKitMaterials } from './model.js';
import { Ball } from './ball.js';
import { makeRoster, resolveKits } from './teams.js';
import { clamp, rand, randRange, chance, pick, dist2D, headingOf, lerp } from './util.js';
import { updateContact, resolveCollisions } from './contact.js';
import { updateAI } from './ai.js';
import { updateHuman } from './human.js';
import * as A from './actions.js';

const H = FIELD.half, W = FIELD.halfW;

function newStats() {
  return { tries: 0, convM: 0, convA: 0, penGoals: 0, penA: 0, fieldGoals: 0, tackles: 0, missed: 0, runs: 0, metres: 0,
    offloads: 0, linebreaks: 0, errors: 0, pensConceded: 0, possT: 0, kicks: 0, busts: 0, passes: 0 };
}

class Team {
  constructor(idx, def, kit) {
    this.idx = idx; this.def = def; this.kit = kit; this.name = def.name; this.short = def.short;
    this.dir = idx === 0 ? 1 : -1; this.players = []; this.score = 0; this.stats = newStats(); this.human = false;
  }
  get(num) { return this.players.find((p) => p.num === num); }
  get goalKicker() { return [...this.players].sort((a, b) => b.attr.kick - a.attr.kick)[0]; }
  get color() { return this.kit.primary; }
}

export class Match {
  constructor(o) {
    this.scene = o.scene; this.audio = o.audio; this.hud = o.hud; this.input = o.input; this.camRig = o.camRig;
    this.settings = o.settings; this.diff = DIFFICULTY[o.settings.difficulty] || DIFFICULTY.normal;
    this.humanIdx = o.humanIdx;
    const kits = resolveKits(o.homeDef, o.awayDef);
    this.teams = [new Team(0, o.homeDef, kits[0]), new Team(1, o.awayDef, kits[1])];
    this.teams[0].opp = this.teams[1]; this.teams[1].opp = this.teams[0];
    if (this.humanIdx >= 0) this.teams[this.humanIdx].human = true;
    this.humanTeam = this.humanIdx >= 0 ? this.teams[this.humanIdx] : null;
    this.players = [];
    for (const T of this.teams) {
      const mats = makeKitMaterials(T.kit, T.def.id + T.idx);
      for (const r of makeRoster(T.def)) {
        const model = new PlayerModel(mats, { ...r, number: r.num });
        this.scene.add(model.root);
        const p = new Player(T, r, model);
        T.players.push(p); this.players.push(p);
      }
    }
    // referee
    const refMats = makeKitMaterials({ primary: '#c6f01e', secondary: '#111111', trim: '#111111', pattern: 'yoke', shorts: '#111111', socks: '#111111' }, 'ref');
    const refModel = new PlayerModel(refMats, { number: 0, build: { w: 0.95, h: 0.98 }, skin: '#e0ac82', hair: '#3a2a1a', hairStyle: 'short', isRef: true });
    this.scene.add(refModel.root);
    this.ref = new Player(null, { num: 0, pos: 'REF', name: 'Referee', attr: { speed: 80, accel: 80, agility: 70, strength: 50, tackle: 0, pass: 0, kick: 0, hand: 0, stamina: 99, foot: 'R' }, mass: 75 }, refModel);
    this.ball = new Ball(this.scene);

    // wind
    const wp = WIND_PRESETS[o.settings.wind] || WIND_PRESETS.breezy;
    this.windBase = { ang: rand() * Math.PI * 2, speed: randRange(wp.min, wp.max), gust: wp.gust };
    this.wind = { x: 0, z: 0, speed: 0, ang: 0 };
    this.updateWind(0);

    this.time = 0; this.clock = 0; this.half = 1; this.siren = false;
    this.clockRate = 2400 / (Math.max(1, o.settings.halfLen) * 60);
    this.phase = 'none'; this.phaseT = 0; this.pd = {};
    this.poss = this.teams[0]; this.tackleCount = 0;
    this.engagements = [];
    this.controlled = null;
    this.kickAim = null; this.humanFoot = null;
    this.kickTarget = null; this.events = []; this.eventLog = [];
    this.gainLineX = 0; this.lineBreakDone = false; this.excite = 0;
    this.firstKickTeam = chance(0.5) ? this.teams[0] : this.teams[1];
    this.over = false; this.goldenPoint = false;
    this.listeners = [];

    // indicator meshes
    const ringGeo = new THREE.RingGeometry(0.55, 0.75, 24);
    this.ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffe14a, transparent: true, opacity: 0.9, depthWrite: false }));
    this.ring.rotation.x = -Math.PI / 2; this.scene.add(this.ring);
    this.arrow = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.4, 4), new THREE.MeshBasicMaterial({ color: 0xffe14a }));
    this.arrow.rotation.x = Math.PI; this.scene.add(this.arrow);
    this.landMarker = new THREE.Mesh(new THREE.RingGeometry(0.6, 0.9, 20), new THREE.MeshBasicMaterial({ color: 0x4af0ff, transparent: true, opacity: 0.7, depthWrite: false }));
    this.landMarker.rotation.x = -Math.PI / 2; this.landMarker.visible = false; this.scene.add(this.landMarker);
    this.aimLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 24 }, () => new THREE.Vector3())),
      new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.6, gapSize: 0.4, transparent: true, opacity: 0.9 }));
    this.aimLine.visible = false; this.aimLine.frustumCulled = false; this.scene.add(this.aimLine);
    this.aimReticle = new THREE.Mesh(new THREE.RingGeometry(1.0, 1.35, 24), new THREE.MeshBasicMaterial({ color: 0xff6a2a, transparent: true, opacity: 0.85, depthWrite: false }));
    this.aimReticle.rotation.x = -Math.PI / 2; this.aimReticle.visible = false; this.scene.add(this.aimReticle);
    this.tee = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 0.12, 8), new THREE.MeshLambertMaterial({ color: 0xff8a00 }));
    this.tee.visible = false; this.scene.add(this.tee);
  }

  // ---------------------------------------------------------------- helpers
  opp(T) { return T.opp; }
  ax(T, x) { return x * T.dir; }
  on(fn) { this.listeners.push(fn); }
  emit(type, data = {}) {
    const e = { type, t: this.time, clock: this.clock, half: this.half, ...data };
    this.eventLog.push({ type, t: +this.time.toFixed(2), half: this.half, team: data.team?.short, who: data.player?.name, note: data.note, how: data.how, why: data.why, kind: data.kind });
    if (this.eventLog.length > 400) this.eventLog.shift();
    for (const fn of this.listeners) fn(e);
  }
  message(text, sub = '', dur = 2.0, style = '') { this.hud?.message(text, sub, dur, style); }
  isLate() { return this.half >= 2 && this.clock > 2400 * 0.78; }
  clockText() {
    const total = this.half === 1 ? this.clock : this.half === 2 ? 2400 + this.clock : 4800 + this.clock;
    const mm = Math.floor(total / 60), ss = Math.floor(total % 60);
    return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
  }
  updateWind(dt) {
    const wb = this.windBase, t = this.time;
    const g = 1 + Math.sin(t * 0.31) * wb.gust * 0.6 + Math.sin(t * 0.83 + 1.3) * wb.gust * 0.4;
    const ang = wb.ang + Math.sin(t * 0.05) * 0.25;
    this.wind.speed = Math.max(0, wb.speed * g); this.wind.ang = ang;
    this.wind.x = Math.cos(ang) * this.wind.speed; this.wind.z = Math.sin(ang) * this.wind.speed;
  }
  setPhase(ph, data = {}) {
    this.phase = ph; this.phaseT = 0; this.pd = data;
    this.emit('phase', { phase: ph });
  }
  setControlled(p) {
    if (this.controlled === p) return;
    if (this.controlled) this.controlled.controlled = false;
    this.controlled = p; if (p) { p.controlled = true; p.ai.react = 0; }
  }
  nearest(list, x, z, filter = () => true) {
    let best = null, bd = Infinity;
    for (const p of list) { if (!filter(p)) continue; const d = dist2D(p.p.x, p.p.z, x, z); if (d < bd) { bd = d; best = p; } }
    return best;
  }
  clampField(x, z, zIn = 1) { return { x: clamp(x, -H + 0.5, H - 0.5), z: clamp(z, -W + zIn, W - zIn) }; }
  attackTeam() {
    const b = this.ball;
    if (b.state === 'held' && b.carrier) return b.carrier.team;
    if (b.kind === 'pass' && b.info) return b.info.team;
    return this.poss;
  }

  // ---------------------------------------------------------------- start
  start() {
    this.setupKickoff(this.firstKickTeam, true);
  }

  // teleport helpers for set pieces
  place(p, x, z, heading) {
    p.p.set(x, 0, z); p.v.set(0, 0, 0); p.heading = heading; p.setState('free'); p.lunge = null; p.engage = null;
    p.offside = false; p.kickOffside = false; p.wish.x = p.wish.z = 0; p.ai.hold = { x, z }; p.ai.role = 'hold'; p.faceTarget = heading;
  }
  resetAll() {
    this.engagements.length = 0;
    for (const p of this.players) { p.lunge = null; p.engage = null; p.offside = false; p.kickOffside = false; p.speedMul = 1; p.ai.hold = null; p.ai.plan = null; p.readyStance = false; }
    this.kickAim = null; this.kickTarget = null; this.tee.visible = false;
  }

  // ---------------------------------------------------------------- kick-off
  setupKickoff(T, first = false) {
    const R = T.opp;
    const go = () => {
      this.resetAll();
      const d = T.dir;
      const kicker = T.goalKicker;
      for (const p of T.players) {
        if (p === kicker) continue;
        const i = T.players.filter((q) => q !== kicker).indexOf(p);
        this.place(p, -d * 1.5, -30 + i * 5.2 + randRange(-0.5, 0.5), headingOf(d, 0));
      }
      this.place(kicker, -d * 4.5, -1.2, headingOf(d, 0));
      // receivers deep in their own half (R attacks toward -d direction... R.dir = -d)
      const spots = {
        8: [12, -8], 10: [12, 8], 9: [14, 0], 11: [16, -18], 12: [16, 18], 13: [18, 0],
        3: [26, 14], 4: [26, -14], 6: [30, -5], 7: [30, 6], 2: [38, 22], 5: [38, -22], 1: [45, 0],
      };
      for (const p of R.players) { const s = spots[p.num]; this.place(p, d * s[0], s[1] * R.dir, headingOf(-d, 0)); }
      this.ball.state = 'dead'; this.ball.carrier = null; this.ball.p.set(0, 0.3, 0); this.ball.v.set(0, 0, 0);
      this.tee.visible = true; this.tee.position.set(0, 0.06, 0);
      this.poss = R; this.tackleCount = 0;
      this.setPhase('kickoff', { team: T, kicker, stage: 'aim', type: 'kickoff', yaw: headingOf(d, 0), power: 0, holdT: 0, cpuT: randRange(1.2, 2.0), runT: 0 });
      if (T.human) this.setControlled(kicker);
      else if (this.humanTeam) this.setControlled(this.humanTeam.get(1));
      this.message(first ? 'KICK-OFF' : 'RESTART', `${T.name} kick off`, 1.8);
      this.audio.whistle();
    };
    if (first) go(); else this.transition(go);
  }

  // Fade to black (in sim time), run the setup, fade back in. Prevents a phase from re-triggering setups.
  transition(fn) {
    this.setPhase('transition', { fn, done: false });
    this.hud?.fadeOut();
  }
  phase_transition() {
    if (!this.pd.done && this.phaseT >= 0.32) {
      this.pd.done = true; const fn = this.pd.fn;
      fn(); this.hud?.fadeIn();
    }
  }

  // ---------------------------------------------------------------- whistle / restarts
  whistleStop(msg, sub, restart, opts = {}) {
    if (this.phase === 'whistle') return;
    for (const e of this.engagements) { e.carrier.state === 'tackled' && e.carrier.setState('free'); for (const t of e.tacklers) t.setState('stumble', 0.4); }
    this.engagements.length = 0;
    if (this.ball.state === 'held') { this.ball.carrier = null; this.ball.state = 'ground'; this.ball.v.set(0, 0, 0); }
    this.kickAim = null;
    this.audio.whistle(opts.long);
    this.ref.refSignal = 1.2;
    this.message(msg, sub, 2.0, opts.style || 'bad');
    this.setPhase('whistle', { restart, dur: opts.dur || 1.8 });
  }
  phase_whistle() {
    if (this.phaseT >= this.pd.dur) {
      if (this.siren && !this.pd.restart.ignoreSiren) return this.endPeriod();
      this.executeRestart(this.pd.restart);
    }
  }
  executeRestart(r) {
    switch (r.type) {
      case 'scrum': return this.setupScrum(r.team, r.x, r.z);
      case 'penalty': return this.setupPenalty(r.team, r.x, r.z);
      case 'ptb': return this.transition(() => this.setupPTB(r.team, { x: r.x, z: r.z }, { restart: true, zero: true }));
      case 'dropout': return this.setupDropout(r.team);
      case 'kickoff': return this.setupKickoff(r.team);
    }
  }
  scrumRestart(feedTeam, x, z, msg, sub) {
    this.whistleStop(msg, sub, { type: 'scrum', team: feedTeam, x, z });
  }
  knockOn(T, x, z, why = 'KNOCK ON') {
    T.stats.errors++;
    this.emit('error', { team: T, why });
    this.audio.roar(0.6, true);
    const ax = x * T.dir;
    if (ax < -H) return this.whistleStop(why, `${T.short} error in-goal — goal-line drop-out`, { type: 'dropout', team: T });
    if (ax > H) return this.whistleStop(why, `${T.short} error in-goal — 20m restart`, { type: 'ptb', team: T.opp, x: -T.opp.dir * 30, z: 0 });
    this.scrumRestart(T.opp, x, z, why, `Scrum, ${T.opp.short} feed`);
  }
  awardPenalty(T, x, z, reason) {
    T.opp.stats.pensConceded++;
    this.emit('penalty', { team: T, reason });
    this.whistleStop('PENALTY', `${reason} — ${T.short} ball`, { type: 'penalty', team: T, x, z }, { style: 'warn' });
  }
  setupDropout(T) {
    this.transition(() => {
      this.resetAll();
      const d = T.dir, gx = -d * H;
      const kicker = T.goalKicker;
      T.players.forEach((p, i) => { if (p !== kicker) this.place(p, gx + d * randRange(0.5, 3), -28 + i * 4.7, headingOf(d, 0)); });
      this.place(kicker, gx - d * 1.5, 0, headingOf(d, 0));
      T.opp.players.forEach((p, i) => this.place(p, gx + d * (12 + (p.num === 1 ? 30 : (i % 3) * 6)), -28 + i * 4.7, headingOf(-d, 0)));
      this.ball.state = 'dead'; this.ball.carrier = null; this.ball.p.set(gx, 0.3, 0);
      this.poss = T.opp; this.tackleCount = 0;
      this.setPhase('kickoff', { team: T, kicker, stage: 'aim', type: 'dropout', yaw: headingOf(d, 0), power: 0, holdT: 0, cpuT: randRange(1.0, 1.6), runT: 0, spot: { x: gx, z: 0 } });
      if (T.human) this.setControlled(kicker); else if (this.humanTeam) this.setControlled(this.humanTeam.get(1));
      this.message('GOAL-LINE DROP-OUT', `${T.name}`, 1.8);
    });
  }
  phase_kickoff(dt) {
    const pd = this.pd, k = pd.kicker, T = pd.team;
    const spot = pd.spot || { x: 0, z: 0 };
    if (pd.stage === 'aim') {
      k.setState('goalkick'); k.anim.preKick = true;
      k.p.set(spot.x - Math.sin(pd.yaw) * 3.5, 0, spot.z - Math.cos(pd.yaw) * 3.5); k.heading = pd.yaw;
      this.ball.p.set(spot.x, pd.type === 'dropout' ? 1.0 : 0.3, spot.z);
      if (T.human) A.humanSetPieceAim(this, dt, pd, pd.type === 'dropout' ? ['dropout'] : ['kickoff', 'shortko']);
      else if (this.phaseT > pd.cpuT) A.cpuKickoffAim(this, pd);
    } else if (pd.stage === 'run') {
      pd.runT += dt;
      const f = Math.min(1, pd.runT / 0.55);
      k.p.set(spot.x - Math.sin(pd.yaw) * (3.5 - f * 3.0), 0, spot.z - Math.cos(pd.yaw) * (3.5 - f * 3.0));
      k.anim.preKick = false; k.anim.kt = pd.runT > 0.4 ? (pd.runT - 0.4) + 0.12 : 0; k.anim.foot = pd.foot;
      k.v.set(Math.sin(pd.yaw) * 5.5, 0, Math.cos(pd.yaw) * 5.5); k.speedH = f < 1 ? 5.5 : 0;
      if (pd.runT >= 0.47 && !pd.kicked) {
        pd.kicked = true; this.tee.visible = false;
        A.kickBall(this, k, pd.type, pd.yaw, pd.power, { place: pd.type !== 'dropout', restart: true, foot: pd.foot, elev: pd.elev });
        k.setState('kick', 0.55); k.stateT = 0.2;
        this.setPhase('play', {});
      }
    }
  }

  // ---------------------------------------------------------------- live play
  phase_play() { /* rules run in rulesLive */ }

  updateBall(dt) {
    const b = this.ball;
    if (b.state === 'held' && b.carrier) {
      const c = b.carrier, f = c.fwd, r = c.right;
      b.p.set(c.p.x + f.x * 0.2 + r.x * 0.2 * c.carrySide, c.state === 'ground' ? 0.3 : 1.12, c.p.z + f.z * 0.2 + r.z * 0.2 * c.carrySide);
      b.v.copy(c.v);
    } else if (b.state !== 'dead') b.step(dt, this.wind);
    if (this.phase === 'play') A.ballLive(this, dt);
    else if (this.phase === 'goalKick') A.goalFlightCheck(this);
    else if (b.state === 'ground' || b.state === 'air') { /* dead-ish ball keeps moving visually */ }
  }

  rulesLive(dt) {
    const b = this.ball;
    if (b.state === 'held' && b.carrier) A.carrierBounds(this, b.carrier, dt);
    // onside recovery for kick-offside players and ptb-offside defenders
    if (b.kind === 'kick' && b.info && b.state !== 'held') A.updateKickOffside(this);
    for (const p of this.players) {
      if (!p.offside) continue;
      const D = p.team;
      const behind = p.p.x * D.dir <= (this.onsideAx ?? -99) + 0.4;
      const c = b.carrier;
      const passed = c && c.team !== D && (c.p.x - p.p.x) * c.team.dir > 0.5;
      if (behind || passed || this.time - (this.playStartT ?? 0) > 3.0) p.offside = false;
    }
    // line breaks + metres
    const c = b.carrier;
    if (c && b.state === 'held') {
      const T = c.team;
      const ahead = T.opp.players.filter((d) => d.isUpright() && (d.p.x - c.p.x) * T.dir > -0.5 && Math.abs(d.p.z - c.p.z) < 22).length;
      if (!this.lineBreakDone && ahead <= 1 && (c.p.x - this.gainLineX) * T.dir > 6) {
        this.lineBreakDone = true; T.stats.linebreaks++; this.emit('linebreak', { team: T, player: c });
        this.message('LINE BREAK!', c.name, 1.5, 'good'); this.audio.roar(0.8);
      }
      const ax = c.p.x * T.dir;
      this.excite = clamp((ax + 10) / 60, 0, 1) * 0.6 + (this.lineBreakDone ? 0.4 : 0);
    } else this.excite *= 0.98;
  }

  // ---------------------------------------------------------------- tackles → play-the-ball
  onTackleComplete(e) {
    const c = e.carrier, T = c.team;
    if (this.siren) return this.endPeriod();
    if (e.penalty) return this.awardPenalty(T, c.p.x, c.p.z, e.penalty);
    const ax = c.p.x * T.dir;
    if (ax < -H) { // tackled in own in-goal
      return this.whistleStop('TACKLED IN-GOAL', `Goal-line drop-out ${T.short}`, { type: 'dropout', team: T });
    }
    this.tackleCount++;
    T.stats.runs++;
    let team = T, msg = null;
    if (e.tacklers.length >= 2 && chance(0.03 + 0.015 * e.tacklers.length) && this.tackleCount < 6) {
      this.tackleCount = 0; msg = ['SIX AGAIN', 'Ruck infringement'];
      T.opp.stats.pensConceded++; this.emit('sixagain', { team: T });
    }
    if (this.tackleCount >= 6) {
      team = T.opp; this.tackleCount = 0; msg = ['HANDOVER', `${team.short} ball`];
      this.poss = team; this.emit('handover', { team });
    }
    if (msg) this.message(msg[0], msg[1], 1.6, msg[0] === 'HANDOVER' ? 'warn' : 'good');
    this.audio.whistle();
    this.setupPTB(team, { x: c.p.x, z: c.p.z }, { tackled: c, e, handover: team !== T });
  }

  setupPTB(T, mark, o = {}) {
    const D = T.opp, d = T.dir;
    if (o.restart) this.resetAll();
    const mx = clamp(mark.x, -H + 1, H - 1) * 1, mz = clamp(mark.z, -W + 1.5, W - 1.5);
    let mxx = mx;
    if (mx * d > H - 0.5) mxx = d * (H - 0.5);
    if (o.zero) this.tackleCount = 0;
    this.poss = T;
    let ptbPlayer = o.tackled && !o.handover ? o.tackled : this.nearest(T.players, mxx, mz, (p) => p.state !== 'ground' || o.restart);
    if (o.restart) {
      // teleport teams into shape around the mark
      for (const p of T.players) { const s = A.attackSlotFor(this, T, p, mxx, mz); this.place(p, s.x, s.z, headingOf(d, 0)); }
      const onsAx = Math.max(-H, mxx * D.dir - 10);
      for (const p of D.players) { const zz = clamp(-W + 4 + (p.num - 1) * 5.0, -W + 2, W - 2); this.place(p, (onsAx - (p.num === 1 ? 18 : 0)) * D.dir, zz, headingOf(-d, 0)); }
      ptbPlayer = this.nearest(T.players, mxx, mz);
    }
    let dummy = T.get(9);
    if (dummy === ptbPlayer || dist2D(dummy.p.x, dummy.p.z, mxx, mz) > 18 || !dummy.isUpright()) {
      dummy = this.nearest(T.players, mxx - d * 1.5, mz, (p) => p !== ptbPlayer && p.isUpright());
    }
    const nT = o.e ? o.e.tacklers.length : 1, dom = o.e ? Math.max(0, o.e.dom) : 0;
    let playAt = clamp(1.15 + 0.35 * (nT - 1) + dom * 0.8 + rand() * 0.35, 1.0, 3.0);
    if (o.handover) playAt += 1.0;
    if (o.restart) playAt = 1.6;
    // markers: up to two defenders (prefer the tacklers)
    const markers = [];
    if (o.e) for (const t of o.e.tacklers) if (markers.length < 2) markers.push(t);
    while (markers.length < (o.restart ? 1 : 2)) {
      const m = this.nearest(D.players, mxx, mz, (p) => !markers.includes(p));
      if (!m) break; markers.push(m);
    }
    const onsideAx = Math.max(-H, mxx * D.dir - 10);
    this.onsideAx = onsideAx;
    for (const p of D.players) {
      p.ai.marker = markers.includes(p);
      p.offside = !p.ai.marker && p.p.x * D.dir > onsideAx + 0.4;
    }
    for (const p of T.players) { p.ai.marker = false; p.offside = false; p.kickOffside = false; }
    if (ptbPlayer.state !== 'ground') ptbPlayer.knockDown(0.01);
    this.ball.state = 'dead'; this.ball.carrier = null; this.ball.kind = 'loose'; this.ball.info = null;
    this.ball.p.set(mxx, 0.3, mz);
    const plan = A.choosePlan(this, T);
    this.setPhase('ptb', { team: T, mark: { x: mxx, z: mz }, ptbPlayer, dummy, playAt, stage: 'down', markers, onsideAx, plan, extra: 0 });
    for (const p of T.players) p.ai.plan = null;
    if (T.human) this.setControlled(dummy);
    else if (this.humanTeam && (!this.controlled || this.controlled.team !== D || o.handover || o.restart)) {
      this.setControlled(this.nearest(D.players, mxx + D.dir * -1 * 0 + (onsideAx * D.dir - mxx) * 0, mz, (p) => !markers.includes(p)) || D.get(13));
    }
    this.gainLineX = mxx; this.lineBreakDone = false;
    this.kickTarget = null;
  }
  phase_ptb(dt) {
    const pd = this.pd, T = pd.team, d = T.dir, pp = pd.ptbPlayer, dh = pd.dummy;
    const mk = pd.mark;
    if (pd.stage === 'down' && this.phaseT > 0.45) {
      pd.stage = 'up'; pp.setState('ptb'); pp.p.set(mk.x, 0, mk.z); pp.v.set(0, 0, 0); pp.heading = headingOf(d, 0);
    }
    if (pd.stage === 'up' || pd.stage === 'roll') {
      pp.p.set(mk.x, 0, mk.z); pp.heading = headingOf(d, 0); pp.anim.roll = 0;
      this.ball.p.set(mk.x + d * 0.25, 0.25, mk.z);
    }
    const dhSpot = { x: mk.x - d * 1.3, z: mk.z };
    const dhReady = dist2D(dh.p.x, dh.p.z, dhSpot.x, dhSpot.z) < 1.6;
    if (pd.stage === 'up' && this.phaseT >= pd.playAt - 0.3 && (dhReady || this.phaseT > pd.playAt + 1.5)) pd.stage = 'roll';
    if (pd.stage === 'roll') {
      pd.rollT = (pd.rollT || 0) + dt; pp.anim.roll = pd.rollT / 0.35;
      const f = clamp(pd.rollT / 0.35, 0, 1);
      this.ball.p.set(mk.x + d * 0.25 - d * 1.2 * f, 0.15, mk.z);
      if (pd.rollT >= 0.35) {
        if (!dhReady) { dh.p.set(dhSpot.x, 0, dhSpot.z); dh.v.set(0, 0, 0); }
        dh.heading = headingOf(d, 0); dh.setState('free');
        this.ball.give(dh);
        pp.setState('free'); pp.anim.roll = 0;
        this.playStartT = this.time;
        this.setPhase('play', {});
        dh.ai.plan = pd.plan; dh.ai.passDelay = randRange(0.12, 0.35); dh.ai.dummyHalf = true; dh.ai.passCd = 0;
        if (T.human) this.setControlled(dh);
        this.emit('ptb', { team: T });
      }
    }
  }

  // ---------------------------------------------------------------- scrum
  setupScrum(feed, x, z) {
    this.transition(() => {
      this.resetAll();
      const sx = clamp(x, -H + 10, H - 10), sz = clamp(z, -W + 20, W - 20);
      const packs = {};
      for (const T of this.teams) {
        const d = T.dir;
        const layout = { 8: [-0.7, -0.6], 9: [-0.7, 0], 10: [-0.7, 0.6], 11: [-1.5, -0.35], 12: [-1.5, 0.35], 13: [-2.3, 0] };
        for (const p of T.players) {
          const L = layout[p.num];
          if (L) { this.place(p, sx + d * L[0], sz + L[1], headingOf(d, 0)); p.setState('scrum'); }
        }
        const hb = T.get(7);
        if (T === feed) this.place(hb, sx, sz + (sz > 0 ? -1.6 : 1.6), headingOf(0, sz > 0 ? 1 : -1));
        else this.place(hb, sx - d * 1.2, sz + (sz > 0 ? -2.2 : 2.2), headingOf(d, 0));
        // backs
        const back = T === feed ? 5 : 5;
        const backs = [6, 1, 2, 3, 4, 5];
        const open = sz > 0 ? -1 : 1;
        backs.forEach((num, i) => {
          const p = T.get(num);
          const lat = num === 1 ? open * 8 : open * (6 + i * 6.5);
          const depth = T === feed ? (num === 1 ? 14 : 7 + i * 0.8) : (num === 1 ? 22 : back + 3);
          this.place(p, sx - d * depth, clamp(sz + lat, -W + 2, W - 2), headingOf(d, 0));
        });
        packs[T.idx] = true;
      }
      this.ball.state = 'dead'; this.ball.carrier = null; this.ball.p.set(sx, 0.15, sz + (sz > 0 ? -1.2 : 1.2));
      this.poss = feed; this.tackleCount = 0;
      this.setPhase('scrum', { feed, x: sx, z: sz });
      if (this.humanTeam) this.setControlled(this.humanTeam === feed ? feed.get(7) : this.humanTeam.get(6));
      this.message('SCRUM', `${feed.short} feed`, 1.6);
    });
  }
  phase_scrum() {
    const pd = this.pd, F = pd.feed, d = F.dir;
    if (this.phaseT > 1.4 && this.phaseT < 2.6) this.ball.p.set(pd.x - d * (this.phaseT - 1.4) * 2.0, 0.15, pd.z);
    if (this.phaseT >= 2.6) {
      const hb = F.get(7);
      const bx = pd.x - d * 2.9;
      hb.p.set(bx - d * 0.4, 0, pd.z); hb.heading = headingOf(d, 0);
      for (const p of this.players) if (p.state === 'scrum') { p.setState('getup', 0.35); p.anim.dur = 0.35; p.anim.faceUp = false; }
      this.ball.give(hb);
      hb.ai.plan = { kind: 'shift' }; hb.ai.passDelay = randRange(0.2, 0.5); hb.ai.dummyHalf = true;
      this.gainLineX = pd.x; this.lineBreakDone = false; this.playStartT = this.time;
      this.onsideAx = -99;
      this.setPhase('play', {});
      if (F.human) this.setControlled(hb);
    }
  }

  // ---------------------------------------------------------------- penalties
  setupPenalty(T, x, z) {
    const m = this.clampField(x, z, 5);
    if (m.x * T.dir > H - 10) m.x = T.dir * (H - 10);
    this.resetAll();
    this.poss = T; this.tackleCount = 0;
    this.ball.state = 'dead'; this.ball.carrier = null; this.ball.p.set(m.x, 0.15, m.z);
    this.onsideAx = Math.max(-H, m.x * T.opp.dir - 10);
    this.setPhase('penaltyChoice', { team: T, mark: m, cpuT: 1.2 });
    if (T.human) {
      this.hud.penaltyChoice((choice) => this.penaltyDecision(choice));
    }
  }
  phase_penaltyChoice() {
    const pd = this.pd;
    if (!pd.team.human && this.phaseT > pd.cpuT && !pd.decided) { pd.decided = true; this.penaltyDecision(A.cpuPenaltyChoice(this, pd.team, pd.mark)); }
  }
  penaltyDecision(choice) {
    const pd = this.pd, T = pd.team, m = pd.mark;
    if (this.phase !== 'penaltyChoice') return;
    this.emit('penaltyChoice', { team: T, choice });
    if (choice === 'goal') this.setupGoalKick(T, 'penalty', m.x, m.z);
    else if (choice === 'touch') this.setupTouchKick(T, m);
    else this.transition(() => this.setupPTB(T, m, { restart: true, zero: true, tap: true }));
  }
  setupTouchKick(T, m) {
    this.transition(() => {
      this.resetAll();
      const kicker = T.goalKicker, d = T.dir;
      const side = m.z >= 0 ? 1 : -1;
      const yaw = headingOf(d * 0.75, side * 0.66);
      this.place(kicker, m.x, m.z, yaw);
      for (const p of T.players) if (p !== kicker) this.place(p, m.x - d * randRange(3, 12), clamp(m.z + randRange(-20, 20), -W + 2, W - 2), headingOf(d, 0));
      for (const p of T.opp.players) this.place(p, m.x + d * randRange(10, 40), clamp(randRange(-W + 3, W - 3), -W + 2, W - 2), headingOf(-d, 0));
      this.ball.give(kicker);
      this.setPhase('touchKick', { team: T, kicker, stage: 'aim', type: 'touch', yaw, power: 0, holdT: 0, cpuT: 1.4, spot: { x: m.x, z: m.z } });
      if (T.human) this.setControlled(kicker);
    });
  }
  phase_touchKick(dt) {
    const pd = this.pd, k = pd.kicker;
    k.p.set(pd.spot.x, 0, pd.spot.z); k.v.set(0, 0, 0); k.heading = pd.yaw;
    if (pd.stage === 'aim') {
      if (pd.team.human) A.humanSetPieceAim(this, dt, pd, ['touch']);
      else if (this.phaseT > pd.cpuT) A.cpuTouchAim(this, pd);
    } else if (pd.stage === 'run') {
      A.kickBall(this, k, 'touch', pd.yaw, pd.power, { penaltyTouch: true, foot: pd.foot });
      this.setPhase('play', {});
    }
  }

  // ---------------------------------------------------------------- goal kicking
  setupGoalKick(T, kind, x, z) {
    this.transition(() => {
      this.resetAll();
      const d = T.dir, kicker = T.goalKicker;
      const zz = clamp(z, -W + 1, W - 1);
      let dist = kind === 'conversion' ? A.bestConversionDistance(zz) : H - x * d;
      if (kind === 'penalty') dist = Math.max(10, dist);
      const sx = d * (H - dist);
      this.ball.state = 'dead'; this.ball.carrier = null; this.ball.p.set(sx, 0.3, zz); this.ball.v.set(0, 0, 0);
      this.tee.visible = true; this.tee.position.set(sx, 0.06, zz);
      const yaw = headingOf(d * H - sx, -zz);
      // defenders under the posts in-goal, attackers behind the kicker
      T.opp.players.forEach((p, i) => this.place(p, d * (H + 2 + (i % 3)), -9 + i * 1.5, headingOf(-d, 0)));
      T.players.forEach((p, i) => { if (p !== kicker) this.place(p, sx - d * (8 + (i % 4) * 2), zz * 0.7 - 12 + i * 2, headingOf(d, 0)); });
      this.place(kicker, sx - Math.sin(yaw) * 3.5, zz - Math.cos(yaw) * 3.5, yaw);
      this.setPhase('goalKick', { team: T, kicker, kind, stage: kind === 'conversion' ? 'place' : 'aim', x: sx, z: zz, dist, yaw, baseYaw: yaw,
        elev: KICKS.goal.elev, power: 0, holdT: 0, foot: this.humanFoot && T.human ? this.humanFoot : kicker.attr.foot, cpuT: randRange(1.6, 2.4), runT: 0 });
      T.stats[kind === 'conversion' ? 'convA' : 'penA']++;
      if (T.human) this.setControlled(kicker);
      this.message(kind === 'conversion' ? 'CONVERSION' : 'PENALTY GOAL', `${kicker.name} lines it up`, 1.6);
    });
  }
  phase_goalKick(dt) {
    const pd = this.pd, k = pd.kicker, T = pd.team;
    if (pd.stage === 'place' || pd.stage === 'aim' || pd.stage === 'power') {
      const sx = pd.x, zz = pd.z;
      this.ball.p.set(sx, 0.3, zz); this.tee.position.set(sx, 0.06, zz); this.tee.visible = true;
      this.ball.lookDir.set(Math.sin(pd.yaw), 0.25 + pd.elev * 0.4, Math.cos(pd.yaw)).normalize(); this.ball.spinAngle = 0;
      k.setState('goalkick'); k.anim.preKick = true; k.heading = pd.yaw;
      k.p.set(sx - Math.sin(pd.yaw) * 3.5, 0, zz - Math.cos(pd.yaw) * 3.5);
      if (T.human) A.humanGoalKick(this, dt, pd);
      else if (this.phaseT > pd.cpuT) A.cpuGoalKick(this, pd);
    } else if (pd.stage === 'run') {
      pd.runT += dt;
      const f = Math.min(1, pd.runT / 0.6);
      k.p.set(pd.x - Math.sin(pd.yaw) * (3.5 - f * 3.0), 0, pd.z - Math.cos(pd.yaw) * (3.5 - f * 3.0));
      k.anim.preKick = false; k.anim.kt = pd.runT > 0.45 ? pd.runT - 0.45 + 0.12 : 0; k.anim.foot = pd.foot;
      k.speedH = f < 1 ? 4.5 : 0; k.heading = pd.yaw;
      if (pd.runT >= 0.52 && !pd.kicked) {
        pd.kicked = true; this.tee.visible = false;
        A.kickBall(this, k, 'goal', pd.yaw, pd.power, { place: true, elev: pd.elev, foot: pd.foot, goal: true });
        pd.stage = 'flight'; pd.flightT = 0; pd.prevX = this.ball.p.x;
      }
    } else if (pd.stage === 'flight') {
      pd.flightT += dt;
      k.anim.kt = pd.runT - 0.45 + 0.12 + pd.flightT;
      if (pd.flightT > 4.5 && !pd.result) A.goalResult(this, false);
    } else if (pd.stage === 'result') {
      if (this.phaseT > 2.4) {
        if (this.goldenPoint && pd.result) return this.endMatch();
        if (this.siren) return this.endPeriod();
        if (pd.kind === 'penalty' && !pd.result) return this.transition(() => this.setupPTB(T.opp, { x: -T.opp.dir * 30, z: 0 }, { restart: true, zero: true }));
        this.setupKickoff(T.opp);
      }
    }
  }

  // ---------------------------------------------------------------- scoring
  scoreTry(p, z) {
    if (this.phase !== 'play') return;
    const T = p.team;
    T.score += 4; T.stats.tries++; p.stats.tries++;
    this.engagements.length = 0;
    this.ball.state = 'dead'; this.ball.carrier = null; this.ball.p.set(p.p.x + T.dir * 0.4, 0.15, p.p.z);
    this.audio.whistle(true); this.audio.roar(1.4);
    this.message('TRY!', `${p.name} — ${T.name}`, 2.6, 'try');
    this.emit('try', { team: T, player: p });
    this.hud.flashScore();
    p.setState('celebrate');
    this.setPhase('tryCelebration', { team: T, scorer: p, z, x: p.p.x });
    this.excite = 1;
  }
  phase_tryCelebration() {
    const pd = this.pd;
    if (this.phaseT > 3.2) {
      for (const p of this.players) if (p.state === 'celebrate') p.setState('free');
      if (this.goldenPoint) return this.endMatch();
      this.setupGoalKick(pd.team, 'conversion', pd.x, pd.z);
    }
  }

  // ---------------------------------------------------------------- periods
  endPeriod() {
    this.siren = false;
    this.engagements.length = 0; this.kickAim = null;
    this.audio.whistle(true);
    if (this.half === 1) {
      this.setPhase('halftime', { next: () => this.startSecondHalf() });
      if (this.humanTeam) this.hud.showBreak(this, 'HALF TIME', () => this.startSecondHalf());
    } else if (this.half === 2 && this.teams[0].score === this.teams[1].score && this.settings.goldenPoint) {
      const gp = () => { this.half = 3; this.clock = 0; this.goldenPoint = true; this.setupKickoff(chance(0.5) ? this.teams[0] : this.teams[1]); };
      this.setPhase('halftime', { next: gp });
      if (this.humanTeam) this.hud.showBreak(this, 'GOLDEN POINT', gp, 'Scores level — first to score wins!');
      else this.message('GOLDEN POINT', 'First to score wins', 2.5, 'warn');
    } else this.endMatch();
  }
  phase_halftime() {
    if (!this.humanTeam && this.phaseT > 3 && !this.pd.auto) { this.pd.auto = true; this.hud.closeModal(); (this.pd.next || (() => this.startSecondHalf()))(); }
  }
  startSecondHalf() {
    this.half = 2; this.clock = 0;
    for (const T of this.teams) T.dir *= -1;
    for (const p of this.players) p.stamina = Math.min(1, p.stamina + 0.5);
    this.setupKickoff(this.firstKickTeam.opp);
  }
  endMatch() {
    if (this.over) return;
    this.over = true;
    this.audio.hooter();
    this.setPhase('fulltime', {});
    this.emit('fulltime', {});
    if (this.humanTeam || this.showResults) this.hud.showBreak(this, 'FULL TIME', null);
  }
  updateClock(dt) {
    if (['play', 'ptb', 'scrum', 'whistle'].includes(this.phase)) {
      this.clock += dt * this.clockRate;
      const limit = this.half <= 2 ? 2400 : 600;
      if (!this.siren && this.clock >= limit) {
        this.clock = limit; this.siren = true; this.audio.hooter();
        this.message('SIREN', 'Play on until the ball is dead', 2.0, 'warn');
        if (this.phase === 'ptb' || this.phase === 'scrum') this.endPeriod();
      }
      if (this.siren) this.clock = limit;
    }
    const at = this.attackTeam();
    if (at && (this.phase === 'play' || this.phase === 'ptb')) at.stats.possT += dt;
  }

  // ---------------------------------------------------------------- referee
  updateRef(dt) {
    const r = this.ref, b = this.ball;
    let tx = b.p.x, tz = b.p.z + (b.p.z > 0 ? -8 : 8);
    if (this.phase === 'ptb') { const D = this.pd.team.opp; tx = this.pd.onsideAx * D.dir; tz = this.pd.mark.z + (this.pd.mark.z > 0 ? -5 : 5); }
    else if (this.phase === 'goalKick' || this.phase === 'kickoff') { tx = this.pd.team.dir * (this.phase === 'goalKick' ? H + 1 : 0); tz = this.phase === 'goalKick' ? 4.5 : 14; }
    else if (this.phase === 'tryCelebration') { tx = this.pd.x; tz = this.pd.z + 3; }
    else { const at = this.attackTeam(); tx -= (at ? at.dir : 1) * 3; }
    tx = clamp(tx, -H - 6, H + 6); tz = clamp(tz, -W + 1, W - 1);
    const dx = tx - r.p.x, dz = tz - r.p.z, dd = Math.hypot(dx, dz);
    if (dd > 0.6) { r.wish.x = dx / dd * Math.min(1, dd / 3); r.wish.z = dz / dd * Math.min(1, dd / 3); r.wantSprint = dd > 10; }
    else { r.wish.x = r.wish.z = 0; }
    r.lookAt(b.p.x, b.p.z);
    r.update(dt);
  }

  // ---------------------------------------------------------------- main tick
  update(dt) {
    if (this.over && this.phase === 'fulltime') { for (const p of this.players) { p.wish.x = p.wish.z = 0; p.update(dt); } return; }
    this.time += dt; this.phaseT += dt;
    this.updateWind(dt);
    updateHuman(this, dt);
    updateAI(this, dt);
    const fn = this['phase_' + this.phase];
    if (fn) fn.call(this, dt);
    for (const p of this.players) {
      if (p.state === 'kick') p.anim.kt = p.stateT;
      p.hasBall = this.ball.state === 'held' && this.ball.carrier === p;
      p.update(dt);
    }
    updateContact(this, dt);
    resolveCollisions(this, dt);
    this.updateRef(dt);
    this.updateBall(dt);
    if (this.phase === 'play') this.rulesLive(dt);
    this.updateClock(dt);
  }

  // Render-side sync (called once per rendered frame)
  syncVisuals(dt, time) {
    for (const p of this.players) p.model.update(p, dt, time);
    this.ref.model.update(this.ref, dt, time);
    const b = this.ball;
    let anchor = null, h = 0;
    if (b.state === 'held' && b.carrier) {
      b.carrier.model.root.updateMatrixWorld(true);
      anchor = new THREE.Vector3(); b.carrier.model.ballAnchor.getWorldPosition(anchor); h = b.carrier.heading;
    }
    b.syncMesh(anchor, h);
    const c = this.controlled;
    const setKick = ['goalKick', 'kickoff', 'touchKick'].includes(this.phase) && this.pd.kicker === c;
    this.ring.visible = this.arrow.visible = !!c && !setKick && this.phase !== 'fulltime' && this.phase !== 'halftime';
    if (c) {
      this.ring.position.set(c.p.x, 0.03, c.p.z);
      const pulse = 1 + Math.sin(time * 6) * 0.06; this.ring.scale.setScalar(pulse);
      this.arrow.position.set(c.p.x, 2.45 + Math.sin(time * 4) * 0.08, c.p.z);
      this.ring.material.color.set(c.offside || c.kickOffside ? 0xff4040 : 0xffe14a);
    }
    const kt = this.kickTarget;
    this.landMarker.visible = !!kt && (b.state === 'air' || b.state === 'ground') && this.phase === 'play';
    if (kt) { this.landMarker.position.set(kt.x, 0.04, kt.z); this.landMarker.scale.setScalar(1 + Math.sin(time * 8) * 0.08); }
    A.syncAimVisuals(this);
  }
}
