---
name: scout-setup
description: Plan step of the Scout workshop. Interviews the user about what to watch on the public web and why, then writes their Scout watchlist. Use when the user types /scout-setup, asks to set up or change what Scout watches, or when no watchlist exists yet.
---

# Scout setup (Plan)

Goal: in about 5 minutes, write the user's watchlist to `~/.factory/scout/watchlist.md` (on Windows, `%USERPROFILE%\.factory\scout\watchlist.md`). Scout reads only the public web, so this step needs no account sign-ins.

The user may be new to Droid and may not write code. Keep every message short and plain.

## 1. Start from an example (optional)

Ask with AskUser: "Want to start from an example watchlist, or build your own?" Options:

- "Founder" (`examples/founder.md`)
- "Investor" (`examples/investor.md`)
- "Career and opportunities" (`examples/career.md`)
- "Build my own"

The user can also type "product leader" (`examples/product-leader.md`) or "Women in AI opportunities" (`examples/women-in-ai.md`) as their own answer. The examples are in this skill's folder. If they pick one, read it and use it as the starting draft. The questions below then adjust it rather than starting from blank.

## 2. Interview

Ask one AskUser questionnaire with these 4 questions:

1. "What should Scout watch?" (multi) Options: "Companies or competitors", "People (founders, leaders, researchers)", "A topic or market", "Opportunities (jobs, grants, events, calls for speakers)".
2. "What kinds of news matter most?" (multi) Options: "Funding and deals", "Launches and product news", "Hires and departures", "Research, reports, and big ideas".
3. "How often should Scout report?" Options: "Every weekday morning", "Monday mornings (weekly roundup)", "Mondays and Thursdays".
4. "Where should results go?" Options: "Factory app only (no sign-in needed)", "Email", "Slack DM".

Then ask in plain text, one message:

"Name 2 to 5 specific things to watch, and for each, one line on why you care. For example: 'Cursor and Replit, because we compete with them' or 'women-led AI seed rounds, because I'm raising next quarter.'"

The "why you care" line matters most. Scout uses it to explain why each item matters, so push gently for a real reason if they skip it.

Finally, offer the creative part: "Want Scout to add one section of your own design? For example, a question to ask at your next meeting, a LinkedIn post idea based on the top story, or a one-line pitch tweak. Skip is fine."

## 3. Write and show the watchlist

Write the watchlist using `watchlist-template.md` in this folder. Create the folder if it's missing.

- Make one beat per thing they named, or group related things into one beat. Use 2 to 5 beats.
- Fill in each beat's signals from question 2, adjusted to fit the beat.
- Use the time zone from the computer's clock settings, or ask if you can't tell.
- Default the delivery time to 8:00 AM and the length to "Quick (up to 5 items)" unless they said otherwise.

Show the watchlist in the chat, then say:

"This is Scout's plan. To change anything, just tell me. Next, type /scout to run it for the first time."

## Rules

- Don't connect any apps in this step. If they chose email or Slack delivery, `/scout-schedule` will handle it.
- The only file you write is the watchlist.
