---
name: ship-game
description: Ship step of the retro game workshop. Packs the tested game into one HTML file the user can share with anyone, records the version in SPEC.md, and suggests the next loop. Use when the user types /ship-game, or asks to ship, share, save, or send their game.
---

# Ship the game

This is the **Ship** step of plan, build, test, ship. The output is one file that plays the game anywhere, and a version note in `SPEC.md`.

## 1. Check first

1. Use the current folder if it has `engine.js` and `game.js`. Otherwise use `~/my-game` (Windows: `%USERPROFILE%\my-game`).
2. Read `SPEC.md`. If any Definition of done box is unchecked, say so and recommend `/playtest` first. Continue if the user wants to.
3. Work out the version number: one more than the newest version under "Shipped" in `SPEC.md`, or 1 if there are none.

## 2. Pack one file

Create `share/<game-name>-v<N>.html` in the game folder, where `<game-name>` is `GAME_NAME` in lowercase with dashes (for example `bee-dash-v1.html`). Build it from `index.html`:

- Replace the `<link rel="stylesheet" href="style.css" />` tag with a `<style>` tag holding the full contents of `style.css`.
- Replace each `<script src="...">` tag with a `<script>` tag holding the full contents of that file, in the same order.
- Change nothing else, so the shared copy plays exactly like the original.

Write it with a short shell or Python script if one is available, or by reading each file and writing the combined file yourself. Copy every file's contents exactly.

Open the new file (with the agent-browser skill and the Factory app's browser pane if available, otherwise `open <file>` on Mac or `start "" "<file>"` on Windows) and confirm the title screen appears with no console errors.

## 3. Record the version

Under "Shipped" in `SPEC.md`, add a line at the top: `- v<N>, <date>: <one line on what a player can do>`.

## 4. Wrap up

Tell the user, in four short lines:

- Where the file is, and that it plays in any browser, even offline.
- How to share it: email it, AirDrop it, or drop it in a Slack DM. The other person just opens it.
- To put it online with a link later, they can ask Droid: "Put my game online with GitHub Pages."
- What's next: if any Definition of done item still fails, suggest fixing it with /build-game and shipping again. Otherwise: "Pick a stretch goal from your spec and go around the loop again: /build-game, /playtest, /ship-game."

## Rules

- Never upload or send the game anywhere unless the user asks.
- Don't change game code in this step. If the packed copy doesn't work, fix the packing, not the game.
