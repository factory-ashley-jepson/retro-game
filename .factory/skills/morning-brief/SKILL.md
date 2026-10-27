---
name: morning-brief
description: Write today's morning brief from the user's email and calendar - today's meetings with prep notes, emails that need a reply, promises the user made, and what's worth knowing. Use when the user types /morning-brief, asks for their brief or what needs their attention today, or wants to try the brief on sample data.
---

# Morning brief (Build)

Write a brief the user can read in two minutes that tells them what needs them today. Every item links to its source. Nothing is invented.

## 0. Inputs

- Profile: `~/.factory/morning-brief/profile.md` (Windows: `%USERPROFILE%\.factory\morning-brief\profile.md`). If it's missing, offer `/brief-setup`, or sample data.
- Sample mode: use it when the profile says `Account: Sample data`, or when the user asks for sample data. Read `sample/profile.md`, `sample/inbox.json`, and `sample/calendar.json` in this skill's folder instead of calling any connector. In sample mode, "today" is the date in `sample/calendar.json`, and links use the form `[Email](sample:t06)` or `[Event](sample:e3)`.
- Real mode: load connector tools with ToolSearch (`+gmail` and `+google_calendar`, or `+outlook`). If a tool is missing, call ConnectApp for it once. If it still fails, keep going with what works and report the gap in the coverage line.

Use the profile's time zone for every date and time.

## 1. Today's calendar

List every event today from midnight to midnight in the profile time zone. Skip events the user declined and all-day reminders. Show the start time and title. Don't list attendees; the prep note names the people who matter.

Add a one-line prep note only for meetings that need it: a 1:1, any meeting with someone outside the user's company, or any meeting with a VIP. To write it, search mail from the last 14 days with those attendees and say what is open between them, with a link. Skip prep for large internal recurring meetings.

## 2. Inbox: what needs a reply

1. Find candidates.
   - Gmail: `in:inbox newer_than:2d -category:promotions -category:social`, plus `is:unread newer_than:7d category:primary`.
   - Outlook: Inbox messages received in the last 2 days, plus unread Focused messages from the last 7 days.
2. Group by thread. Drop anything the profile says to skip, plus newsletters, receipts, automated notifications, and verification codes.
3. Read the latest message in each remaining thread. It needs a reply only if the latest message is from someone else and asks the user for something: an answer, a decision, a review, or a time. If the user wrote last, or a later message resolved it, it does not need a reply.
4. Rank: VIPs first, then anything due today or tied to a meeting today, then items that match the user's focus areas, then the rest. Keep up to 5 items for a quick skim, or up to 10 for fuller.

## 3. Promises the user made

Search the user's sent mail from the last 7 days for commitments: "I'll", "I will", "I'll send", "by Friday", "follow up", "get back to you". For each one, check for a later message from the user in the same thread, or to the same person, that delivers it. Keep up to 3 promises that are still open. Mark one "overdue" if its stated date has passed, and "due today" if it's due today. If the person is in one of today's meetings, say so.

## 4. Worth knowing

Up to 3 items that change the user's plans but need no action: a moved meeting, a decision made, a big number. Don't repeat anything from another section.

## 5. Write the brief

Use `brief-template.md` in this folder. Rules:

- One or two lines per item. Say who needs what, and the next step with its deadline. If there is no deadline, write "no stated deadline". Never invent one.
- Every item ends with a source link: `[Email](https://mail.google.com/mail/u/0/#all/<THREAD_ID>)` for Gmail, the message web link for Outlook, or the event link.
- Never include verification codes, passwords, security links, or long quotes from messages. A few words is enough.
- Plain language. No filler, no em dashes, no emojis.
- End with a coverage line: what was checked, how many threads were read, how many were skipped, and any source that failed.

## 6. Save and show

Save the brief to `~/.factory/morning-brief/briefs/<YYYY-MM-DD>.md` (sample mode: `sample-<YYYY-MM-DD>.md`). Show it in the chat, then say:

"Next, type /brief-check to test this brief before you schedule it."

## Rules

- Read only. Never send, reply, forward, archive, label, delete, or mark anything as read. Never accept, decline, or edit calendar events.
- The only files you write are the saved brief and, if the user asks, the profile.
- Send the brief by email only when a scheduled run's instructions say to, and only to the user's own address.
