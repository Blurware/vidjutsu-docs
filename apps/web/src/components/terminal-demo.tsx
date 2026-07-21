"use client";

const LINES = [
  '$ vidjutsu clone character --prompt "friendly host, casual streetwear"',
  "",
  "character created: char_9f1a3e7c",
  "",
  "$ vidjutsu clone run https://tiktok.com/@creator/video/7534210998821 \\",
  "    --character char_9f1a3e7c",
  "",
  "clone score: 95 / 100  (strong)",
  "putting your character in the scene...",
  "rendering...",
  "",
  "https://cdn.vidjutsu.ai/clones/clone_9f1a3e7c.mp4",
];

export function TerminalDemo() {
  return (
    <section id="try-it" className="px-5 sm:px-8 py-14 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-3">
            Set up your character once, then clone any video
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-md mx-auto">
            Create your character, keep its id, and reuse it on every clone
            your agent runs.
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
