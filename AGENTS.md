# AGENTS.md

Scout is a workshop kit: four Droid skills that build a personal research agent from the public web. Attendees install the skills into their personal skills folder, so every skill must work on its own, outside this repository.

## Layout

- `.factory/skills/scout-setup/`: Plan. Interviews the user and writes `~/.factory/scout/watchlist.md`. `examples/` holds starter watchlists.
- `.factory/skills/scout/`: Build. Searches, verifies, and saves the digest to `~/.factory/scout/digests/`, using `digest-template.md`.
- `.factory/skills/scout-check/`: Test. The 9-point checklist and fix loop.
- `.factory/skills/scout-schedule/`: Ship. Creates the automation from `automation-prompt.md`.
- `extras/morning-brief/`: the stretch kit (email and calendar brief). It has its own sample data and answer key.
- `docs/`: the GitHub Pages setup page. `workshop/`: facilitator notes.

## Rules

- Attendees may not write code. Keep every message a skill asks Droid to say short and plain.
- Scout reads only the public web and needs no sign-ins. Its only outbound action is delivering the digest to the user: the Factory app, their own email address, or their own Slack DM.
- `automation-prompt.md` must stay self-contained, because cloud runs can't see the skills. When you change digest logic in `scout/SKILL.md`, make the same change there.
- The checklist in `scout-check/SKILL.md` must match the digest shape in `scout/digest-template.md`.
- The workshop takes 30 minutes. Favor fewer, clearer steps over more features.

## Verify

- A run from an example watchlist passes all 9 checks:
  `droid exec --auto low --cwd . "Use the scout-setup skill without asking questions: start from examples/women-in-ai.md for Test Attendee, America/Los_Angeles, Mondays 8 AM, Factory app delivery. Then run the scout skill, then the scout-check skill. Print the digest and the check table."`
- `docs/index.html` renders with no console errors.
