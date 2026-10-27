---
name: plan-game
description: Plan step of the retro game workshop. Interviews the user about the game they want inside the empty retro computer and writes SPEC.md before any code is changed. Use when the user types /plan-game, wants to start or redesign their game, or when SPEC.md still says "Not planned yet". Never writes game code.
---

# Plan the game

This is the **Plan** step of plan, build, test, ship. The output is a filled-in `SPEC.md` that the user approves. The user may never have coded. Keep every message short and plain.

## 0. Find the game folder

Use the current folder if it has `engine.js` and `game.js`. Otherwise use `~/my-game` (Windows: `%USERPROFILE%\my-game`). If neither exists, tell the user to paste the install prompt from the setup page first, and stop.

The game starts empty: a retro computer whose screen says `READY.` Everything inside is theirs to invent.

## 1. Interview

Read `SPEC.md`. If it's already filled in, ask whether to change it or start over.

Ask one AskUser questionnaire with these 4 questions. Each has an "own answer" option, so tell them their own idea is welcome.

1. "What kind of game?" Options: "Runner: jump over things", "Dodger: avoid things falling from the sky", "Catcher: catch the good things, miss the bad", "Flyer: tap to fly through gaps".
2. "Who's the hero, and where are they?" Options: "An AI agent escaping an overflowing inbox", "A founder dodging bad term sheets", "A cat collecting stars in space", "A bee in a flower garden".
3. "How do you win or lose?" Options: "One hit and it's over, chase the high score", "Three lives", "Reach a goal score to win", "Survive 60 seconds".
4. "What's the vibe?" Options: "Neon night", "Pastel garden", "Classic arcade", "Sunset beach".

If the user already described their idea, skip what they answered.

Then ask with AskUser: "What's your game called? It goes on the computer's badge." Offer 3 short, fun names that fit their answers (12 characters or fewer, so they fit the badge), and let them write their own.

## 2. Write SPEC.md

Fill in every section of `SPEC.md` in the game folder. Keep it short.

- **Core loop:** one main mechanic. Cut anything that needs a second mechanic to be fun.
- **Controls:** a table with every input. Use keys the computer's keyboard has: Space, the arrow keys, and letters. Clicking or tapping the screen works too.
- **Win / lose:** score, how you lose, and how you win if there's a win.
- **Look and sound:** colors, mood, and two or three `beep` sounds (for example: a blip on jump, a crunch on a hit).
- **Definition of done:** 5 to 7 items. Each one must be checkable by playing for 30 seconds, for example "Pressing Space makes the bee fly up" or "Touching a raincloud ends the game". Keep "The game loads with no errors, and the computer's badge shows the game's name" first. Always include a title screen that shows the name, a game over screen, and a way to play again.
- **Stretch goals:** 3 ideas, easiest first.
- Remove the "Not planned yet" note.

The first version must be buildable in about 10 minutes. If the idea is bigger, keep the fun part and move the rest to stretch goals. Say what you moved.

## 3. Approve

Show a 3-line summary (name and pitch, how you play, how you win or lose) and ask the user to approve it or change it.

After approval, say: "Your plan is ready. Next, type /build-game and watch your game appear on the screen."

## Rules

- Only edit `SPEC.md`. Don't touch `game.js`, `sprites.js`, `engine.js`, `index.html`, or `style.css`.
- Don't plan anything that needs a server, an account, the internet, or image files. Art is drawn as pixel sprites.
