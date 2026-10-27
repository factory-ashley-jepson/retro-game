---
name: scout
description: Build step of the Scout workshop. Searches the public web for what the user's watchlist cares about, verifies every item, and writes a short digest that explains why each item matters to them. Use when the user types /scout, or asks Scout what's new on their watchlist.
---

# Scout (Build)

Write a digest the user can read in two minutes: only fresh, verified news about their beats, each with a line on why it matters to them.

## 0. Inputs

- Watchlist: `~/.factory/scout/watchlist.md` (Windows: `%USERPROFILE%\.factory\scout\watchlist.md`). If it's missing, offer `/scout-setup`.
- Seen list: `~/.factory/scout/seen.md`, the links already reported. Create it if it's missing.
- Window: news published since the last run. With no earlier digest, use the last 14 days, so the first digest has enough to show.
- Open opportunities (grants, fellowships, programs, calls for speakers, awards, jobs, events) also count when they were posted earlier, as long as their deadline or event date is still ahead and they aren't in the seen list.
- Use the watchlist's time zone for every date.

## 1. Search each beat

1. Load WebSearch and FetchUrl with ToolSearch (`select:WebSearch,FetchUrl`) if they aren't loaded. Running /scout is the user asking you to open the public pages your searches return. If FetchUrl isn't available, its rules stop you from opening search results, or a page won't load with it, download the page in the shell instead: `curl -sL --max-time 20 -A "Mozilla/5.0" "<url>"` (`curl.exe` on Windows), and read its text.
2. For each beat, run 2 or 3 searches that pair what it watches with its signals, for example `Acme raises`, `Acme launches`, `Acme hires VP`. Add the year or month to keep results fresh. For opportunity beats, also search for open ones, for example `call for speakers AI 2026 deadline`. If the beat lists sources to favor, also search those sites.
3. If a beat has no good candidates yet, try 2 more searches with different wording before calling it Quiet.
4. Collect candidates whose date looks inside the window, or open opportunities whose deadline is ahead.

## 2. Verify every candidate

Open each candidate with FetchUrl before you use it. Keep it only if:

- The page loads, and its publish date is inside the window. For an open opportunity, the page shows a deadline or event date that is still ahead. If you can't find the date you need, drop it.
- The page itself supports what you will say. Never report from a search snippet alone.
- The source is credible. Prefer primary sources (the company's own announcement, filing, blog, or careers page) and established outlets. Skip content farms, SEO listicles, and reposts when the original exists.
- Its link is not already in the seen list.
- It matches the beat and its signals, and isn't on the beat's skip list.

If two candidates cover the same news, keep the better source.

## 3. Rank and trim

Rank by how much each item matters, given each beat's "Why I care" line. Keep up to 5 items for Quick, or up to 10 for Fuller, with no more than 3 per beat. Pick the 3 that matter most for the Top 3.

## 4. Write the digest

Use `digest-template.md` in this folder. Rules:

- Say what happened in your own words, in one line. Never paste more than a few words from a source.
- "Why it matters" ties the item to the beat's "Why I care" line. Be specific: "Their new $49 tier undercuts your starter plan" beats "This could affect you."
- Every item gets its source name, publish date, and link.
- List beats with nothing new under "Quiet". Never pad a beat with old or weak items.
- "One thing to do" is a single concrete action the news suggests, such as an email to send, a slide to update, or a person to congratulate.
- If the watchlist has a "My section", add it, in the user's words. Build it from items in this digest. If none fits, run up to 2 extra searches for it and verify what you use the same way. If there's still nothing, say so in one line.
- End with a coverage line: the window, searches run, pages opened, and items dropped (too old, duplicate, weak source, couldn't verify).
- Plain language. No filler, no em dashes, no emojis.

## 5. Save and show

1. Save the digest to `~/.factory/scout/digests/<YYYY-MM-DD>.md`.
2. Add each reported link to the seen list with today's date. Remove entries older than 60 days.
3. Show the digest in the chat, then say: "Next, type /scout-check to test this digest before you schedule it."

## Rules

- Public web only. Don't sign in to anything, and don't fill in forms.
- Never invent a fact, date, number, or link. If you're not sure, leave it out.
- Send the digest by email or Slack only when a scheduled run's instructions say to, and only to the user.
