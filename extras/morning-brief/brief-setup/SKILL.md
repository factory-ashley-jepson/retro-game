---
name: brief-setup
description: Plan step of the Morning Brief workshop. Connects the user's email and calendar, learns what matters to them, and writes their brief profile. Use when the user types /brief-setup, asks to set up or personalize their morning brief, or when no brief profile exists yet.
---

# Brief setup (Plan)

Goal: in about 5 minutes, connect the user's email and calendar and write their profile to `~/.factory/morning-brief/profile.md` (on Windows, `%USERPROFILE%\.factory\morning-brief\profile.md`).

The user may be new to Droid and may not write code. Keep every message short and plain. Ask, don't lecture.

## 1. Connect email and calendar

1. Ask with AskUser where their email and calendar live. Options: "Google (Gmail + Google Calendar)", "Microsoft (Outlook)", "Use sample data for now".
2. Check for connected tools with ToolSearch: `+gmail` and `+google_calendar` for Google, `+outlook` for Microsoft. If tools load, confirm with one harmless read, such as the mail profile or the calendar list.
3. If they are not connected, call ConnectApp with `gmail`, then `google_calendar` (or `outlook`). Say: "Select Connect, sign in, approve, then come back and say done."
4. If sign-in is blocked (an admin approval screen, "app blocked", or "access denied"), say it's their company's policy, not something they did wrong. Offer two ways forward: a personal Google account, or sample data now and their real account later. Never ask for passwords, codes, or tokens.
5. If they choose sample data, copy `sample/profile.md` from the `morning-brief` skill folder (a sibling of this skill's folder) to the profile path, tell them they are on sample data, and skip to step 4.

## 2. Learn from their data first (read only)

Before asking questions, look so you can propose good defaults:

- Their name and email address, from the mail profile.
- Their time zone, from calendar settings. Ask if you can't find it.
- The people they email most: count recipients of their sent mail from the last 30 days. Skip their own address, group lists, and no-reply addresses. Keep the top 8.
- The shape of this week's calendar: number of meetings and recurring 1:1s.

Show names and counts only. Never paste message contents into the chat during setup.

## 3. Interview (one AskUser questionnaire, 4 questions)

1. "What should your brief help you stay on top of?" (multi) Options: "Investors and fundraising", "Customers and deals", "Hiring", "My team".
2. "Who should always go to the top of your brief?" (multi) Options: the top 4 frequent contacts from step 2, by name. If you found fewer, use "My manager" and "My direct reports". Tell them they can type others as their own answer.
3. "When should your brief arrive each weekday?" Options: "7:00 AM", "8:00 AM", "9:00 AM".
4. "How long should it be?" Options: "Quick skim (up to 5 action items)", "Fuller (up to 10 action items)".

Then ask in one plain line: "Anything it should always skip, like a newsletter, a noisy tool, or a group list?" "No" is a fine answer.

Don't ask about delivery or where it runs. `/brief-schedule` covers that.

## 4. Write and show the profile

Write the profile using `profile-template.md` in this folder. Create the folder if it's missing. Fill VIPs with names and email addresses (or `@domain` for a whole company). Write focus areas as short phrases.

Show the profile in the chat, then say:

"This is what your brief will follow. To change anything, just tell me. Next, type /morning-brief to write your first one."

## Rules

- Read only. Never send, reply, archive, label, delete, or mark anything as read. Never accept, decline, or edit calendar events.
- The only file you write is the profile.
- If a step fails, say what failed in one sentence and offer the sample-data path so the user can keep going.
