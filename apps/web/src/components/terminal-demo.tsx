"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const EXAMPLES = [
  {
    label: "Compliance",
    lines: [
      '$ vidjutsu compliance prompt \\',
      '    --text "Get rich in 30 days guaranteed" \\',
      "    --platform instagram",
      "Checking...",
      "",
      "Risk: 45/100  →  high-risk",
      "",
      "Why:",
      "  You promise guaranteed money. Instagram bans that.",
      "",
      "The rule:",
      '  "Do not share content with promises of',
      '   guaranteed financial returns."',
      "  meta.com › community-standards › misinformation",
    ],
  },
  {
    label: "Watch",
    lines: [
      '$ vidjutsu watch --video-url https://cdn.example.com/reel-042.mp4 --prompt "Is the hook effective?"',
      "Watching video...",
      "",
      "Response:",
      "  The hook lands in the first 1.2 seconds — direct",
      "  address to camera with a bold claim. Strong for",
      "  fitness TikTok. Consider adding a text overlay",
      "  to reinforce for silent viewers.",
    ],
  },
  {
    label: "Extract",
    lines: [
      "$ vidjutsu extract --video-url https://cdn.example.com/reel-042.mp4 --frames auto --audio",
      "Extracting...",
      "",
      "Frames:     12 extracted (auto-selected keyframes)",
      "Audio:      audio.wav (16kHz mono)",
      "Duration:   14.2s",
      "Resolution: 1080x1920",
      "FPS:        30",
    ],
  },
  {
    label: "Transcribe",
    lines: [
      "$ vidjutsu transcribe --video-url https://cdn.example.com/reel-042.mp4",
      "Transcribing...",
      "",
      "Words:    47",
      "Duration: 14.2s",
      "",
      '[0.00 - 0.82]  "The"',
      '[0.82 - 1.10]  "one"',
      '[1.10 - 1.40]  "thing"',
      '[1.40 - 1.92]  "nobody"',
      '[1.92 - 2.30]  "tells"',
      '[2.30 - 2.60]  "you"',
    ],
  },
  {
    label: "Check",
    lines: [
      '$ vidjutsu check --spec ./brief.json --rules "hook-required,max-duration-60s"',
      "Checking spec...",
      "",
      "Rules:   2 applied",
      "Passed:  1",
      "Failed:  1",
      "",
      "  [pass]  hook-required — hook field present",
      "  [fail]  max-duration-60s — duration is 72s, max allowed is 60s",
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
            One command
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-4">
            Scan a post. See the risk. Ship or fix.
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Paste a caption or drop a video. You get a risk score and the rule behind every flag.
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
