---
name: scout-schedule
description: Ship step of the Scout workshop. Turns the user's tested watchlist into a scheduled Factory automation that delivers the Scout digest to the Factory app, their email, or a Slack DM. Use when the user types /scout-schedule, or asks to schedule, automate, or get Scout regularly.
---

# Scout schedule (Ship)

Goal: a private automation that runs Scout on the watchlist's cadence and delivers the digest where the user chose, and only to the user.

## 0. Check first

- Read `~/.factory/scout/watchlist.md`. If it's missing, offer `/scout-setup`.
- If no digest has passed `/scout-check` today, recommend running it first. Continue if the user wants to.

## 1. Delivery

Confirm the watchlist's delivery choice with AskUser: "Factory app only", "Email", or "Slack DM".

- **Factory app only:** nothing to connect. Each run's digest appears in the Factory app under **Automations**, on the automation's page.
- **Email:** check for Gmail tools with ToolSearch (`+gmail`), or `+outlook` for Microsoft. If they're missing, call ConnectApp with `gmail` (or `outlook`). Confirm the address with the mail profile tool. A connection made now shows up in new sessions, so the automation will see it.
- **Slack DM:** check for Slack tools with ToolSearch (`+slack`). If they're missing, call ConnectApp with `slack`. Confirm the user's own Slack ID with the current-user tool.

If a connection is blocked (for example, a company admin has to approve it), say that's their company's policy, and offer Factory app delivery instead. Never ask for passwords or tokens.

## 2. Where it runs

Load the automation tools with ToolSearch: `select:ListComputers,ListAutomations,CreateAutomation,EditAutomation`.

1. Call ListAutomations. If a Scout automation already exists, offer to update it with EditAutomation instead of creating a second one.
2. Call ListComputers. If it lists a Droid Computer, ask with AskUser: "In the cloud (runs even when your laptop is closed)" or "On this laptop (only while the Factory app is open)". If none is listed, explain that it will run on this laptop, and only while the Factory app is open (the laptop can be locked, but not asleep). Ask them to confirm.

## 3. Write the automation prompt

Fill in `automation-prompt.md` from this folder:

- `{{NAME}}` and `{{TIME_ZONE}}` come from the watchlist.
- `{{WATCHLIST}}` is the full watchlist, pasted in as written.
- `{{DELIVERY}}` is one of these lines:
  - Factory app: `Don't send anything. End the run with the digest as your final message.`
  - Email: `Send the digest as one email to <address> with the subject "Scout: <Weekday, Mon D>". Load the mail tools with ToolSearch (+gmail, or +outlook). Before sending, check sent mail for today's subject, and don't send twice.`
  - Slack DM: `Send the digest as a Slack DM to yourself (user ID <ID>). Load the Slack tools with ToolSearch (+slack), open a DM with that user ID, and post it there. Never post to a channel.`

The prompt has to work on its own, because a cloud run can't see the skills on this laptop. Don't shorten it to "use the scout skill".

Show a 3-line summary (when it runs, what it watches, where it delivers) and ask the user to confirm.

## 4. Create it

Call CreateAutomation with:

- `name`: `<First name>'s Scout`
- `trigger`: `schedule`
- `schedule`: the watchlist's cadence in its time zone. For cloud runs, plain words work, such as `every weekday at 8am America/Los_Angeles`. For a laptop run, use a 5-field cron expression.
- `executionLocation`: `remote` with the chosen `computerName`, or `local`
- `prompt`: the filled-in prompt
- `memory_instruction`: `Keep seen.md in the working directory up to date with every link you report, and skip links already in it.`
- `visualization_instruction`: `Show the latest digest: the Top 3 as cards, then each beat as a short list with source links.`
- `privacyLevel`: `private` and `sessionPrivacy`: `private` (cloud runs)
- `description`: `Scout digest of my watchlist from the public web.`

Read the next run time from the result. If it doesn't match the cadence in the user's time zone, fix it with EditAutomation. Times can shift when daylight saving time changes.

If the automation tools aren't available, walk the user through the Factory app instead: **Automations**, then **New automation**, then **Custom scheduled automation**. Paste the prompt, set the frequency, choose where it runs, and create it.

## 5. See it work

- Cloud runs fire once right after they are created. Tell the user where to look in about 5 minutes: the automation's page in the Factory app, their inbox, or their Slack DMs.
- Laptop runs wait for the first scheduled time. Offer one test delivery now. If they say yes, deliver today's saved digest once, the same way the automation will.

## 6. Wrap up

Tell the user, in four short lines:

- When it runs, in their time zone, and where it runs.
- Where the digest arrives.
- How to change it: "Ask Droid to edit my Scout automation", for example to add a beat, change the day, or add their own section.
- How to stop it: pause or delete it under **Automations** in the Factory app.

## Rules

- Deliver only to the user: their own email address or their own Slack DM. Never add recipients or post to channels.
- Never put passwords, codes, or tokens in the prompt.
