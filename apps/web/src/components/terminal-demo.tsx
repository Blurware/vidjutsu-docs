"use client";

const LINES = [
  "$ vidjutsu clone run \\",
  "    https://www.tiktok.com/@creator/video/7534210998821",
  "",
  "Checking cloneability...",
  "  verdict: strong",
  "  score: 95 / 100",
  "  evidence: clear single-subject skit, stable framing, no overlay text",
  "",
  "Building character...  done",
  "Generating starting frame...  done (clean, no overlays)",
  "",
  "Rendering clone (kling motion-control)...",
  "  202 Accepted",
  "  task_id: clone_9f1a3e7c",
  "",
  "Polling GET /v1/clones/video/clone_9f1a3e7c",
  "  status: processing",
  "  status: processing",
  "  status: complete",
  "",
  "videoUrl:",
  "  https://d2h7xmz5gqybh9.cloudfront.net/clones/clone_9f1a3e7c.mp4",
  "",
  "Done in about 5 minutes.",
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
            One command, a finished clone
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Under the hood it is five typed calls and a poll. From the
            terminal, it is one command.
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
                {line || " "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
