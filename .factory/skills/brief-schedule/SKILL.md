---
name: brief-schedule
description: Ship step of the Morning Brief workshop. Turns the user's tested morning brief into a Factory automation that emails it to them every weekday morning. Use when the user types /brief-schedule, or asks to schedule, automate, or get their morning brief every day.
---

# Brief schedule (Ship)

Goal: a private automation that writes the brief every weekday at the profile's delivery time and emails it to the user, and only the user.

## 0. Check first

- Read `~/.factory/morning-brief/profile.md`.
- If the account is `Sample data`, say: "Scheduling needs your real email and calendar. Want to connect them now?" If yes, follow step 1 of the `brief-setup` skill, rerun `/morning-brief` and `/brief-check`, then come back. If no, stop and explain that they can come back to this step any time.
- If no real brief has passed `/brief-check` today, recommend running it first. Continue if the user wants to.

## 1. Choose where it runs

Load the automation tools with ToolSearch: `select:ListComputers,ListAutomations,CreateAutomation,EditAutomation`.

1. Call ListAutomations. If a morning brief automation already exists, offer to update it with EditAutomation instead of creating a second one.
2. Call ListComputers. Then ask with AskUser:
   - If a Droid Computer is listed: "In the cloud (runs even when your laptop is closed)" or "On this laptop (only while the Factory app is open)".
   - If none is listed: explain that it will run on this laptop, and that the Factory app must be open (the laptop can be locked, but not asleep) at delivery time. Ask them to confirm.

## 2. Write the automation prompt

Fill in `automation-prompt.md` from this folder:

- `{{NAME}}`, `{{EMAIL}}`, and `{{TIME_ZONE}}` come from the profile.
- `{{PROFILE}}` is the full profile text, pasted in as written.
- `{{MAIL_TOOLS}}` is `+gmail and +google_calendar` for Google, or `+outlook` for Microsoft.

The prompt has to work on its own, because a cloud run can't see the skills on this laptop. Don't shorten it to "use the morning-brief skill".

Show the user a 3-line summary (when it runs, what it reads, where it sends) and ask them to confirm.

## 3. Create it

Call CreateAutomation with:

- `name`: `<First name>'s Morning Brief`
- `trigger`: `schedule`
- `schedule`: weekdays at the delivery time in the profile's time zone. For cloud runs, plain words work, such as `every weekday at 8am America/Los_Angeles`. For a laptop run, use a 5-field cron expression.
- `executionLocation`: `remote` with the chosen `computerName`, or `local`
- `prompt`: the filled-in prompt
- `privacyLevel`: `private` and `sessionPrivacy`: `private` (cloud runs)
- `description`: `Weekday morning brief from my email and calendar, sent only to me.`

Read the next run time from the result. If it doesn't match the delivery time in the user's time zone, fix the schedule with EditAutomation. Times can shift when daylight saving time changes. Mention that they can ask Droid to adjust it after the clocks change.

If the automation tools are not available, walk the user through the Factory app: **Automations**, then **New automation**, then **Custom scheduled automation**. Paste the prompt, set the frequency, choose where it runs, and create it.

## 4. See it work

- Cloud runs fire once right after they are created. Tell the user to watch their inbox for "Morning brief" in about 5 minutes.
- Laptop runs wait for the first scheduled time. Offer one test run now. If they say yes, write today's brief and email it once to their own address, using the same subject line and rules as the prompt.

## 5. Wrap up

Tell the user, in four short lines:

- When it runs, in their time zone, and where it runs.
- Where it arrives.
- How to change it: "Ask Droid to edit my morning brief automation", for example to add Slack, change the time, or add meeting prep.
- How to stop it: pause or delete it under **Automations** in the Factory app, and disconnect apps under **Settings**, then **Connectors**.

## Rules

- The automation sends to the user's own address only. Never add other recipients, cc, or bcc.
- Never put passwords, codes, or tokens in the prompt.
