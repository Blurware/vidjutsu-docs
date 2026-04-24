"use client";

import { useState, useCallback } from "react";

const INSTALL_CMD = "curl -fsSL https://vidjutsu.ai/install.sh | bash";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section className="px-5 sm:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-6">
            Post safer. Ship faster.
          </p>

          <h1 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-4 max-w-2xl mx-auto">
            Know if your post gets you banned. Before you hit post.
          </h1>

          <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            We check your video or caption against YouTube, TikTok, Instagram, and Facebook Ads rules. You get a risk score and the exact rule you might break. Ship what works. Cut what doesn't.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
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

          <button
            onClick={copy}
            className="group inline-flex items-center gap-3 font-mono text-[13px] text-ink-muted hover:text-ink transition-colors cursor-pointer"
          >
            <span className="text-ink-light select-none">$</span>
            <span>{INSTALL_CMD}</span>
            <span className="text-[11px] text-ink-light group-hover:text-ink-muted transition-colors">
              {copied ? "copied" : "copy"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
