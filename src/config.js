// Field coordinates: x runs try-line to try-line (-50..50), z across (-34..34), y up.
// A team with dir = +1 attacks toward x = +50.
export const FIELD = {
  half: 50,          // try line at |x| = 50
  halfW: 34,         // touch line at |z| = 34
  dead: 58,          // dead-ball line at |x| = 58 (8 m in-goal)
  postGap: 2.75,     // half distance between uprights
  crossbar: 3.0,
  postH: 14,
};

export const DT = 1 / 60;
export const GRAVITY = 9.81;

export const BALL = {
  radius: 0.13,
  drag: 0.0052,      // quadratic drag coefficient (per metre)
  windMul: 1.7,      // extra wind influence (a rugby ball is a big, light sail)
};

export const POSITIONS = {
  1: 'FB', 2: 'WG', 3: 'CE', 4: 'CE', 5: 'WG', 6: 'FE', 7: 'HB',
  8: 'PR', 9: 'HK', 10: 'PR', 11: 'SR', 12: 'SR', 13: 'LK',
};
export const POSITION_NAMES = {
  FB: 'Fullback', WG: 'Winger', CE: 'Centre', FE: 'Five-eighth', HB: 'Halfback',
  PR: 'Prop', HK: 'Hooker', SR: 'Second Row', LK: 'Lock',
};
export const FORWARDS = new Set([8, 9, 10, 11, 12, 13]);

// Kick definitions. power p in [0,1] maps to launch speed; elev is launch elevation (radians).
export const KICKS = {
  punt:      { label: 'PUNT',       elev: 0.66, vMin: 15, vMax: 29, curve: 0.9, spin: 'spiral' },
  bomb:      { label: 'BOMB',       elev: 1.10, vMin: 13, vMax: 24, curve: 0.5, spin: 'endover' },
  grubber:   { label: 'GRUBBER',    elev: 0.06, vMin: 7,  vMax: 19, curve: 0.0, spin: 'grubber' },
  chip:      { label: 'CHIP',       elev: 0.88, vMin: 7,  vMax: 15, curve: 0.3, spin: 'endover' },
  fieldgoal: { label: 'FIELD GOAL', elev: 0.50, vMin: 16, vMax: 28, curve: 1.1, spin: 'endover' },
  goal:      { label: 'GOAL KICK',  elev: 0.56, vMin: 17, vMax: 31, curve: 1.2, spin: 'endover' },
  kickoff:   { label: 'KICK-OFF',   elev: 0.80, vMin: 15, vMax: 28, curve: 0.8, spin: 'endover' },
  shortko:   { label: 'SHORT KO',   elev: 0.78, vMin: 9,  vMax: 15, curve: 0.4, spin: 'endover' },
  touch:     { label: 'FIND TOUCH', elev: 0.58, vMin: 16, vMax: 30, curve: 0.9, spin: 'spiral' },
  dropout:   { label: 'DROP-OUT',   elev: 0.74, vMin: 15, vMax: 28, curve: 0.6, spin: 'endover' },
};
export const OPEN_PLAY_KICKS = ['punt', 'bomb', 'grubber', 'chip', 'fieldgoal'];

export const DIFFICULTY = {
  easy:   { cpuTackle: -0.14, humanTackle: 0.10, cpuReact: 0.42, cpuEvade: 0.45, cpuPassErr: 1.6, cpuKickErr: 1.8, lineSpeed: 0.78, humanCatch: 0.08 },
  normal: { cpuTackle: 0.0,   humanTackle: 0.03, cpuReact: 0.26, cpuEvade: 0.75, cpuPassErr: 1.0, cpuKickErr: 1.0, lineSpeed: 0.9,  humanCatch: 0.03 },
  hard:   { cpuTackle: 0.07,  humanTackle: 0.0,  cpuReact: 0.14, cpuEvade: 1.0,  cpuPassErr: 0.7, cpuKickErr: 0.65, lineSpeed: 1.0,  humanCatch: 0.0 },
};

export const WIND_PRESETS = {
  calm:   { min: 0.0, max: 1.5, gust: 0.1 },
  breezy: { min: 2.5, max: 5.0, gust: 0.25 },
  gusty:  { min: 5.5, max: 9.0, gust: 0.45 },
};
