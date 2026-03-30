"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const EXAMPLES = [
  {
    label: "Stan Store",
    lines: [
      "researching digital product niches...",
      "generating 8 videos for content bank...",
      "posting to @creator_toolkit_daily...",
      "analyzing post performance...",
      "traffic to stan.store/yourproduct: 24 visits",
      "posting to @creator_toolkit_daily...",
      "traffic to stan.store/yourproduct: 47 visits",
    ],
  },
  {
    label: "Skool",
    lines: [
      "researching fitness coaching niche...",
      "generating 10 videos for content bank...",
      "posting to @fit_coach_tips...",
      "analyzing post performance...",
      "traffic to skool.com/your-community: 31 visits",
      "posting to @fit_coach_tips...",
      "traffic to skool.com/your-community: 58 visits",
    ],
  },
  {
    label: "Shopify",
    lines: [
      "researching streetwear niche...",
      "generating 12 videos for content bank...",
      "posting to @drip_drops_daily...",
      "analyzing post performance...",
      "traffic to yourstore.myshopify.com: 19 visits",
      "posting to @drip_drops_daily...",
      "traffic to yourstore.myshopify.com: 42 visits",
    ],
  },
  {
    label: "Calendly",
    lines: [
      "researching B2B consulting niche...",
      "generating 6 videos for content bank...",
      "posting to @scale_with_systems...",
      "analyzing post performance...",
      "traffic to calendly.com/book-a-call: 12 visits",
      "posting to @scale_with_systems...",
      "traffic to calendly.com/book-a-call: 29 visits",
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
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
              The learning loop
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-4">
              Research. Post. Learn. Repeat.
            </h2>
            <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
              Your agent studies what works in your niche, generates content to
              match, posts twice a day, and feeds performance data back into the
              next cycle. Every round is better than the last.
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
                  vidjutsu agent
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
      </div>
    </section>
  );
}
