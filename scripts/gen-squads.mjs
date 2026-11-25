// Generates the fixed squads in src/squads.js. Deterministic: the same seed always gives the same players,
// so re-running only changes squads if this script changes. All players are fictional.
//
//   node scripts/gen-squads.mjs
import { writeFileSync } from 'node:fs';
import { TEAMS } from '../src/teams.js';
import { TEMPLATES, ATTRS, playerOverall, teamRatings } from '../src/ratings.js';
import { POSITIONS, SKIN_TONES, HAIR_COLS } from '../src/config.js';

function rng(seedStr) {
  let h = 2166136261;
  for (const ch of seedStr) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  let s = h >>> 0;
  const r = () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  r.range = (a, b) => a + (b - a) * r();
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  r.gauss = () => { let u = 0, v = 0; while (!u) u = r(); while (!v) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  return r;
}

const FIRST = ['Jack', 'Liam', 'Kane', 'Mitch', 'Brodie', 'Jayden', 'Nathan', 'Josh', 'Tom', 'Reece', 'Cody', 'Isaiah', 'Dane', 'Ryan',
  'Blake', 'Hamish', 'Tyson', 'Ezra', 'Jordan', 'Sam', 'Ben', 'Wiremu', 'Paddy', 'Lachlan', 'Zac', 'Aaron', 'Darcy', 'Kobe', 'Toby', 'Luke',
  'Manu', 'Eli', 'Harley', 'Corey', 'Joel', 'Tevita', 'Sione', 'Viliami', 'Losa', 'Semisi', 'Tama', 'Rawiri', 'Nikau', 'Ariki', 'Keanu',
  'Malakai', 'Junior', 'Fletcher', 'Archie', 'Hudson', 'Bailey', 'Oscar', 'Riley', 'Callum', 'Declan', 'Flynn', 'Jett', 'Koby', 'Max', 'Noah',
  'Ollie', 'Rhys', 'Seth', 'Tai', 'Vinnie', 'Will', 'Xavier', 'Zane', 'Ethan', 'Mason', 'Jarrah', 'Kalani', 'Sefa', 'Pita', 'Mosese'];
const LAST = ['Harrigan', 'McCrae', 'Brennan', 'Kowalski', 'Ashby', 'Nguyen', 'Whitlock', 'Delaney', 'Morrow', 'Petrakis', 'Oduya', 'Stanton',
  'Crawley', 'Barlow', 'Quinlan', 'Sorensen', 'Rourke', 'Kingsley', 'Pritchard', 'Holloway', 'Duggan', 'Rasmussen', 'Benning', 'Grady',
  'Castellano', 'Mulgrew', 'Ferrier', 'Lockyer-Hale', 'Thorburn', 'Calloway', 'Dunstan', 'Merriman', 'Halloran', 'Penhaligon', 'Strickland',
  'Wellbeck', 'Ostrowski', 'Marchetti', 'Varga', 'Lindqvist', 'Okafor', 'Achterberg', 'Brannigan', 'Coulthard', 'Drummond', 'Eastwood',
  'Fairbairn', 'Garrity', 'Hennessy', 'Ingleby', 'Jardine', 'Kilbride', 'Lennox', 'Mackenna', 'Northcott', 'Ogilvie', 'Pemberton', 'Quayle',
  'Radcliffe', 'Sheedy', 'Tolhurst', 'Upfield', 'Vickery', 'Wardell', 'Yardley', 'Zelinski', 'Ashcroft', 'Blackwood', 'Corrigan', 'Dellar'];
// Pacific / Maori style surnames built from syllables
const P1 = ['Fa', 'Ta', 'Le', 'Va', 'Ma', 'Sa', 'To', 'Ho', 'Pa', 'Fo', 'Ki', 'Mo', 'Ha', 'Te', 'Ne'], P2 = ['lea', 'ua', 'ifa', 'ito', 'ana', 'ele', 'oka', 'uli', 'ise', 'ora', 'umu', 'eka'],
  P3 = ['ki', 'sa', 'lu', 'fe', 'ta', 'vai', 'mo', 'na', 'pu', 'ola', 'nga', 'whe'];

const POS_BODY = { // height cm, weight kg (mean, sd)
  FB: [186, 4, 92, 4], WG: [186, 5, 93, 5], CE: [187, 4, 98, 5], FE: [181, 4, 88, 4], HB: [178, 4, 85, 4],
  PR: [190, 4, 112, 6], HK: [177, 4, 90, 4], SR: [190, 4, 104, 5], LK: [188, 4, 106, 5],
};
// the attributes a star at each position is best at
const STAR_KEYS = { FB: ['speed', 'agility', 'hand', 'kick'], WG: ['speed', 'accel', 'agility'], CE: ['strength', 'speed', 'hand'],
  FE: ['pass', 'kick', 'agility'], HB: ['pass', 'kick', 'agility', 'hand'], PR: ['strength', 'tackle', 'stamina'], HK: ['pass', 'tackle', 'stamina', 'agility'],
  SR: ['strength', 'speed', 'tackle'], LK: ['tackle', 'strength', 'stamina', 'pass'] };
const STAR_SLOTS = [1, 7, 6, 9, 13, 8, 3, 12];
const SPINE = new Set([1, 6, 7, 9]), PACK = new Set([8, 10, 11, 12, 13]), BACKS = new Set([2, 3, 4, 5]);

const used = new Set();
const squads = {};
for (const club of TEAMS) {
  const r = rng('footy13:' + club.id);
  const quality = (club.rating - 80) * 0.6;
  const trait = { spine: r.range(-3, 4), pack: r.range(-3, 4), backs: r.range(-3, 4) };
  const nStars = 2 + (r() < 0.5 ? 1 : 0);
  const stars = new Set();
  while (stars.size < nStars) stars.add(r() < 0.65 ? STAR_SLOTS[Math.floor(r() * 4)] : r.pick(STAR_SLOTS));
  const players = [];
  for (let num = 1; num <= 13; num++) {
    const pos = POSITIONS[num];
    const age = Math.round(Math.min(34, Math.max(19, 26 + r.gauss() * 3.4)));
    const talent = r.gauss() * 3.5;
    const tb = SPINE.has(num) ? trait.spine : PACK.has(num) ? trait.pack : BACKS.has(num) ? trait.backs : 0;
    const attr = {};
    for (const k of ATTRS) {
      let v = TEMPLATES[pos][k] + quality + talent + tb + r.gauss() * 3;
      if (k === 'speed' || k === 'accel' || k === 'agility') v -= Math.max(0, age - 28) * 1.1;   // legs go first
      if (k === 'pass' || k === 'kick' || k === 'hand' || k === 'tackle') v += Math.min(6, Math.max(-3, (age - 23) * 0.8)); // nous comes with games
      if (k === 'stamina') v -= Math.max(0, age - 30) * 1.2;
      attr[k] = v;
    }
    if (stars.has(num)) for (const k of STAR_KEYS[pos]) attr[k] += r.range(6, 10);
    for (const k of ATTRS) attr[k] = Math.round(Math.min(99, Math.max(35, attr[k])));
    attr.foot = r() < 0.8 ? 'R' : 'L';
    const [hm, hs, wm, ws] = POS_BODY[pos];
    const heightCm = Math.round(hm + r.gauss() * hs), weightKg = Math.round(wm + r.gauss() * ws + (attr.strength - TEMPLATES[pos].strength) * 0.3);
    let first, last;
    do {
      first = r.pick(FIRST);
      last = r() < 0.4 ? r.pick(P1) + r.pick(P2) + r.pick(P3) : r.pick(LAST);
    } while (used.has(first + ' ' + last));
    used.add(first + ' ' + last);
    players.push({
      num, pos, first, last, age, heightCm, weightKg, attr,
      skin: r.pick(SKIN_TONES), hair: r.pick(HAIR_COLS.slice(0, 7)),
      hairStyle: r.pick(['short', 'short', 'buzz', 'mohawk', 'long', 'bald', 'afro']),
      headgear: PACK.has(num) && r() < 0.25 || num === 9 && r() < 0.4,
      star: stars.has(num),
    });
  }
  squads[club.id] = players;
  const tr = teamRatings(players);
  console.log(club.short.padEnd(4), `OVR ${tr.ovr} ATT ${tr.attack} DEF ${tr.defence} PACK ${tr.pack}`, ' stars:', players.filter((p) => p.star).map((p) => `${p.first} ${p.last} (${p.pos} ${playerOverall(p.pos, p.attr)})`).join(', '));
}
const body = Object.entries(squads).map(([id, list]) => `  ${id}: [\n${list.map((p) => '    ' + JSON.stringify(p)).join(',\n')},\n  ],`).join('\n');
writeFileSync(new URL('../src/squads.js', import.meta.url), `// Fixed squads: generated once by scripts/gen-squads.mjs and then kept as data (safe to hand-edit).
// Every player is fictional.
export const SQUADS = {
${body}
};
`);
console.log('wrote src/squads.js');
