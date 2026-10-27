// Your game goes here. Right now the computer is on, but there's no game in it.
// Plan it with /plan-game, then build it with /build-game.
//
// engine.js calls update(dt) and then draw() about 60 times a second. dt is the
// time since the last frame, in seconds. Draw on the 256x192 screen with clear,
// rect, drawSprite, and drawText. Read keys with input.isDown and
// input.wasPressed. See engine.js for every helper.

const GAME_NAME = ""; // shown on the computer's badge and the browser tab
const CONTROLS_HINT = ""; // shown above the keyboard, for example "SPACE JUMP - M SOUND"

// ---------------------------------------------------------------------------
// Game state. Keep it in top-level variables so tests can read it.
// ---------------------------------------------------------------------------
let state = "ready";
let time = 0;

// ---------------------------------------------------------------------------
// Update: move things, read input, check for collisions.
// ---------------------------------------------------------------------------
function update(dt) {
  time += dt;
}

// ---------------------------------------------------------------------------
// Draw: paint the whole screen, every frame.
// ---------------------------------------------------------------------------
function draw() {
  clear(PALETTE.K);
  drawText("READY.", 8, 8, { color: PALETTE.L });
  const cursorOn = Math.floor(time * 2) % 2 === 0;
  if (cursorOn) rect(8, 18, 5, 7, PALETTE.L);
}
