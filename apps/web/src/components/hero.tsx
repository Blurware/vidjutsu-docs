"use client";

import { useState, useEffect, useRef } from "react";
import { CopyButton } from "./copy-button";

const INSTALL_CMD = "curl -fsSL https://vidjutsu.ai/install.sh | bash";

const DEMO_LINES = [
  { cmd: true, text: "vidjutsu topup 500" },
  { cmd: false, text: "✓ 500 credits added" },
  { cmd: true, text: 'vidjutsu account create --platform tiktok --name "style_la"' },
  { cmd: false, text: "✓ acc_8k2x created — warming started" },
  { cmd: true, text: 'vidjutsu generate --prompt "Street style lookbook"' },
  { cmd: false, text: "✓ vid_q9f3 ready (9:16, 8s)" },
  { cmd: true, text: "vidjutsu post schedule --account acc_8k2x --video vid_q9f3" },
  { cmd: false, text: "✓ post_m2v1 scheduled" },
];

function Terminal() {
  const [lines, setLines] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    DEMO_LINES.forEach((_, i) => {
      setTimeout(() => setLines(i + 1), 600 + i * 500);
    });
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-surface-alt overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-ink-muted text-[10px] font-mono">terminal</span>
      </div>
      <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-[13px] leading-[1.8] min-h-[180px] sm:min-h-[230px] code-scroll">
        {DEMO_LINES.slice(0, lines).map((line, i) => (
          <div key={i}>
            {line.cmd ? (
              <div className="text-ink">
                <span className="text-brand">$ </span>
                <span className="text-ink/80">{line.text}</span>
              </div>
            ) : (
              <div className="text-green-600/70 pl-3">{line.text}</div>
            )}
          </div>
        ))}
        {lines < DEMO_LINES.length && (
          <span
            className="inline-block w-[7px] h-[13px] bg-brand/50 ml-3"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        )}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-5 sm:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 text-brand text-[11px] font-mono font-medium tracking-wider uppercase border border-brand/15 rounded-full bg-brand/5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            Now available
          </div>

          <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-[-0.03em] mb-4">
            Launch AI
            <br />
            <span className="text-brand">Theme Pages.</span>
          </h1>

          <p className="text-ink-muted text-sm sm:text-base max-w-sm sm:max-w-md mx-auto leading-relaxed mb-6 px-2">
            Create managed accounts on TikTok and Instagram. Generate content, schedule posts, drive traffic to any link.
          </p>

          {/* Install command */}
          <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border border-border bg-surface-alt text-xs sm:text-sm font-mono max-w-full overflow-x-auto">
            <span className="text-brand select-none shrink-0">$</span>
            <code className="text-ink/70 whitespace-nowrap">{INSTALL_CMD}</code>
            <CopyButton text={INSTALL_CMD} />
          </div>

          <div className="flex justify-center gap-3 mt-5">
            <a
              href="https://docs.vidjutsu.ai"
              className="px-6 py-2.5 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand-dark transition-colors"
            >
              Read Docs
            </a>
            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="px-6 py-2.5 border border-border text-ink text-sm font-semibold rounded-lg hover:border-ink/30 transition-colors"
            >
              Get API Key
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
