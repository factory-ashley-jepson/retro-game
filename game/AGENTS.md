# AGENTS.md

This folder is a retro game, built during a 30-minute workshop by someone who may never have coded. The computer around the screen is done. The game inside it is theirs to invent. Favor small, working steps over big rewrites.

## Run

Open `index.html` in a browser. There is no build step, no server, and nothing to install.

## Layout

Scripts load in this order from `index.html`: `sprites.js`, `engine.js`, `game.js`.

- `game.js`: the game. `GAME_NAME` and `CONTROLS_HINT` at the top label the computer. Then tuning constants, state, `update(dt)`, and `draw()`.
- `sprites.js`: `PALETTE` (one letter per color) and `SPRITES` (pixel art as rows of letters, `.` is transparent).
- `engine.js`: the 256x192 screen, `rect`, `clear`, `drawSprite`, `spriteSize`, `drawText`, `textWidth`, `input`, `beep`, `rand`, `pick`, `overlaps`, `save`, `load`, and the game loop. Change it only when a helper is missing.
- `index.html` and `style.css`: the retro computer (monitor, screen effects, keyboard). Elements with `data-key="Space"` and similar act as on-screen keys and light up when the key is pressed.
- `SPEC.md`: the plan for the game. It is the source of truth for what "done" means.

## Rules

- Plain JavaScript and the Canvas 2D API only. No npm, no frameworks, no CDNs, no build tools, no network calls. The game must work offline, opened straight from the file.
- Keep the retro pixel look. Draw everything on the 256x192 screen with the engine helpers, in whole pixels. Add art as sprites in `sprites.js` using `PALETTE` letters (add colors if needed), and use `drawText` for text. Don't turn on image smoothing or draw high-resolution images.
- Keep the game inside the retro computer. Don't restyle the computer unless the spec asks for it.
- Reuse the helpers in `engine.js` instead of adding event listeners, loops, or resize logic. For a new on-screen control, add an element with a `data-key` attribute.
- Keep game state in top-level variables (`state`, `score`, and the hero), so a browser tool can read them.

## Workflow: plan, build, test, ship

1. **Plan.** If `SPEC.md` still says "Not planned yet", run `/plan-game` before changing game code.
2. **Build.** `/build-game` builds `SPEC.md` one Definition of done item at a time.
3. **Test.** `/playtest` checks every Definition of done item before anyone calls it done.
4. **Ship.** `/ship-game` makes a one-file copy to share and records the version in `SPEC.md`.

Don't start stretch goals until every Definition of done item passes.
