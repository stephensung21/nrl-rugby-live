# Footy 13 — browser rugby league

A 13-a-side rugby league game that runs in the browser. It uses chunky low-poly characters in an early-2000s open-world style and a full match rules engine. Physics and controls are the focus: passing, running lines, fends, sidesteps, shoulder charges, wrap tackles, and kicking with wind, kicking foot and hold-for-power meters.

All teams, players, sponsors and branding are fictional.

## Play it

- **Quickest:** open `dist/standalone.html` in any modern browser. It's a single self-contained file.
- Or open `index.html` (it loads `dist/game.js`), or serve the folder: `npm run dev` → http://localhost:8080

Keyboard and gamepad (Xbox/PlayStation standard mapping) are both supported. Press **H** in a match for the controls screen.

## Controls

| Action | Keyboard | Gamepad |
|---|---|---|
| Move / sprint | WASD or arrows / Shift | Left stick / RT |
| **Attack** | | |
| Pass left / right (tap) | Q / E | LB / RB |
| Cut-out pass (hold) | hold Q / E | hold LB / RB |
| Sidestep (push a direction) | Space or J | A |
| Fend (hand-off) | F or K | B |
| Shoulder charge | R or L | X |
| Dummy pass | X or U | LT |
| Kick — hold for power, steer the aim | hold G or I | hold Y |
| Kick type: punt / bomb / grubber / chip / field goal | 1–5 or Tab | D-pad ← → |
| Kicking foot | V or O | D-pad ↑ |
| In a tackle: offload / fight free / leg drive | Q,E / F,R / mash Shift | LB,RB / B,X / mash RT |
| Ground the ball in-goal | Space | A |
| **Defence** | | |
| Tackle | Space or J | A |
| Big hit (riskier, can dislodge the ball) | F or K | B |
| Dive tackle | R or L | X |
| Switch player (nearest / next) | Q / E | LB / RB |
| **Set pieces** (conversions, penalty goals, kick-offs, drop-outs, kicking for touch) | | |
| Move the ball back for a conversion | W / S | Left stick ↕ |
| Aim / height | A D / W S | Left stick |
| Power — the meter swings back, so release on time | hold Space or G | hold A or Y |
| Camera (behind / broadcast / high) | C | View |
| Pause | Esc or P | Start |

## What's in it

- **Match:** 13 v 13 single match, selectable half length, difficulty, wind, kick-off time (day / twilight / night under floodlights), camera and golden point.
- **Rules:** six-tackle sets, play-the-ball with markers and the 10m defensive line (offside defenders can't tackle), handovers, "six again" ruck calls, knock-ons, forward passes (judged relative to the passer's momentum), scrums, tries, conversions, penalty goals, field goals, kicking for touch, tap restarts, 40/20 and 20/40, goal-line drop-outs, 20m restarts, held up in-goal, reaching out to score, being bundled into touch, kick-off 10m and out-on-the-full rules, the siren (play continues until the ball is dead), half time and golden point.
- **Ball physics:** quadratic drag, wind (stronger higher up), kicking-foot curve (a right-footer hooks it left), weak-foot penalty, overcooked-power error, unpredictable oval bounces, end-over-end grubbers, charge-downs, and the ball hitting the posts and crossbar.
- **Player physics:** momentum-based acceleration and turning (you can't cut at full pace), stamina, collisions.
- **Contact:**
  - Sidestep, fend and shoulder-charge contests use timing, angle, agility, strength and mass.
  - Wrap tackles have dominance, leg drive, gang tackles, offloads, breaking free, big-hit fumbles and high-tackle penalties.
  - How fast the play-the-ball happens depends on how dominant the tackle was.
- **AI:**
  - Attack: dummy-half plays (hit-ups, shifts, scoots), running lines that find gaps, pass decisions based on open space ahead, and last-tackle kicking (bombs, grubbers, chips, long kicks for territory, 40/20 attempts, late field goals).
  - Defence: line speed with lateral marking, intercept-based pursuit, cover defence, a sweeping fullback, and wingers dropping back on late tackles.
  - Kicks: chasing and receiving.

## Development

```bash
npm install
npm run dev      # esbuild watch + local server on :8080
npm run build    # dist/game.js + dist/standalone.html
npm test         # headless CPU-v-CPU matches; fails on runtime errors or matches that don't finish
node scripts/human-test.mjs      # drives the real keyboard controls through a match
node scripts/setpiece-test.mjs   # human kick-off, conversion, penalty options, drop-out, scrum
```

The game is plain ES modules in `src/`, bundled with esbuild into one IIFE, so `index.html` also works from `file://`.

| File | Role |
|---|---|
| `match.js` | Phases, rules, restarts, clock, scoring |
| `actions.js` | Passing, kicking, gathering, boundary rules, goal-kick solver |
| `contact.js` | Tackles, evasion contests, engagements |
| `ai.js` | Team AI |
| `human.js` | Player controls and switching |
| `physics.js` | Ball flight, usable without the DOM |
| `player.js` | Locomotion |
| `model.js` | Skinned low-poly footballers, one draw call each |
| `stadium.js` | Pitch, stands, crowd, sky |
| `camera.js` | Cameras |
| `hud.js`, `menu.js` | UI |
| `audio.js` | Synthesised whistle, crowd and impacts |

URL options for testing: `?autoplay` (CPU v CPU), `&seed=N`, `&half=N` (minutes per half), `&speed=N`, `&time=night`.

Career mode isn't built yet. The `Match` class takes any two team definitions plus settings, so a season or career layer can sit on top of it.
