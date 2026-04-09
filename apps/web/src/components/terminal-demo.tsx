"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const EXAMPLES = [
  {
    label: "Critic",
    lines: [
      "$ vidjutsu critic --video-url https://cdn.example.com/reel-042.mp4",
      "Analyzing video...",
      "",
      "Score:    9/10",
      "Verdict:  pass",
      "Issues:   none",
      "",
      "Face consistency: 0.96",
      "Motion quality:   clean",
      "Artifacts:        none",
      "Audio sync:       aligned",
    ],
  },
  {
    label: "Breakdown",
    lines: [
      "$ vidjutsu breakdown --video-url https://cdn.example.com/reel-042.mp4",
      "Analyzing...",
      "",
      'Hook:        "The one thing nobody tells you about creatine" (0-2s)',
      "Format:      talking-head, single scene",
      "Pacing:      fast — 3 cuts in 10s",
      "Transitions: hard cut, no crossfade",
      'CTA:         "link in bio" at 9s',
      "Tags:        fitness, supplements, creatine",
    ],
  },
  {
    label: "Viral Score",
    lines: [
      "$ vidjutsu score --video-url https://cdn.example.com/reel-042.mp4 --niche fitness",
      "Scoring against fitness niche...",
      "",
      "Viral Score:           81/100",
      "Hook Strength:         9/10",
      "Pacing:                8/10",
      "Format Match:          7/10",
      "Engagement Prediction: high",
      "",
      "Suggestions:",
      '  - Stronger CTA — "shop now" outperforms "link in bio" by 2.3x',
      "  - Add text overlay on hook for silent viewers",
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
            Your agent sends a video. VidJutsu scores it. Your pipeline decides what ships.
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
                <div key={`${exampleIdx}-${i}`} className={line.startsWith("$") ? "text-ink-muted" : "text-ink-light"}>
                  {line || "\u00A0"}
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
