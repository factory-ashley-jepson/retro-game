# Helper card

Keep people moving. If a fix takes more than 2 minutes, switch them to sample data and come back later.

| Symptom | Fix |
| ------- | --- |
| Can't find the right Mac download | Apple menu, then About This Mac. "Chip: Apple M..." means the Apple chip build. "Processor: Intel" means Intel. |
| macOS says the app can't be opened | Open System Settings, then Privacy & Security, and select Open Anyway. |
| Sign-in loops or never returns to the app | Quit the app and reopen it. Make sure they finished sign-in in the browser tab it opened. |
| Credits or plan error | Check that they redeemed the promo code in the account they're signed in with. |
| Gmail or Google Calendar says "blocked" or "admin approval required" | Company policy on a work account. Use a personal Google account, or sample data. |
| Outlook asks for admin consent | Same as above: personal account or sample data. |
| Install prompt fails on download | Ask Droid to retry. If the network blocks it, ask Droid to `git clone https://github.com/factory-ashley-jepson/morning-brief` and copy the same four folders. |
| Connected Gmail or Calendar, but Droid says it isn't connected | Start a new session. A session only picks up apps connected before it started. |
| Google sign-in finished, but the app still isn't connected | On Google's consent screen, every permission checkbox must be ticked. Connect again and tick them all. |
| `/brief-setup` doesn't appear | Start a new session. Or type "set up my morning brief". |
| Droid keeps asking for permission | That's expected. Tell them to approve each step and read what it's about to do. |
| Brief is empty or very short | Their inbox may be quiet. Ask Droid to widen the window: "look at the last 7 days". |
| Brief includes something it shouldn't | Good: that's the test step. Run `/brief-check`, then tell Droid what to skip. |
| `/brief-schedule` says it will run on this laptop | No Droid Computer on their account. It works, but only while the Factory app is open at delivery time. Offer a test send now. |
| Wrong delivery time | Ask Droid: "change my morning brief automation to 8 AM Pacific." |
| "Is this safe?" | It's read only. The only thing it sends is the brief, to them. Disconnect under Settings, then Connectors. |

Escalate to Ashley: anything about accounts, billing, or promo codes that the steps above don't fix.
