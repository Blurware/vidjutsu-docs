"use client";

const LINES = [
  "$ vidjutsu transcribe \\",
  "    --video-url https://cdn.vidjutsu.ai/uploads/mc_.../video.mp4",
  "",
  "Transcribing...",
  "",
  "Words: 47",
  "Duration: 14.2s",
  "",
  '[0.00 - 0.82]  "The"',
  '[0.82 - 1.10]  "one"',
  '[1.10 - 1.40]  "thing"',
  '[1.40 - 1.92]  "nobody"',
  '[1.92 - 2.30]  "tells"',
  '[2.30 - 2.60]  "you"',
  "...",
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
            One typed call, a clear result
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Every primitive returns a plain result you can read or hand to
            the next step, no orchestration required.
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
