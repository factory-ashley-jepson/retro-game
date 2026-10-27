---
name: build-game
description: Build step of the retro game workshop. Builds the game in SPEC.md inside the retro computer, one Definition of done item at a time, showing the game after each step. Use when the user types /build-game, or asks to build, make, or add something to their game.
---

# Build the game

This is the **Build** step of plan, build, test, ship. The user may never have coded. Narrate in one plain sentence per step, and don't show code unless they ask.

## 0. Find the game and read the plan

1. Use the current folder if it has `engine.js` and `game.js`. Otherwise use `~/my-game` (Windows: `%USERPROFILE%\my-game`).
2. Read `SPEC.md`. If it still says "Not planned yet", offer `/plan-game` and stop.
3. Read `AGENTS.md`, `engine.js`, `sprites.js`, and `game.js` in the game folder. Follow every rule in `AGENTS.md`.

For a change that isn't in the spec yet (for example, "add a power-up"), add it to `SPEC.md` first: as a Definition of done item if the game isn't done, or as a stretch goal you're now building. Then build it.

## 1. Build one item at a time

Work through the Definition of done in order. For each item:

1. Change the smallest amount of code that makes it work.
2. Run `node --check` on each file you changed, if Node is installed, and fix any errors.
3. Show the game (see "Show the game" below) and tell the user, in one line, what to try: "Press Space to see the bee fly."

Build in this order unless the spec says otherwise:

1. Set `GAME_NAME` and `CONTROLS_HINT` at the top of `game.js`.
2. A title screen with the name and "PRESS SPACE TO START".
3. The hero, drawn as a sprite in `sprites.js` (about 12 to 20 pixels tall), moving with the spec's controls.
4. The core loop: the things to jump, dodge, catch, or fly through.
5. Score, game over, and play again. If the spec has a high score, save it with `save` and `load`.
6. Sounds with `beep`, and the colors from the spec.

Keep `state` (`"title"`, `"playing"`, or `"over"`), `score`, and the hero in top-level variables.

## 2. Show the game

After each item, open or refresh the game so the user can see it:

- If the agent-browser skill is available and the Factory app's browser pane is open, open `file://<game folder>/index.html` there. To refresh, open the same URL again with a new query string, such as `?v=2`.
- Otherwise, open it in their browser: `open <game folder>/index.html` on Mac, or `start "" "<game folder>\index.html"` on Windows. Tell them to click the game screen before using the keys.

## 3. Finish

When every Definition of done item is built, say: "Your game is built. Play it for a minute, then type /playtest to test it like a pro."

## Rules

- Stay inside the plan. If the user asks for something big, build the smallest fun version and offer the rest as a stretch goal.
- Never break the computer around the screen: leave `index.html` and `style.css` alone unless the spec asks for a new on-screen key.
- If something breaks and you can't fix it in two tries, undo your last change so the game works again, and tell the user.
