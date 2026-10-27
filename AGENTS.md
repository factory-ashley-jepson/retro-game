# AGENTS.md

A workshop kit: an empty retro computer (`game/`) and four Droid skills that take an attendee from idea to a shared game in 30 minutes. Attendees copy `game/` to `~/my-game` and the skills into their personal skills folder, so every skill must work on its own, outside this repository.

## Layout

- `game/`: what attendees get. A blank game (`READY.` and a blinking cursor), the engine, the retro computer, a `SPEC.md` template, and `game/AGENTS.md` with the rules for building inside it.
- `.factory/skills/plan-game/`: Plan. Interviews the user and writes `SPEC.md`, including the name on the badge.
- `.factory/skills/build-game/`: Build. Builds `SPEC.md` one Definition of done item at a time.
- `.factory/skills/playtest/`: Test. Checks every Definition of done item with evidence.
- `.factory/skills/ship-game/`: Ship. Packs the game into one HTML file and records the version.
- `docs/`: the GitHub Pages setup page. `workshop/`: facilitator notes.

## Rules

- Attendees may not write code. Keep every message a skill asks Droid to say short and plain.
- `game/` must stay blank: no hero, no sprites, no game logic. It must open straight from the file with no server and no console errors.
- Keep `game/engine.js` in step with the rules in `game/AGENTS.md`. Every skill finds the game in the current folder or `~/my-game`.
- The workshop takes 30 minutes. Favor fewer, clearer steps over more features.

## Verify

- `node --check` passes on every file in `game/`.
- `game/index.html` opens from the file and shows `READY.` with no console errors.
- A full loop works on a copy:
  `cp -R game /tmp/my-game-test && droid exec --auto low --cwd /tmp/my-game-test "Use plan-game without asking questions: a dodger called Star Cat. Approve it. Then use build-game, then playtest. Print the playtest table."`
- `docs/index.html` renders with no console errors.
