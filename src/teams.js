// Fictional clubs and their fixed squads. All names are made up.
import { clamp } from './util.js';
import { SQUADS } from './squads.js';
import { playerOverall, teamRatings } from './ratings.js';

export function clubRatings(teamDef) { return teamRatings(squadOf(teamDef)); }

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
  { id: 'tim', name: 'Timberline Possums', short: 'TIM', primary: '#1e5631', secondary: '#f2f2f2', trim: '#c9a227', pattern: 'yoke',
    shorts: '#1e5631', socks: '#f2f2f2', rating: 80, alt: { primary: '#f2f2f2', secondary: '#1e5631', pattern: 'yoke', shorts: '#1e5631', socks: '#1e5631' } },
  { id: 'riv', name: 'Riverbend Otters', short: 'RIV', primary: '#6b4226', secondary: '#e8c07a', trim: '#ffffff', pattern: 'hoops',
    shorts: '#3d2414', socks: '#6b4226', rating: 80, alt: { primary: '#e8c07a', secondary: '#6b4226', pattern: 'hoops', shorts: '#6b4226', socks: '#e8c07a' } },
  { id: 'sal', name: 'Saltwater Barracudas', short: 'SAL', primary: '#4f5d6b', secondary: '#2ee6c8', trim: '#ffffff', pattern: 'stripes',
    shorts: '#2b333b', socks: '#4f5d6b', rating: 80, alt: { primary: '#2ee6c8', secondary: '#4f5d6b', pattern: 'stripes', shorts: '#4f5d6b', socks: '#2ee6c8' } },
  { id: 'tab', name: 'Tablelands Emus', short: 'TAB', primary: '#556b2f', secondary: '#efe6c8', trim: '#1b1b1b', pattern: 'vee',
    shorts: '#efe6c8', socks: '#556b2f', rating: 80, alt: { primary: '#efe6c8', secondary: '#556b2f', pattern: 'vee', shorts: '#556b2f', socks: '#efe6c8' } },
  { id: 'cop', name: 'Copperfield Foxes', short: 'COP', primary: '#b0552a', secondary: '#14213d', trim: '#ffffff', pattern: 'sash',
    shorts: '#14213d', socks: '#b0552a', rating: 80, alt: { primary: '#14213d', secondary: '#b0552a', pattern: 'sash', shorts: '#b0552a', socks: '#14213d' } },
  { id: 'gec', name: 'Glasshouse Geckos', short: 'GEC', primary: '#7bc043', secondary: '#4a2366', trim: '#ffffff', pattern: 'plain',
    shorts: '#4a2366', socks: '#7bc043', rating: 80, alt: { primary: '#4a2366', secondary: '#7bc043', pattern: 'plain', shorts: '#7bc043', socks: '#4a2366' } },
  { id: 'wom', name: 'Stonebridge Wombats', short: 'STB', primary: '#3d3d3d', secondary: '#f2c230', trim: '#ffffff', pattern: 'hoops',
    shorts: '#3d3d3d', socks: '#f2c230', rating: 80, alt: { primary: '#f2c230', secondary: '#3d3d3d', pattern: 'hoops', shorts: '#3d3d3d', socks: '#3d3d3d' } },
  { id: 'lor', name: 'Lantern Bay Lorikeets', short: 'LBL', primary: '#00897b', secondary: '#ff8f00', trim: '#ffffff', pattern: 'vee',
    shorts: '#00564d', socks: '#ff8f00', rating: 80, alt: { primary: '#ff8f00', secondary: '#00897b', pattern: 'vee', shorts: '#00897b', socks: '#ff8f00' } },
  { id: 'qul', name: 'Quarry Hill Quolls', short: 'QHQ', primary: '#d4145a', secondary: '#ffffff', trim: '#1b1b1b', pattern: 'stripes',
    shorts: '#2b2b2b', socks: '#d4145a', rating: 80, alt: { primary: '#ffffff', secondary: '#d4145a', pattern: 'stripes', shorts: '#d4145a', socks: '#ffffff' } },
];

// Squads are fixed (see src/squads.js, generated by scripts/gen-squads.mjs): the same players and ratings every match.
export function squadOf(teamDef) { return SQUADS[teamDef.id] || []; }

export function makeRoster(teamDef) {
  return squadOf(teamDef).map((p) => {
    const hM = p.heightCm / 100, bmi = p.weightKg / (hM * hM);
    return {
      num: p.num, pos: p.pos, name: `${p.first[0]}. ${p.last}`, fullName: `${p.first} ${p.last}`,
      attr: { ...p.attr }, ovr: playerOverall(p.pos, p.attr), age: p.age, heightCm: p.heightCm, weightKg: p.weightKg, star: p.star,
      build: { w: clamp(bmi / 26.5, 0.92, 1.22), h: clamp(p.heightCm / 186, 0.93, 1.06) },
      skin: p.skin, hair: p.hair, hairStyle: p.hairStyle, headgear: p.headgear, mass: p.weightKg,
    };
  });
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
