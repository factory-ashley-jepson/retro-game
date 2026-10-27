# Scout

Build your own research agent in 30 minutes with [Factory](https://factory.ai). Tell it what you care about and why. On your schedule, it searches the public web and sends you a short digest:

- **Top 3:** the most important things that happened, and why each one matters to you
- **By beat:** everything else worth knowing, grouped by what you watch
- **Quiet:** what had no real news, so you know it was checked
- **One thing to do:** a single suggested next step
- **My section:** an optional section you design yourself

Every item is checked against its source page before it reaches you. Scout reads only the public web, so it needs no sign-ins. You choose where it lands: the Factory app, your email, or a Slack DM.

Built for the Women in AI workshop (Factory, Sapienne, and Sequoia, October 27, 2026). Setup page: **https://factory-ashley-jepson.github.io/morning-brief/**

## Setup (5 minutes)

1. **Download the Factory app** and sign in: [Mac (Apple chip)](https://app.factory.ai/api/desktop?platform=darwin&architecture=arm64), [Mac (Intel)](https://app.factory.ai/api/desktop?platform=darwin&architecture=x64), [Windows](https://app.factory.ai/api/desktop?platform=win32&architecture=x64), [Windows (ARM)](https://app.factory.ai/api/desktop?platform=win32&architecture=arm64).
2. **Install the kit.** Start a new session and paste:

   ```text
   Install the Scout workshop kit for me. Download https://github.com/factory-ashley-jepson/morning-brief/archive/refs/heads/main.zip to a temporary folder and unzip it. Copy the four skill folders inside morning-brief-main/.factory/skills (scout-setup, scout, scout-check, scout-schedule) into my personal skills folder: ~/.factory/skills on Mac, or %USERPROFILE%\.factory\skills on Windows. Create that folder if it's missing, and don't change anything else. When you're done, tell me to start a new session and type /scout-setup.
   ```

## Build it like a real team

Start a new session and go through the same loop software teams use.

| Step | Type | What happens |
| ---- | ---- | ------------ |
| **1. Plan** | `/scout-setup` | Droid asks four quick questions and what you care about, then writes your watchlist. |
| **2. Build** | `/scout` | Droid searches the web, verifies every item, and writes your first digest. |
| **3. Test** | `/scout-check` | Droid reopens every source and runs a 9-point checklist, then fixes what failed. |
| **4. Ship** | `/scout-schedule` | Droid creates an automation that delivers your digest on your schedule. |

Then go around again: add a beat, change the tone, or design your own section.

## Example watchlists

Not sure what to watch? `/scout-setup` offers ready-made starting points that you then adjust: **Founder**, **Investor**, **Career and opportunities**, **Product leader**, and **Women in AI opportunities**.

## Make it yours

Ask Droid in plain words:

- "Add a beat for women-led AI seed rounds, because I'm raising next quarter."
- "End every digest with one LinkedIn post idea based on the top story."
- "Before each Scout run, suggest one question I could ask at my next coffee chat."
- "Switch my Scout to Mondays and Thursdays, and keep it under 5 items."
- "Skip anything from press releases unless a real outlet covered it too."

## What's in the box

| Path | What it is |
| ---- | ---------- |
| `.factory/skills/scout-setup/` | Plan: interviews you and writes your watchlist. Includes the template and `examples/`. |
| `.factory/skills/scout/` | Build: searches, verifies, and writes the digest from `digest-template.md`. |
| `.factory/skills/scout-check/` | Test: the 9-point checklist and the fix loop. |
| `.factory/skills/scout-schedule/` | Ship: creates the automation from a self-contained prompt. |
| `extras/morning-brief/` | Stretch kit: a morning brief from your email and calendar. Needs Gmail and Google Calendar (or Outlook) connected. |
| `docs/` | The setup page, served on GitHub Pages. |
| `workshop/` | Facilitator notes: run of show, helper card, and the pre-event email. |

Your watchlist, saved digests, and seen list live in `~/.factory/scout/` on your computer.

## Stretch: Morning Brief

`extras/morning-brief/` holds four more skills (`/brief-setup`, `/morning-brief`, `/brief-check`, `/brief-schedule`) that write a daily brief from your inbox and calendar. Install them the same way, from `morning-brief-main/extras/morning-brief`. Connect Gmail and Google Calendar (or Outlook) under **Settings**, then **Connectors** first, or say "use sample data" to try it on a fictional inbox.

## Turn it off

Pause or delete the automation under **Automations** in the Factory app. Delete `~/.factory/scout/` to remove your watchlist and saved digests. If you connected email or Slack for delivery, disconnect it under **Settings**, then **Connectors**.

## License

MIT. See `LICENSE`.
