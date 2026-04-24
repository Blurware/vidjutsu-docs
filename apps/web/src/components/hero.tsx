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
    <section className="px-5 sm:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-6">
            Pre-publish checks for serious creators
          </p>

          <h1 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-4 max-w-2xl mx-auto">
            Catch strikes and shadowbans before you post.
          </h1>

          <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto">
            Many platforms only step in after your video is live. You can get a
            strike, lose reach with no clear warning, or a shadowban. That often
            means your clip broke their terms — and there are hundreds of rules,
            with more added all the time.
          </p>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            VidJutsu watches your file (or your prompt, script, or caption) and
            checks it against every rule we track for that platform. You get a risk
            report before you post. Built for brand deals, monetization, more views,
            and agent-built pipelines — without a separate compliance team.
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
            type="button"
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
