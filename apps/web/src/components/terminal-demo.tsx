"use client";

const LINES = [
  "$ vidjutsu upload take1.mov",
  '{ "media": { "id": "take1", "kind": "video", ... }, "audio": { "id": "take1-audio", ... } }',
  "",
  "$ vidjutsu init launch-film",
  "$ vidjutsu edit launch-film cut.json",
  '{ "revision": "7c1e...", "duration_seconds": 92 }',
  "",
  "$ vidjutsu render launch-film --json '{\"height\": 2160}' --out launch-4k.mp4",
  "Rendering (job rj_3f9c...)...",
  "  running",
  "  succeeded",
  "Saved launch-4k.mp4",
];

export function TerminalDemo() {
  return (
    <section id="try-it" className="px-5 sm:px-8 py-14 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-3">
            Three commands from takes to a finished film
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Every command prints JSON, so your agent reads the result and
            decides the next step.
          </p>
        </div>

        <div className="rounded bg-surface-alt border border-border overflow-hidden -mx-1 sm:mx-0">
          <div className="px-3 sm:px-4 py-2 border-b border-border">
            <span className="text-[11px] font-mono text-ink-light">terminal</span>
          </div>
          <div className="p-3 sm:p-5 font-mono text-[10px] sm:text-[12px] leading-[1.85] min-h-[160px] overflow-x-auto">
            {LINES.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap break-words ${line.startsWith("$") ? "text-ink-muted" : "text-ink-light"}`}
              >
                {line || " "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
