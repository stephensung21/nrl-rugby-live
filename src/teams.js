// Fictional clubs and generated rosters. All names are made up.
import { rand, randRange, pick, clamp } from './util.js';
import { POSITIONS } from './config.js';

export const TEAMS = [
  { id: 'bay', name: 'Bayside Breakers', short: 'BAY', primary: '#123a7a', secondary: '#35c4e8', trim: '#ffffff', pattern: 'vee',
    shorts: '#0c2350', socks: '#123a7a', rating: 80, alt: { primary: '#f2f2f2', secondary: '#123a7a', pattern: 'vee', shorts: '#f2f2f2', socks: '#123a7a' } },
  { id: 'nth', name: 'Northgate Thunder', short: 'NTH', primary: '#4b1f7a', secondary: '#f2b51d', trim: '#ffffff', pattern: 'sash',
    shorts: '#2a1046', socks: '#4b1f7a', rating: 82, alt: { primary: '#f2b51d', secondary: '#4b1f7a', pattern: 'sash', shorts: '#4b1f7a', socks: '#f2b51d' } },
  { id: 'irn', name: 'Ironvale Miners', short: 'IRN', primary: '#1b1b1b', secondary: '#f26a1b', trim: '#ffffff', pattern: 'hoops',
    shorts: '#1b1b1b', socks: '#f26a1b', rating: 77, alt: { primary: '#f26a1b', secondary: '#1b1b1b', pattern: 'hoops', shorts: '#1b1b1b', socks: '#1b1b1b' } },
  { id: 'sun', name: 'Sunset Coast Pelicans', short: 'SUN', primary: '#0f8a8a', secondary: '#ffffff', trim: '#f2c94c', pattern: 'yoke',
    shorts: '#ffffff', socks: '#0f8a8a', rating: 79, alt: { primary: '#ffffff', secondary: '#0f8a8a', pattern: 'yoke', shorts: '#0f8a8a', socks: '#ffffff' } },
  { id: 'rgr', name: 'Red Gum Raptors', short: 'RGR', primary: '#7a1424', secondary: '#f1e3c4', trim: '#1b1b1b', pattern: 'stripes',
    shorts: '#f1e3c4', socks: '#7a1424', rating: 78, alt: { primary: '#f1e3c4', secondary: '#7a1424', pattern: 'stripes', shorts: '#7a1424', socks: '#f1e3c4' } },
  { id: 'har', name: 'Harbour Kings', short: 'HAR', primary: '#1f4fd1', secondary: '#ffd21f', trim: '#ffffff', pattern: 'plain',
    shorts: '#ffd21f', socks: '#1f4fd1', rating: 81, alt: { primary: '#ffd21f', secondary: '#1f4fd1', pattern: 'plain', shorts: '#1f4fd1', socks: '#ffd21f' } },
  { id: 'out', name: 'Outback Stingers', short: 'OUT', primary: '#1f7a3a', secondary: '#f2d21f', trim: '#1b1b1b', pattern: 'vee',
    shorts: '#1b1b1b', socks: '#1f7a3a', rating: 76, alt: { primary: '#f2d21f', secondary: '#1f7a3a', pattern: 'vee', shorts: '#1f7a3a', socks: '#f2d21f' } },
  { id: 'soc', name: 'Southern Comets', short: 'SOC', primary: '#d11f2a', secondary: '#ffffff', trim: '#1b1b1b', pattern: 'hoops',
    shorts: '#1b1b1b', socks: '#d11f2a', rating: 80, alt: { primary: '#ffffff', secondary: '#d11f2a', pattern: 'hoops', shorts: '#d11f2a', socks: '#ffffff' } },
];

const FIRST = ['Jack', 'Tevita', 'Sione', 'Liam', 'Kane', 'Mitch', 'Brodie', 'Jayden', 'Nathan', 'Josh', 'Viliami', 'Tom', 'Reece',
  'Cody', 'Isaiah', 'Dane', 'Ryan', 'Blake', 'Kurt', 'Hamish', 'Moses', 'Tyson', 'Ezra', 'Jordan', 'Sam', 'Ben', 'Wiremu', 'Paddy',
  'Lachlan', 'Zac', 'Aaron', 'Darcy', 'Kobe', 'Toby', 'Luke', 'Manu', 'Eli', 'Harley', 'Corey', 'Joel'];
const LAST = ['Fakatava', 'Harrigan', 'Tuilagi', 'McCrae', 'Brennan', 'Vaipulu', 'Kowalski', 'Ashby', 'Nguyen', 'Fonoti', 'Whitlock',
  'Delaney', 'Taufa', 'Morrow', 'Petrakis', 'Oduya', 'Stanton', 'Leota', 'Crawley', 'Hokianga', 'Barlow', 'Mahe', 'Quinlan',
  'Sorensen', 'Tamatea', 'Rourke', 'Faleolo', 'Kingsley', 'Pritchard', 'Amosa', 'Holloway', 'Vea', 'Duggan', 'Rasmussen',
  'Talakai', 'Kearney', 'Lolohea', 'Fitzgerald', 'Ruawai', 'Benning', 'Sapolu', 'Grady', 'Turei', 'Castellano', 'Mulgrew'];

// position templates: base attributes 0..100
const TEMPLATES = {
  FB: { speed: 86, accel: 84, agility: 82, strength: 62, tackle: 70, pass: 72, kick: 74, hand: 88, stamina: 80 },
  WG: { speed: 93, accel: 88, agility: 82, strength: 64, tackle: 62, pass: 55, kick: 45, hand: 80, stamina: 78 },
  CE: { speed: 85, accel: 82, agility: 76, strength: 74, tackle: 76, pass: 66, kick: 42, hand: 78, stamina: 78 },
  FE: { speed: 81, accel: 82, agility: 84, strength: 62, tackle: 66, pass: 86, kick: 84, hand: 86, stamina: 80 },
  HB: { speed: 79, accel: 82, agility: 86, strength: 56, tackle: 62, pass: 92, kick: 90, hand: 86, stamina: 82 },
  PR: { speed: 62, accel: 62, agility: 46, strength: 96, tackle: 86, pass: 50, kick: 22, hand: 66, stamina: 66 },
  HK: { speed: 75, accel: 80, agility: 76, strength: 68, tackle: 88, pass: 88, kick: 52, hand: 84, stamina: 86 },
  SR: { speed: 75, accel: 72, agility: 62, strength: 86, tackle: 86, pass: 60, kick: 30, hand: 72, stamina: 76 },
  LK: { speed: 72, accel: 70, agility: 60, strength: 86, tackle: 90, pass: 70, kick: 38, hand: 74, stamina: 80 },
};
const BUILD = {
  FB: { w: 1.0, h: 1.0 }, WG: { w: 0.96, h: 1.0 }, CE: { w: 1.04, h: 1.01 }, FE: { w: 0.95, h: 0.97 }, HB: { w: 0.93, h: 0.95 },
  PR: { w: 1.2, h: 1.0 }, HK: { w: 1.02, h: 0.95 }, SR: { w: 1.1, h: 1.04 }, LK: { w: 1.12, h: 1.03 },
};
const SKIN = ['#f1c9a5', '#e0ac82', '#c68a5e', '#a36a42', '#7a4a2c', '#5a3520', '#d9a47a', '#8d5a3a'];
const HAIR = ['#1a1209', '#2b1a0d', '#4a2c14', '#7a5229', '#c9a25a', '#0d0d0d', '#5e3a1c'];

export function makeRoster(teamDef) {
  const used = new Set();
  const roster = [];
  for (let num = 1; num <= 13; num++) {
    const pos = POSITIONS[num];
    const t = TEMPLATES[pos];
    const attr = {};
    for (const k in t) attr[k] = clamp(Math.round(t[k] + (teamDef.rating - 80) * 0.6 + randRange(-5, 5)), 30, 99);
    attr.foot = rand() < 0.78 ? 'R' : 'L';
    let name;
    do { name = `${pick(FIRST)[0]}. ${pick(LAST)}`; } while (used.has(name));
    used.add(name);
    const b = BUILD[pos];
    roster.push({
      num, pos, name, attr,
      build: { w: b.w * randRange(0.97, 1.04), h: b.h * randRange(0.97, 1.03) },
      skin: pick(SKIN), hair: pick(HAIR),
      hairStyle: pick(['short', 'short', 'buzz', 'mohawk', 'long', 'bald', 'afro']),
      headgear: (pos === 'PR' || pos === 'HK' || pos === 'LK') && rand() < 0.3,
      mass: 78 + (b.w - 0.9) * 140 + randRange(-4, 4),
    });
  }
  return roster;
}

function hexToRgb(h) { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function colorDist(a, b) { const x = hexToRgb(a), y = hexToRgb(b); return Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]); }

// Returns the kit each team should wear; the away team switches to its alternate strip on a clash.
export function resolveKits(homeDef, awayDef) {
  const home = { primary: homeDef.primary, secondary: homeDef.secondary, trim: homeDef.trim, pattern: homeDef.pattern, shorts: homeDef.shorts, socks: homeDef.socks };
  let away = { primary: awayDef.primary, secondary: awayDef.secondary, trim: awayDef.trim, pattern: awayDef.pattern, shorts: awayDef.shorts, socks: awayDef.socks };
  if (colorDist(home.primary, away.primary) < 140 || colorDist(home.shorts, away.shorts) < 60 && colorDist(home.primary, away.primary) < 200) {
    away = { ...away, ...awayDef.alt };
  }
  return [home, away];
}
