"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const EXAMPLES = [
  {
    label: "Stan Store",
    lines: [
      "researching digital product niches...",
      "analyzing top 12 reels from this week...",
      "writing 14 briefs across awareness levels...",
      "brief ready — 3 unaware, 3 problem, 3 solution, 3 product, 2 direct",
      "reviewing submitted video 1/14... passed",
      "reviewing submitted video 2/14... hook too slow, rejected",
      "scheduling 13 posts to @creator_toolkit_daily...",
      "week 1 results: 18.2k views, 94 link clicks",
    ],
  },
  {
    label: "Skool",
    lines: [
      "researching fitness coaching niche...",
      "analyzing top 10 reels from this week...",
      "writing 14 briefs mapped to skool.com/your-community...",
      "brief ready — hooks, talking points, CTAs per awareness level",
      "reviewing 14 submitted videos... 12 passed, 2 rejected",
      "scheduling 12 posts to @fit_coach_tips...",
      "week 1 results: 24.1k views, 58 clicks, 6 new members",
    ],
  },
  {
    label: "Shopify",
    lines: [
      "researching streetwear niche...",
      "analyzing top 15 reels from this week...",
      "writing 14 briefs for yourstore.myshopify.com...",
      "brief ready — product-aware posts lead with lifestyle hooks",
      "reviewing 14 submitted videos... 14 passed",
      "scheduling 14 posts to @drip_drops_daily...",
      "week 1 results: 31.4k views, 142 clicks, 4 orders",
    ],
  },
  {
    label: "Calendly",
    lines: [
      "researching B2B consulting niche...",
      "analyzing top 8 reels from this week...",
      "writing 14 briefs for calendly.com/book-a-call...",
      "brief ready — authority-building hooks for unaware segment",
      "reviewing 14 submitted videos... 13 passed, 1 rejected",
      "scheduling 13 posts to @scale_with_systems...",
      "week 1 results: 12.8k views, 29 clicks, 7 bookings",
    ],
  },
];

export function TerminalDemo() {
  const [exampleIdx, setExampleIdx] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const runExample = useCallback((idx: number) => {
    setLineCount(0);
    setExampleIdx(idx);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    const example = EXAMPLES[idx];
    example.lines.forEach((_, i) => {
      const t = setTimeout(() => setLineCount(i + 1), 500 + i * 600);
      timeoutsRef.current.push(t);
    });

    const next = setTimeout(() => {
      runExample((idx + 1) % EXAMPLES.length);
    }, 500 + example.lines.length * 600 + 1500);
    timeoutsRef.current.push(next);
  }, []);

  useEffect(() => {
    runExample(0);
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, [runExample]);

  const switchTo = (idx: number) => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    runExample(idx);
  };

  const example = EXAMPLES[exampleIdx];

  return (
    <section className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
            Your agent every week
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-4">
            Research. Brief. Review. Post. Reflect.
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Every round, your agent studies what's working, writes your briefs,
            QAs your videos, posts daily, and feeds results into the next round.
          </p>
        </div>

        <div>
          <div className="flex justify-center gap-1 mb-3">
            {EXAMPLES.map((ex, i) => (
              <button
                key={ex.label}
                onClick={() => switchTo(i)}
                className={`text-[11px] font-medium px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  i === exampleIdx
                    ? "bg-ink text-surface"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {ex.label}
              </button>
            ))}
          </div>

          <div className="rounded bg-surface-alt border border-border overflow-hidden">
            <div className="px-4 py-2 border-b border-border">
              <span className="text-[11px] font-mono text-ink-light">
                vidjutsu agent — round 1
              </span>
            </div>
            <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-[1.9] min-h-[220px]">
              {example.lines.slice(0, lineCount).map((line, i) => (
                <div key={`${exampleIdx}-${i}`} className="text-ink-muted">
                  {line}
                </div>
              ))}
              {lineCount < example.lines.length && (
                <span
                  className="inline-block w-[7px] h-[14px] bg-ink/30"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
