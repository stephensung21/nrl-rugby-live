// Player ratings: position templates and how an overall rating (OVR) is weighted for each position.
// Pure data + maths, so the squad generator (Node) and the game share it.
export const ATTRS = ['speed', 'accel', 'agility', 'strength', 'tackle', 'pass', 'kick', 'hand', 'stamina'];
export const ATTR_LABEL = { speed: 'SPD', accel: 'ACC', agility: 'AGI', strength: 'STR', tackle: 'TKL', pass: 'PAS', kick: 'KCK', hand: 'HND', stamina: 'STA' };
export const ATTR_NAME = { speed: 'Speed', accel: 'Acceleration', agility: 'Agility', strength: 'Strength', tackle: 'Tackling', pass: 'Passing', kick: 'Kicking', hand: 'Handling', stamina: 'Stamina' };

// Typical rating for an established first-grader in each position.
export const TEMPLATES = {
  FB: { speed: 86, accel: 84, agility: 82, strength: 62, tackle: 70, pass: 72, kick: 74, hand: 88, stamina: 80 },
  WG: { speed: 92, accel: 88, agility: 82, strength: 66, tackle: 62, pass: 55, kick: 45, hand: 80, stamina: 78 },
  CE: { speed: 85, accel: 82, agility: 76, strength: 76, tackle: 76, pass: 66, kick: 42, hand: 78, stamina: 78 },
  FE: { speed: 81, accel: 82, agility: 84, strength: 62, tackle: 66, pass: 86, kick: 84, hand: 86, stamina: 80 },
  HB: { speed: 79, accel: 82, agility: 86, strength: 56, tackle: 62, pass: 90, kick: 88, hand: 86, stamina: 82 },
  PR: { speed: 64, accel: 62, agility: 48, strength: 94, tackle: 86, pass: 52, kick: 22, hand: 68, stamina: 70 },
  HK: { speed: 76, accel: 80, agility: 78, strength: 68, tackle: 88, pass: 86, kick: 50, hand: 84, stamina: 88 },
  SR: { speed: 76, accel: 72, agility: 64, strength: 86, tackle: 86, pass: 60, kick: 30, hand: 74, stamina: 78 },
  LK: { speed: 72, accel: 70, agility: 62, strength: 86, tackle: 90, pass: 72, kick: 38, hand: 76, stamina: 84 },
};

// What matters for each position when summarising a player in one number.
export const OVR_WEIGHTS = {
  FB: { speed: 0.2, agility: 0.15, hand: 0.2, kick: 0.1, tackle: 0.1, pass: 0.1, accel: 0.1, strength: 0.05 },
  WG: { speed: 0.3, accel: 0.15, agility: 0.15, hand: 0.15, strength: 0.1, tackle: 0.1, stamina: 0.05 },
  CE: { speed: 0.15, strength: 0.2, tackle: 0.2, hand: 0.15, agility: 0.1, accel: 0.1, pass: 0.1 },
  FE: { pass: 0.25, kick: 0.2, agility: 0.15, hand: 0.15, speed: 0.1, tackle: 0.1, accel: 0.05 },
  HB: { pass: 0.25, kick: 0.25, agility: 0.15, hand: 0.15, speed: 0.1, tackle: 0.05, accel: 0.05 },
  PR: { strength: 0.3, tackle: 0.3, stamina: 0.15, hand: 0.1, speed: 0.05, accel: 0.05, pass: 0.05 },
  HK: { pass: 0.2, tackle: 0.25, hand: 0.15, stamina: 0.15, agility: 0.1, accel: 0.1, strength: 0.05 },
  SR: { strength: 0.25, tackle: 0.25, speed: 0.15, hand: 0.1, stamina: 0.15, agility: 0.1 },
  LK: { tackle: 0.3, strength: 0.25, stamina: 0.15, pass: 0.1, hand: 0.1, speed: 0.1 },
};

export function playerOverall(pos, attr) {
  const w = OVR_WEIGHTS[pos];
  let s = 0, t = 0;
  for (const k in w) { s += attr[k] * w[k]; t += w[k]; }
  return Math.round(s / t);
}

// Team summary: overall, attack (backs + spine), defence (tackling + strength across the 13).
export function teamRatings(players) {
  const avg = (list, f) => list.reduce((a, p) => a + f(p), 0) / Math.max(1, list.length);
  const ovr = Math.round(avg(players, (p) => playerOverall(p.pos, p.attr)));
  const attackers = players.filter((p) => ['FB', 'WG', 'CE', 'FE', 'HB', 'HK'].includes(p.pos));
  const attack = Math.round(avg(attackers, (p) => (p.attr.speed + p.attr.agility + p.attr.pass + p.attr.hand) / 4));
  const defence = Math.round(avg(players, (p) => (p.attr.tackle * 2 + p.attr.strength) / 3));
  const forwards = players.filter((p) => ['PR', 'HK', 'SR', 'LK'].includes(p.pos));
  const pack = Math.round(avg(forwards, (p) => (p.attr.strength + p.attr.tackle + p.attr.stamina) / 3));
  return { ovr, attack, defence, pack };
}
