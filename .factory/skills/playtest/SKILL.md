---
name: playtest
description: Test step of the retro game workshop. Plays the game against SPEC.md's Definition of done and reports pass or fail for each item with evidence. Use when the user types /playtest, after building a feature, before calling the game done, or when the user asks to test or check the game.
---

# Playtest

This is the **Test** step of plan, build, test, ship. Check the game against every item in `SPEC.md` and report evidence, not impressions.

## Steps

1. **Find the game.** Use the current folder if it has `engine.js` and `game.js`. Otherwise use `~/my-game` (Windows: `%USERPROFILE%\my-game`).
2. **Read the spec.** List its Definition of done items. If it still says "Not planned yet", suggest `/plan-game` and stop.
3. **Static checks.** If Node is installed, run `node --check` on every `.js` file. Report syntax errors as failures.
4. **Play it.**
   - If the agent-browser skill is available, use it (with the Factory app's browser pane if it's open). Open `file://<game folder>/index.html`, take a screenshot, and read the console for errors. Exercise each control from the spec by pressing keys. Take a screenshot after the moments that matter, such as scoring and game over. Game state lives in top-level variables (`state`, `score`, and the hero), so read them with the browser tool's JavaScript eval to confirm what happened, for example that `state` becomes `"over"` after a hit. If the page shows old code, open it with a new query string such as `?v=2`.
   - If you can't use a browser, read the code for each item, then ask the user to play for 30 seconds and confirm what you couldn't check yourself. Use AskUser, one question per item, with "Yes", "No", and "Sort of" options.
5. **Report** a table with one row per Definition of done item:

   | Item | Result | Evidence |
   | ---- | ------ | -------- |
   | Pressing Space makes the bee fly up | Pass | After pressing Space, `bee.vy` was negative and the screenshot shows the bee higher |

   Results are **Pass**, **Fail**, or **Not verified**. Then list any bugs you noticed outside the spec, such as blurry pixels, keys that stick, on-screen keys that don't respond, text that runs off the screen, or a game that can't restart. End with one line: "X of Y passed."
6. **Next step.**
   - If anything failed, propose the smallest fix for each failure and ask before changing code. After fixing, test again.
   - If everything passed, check the boxes in `SPEC.md` and say: "Every check passed. Type /ship-game to ship version 1."

## Rules

- Never mark an item Pass without evidence: a screenshot, console output, a command, a game-state read, or the user's confirmation.
- Don't change game code while testing. Testing and fixing are separate steps.
