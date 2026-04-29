"use client";

import { useState, useCallback } from "react";

const INSTALL_CMD = "curl -fsSL https://vidjutsu.ai/install.sh | bash";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section className="px-5 sm:px-8 pt-24 sm:pt-32 pb-14 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-5">
            Ad compliance for Meta and TikTok
          </p>

          <h1 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-4 max-w-2xl mx-auto">
            Let your AI agent flag violations. Not your ad platform.
          </h1>

          <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            VidJutsu is the Meta and TikTok ad-policy intelligence your AI
            agent uses to flag the exact clause you&rsquo;ll fail before you
            submit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
            >
              Get API Key
            </a>
            <a
              href="https://docs.vidjutsu.ai"
              className="inline-flex items-center justify-center px-5 py-2.5 text-ink-muted text-sm font-medium hover:text-ink transition-colors"
            >
              Read Docs
            </a>
          </div>

          <div className="max-w-full mx-auto text-left sm:text-center">
            <button
              type="button"
              onClick={copy}
              className="group w-full sm:w-auto sm:inline-flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-3 font-mono text-[11px] sm:text-[13px] text-ink-muted hover:text-ink transition-colors cursor-pointer break-all sm:break-normal text-left sm:text-center"
            >
              <span className="inline-flex items-baseline gap-2 sm:gap-3 flex-wrap">
                <span className="text-ink-light select-none shrink-0">$</span>
                <span className="min-w-0">{INSTALL_CMD}</span>
                <span className="text-[10px] sm:text-[11px] text-ink-light group-hover:text-ink-muted transition-colors shrink-0">
                  {copied ? "copied" : "copy"}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
