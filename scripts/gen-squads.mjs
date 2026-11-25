// Generates the fixed squads in src/squads.js.
//
// Ratings come from real 2026 NRL performance stats (per-80-minute rates from the nrl-predictor
// dataset), compared with every other first-grader in the same position. Each fictional club takes
// its 13 from one real club's most-used starters in jerseys 1-13. With --fetch-profiles, heights, weights
// and ages come from the players' public profiles. Identities are NOT carried over: names and looks are
// invented, and no name or surname matches a real player.
//
//   node scripts/gen-squads.mjs [path/to/player_match_stats.csv]
//   (default: ../stephensung21/nrl-predictor/data/processed/player_match_stats.csv)
//
// Only the fictional squads are written to src/squads.js. Pass --show-sources to print which real
// player each rating line came from (console only; it is never written to the repo).
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { TEAMS } from '../src/teams.js';
import { TEMPLATES, ATTRS, playerOverall, teamRatings } from '../src/ratings.js';
import { POSITIONS, SKIN_TONES, HAIR_COLS } from '../src/config.js';

const SEASON = '2026';
const csvPath = process.argv.slice(2).find((a) => !a.startsWith('--'))
  || new URL('../../stephensung21/nrl-predictor/data/processed/player_match_stats.csv', import.meta.url).pathname;
const SHOW = process.argv.includes('--show-sources');
// --fetch-profiles: read height, weight and date of birth for each selected player from his nrl.com
// profile (falling back to the club-site profile linked from the match centre). Cached in
// data/physicals.json, which is gitignored: real names never go into the repo, only the numbers do.
const FETCH = process.argv.includes('--fetch-profiles');
const RETRY = process.argv.includes('--retry-missing');
const CACHE = new URL('../data/physicals.json', import.meta.url);
const AGE_ON = new Date('2026-11-25T00:00:00Z');
const cache = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, 'utf8')) : {};
if (!existsSync(csvPath)) { console.error(`stats file not found: ${csvPath}`); process.exit(1); }

// fictional club <- real club whose 2026 starters it is rated from
const SOURCE = {
  bay: 'Broncos', nth: 'Sharks', irn: 'Sea Eagles', sun: 'Cowboys', rgr: 'Storm', har: 'Panthers', out: 'Roosters', soc: 'Raiders',
  tim: 'Bulldogs', riv: 'Warriors', sal: 'Knights', tab: 'Dolphins', cop: 'Titans', gec: 'Eels', wom: 'Rabbitohs', lor: 'Dragons', qul: 'Wests Tigers',
};
const POS_OF = { Fullback: 'FB', Winger: 'WG', Centre: 'CE', 'Five-Eighth': 'FE', Halfback: 'HB', Prop: 'PR', Hooker: 'HK', '2nd Row': 'SR', Lock: 'LK' };

// ---------------------------------------------------------------- load
function parseCSV(text) {
  const rows = []; let row = [], cur = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) { if (ch === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; }
    else if (ch === '"') q = true;
    else if (ch === ',') { row.push(cur); cur = ''; }
    else if (ch === '\n') { row.push(cur.replace(/\r$/, '')); rows.push(row); row = []; cur = ''; }
    else cur += ch;
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  const head = rows.shift();
  return rows.filter((r) => r.length === head.length).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}
const all = parseCSV(readFileSync(csvPath, 'utf8'));
const realNames = new Set(all.map((r) => r.player_name.toLowerCase()));
const realSurnames = new Set([...realNames].map((n) => n.split(' ').slice(1).join(' ')));
const rows = all.filter((r) => r.season === SEASON && +r.minutesPlayed > 0);

// ---------------------------------------------------------------- per-player season totals
const SUM = ['allRunMetres', 'allRuns', 'postContactMetres', 'lineBreaks', 'tackleBreaks', 'tacklesMade', 'missedTackles', 'offloads',
  'handlingErrors', 'tryAssists', 'lineBreakAssists', 'passes', 'kickMetres', 'bombKicks', 'grubberKicks', 'forcedDropOutKicks',
  'fortyTwentyKicks', 'twentyFortyKicks', 'conversions', 'conversionAttempts', 'kicksDefused', 'kickReturnMetres', 'tries', 'dummyHalfRunMetres', 'minutesPlayed'];
const players = new Map();
for (const r of rows) {
  let p = players.get(r.player_id);
  if (!p) { p = { id: r.player_id, name: r.player_name, games: 0, posCount: {}, tot: Object.fromEntries(SUM.map((k) => [k, 0])) }; players.set(r.player_id, p); }
  p.games++;
  for (const k of SUM) p.tot[k] += +r[k] || 0;
  const pos = POS_OF[r.position];
  if (pos) p.posCount[pos] = (p.posCount[pos] || 0) + 1;
}
for (const p of players.values()) {
  const t = p.tot, m = Math.max(1, t.minutesPlayed), per = (x) => (x * 80) / m;
  p.mainPos = Object.entries(p.posCount).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  p.m = {
    lb: per(t.lineBreaks), tb: per(t.tackleBreaks), rm: per(t.allRunMetres), mpr: t.allRuns ? t.allRunMetres / t.allRuns : 0,
    pcm: per(t.postContactMetres), tries: per(t.tries), krm: per(t.kickReturnMetres), tm: per(t.tacklesMade),
    teff: t.tacklesMade / Math.max(1, t.tacklesMade + t.missedTackles), miss: per(t.missedTackles), ta: per(t.tryAssists),
    lba: per(t.lineBreakAssists), pass: per(t.passes), km: per(t.kickMetres),
    kspec: per(t.forcedDropOutKicks + 2 * (t.fortyTwentyKicks + t.twentyFortyKicks) + 0.3 * (t.bombKicks + t.grubberKicks)),
    goal: t.conversionAttempts >= 10 ? t.conversions / t.conversionAttempts : null,
    herr: per(t.handlingErrors), off: per(t.offloads), def: per(t.kicksDefused), mins: t.minutesPlayed / p.games, dhr: per(t.dummyHalfRunMetres),
  };
}

// position baselines: mean / sd of each rate among regular starters at that position
const base = {};
for (const pos of Object.keys(TEMPLATES)) {
  const pool = [...players.values()].filter((p) => p.mainPos === pos && p.tot.minutesPlayed >= 300);
  base[pos] = {};
  for (const k of Object.keys(pool[0].m)) {
    const v = pool.map((p) => p.m[k]).filter((x) => x !== null);
    const mean = v.reduce((a, b) => a + b, 0) / v.length;
    const sd = Math.sqrt(v.reduce((a, b) => a + (b - mean) ** 2, 0) / v.length) || 1;
    base[pos][k] = { mean, sd };
  }
}
const clampZ = (z) => Math.max(-2.5, Math.min(3, z));
function ratingsFor(p, pos) {
  const b = base[pos], shrink = Math.min(1, p.tot.minutesPlayed / 600);
  const z = (k) => (p.m[k] === null ? 0 : clampZ((p.m[k] - b[k].mean) / b[k].sd) * shrink);
  const goalZ = p.m.goal === null ? null : z('goal');
  const score = {
    speed: 0.35 * z('lb') + 0.3 * z('mpr') + 0.2 * z('krm') + 0.15 * z('tries'),
    accel: 0.4 * z('tb') + 0.3 * z('lb') + 0.3 * (pos === 'HK' ? z('dhr') : z('mpr')),
    agility: 0.55 * z('tb') + 0.3 * z('lb') + 0.15 * z('tries'),
    strength: 0.45 * z('pcm') + 0.35 * z('rm') + 0.2 * z('tb'),
    tackle: 0.55 * z('teff') + 0.3 * z('tm') - 0.15 * z('miss'),
    pass: 0.45 * z('ta') + 0.35 * z('lba') + 0.2 * z('pass'),
    kick: goalZ === null ? 0.65 * z('km') + 0.35 * z('kspec') : 0.5 * z('km') + 0.25 * z('kspec') + 0.25 * goalZ,
    hand: -0.45 * z('herr') + 0.3 * z('off') + 0.25 * z('def'),
    stamina: 0.7 * z('mins') + 0.3 * z('tm'),
  };
  const attr = {};
  for (const k of ATTRS) attr[k] = Math.round(Math.max(35, Math.min(99, TEMPLATES[pos][k] + Math.max(-18, Math.min(15, score[k] * 8)))));
  return attr;
}

// ---------------------------------------------------------------- real physicals (height, weight, age)
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const slug = (x) => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/['’.]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
async function get(url) {
  await sleep(1000); // be polite: one request a second
  try { const r = await fetch(url, { headers: UA }); return r.ok ? await r.text() : null; } catch { return null; }
}
function parseProfile(page) {
  const t = page.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');
  const h = t.match(/Height:\s*(\d{3})\s*cm/), w = t.match(/Weight:\s*(\d{2,3})\s*kg/), d = t.match(/Date of Birth:\s*(\d{1,2} [A-Za-z]+ \d{4})/);
  if (!h && !w && !d) return null;
  return { h: h ? +h[1] : null, w: w ? +w[1] : null, dob: d ? new Date(d[1] + ' UTC').toISOString().slice(0, 10) : null };
}
const matchesPath = csvPath.replace(/player_match_stats\.csv$/, 'matches.csv');
const teamMatches = (team) => (existsSync(matchesPath) ? parseCSV(readFileSync(matchesPath, 'utf8')) : [])
  .filter((m) => m.season === SEASON && (m.home_team === team || m.away_team === team) && m.url).reverse();
async function clubSiteUrl(team, playerId) {
  for (const m of teamMatches(team).slice(0, 6)) {
    const page = await get(m.url);
    const q = page && page.match(/id="vue-match-centre"[^>]*q-data="([^"]+)"/);
    if (!q) continue;
    const data = JSON.parse(q[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'"));
    for (const side of [data.match.homeTeam, data.match.awayTeam]) for (const p of side.players || []) if (String(p.playerId) === String(playerId)) return p.url;
  }
  return null;
}
async function fetchPhysicals(team, p) {
  if (cache[p.id] && !(cache[p.id].missing && RETRY)) return cache[p.id];
  let found = null;
  const url = `https://www.nrl.com/players/nrl-premiership/${slug(team)}/${slug(p.name)}/`;
  let page = await get(url);
  if (page) found = parseProfile(page);
  // moved club (or the profile sits under his 2027 club): try the same profile under every other club
  for (const other of ALL_TEAMS) {
    if (found || other === team) continue;
    page = await get(`https://www.nrl.com/players/nrl-premiership/${slug(other)}/${slug(p.name)}/`);
    if (page) found = parseProfile(page);
  }
  if (!found) {
    const alt = await clubSiteUrl(team, p.id);
    if (alt) { page = await get(alt); if (page) found = parseProfile(page); }
  }
  cache[p.id] = found || { missing: true };
  mkdirSync(new URL('../data/', import.meta.url), { recursive: true });
  writeFileSync(CACHE, JSON.stringify(cache, null, 1));
  console.log(`  ${found ? 'ok     ' : 'missing'} ${team} ${p.id}${found ? ` ${found.h ?? '?'}cm ${found.w ?? '?'}kg ${found.dob ?? '?'}` : ''}`);
  return cache[p.id];
}
const ALL_TEAMS = [...new Set(rows.map((r) => r.team))].sort();
const ageOn = (dob) => { const b = new Date(dob + 'T00:00:00Z'); let a = AGE_ON.getUTCFullYear() - b.getUTCFullYear(); if (AGE_ON < new Date(Date.UTC(AGE_ON.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()))) a--; return a; };

// ---------------------------------------------------------------- fictional identities
function rng(seedStr) {
  let h = 2166136261;
  for (const ch of seedStr) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  let s = h >>> 0;
  const r = () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
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
  'Crawley', 'Barlow', 'Quinlan', 'Rourke', 'Kingsley', 'Pritchard', 'Holloway', 'Duggan', 'Benning', 'Grady', 'Castellano', 'Mulgrew',
  'Ferrier', 'Calloway', 'Dunstan', 'Merriman', 'Halloran', 'Penhaligon', 'Strickland', 'Wellbeck', 'Ostrowski', 'Marchetti', 'Varga',
  'Lindqvist', 'Okafor', 'Achterberg', 'Brannigan', 'Coulthard', 'Drummond', 'Eastwood', 'Fairbairn', 'Garrity', 'Hennessy', 'Ingleby',
  'Kilbride', 'Lennox', 'Mackenna', 'Northcott', 'Ogilvie', 'Pemberton', 'Quayle', 'Radcliffe', 'Sheedy', 'Tolhurst', 'Upfield', 'Vickery',
  'Wardell', 'Yardley', 'Zelinski', 'Ashcroft', 'Blackwood', 'Corrigan', 'Dellar', 'Elphick', 'Fennimore', 'Gillanders', 'Hawtrey', 'Ivers'];
const P1 = ['Fa', 'Ta', 'Le', 'Va', 'Ma', 'Sa', 'To', 'Ho', 'Pa', 'Fo', 'Ki', 'Mo', 'Ha', 'Te', 'Ne'], P2 = ['lea', 'ua', 'ifa', 'ito', 'ana', 'ele', 'oka', 'uli', 'ise', 'ora', 'umu', 'eka'],
  P3 = ['ki', 'sa', 'lu', 'fe', 'ta', 'vai', 'mo', 'na', 'pu', 'ola', 'nga', 'whe'];
const POS_BODY = { FB: [186, 4, 92, 4], WG: [186, 5, 93, 5], CE: [187, 4, 98, 5], FE: [181, 4, 88, 4], HB: [178, 4, 85, 4],
  PR: [190, 4, 112, 6], HK: [177, 4, 90, 4], SR: [190, 4, 104, 5], LK: [188, 4, 106, 5] };
const PACK = new Set([8, 10, 11, 12, 13]);
const usedNames = new Set();

// ---------------------------------------------------------------- build squads
const squads = {}, sources = [];
let physCount = 0;
for (const club of TEAMS) {
  const real = SOURCE[club.id];
  const r = rng('footy13:' + club.id);
  // most-used starter in each jersey 1-13
  const counts = [];
  for (const row of rows) {
    const j = +row.jersey_number;
    if (row.team !== real || j < 1 || j > 13 || !POS_OF[row.position]) continue;
    const key = j + '|' + row.player_id;
    counts[key] = (counts[key] || 0) + 1;
  }
  const cand = Object.entries(counts).map(([k, n]) => { const [j, id] = k.split('|'); return { j: +j, id, n }; }).sort((a, b) => b.n - a.n);
  const pickedBy = {}, taken = new Set();
  for (const c of cand) if (!pickedBy[c.j] && !taken.has(c.id)) { pickedBy[c.j] = c.id; taken.add(c.id); }
  const list = [];
  for (let num = 1; num <= 13; num++) {
    const pos = POSITIONS[num];
    let src = players.get(pickedBy[num]);
    if (!src) src = [...players.values()].filter((p) => p.mainPos === pos && !taken.has(p.id)).sort((a, b) => b.tot.minutesPlayed - a.tot.minutesPlayed)[0];
    taken.add(src.id);
    const attr = ratingsFor(src, pos);
    attr.foot = r() < 0.8 ? 'R' : 'L';
    // invented build by default; real height / weight / age when the profile was found
    let age = Math.round(Math.min(34, Math.max(19, 26 + r.gauss() * 3.4)));
    const [hm, hs, wm, ws] = POS_BODY[pos];
    let heightCm = Math.round(hm + r.gauss() * hs), weightKg = Math.round(wm + r.gauss() * ws + (attr.strength - TEMPLATES[pos].strength) * 0.3);
    const phys = FETCH ? await fetchPhysicals(real, src) : cache[src.id];
    if (phys && !phys.missing) {
      if (phys.h) heightCm = phys.h;
      if (phys.w) weightKg = phys.w;
      if (phys.dob) age = ageOn(phys.dob);
      physCount++;
    }
    let first, last;
    do { first = r.pick(FIRST); last = r() < 0.4 ? r.pick(P1) + r.pick(P2) + r.pick(P3) : r.pick(LAST); }
    while (usedNames.has(first + ' ' + last) || realSurnames.has(last.toLowerCase()) || realNames.has(`${first} ${last}`.toLowerCase()));
    usedNames.add(first + ' ' + last);
    const ovr = playerOverall(pos, attr);
    list.push({ num, pos, first, last, age, heightCm, weightKg, attr, skin: r.pick(SKIN_TONES), hair: r.pick(HAIR_COLS.slice(0, 7)),
      hairStyle: r.pick(['short', 'short', 'buzz', 'mohawk', 'long', 'bald', 'afro']), headgear: (PACK.has(num) && r() < 0.25) || (num === 9 && r() < 0.4),
      star: ovr >= 90 });
    sources.push(`${club.short} #${num} ${first} ${last} (${pos} ${ovr}) <- ${real} ${src.name}`);
  }
  squads[club.id] = list;
  const tr = teamRatings(list);
  console.log(club.short.padEnd(4), club.name.padEnd(22), `OVR ${tr.ovr} ATT ${tr.attack} DEF ${tr.defence} PACK ${tr.pack}`);
}
if (SHOW) console.log('\n' + sources.join('\n'));
const body = Object.entries(squads).map(([id, l]) => `  ${id}: [\n${l.map((p) => '    ' + JSON.stringify(p)).join(',\n')},\n  ],`).join('\n');
writeFileSync(new URL('../src/squads.js', import.meta.url), `// Fixed squads, generated by scripts/gen-squads.mjs (safe to hand-edit).
// Ratings come from real ${SEASON} performance stats, and heights, weights and ages from public player profiles;
// every name and look is fictional.
export const SQUADS = {
${body}
};
`);
console.log(`wrote src/squads.js (real height/weight/age for ${physCount} of ${TEAMS.length * 13} players)`);
