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
            Managed Instagram Pages
          </p>

          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] mb-6">
            Let your agent
            <br />
            market for you
          </h1>

          <p className="text-ink-muted text-[15px] sm:text-base leading-relaxed max-w-md mx-auto mb-8">
            Give your agent an API key and a niche. It posts twice a day to
            Instagram, tracks what works, and sends traffic to your link.
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
