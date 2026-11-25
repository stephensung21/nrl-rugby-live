# Footy 13 — browser rugby league

A 13-a-side rugby league game that runs in the browser. It uses chunky low-poly characters in an early-2000s open-world style and a full match rules engine. Physics and controls are the focus: passing, running lines, fends, sidesteps, shoulder charges, wrap tackles, and kicking with wind, kicking foot and hold-for-power meters.

All teams, players, sponsors and branding are fictional.

## Play it

- **Quickest:** open `dist/standalone.html` in any modern browser. It's a single self-contained file.
- Or open `index.html` (it loads `dist/game.js`), or serve the folder: `npm run dev` → http://localhost:8080

Keyboard, gamepad (Xbox/PlayStation standard mapping) and touch screens are all supported. Press **H** in a match for the controls screen.

**On a phone or tablet**, turn it sideways:
- **Left half:** a joystick that appears where your thumb lands. Push it to the edge to sprint.
- **Right half:** swipe left or right to sidestep, up for a shoulder charge, and down to fend (keep your finger down to hold the fend).
- **Pass buttons:** tap to pass to the next man, double-tap for a flat pass, and hold for a cut-out.
- **Face buttons:** their labels change with the situation, such as punt and grubber on attack, tackle and grip on defence, or set and kick at a conversion. To aim a kick, tap **AIM** then hold a kick button.
- **Top right:** pause, camera and full screen. The game shows a "turn sideways" prompt in portrait.

## Controls

The layout follows the console scheme used by rugby league games of the Rugby League Live 2 era, mapped onto the keyboard like a pad:

- **WASD** works as the left stick and the **arrow keys** as the right stick.
- **K / L / J / I** are the A / B / X / Y face buttons.
- **Space** is the left trigger, **Shift** the right trigger, and **Q / E** the bumpers.

Press **H** in a match for this list.

| Action | Keyboard | Gamepad |
|---|---|---|
| Move / sprint | WASD / Shift | Left stick / RT |
| **Attack** | | |
| Pass left / right to the next man | Q / E | LB / RB |
| Pick the 1st / 2nd / 3rd man (cut-out) | hold Q or E + K / L / I | hold LB or RB + A / B / Y |
| Flat pass: the runner hits it at pace, easier to intercept | double-tap the pass | double-tap |
| Sidestep | ← / → | flick right stick ← → |
| Fend (hold it to keep the arm locked out) | ↓ | right stick ↓ |
| Shoulder charge / bust a tackle | ↑ | right stick ↑ |
| Dummy pass | I | Y |
| Quick kick where you're running: punt / grubber / chip / field goal | K / L / J / U | A / B / X / R3 |
| Aimed kick: hold, steer with A/D, release; the target grows with power | hold Space + K / L / J / I / U (punt / grubber / chip / bomb / field goal) | hold LT + A / B / X / Y / R3 |
| Kicking foot | V | D-pad ↑ |
| In a tackle: offload / fight free / leg drive | Q,E / arrows / mash Shift | LB,RB / right stick / mash RT |
| Ground the ball in-goal | K | A |
| **Defence** | | |
| Low tackle (safe, but the carrier's arms stay free to offload) | K | A |
| Arm-grip "ball and all": no offload, can jar the ball loose, risks a high tackle; keep it held to hold him down (slower play-the-ball, penalty risk) | L | B |
| Dive tackle | I | Y |
| Strip (one-on-one only) / jump to contest a high ball | J | X |
| Switch player (nearest / next) | Q / E | LB / RB (or LT) |
| **Set pieces** | | |
| Conversion: move the ball back, then set it | W / S, then K | left stick ↕, then A |
| Aim (line up the ball's seam) / trajectory | A D / W S | left stick |
| Power: release before the red zone, the meter swings back | hold K | hold A |
| Short kick-off | hold L | hold B |
| Penalty: kick for goal / kick for touch / tap | K / L / J | A / B / X |
| Camera (behind / broadcast / high) | C | View |
| Pause | Esc or P | Start |

## What's in it

- **Squads:** 17 fictional clubs with fixed 13-man squads.
  - **Ratings come from real 2026 NRL performance.** Each club's 13 are rated from one real club's most-used starters in jerseys 1–13. The stats are per-80-minute rates: line breaks, tackle breaks, run and post-contact metres, tackling efficiency, try and line-break assists, kick metres and goal-kicking rate, errors, offloads, kicks defused and minutes. Each player is compared with every other first-grader in his position.
  - **Heights, weights and ages come from the players' public nrl.com profiles** (age as at 25 Nov 2026). Players whose profile can't be found keep invented values typical for their position.
  - **Identities are invented:** names and looks are fictional, club names and colours are original, and no player name or surname matches a real player.
  - Every player has nine ratings, an overall rating weighted by position, and a kicking foot. Height sets how big he looks; weight is his mass in collisions, shoulder charges and big-on-small tackles.
  - **Squads** on the main menu, or in the pause menu during a match, shows every sheet.
  - `src/squads.js` is plain data and can be hand-edited. `node scripts/gen-squads.mjs [player_match_stats.csv]` regenerates it from the nrl-predictor dataset. It defaults to `../stephensung21/nrl-predictor/data/processed/player_match_stats.csv`.
  - Add `--fetch-profiles` to fetch heights, weights and dates of birth from nrl.com, at one request a second. Results are cached in `data/physicals.json`, which is gitignored. Add `--retry-missing` to look again for players who weren't found, including under other clubs. Behind a proxy, run it with `NODE_USE_ENV_PROXY=1`.
- **Match:** 13 v 13 single match, selectable half length, difficulty, wind, kick-off time (day / twilight / night under floodlights), camera and golden point.
- **Rules:** six-tackle sets, play-the-ball with markers and the 10m defensive line (offside defenders can't tackle), handovers, "six again" ruck calls, knock-ons, forward passes (judged relative to the passer's momentum), scrums, tries, conversions, penalty goals, field goals, kicking for touch, tap restarts, 40/20 and 20/40, goal-line drop-outs, 20m restarts, held up in-goal, reaching out to score, being bundled into touch, kick-off 10m and out-on-the-full rules, the siren (play continues until the ball is dead), half time and golden point.
- **Ball physics:** quadratic drag, wind (stronger higher up), kicking-foot curve (a right-footer hooks it left), weak-foot penalty, overcooked-power error, unpredictable oval bounces, end-over-end grubbers, charge-downs, and the ball hitting the posts and crossbar. Goal kicks have no trajectory guide: you line up the seam and judge the wind yourself.
- **Player physics:** momentum-based acceleration and turning (you can't cut at full pace), stamina, collisions.
- **Contact:**
  - Sidestep, fend and shoulder-charge contests use timing, angle, agility, strength and mass.
  - Wrap tackles have dominance, leg drive, gang tackles, offloads, breaking free, one-on-one strips, holding down, jolted-loose balls and high-tackle penalties.
  - Low tackles leave the arms free for an offload; the arm-grip shuts the offload down.
  - Tired players miss more tackles and get bumped off more easily.
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
node scripts/touch-test.mjs      # on-screen touch controls on an emulated phone
```

The game is plain ES modules in `src/`, bundled with esbuild into one IIFE, so `index.html` also works from `file://`.

| File | Role |
|---|---|
| `squads.js`, `ratings.js`, `teams.js` | Fixed squads, rating templates and overall ratings, clubs and kits |
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
| `hud.js`, `menu.js`, `touch.js` | UI and on-screen touch controls |
| `audio.js` | Synthesised whistle, crowd and impacts |

URL options for testing: `?autoplay` (CPU v CPU), `&seed=N`, `&half=N` (minutes per half), `&speed=N`, `&time=night`.

Career mode isn't built yet. The `Match` class takes any two team definitions plus settings, so a season or career layer can sit on top of it.
