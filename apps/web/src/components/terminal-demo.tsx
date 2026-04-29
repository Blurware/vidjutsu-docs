"use client";

const LINES = [
  "$ vidjutsu compliance video \\",
  "    --video-url https://cdn.example.com/creative-v3.mp4 \\",
  "    --platform meta-ads",
  "",
  "risk_score: 88/100",
  "level: high",
  "",
  "flags:",
  "  unrealistic_outcome_claim  voiceover  span:00:00:07-00:00:11",
  "",
  "primary_reason:",
  "  implied_guaranteed_financial_return_in_voiceover",
  "",
  "cited_rules:",
  "  meta_advertising_standards / misleading_claims / unrealistic_outcomes",
  "",
  "policy_snapshot: 2026-04-23",
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
            See the risk before you submit
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Sample Meta Ads report: high risk flagged on an unrealistic
            outcome claim at 0:07, with the cited clause from Meta's current
            advertising standards.
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
