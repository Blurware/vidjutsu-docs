"use client";

const LINES = [
  "$ vidjutsu compliance video \\",
  "    --video-url https://example.com/your-video.mp4 \\",
  "    --platform youtube",
  "",
  "risk_score: 88/100",
  "level: high",
  "",
  "flags:",
  "  profanity_in_audio  strong_language  count:7  span:00:00:04-00:00:18",
  "",
  "primary_reason:",
  "  repeated_uncensored_expletives_in_voiceover",
  "",
  "cited_rules:",
  "  community_guidelines / harassment_and_abuse / profanity_and_slurs",
];

export function TerminalDemo() {
  return (
    <section id="try-it" className="px-5 sm:px-8 py-14 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-3">
            Example
          </p>
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-3">
            See the risk before you post
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Sample output: high score from profanity in the audio track — no extra
            narration from the tool.
          </p>
        </div>

        <div className="rounded bg-surface-alt border border-border overflow-hidden -mx-1 sm:mx-0">
          <div className="px-3 sm:px-4 py-2 border-b border-border">
            <span className="text-[11px] font-mono text-ink-light">terminal</span>
          </div>
          <div className="p-3 sm:p-5 font-mono text-[10px] sm:text-[12px] leading-[1.85] min-h-[200px] sm:min-h-[240px] overflow-x-auto">
            {LINES.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap break-words ${line.startsWith("$") ? "text-ink-muted" : "text-ink-light"}`}
              >
                {line || "\u00A0"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
