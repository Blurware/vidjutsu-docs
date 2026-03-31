"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const EXAMPLES = [
  {
    label: "Stan Store",
    lines: [
      "$ vidjutsu account create --platform instagram --name creator_toolkit --niche \"digital products\"",
      "→ acc_8k2x created, warming started",
      "$ vidjutsu post schedule --account acc_8k2x --video-url https://cdn.example.com/vid1.mp4",
      "→ QA passed. post_3f9a scheduled.",
      "$ vidjutsu post schedule --account acc_8k2x --video-url https://cdn.example.com/vid2.mp4",
      "→ QA failed: hook too slow. resubmit.",
      "$ vidjutsu analytics get acc_8k2x",
      "→ 18.2k views, 1.2k likes, 94 link taps",
    ],
  },
  {
    label: "Skool",
    lines: [
      "$ vidjutsu account create --platform instagram --name fit_coach_tips --niche \"fitness coaching\"",
      "→ acc_q7nz created, warming started",
      "$ vidjutsu post schedule --account acc_q7nz --video-url https://cdn.example.com/reel.mp4",
      "→ QA passed. post_x2m1 scheduled.",
      "$ vidjutsu analytics get acc_q7nz",
      "→ 24.1k views, 3.1k likes, 58 link taps",
    ],
  },
  {
    label: "Shopify",
    lines: [
      "$ vidjutsu account create --platform instagram --name drip_drops --niche streetwear",
      "→ acc_p4vw created, warming started",
      "$ vidjutsu post schedule --account acc_p4vw --video-url https://cdn.example.com/drop.mp4",
      "→ QA passed. post_k8r2 scheduled.",
      "$ vidjutsu analytics get acc_p4vw",
      "→ 31.4k views, 4.7k likes, 142 link taps",
    ],
  },
  {
    label: "Calendly",
    lines: [
      "$ vidjutsu account create --platform instagram --name scale_systems --niche \"B2B consulting\"",
      "→ acc_m1jx created, warming started",
      "$ vidjutsu post schedule --account acc_m1jx --video-url https://cdn.example.com/tip.mp4",
      "→ QA passed. post_w5n7 scheduled.",
      "$ vidjutsu analytics get acc_m1jx",
      "→ 12.8k views, 890 likes, 29 link taps",
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
      const t = setTimeout(() => setLineCount(i + 1), 500 + i * 700);
      timeoutsRef.current.push(t);
    });

    const next = setTimeout(() => {
      runExample((idx + 1) % EXAMPLES.length);
    }, 500 + example.lines.length * 700 + 2000);
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
            Your agent at work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-4">
            See it in action
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Your agent provisions the account, QAs your videos, posts daily, and tracks performance.
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
                vidjutsu
              </span>
            </div>
            <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-[12px] leading-[1.9] min-h-[240px] overflow-x-auto">
              {example.lines.slice(0, lineCount).map((line, i) => (
                <div key={`${exampleIdx}-${i}`} className={line.startsWith("→") ? "text-ink-light" : "text-ink-muted"}>
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
