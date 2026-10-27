---
name: brief-check
description: Test step of the Morning Brief workshop. Checks the latest morning brief against its sources and a pass or fail checklist, then fixes what failed. Use when the user types /brief-check, asks to test, check, or review their brief, or before scheduling a brief.
---

# Brief check (Test)

Goal: prove the brief is accurate and useful before it runs every morning. Report pass or fail for each check, then offer to fix what failed.

## 1. Load

- The newest file in `~/.factory/morning-brief/briefs/`, and the profile at `~/.factory/morning-brief/profile.md`. If there is no brief yet, say so and offer `/morning-brief`.
- If the brief file starts with `sample-`, you're in sample mode. Check it against `sample/inbox.json` and `sample/calendar.json` in the `morning-brief` skill folder (a sibling of this skill's folder), and against `sample-answer-key.md` in this folder.
- Otherwise, use the same connectors the brief used to reopen its sources. Read only.

## 2. Run every check

| # | Check | How to test it |
| - | ----- | -------------- |
| 1 | **Shape** | It has the Today, Needs your reply, Promises you made, and Worth knowing sections, plus a coverage line. Needs your reply stays within the profile's limit (5 or 10). Promises and Worth knowing have 3 items or fewer. |
| 2 | **Sources** | Every item ends with a link to its email or event. |
| 3 | **Accurate** | Open the source for every item. The person, the ask, and the deadline match the source. No deadline was invented. |
| 4 | **Complete calendar** | Every event from today that wasn't declined is listed, at the right time in the profile's time zone. Declined events are not. |
| 5 | **Nothing already handled** | No "Needs your reply" item is a thread where the user wrote last or a later message resolved it. |
| 6 | **Nothing important missed** | Every inbox thread from a VIP in the last 2 days either appears or has a clear reason to be left out. |
| 7 | **Promises are real** | Each promise quotes something the user actually committed to in sent mail, and nothing later shows it was done. |
| 8 | **Private** | No verification codes, passwords, security links, or long quotes from messages. |
| 9 | **Personal** | VIPs and the profile's focus areas rank above everything else. Skipped senders and topics stay out. |
| 10 | **Sample answer key** | Sample mode only: every "must include" item from `sample-answer-key.md` appears, and no "must not include" item does. |

## 3. Report

Show a table with a Pass or Fail result for every check and one short line of evidence. For each failure, name the item and the source that proves it. Then give one line: "X of 10 checks passed" (or "X of 9" outside sample mode).

## 4. Fix

If anything failed, ask with AskUser: "Fix and rerun", "Change my profile first", or "Leave it". To fix, decide which kind of fix it needs:

- The brief broke a rule (for example, it missed an event or kept an answered thread): rewrite the brief, save it over the same file, and run every check again.
- The brief followed the rules, but the user wants something different: update the profile (for example, add a VIP or a sender to skip), then rerun `/morning-brief` and this check.

Stop after two fix rounds and show what still fails.

When every check passes, say: "Your brief passed. Next, type /brief-schedule to get it every weekday morning."

## Rules

- Read only, same as the brief. Never send, reply, archive, label, or mark anything as read.
- Judge the brief against its sources, not against what seems plausible.
