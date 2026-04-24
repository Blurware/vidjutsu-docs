"use client";

import { useState } from "react";

const EXAMPLES = [
  {
    label: "Compliance",
    lines: [
      '$ vidjutsu compliance video \\',
      '    --video-url https://cdn.example.com/ad-083.mp4 \\',
      "    --platform tiktok",
      "Checking...",
      "",
      "Risk: 45/100  →  high-risk",
      "",
      "Why:",
      '  The ad uses "Idgaf" and shouts profanity.',
      "  TikTok bans insulting words in ads.",
      "",
      "The rule:",
      '  "We do not allow insulting words or actions',
      '   or gestures in ad content."',
      "  ads.tiktok.com › tiktok-ads-policy › other-products",
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
  const example = EXAMPLES[exampleIdx];

  return (
    <section className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
            See it in the CLI
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-4">
            One command. A full risk readout.
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Paste a URL. Get a score, plain-English reasons, and the exact policy line — before you post.
          </p>
        </div>

        <div>
          <div className="flex flex-wrap justify-center gap-1 mb-3">
            {EXAMPLES.map((ex, i) => (
              <button
                key={ex.label}
                type="button"
                onClick={() => setExampleIdx(i)}
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
              {example.lines.map((line, i) => (
                <div
                  key={`${exampleIdx}-${i}`}
                  className={line.startsWith("$") ? "text-ink-muted" : "text-ink-light"}
                >
                  {line || "\u00A0"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
