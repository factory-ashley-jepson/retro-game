# Morning Brief

Build your own executive assistant agent in 30 minutes with [Factory](https://factory.ai). Every weekday morning, it reads your email and calendar and emails you a two-minute brief:

- **Today:** your meetings, with a prep note for the ones that need one
- **Needs your reply:** the emails actually waiting on you, ranked by who matters most
- **Promises you made:** things you said you'd do in email that haven't happened yet
- **Worth knowing:** changes that affect your plans

It's read only. It never replies, archives, or deletes anything, and the only email it sends is your brief, to you.

Built for the Women in AI workshop (Factory, Sapienne, and Sequoia, October 27, 2026). Setup page: **https://factory-ashley-jepson.github.io/morning-brief/**

## Setup (5 minutes)

1. **Download the Factory app** and sign in: [Mac (Apple chip)](https://app.factory.ai/api/desktop?platform=darwin&architecture=arm64), [Mac (Intel)](https://app.factory.ai/api/desktop?platform=darwin&architecture=x64), [Windows](https://app.factory.ai/api/desktop?platform=win32&architecture=x64), [Windows (ARM)](https://app.factory.ai/api/desktop?platform=win32&architecture=arm64).
2. **Connect your email and calendar.** In the Factory app, open **Settings**, then **Connectors**. Connect **Gmail** and **Google Calendar**, or **Outlook**.
3. **Install the kit.** Start a new session and paste:

   ```text
   Install the Morning Brief workshop kit for me. Download https://github.com/factory-ashley-jepson/morning-brief/archive/refs/heads/main.zip to a temporary folder and unzip it. Copy the four skill folders inside morning-brief-main/.factory/skills (brief-setup, morning-brief, brief-check, brief-schedule) into my personal skills folder: ~/.factory/skills on Mac, or %USERPROFILE%\.factory\skills on Windows. Create that folder if it's missing, and don't change anything else. When you're done, tell me to start a new session and type /brief-setup.
   ```

## Build it like a real team

Start a new session and go through the same loop software teams use.

| Step | Type | What happens |
| ---- | ---- | ------------ |
| **1. Plan** | `/brief-setup` | Droid checks your connections, asks four quick questions, and writes your brief profile. |
| **2. Build** | `/morning-brief` | Droid writes your first brief from your real inbox and calendar. |
| **3. Test** | `/brief-check` | Droid checks every item against its source with a 10-point checklist, then fixes what failed. |
| **4. Ship** | `/brief-schedule` | Droid creates an automation that emails you the brief every weekday morning. |

Then go around again: change your profile, add a source, or add a new job (ideas below).

## Try it without your accounts

Say "use sample data" during `/brief-setup`, or ask for "my morning brief on sample data". You'll get a full brief for Jordan Rivera, a fictional VP of Product, built from a made-up inbox with a few traps in it: a verification code, an email that was already answered, and a declined meeting. `/brief-check` grades the result against an answer key.

## Make it yours

Ask Droid in plain words:

- "Add my Slack DMs and mentions to my morning brief."
- "Thirty minutes before each external meeting, send me a prep note."
- "Every Friday at 4, send me a weekly review of what I shipped and what slipped."
- "Draft replies for the emails in my brief and save them as drafts. Don't send anything."
- "Add my Granola meeting notes, and list the action items I took on."

## What's in the box

| Path | What it is |
| ---- | ---------- |
| `.factory/skills/brief-setup/` | Plan: connects apps, interviews you, writes your profile. |
| `.factory/skills/morning-brief/` | Build: writes the brief. Includes the template and the fictional `sample/` data. |
| `.factory/skills/brief-check/` | Test: the 10-point checklist and the sample answer key. |
| `.factory/skills/brief-schedule/` | Ship: creates the automation from a self-contained prompt. |
| `docs/` | The setup page, served on GitHub Pages. |
| `workshop/` | Facilitator notes: run of show, helper card, and the pre-event email. |

Your profile and saved briefs live in `~/.factory/morning-brief/` on your computer.

## Turn it off

Pause or delete the automation under **Automations** in the Factory app. Disconnect apps under **Settings**, then **Connectors**. Delete `~/.factory/morning-brief/` to remove your profile and saved briefs.

## License

MIT. See `LICENSE`.
