# AGENTS.md

Morning Brief is a workshop kit: four Droid skills that build a personal executive assistant brief from the user's email and calendar. Attendees install the skills into their personal skills folder, so every skill must work on its own, outside this repository.

## Layout

- `.factory/skills/brief-setup/`: Plan. Connects apps, interviews the user, writes `~/.factory/morning-brief/profile.md`.
- `.factory/skills/morning-brief/`: Build. Writes and saves the brief. `sample/` holds the fictional profile, inbox, and calendar.
- `.factory/skills/brief-check/`: Test. The 10-point checklist and `sample-answer-key.md`.
- `.factory/skills/brief-schedule/`: Ship. Creates the automation from `automation-prompt.md`.
- `docs/`: the GitHub Pages setup page. `workshop/`: facilitator notes.

## Rules

- Attendees may not write code. Keep every message a skill asks Droid to say short and plain.
- Keep the brief read only. Its only outbound action is one email to the user's own address, and only in a scheduled run or when the user asks.
- `automation-prompt.md` must stay self-contained, because cloud runs can't see the skills. When you change brief logic in `morning-brief/SKILL.md`, make the same change there.
- When you change `sample/inbox.json` or `sample/calendar.json`, update `brief-check/sample-answer-key.md` to match.
- Sample data stays fictional and uses `.example` domains.
- The workshop takes 30 minutes. Favor fewer, clearer steps over more features.

## Verify

- `python3 -m json.tool` passes on both sample JSON files.
- A sample run passes all 10 checks:
  `droid exec --auto low --cwd . "Use the morning-brief skill in sample mode, then the brief-check skill without asking questions. Print the brief and the check table."`
- `docs/index.html` renders with no console errors.
