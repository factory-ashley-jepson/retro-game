---
name: scout-check
description: Test step of the Scout workshop. Checks the latest Scout digest against its sources with a 9-point pass or fail checklist, then fixes what failed. Use when the user types /scout-check, asks to test or check their digest, or before scheduling Scout.
---

# Scout check (Test)

Goal: prove the digest is fresh, true, and useful before it runs on a schedule. Report pass or fail for each check, then offer to fix what failed.

## 1. Load

Read the newest file in `~/.factory/scout/digests/`, the watchlist at `~/.factory/scout/watchlist.md`, and the seen list at `~/.factory/scout/seen.md`. If there is no digest yet, offer `/scout`.

## 2. Run every check

Open every source link again with FetchUrl. Judge the digest against what the pages say, not against what seems plausible.

| # | Check | How to test it |
| - | ----- | -------------- |
| 1 | **Shape** | It has Top 3, By beat, Quiet, One thing to do, and a coverage line. The item count fits the watchlist length, with no more than 3 items per beat. |
| 2 | **Fresh** | Every item's publish date, as shown on its page, is inside the coverage window. |
| 3 | **True** | Each page supports the item: the names, numbers, and claims match. Nothing comes from a search snippet alone. |
| 4 | **Links work** | Every link opens the page it claims to, not a home page, a search page, or an error. |
| 5 | **Credible** | Each source is a primary source or an established outlet, not a content farm or a repost of an original that exists. |
| 6 | **Relevant** | Each item fits its beat's "Watching" and "Signals", and nothing on a skip list appears. |
| 7 | **Why it matters** | Every "Why it matters" line ties to that beat's "Why I care" line, specifically. |
| 8 | **No repeats** | No link was in the seen list before this run, and no story appears twice. |
| 9 | **Honest coverage** | Every beat either has items or appears under Quiet, and the coverage numbers look right for the work done. |

If the watchlist has a "My section", also confirm it uses only items from this digest. Note the result, but don't count it as a tenth check.

## 3. Report

Show a table with a Pass or Fail result for every check and one short line of evidence. For each failure, name the item and quote the few words from the page that prove it. End with one line: "X of 9 checks passed."

## 4. Fix

If anything failed, ask with AskUser: "Fix and rerun", "Change my watchlist first", or "Leave it". To fix, decide which kind of fix it needs:

- The digest broke a rule (for example, an old item or a dead link): remove or replace the item, save the digest over the same file, update the seen list, and run every check again.
- The digest followed the rules, but the user wants something different (for example, more research and fewer launches, or a different beat): update the watchlist, then rerun `/scout` and this check.

Stop after two fix rounds and show what still fails.

When every check passes, say: "Your digest passed. Next, type /scout-schedule to get it automatically."

## Rules

- Public web only. Don't sign in to anything.
- Never change a fact to make a check pass. Remove the item instead.
