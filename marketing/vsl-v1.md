---
title: VidJutsu VSL — v1
format: UGC talking-head, vertical, phone-shot
runtime: ~90s (6 × 15s scenes)
updated: 2026-04-24
---

# Positioning brief

**Audience.** Agency owners, AI-video makers, marketers. Already use AI agents (Claude primarily). Not devs. "API", "endpoint", "scan the file" reads as noise; "watches your clip", "catches what'll get flagged" reads native.

**Protagonist.** The user's AI agent — "your agent", or Claude by name where it sharpens the line. VidJutsu is the thing that lets the agent *actually watch* a video. Without VidJutsu, the agent is blind to video.

**Core insight.** AI agents can read, write, reason — but they can't watch a video. So the user can't ask their agent "is this clip going to get struck" and get a real answer. VidJutsu changes that.

**Product entry points.** CLI install + Claude plugin/skill. After install, the user talks to their agent normally — "watch this clip before I post it" — and gets a risk score, the flagged moment with a timestamp, and the exact platform rule it breaks.

**Outcome we sell.** Fewer strikes, fewer shadowbans, fewer dead accounts. Post with confidence.

**Platform coverage.** Stay platform-agnostic in the script. Use "the platform", "every platform", "wherever you're posting". Supported today: YouTube, TikTok, Instagram, Meta Ads — name the full list only once, in Scene 4, as proof of coverage.

**Tone rules.**
- Marketer vernacular, not dev jargon. "Clip", "post", "get flagged", "tanked".
- No gatekeeping ("secret tool", "they don't want you to know"). Lead with quality/workflow.
- No "free" angles. Paid product, confidently priced.
- Claude is an everyday tool, not a dev surface.
- Actor improvises in their own voice from the talking points — do not read a script.

---

# Script — 6 scenes × 15s

Each scene is talking points for the actor to improvise around. Cover the beats in order; exact wording should sound like the person, not like marketing copy.

## Scene 1 — 0:00–0:15 — HOOK (pain)

**Beats to cover:**
- A recent clip got almost no views — single-digit or double-digit.
- Next post from the same account: same dead result.
- Nothing changed about the content, the posting time, the account.
- Name the feeling: the platform quietly decided your stuff isn't worth showing.

**Visual.** Hard cut-in, phone camera, handheld, slight motion. B-roll at ~0:08: screen-record of a flat analytics graph (any platform — YouTube Studio, Instagram Insights, TikTok, whatever the actor actually uses).

**On-screen text (first 5s only):** a short emotional tag — "Views died." / "Something broke." / actor's choice.

---

## Scene 2 — 0:15–0:30 — AGITATE (why it keeps happening)

**Beats to cover:**
- This is what shadowbans and silent strikes feel like.
- Platforms don't tell you it happened, don't tell you what you did.
- Every platform has hundreds of pages of rules. They update constantly.
- You only find out you broke one after the video is already dead — too late to fix.

**Visual.** Cut to a laptop scrolling any platform's community guidelines page (pick whichever the actor posts on most). Pull back to talking head by end of scene.

---

## Scene 3 — 0:30–0:45 — PIVOT (the insight)

**Beats to cover:**
- Here's the part nobody talks about.
- Your AI agent — Claude, whatever you use — handles text, code, research.
- But it *cannot actually watch a video*. You can't hand it a clip and ask "is this going to get flagged" and get a real answer.
- The agent is blind to the one format everything else revolves around.

**Visual.** Screen-record of a Claude chat (or the actor's agent of choice): user asks whether a clip will get flagged, attaches a video. Agent's response explicitly admits it can't view videos. Emphasize the refusal — that's the problem.

---

## Scene 4 — 0:45–1:00 — SOLUTION (what VidJutsu does)

**Beats to cover:**
- That's what VidJutsu fixes.
- One install — your agent gets video vision.
- Now you just tell your agent "watch this clip before I post it."
- It actually watches: audio, frames, caption.
- Checks the whole thing against every live rule on every major platform — YouTube, TikTok, Instagram, Meta Ads. *(This is the one place to name the platforms.)*

**Visual.** Screen-record of the CLI install (`curl … | bash`), cut to the same chat from Scene 3 where the agent now returns a risk score, a flagged timestamp, and a cited rule. Same prompt, now answered.

**On-screen text:** `install → "watch this clip" → risk score + cited rule`

---

## Scene 5 — 1:00–1:15 — PROOF (specific save)

**Beats to cover:**
- A real save from the last week or two.
- Agent flagged a specific moment in a clip (timestamp + what it was — word in audio, visual element, caption line, whatever).
- Actor made a small fix.
- Actor posted, got real reach.
- If they'd posted the original version: account damage, strike, or buried.

**Visual.** Before/after: the flagged timestamp from the agent's output → the edited clip → the posted video's analytics going up.

---

## Scene 6 — 1:15–1:30 — CTA

**Beats to cover:**
- One install. Every clip gets watched before you post.
- Price: $99 a month, every platform covered.
- Two ways in: install from the link below, or just tell Claude "install VidJutsu."
- Close the loop: stop guessing why videos die — let your agent watch first.

**Visual.** Back to talking head. End card: wordmark, install command, vidjutsu.ai URL. Hold 1s.

---

# Production notes

- **Camera:** vertical, phone, handheld, natural light. No lav — AirPods or built-in mic reads more UGC.
- **Cuts:** tight jump-cuts in Scene 1. Breathing room increases scene by scene.
- **B-roll must-haves:** the analytics flatline (Scene 1), the agent's "I can't watch videos" refusal (Scene 3), the same agent chat answering after install (Scene 4). Those three shots carry the whole argument.
- **Captions:** burn-in, platform-safe zone, word-by-word reveal. Same caption style across all variants.
- **Two endings to test:** soft ("let your agent watch first") vs urgent ("before your next post tanks").
- **Platform neutrality:** whatever platform the actor uses day-to-day for their own B-roll is fine — the script doesn't care. The only place we name specific platforms is Scene 4, as a coverage proof point.

# Variants to produce later

- **15s top-of-funnel cut.** Scenes 1 + 4 + 6 compressed. Hook → solution → CTA.
- **Ad-buyer / agency variant.** Same structure, pain swapped to "rejected ad creative" and "account disabled" instead of shadowban.
- **AI-video-maker variant.** Lead with "AI-generated video + platform rules = fast path to a strike." Same structure.

# Open questions for next iteration

- Does leading with Claude by name vs "your agent" test better with marketers? Shoot both variants of Scene 3/4.
- Does a "views died" hook beat a "my account got struck" hook? Test both Scene 1 talking-point sets.
- Does the $99 price belong in Scene 6 or should it get pulled out for price-shy top-of-funnel audiences?
