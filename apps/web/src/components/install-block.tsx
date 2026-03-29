"use client";

import { CopyButton } from "./copy-button";
import { useReveal } from "./use-reveal";

const INSTALL_CMD = "curl -fsSL https://vidjutsu.ai/install.sh | bash";

export function InstallBlock() {
  const ref = useReveal<HTMLElement>(0.15);

  return (
    <section ref={ref} className="reveal relative px-5 sm:px-8 lg:px-16 py-20 sm:py-32 bg-ink text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.15) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-[3.5rem] font-extrabold tracking-[-0.03em] mb-4 sm:mb-6">
          Start shipping <span className="text-brand-light">campaigns.</span>
        </h2>
        <p className="text-white/45 text-base sm:text-lg max-w-md mx-auto mb-10 sm:mb-14">
          One command. macOS and Linux. Your first campaign is 6 commands away.
        </p>

        {/* Install command */}
        <div className="max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center gap-3 px-5 sm:px-6 py-4 bg-white/[0.06] border border-white/[0.1] rounded-xl backdrop-blur-sm">
            <span className="text-brand-light select-none font-mono shrink-0">$</span>
            <code className="text-white/70 font-mono text-xs sm:text-sm truncate sm:truncate-none">{INSTALL_CMD}</code>
            <CopyButton text={INSTALL_CMD} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="https://docs.vidjutsu.ai"
            className="px-10 py-4 bg-white text-ink font-bold text-sm tracking-wide hover:bg-white/90 transition-all duration-200 rounded-xl shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
          >
            Read the Docs
          </a>
          <a
            href="https://docs.vidjutsu.ai/quickstart"
            className="px-10 py-4 border border-white/20 text-white/70 font-semibold text-sm tracking-wide hover:border-white/40 hover:text-white transition-all duration-200 rounded-xl"
          >
            Get API Key
          </a>
        </div>
      </div>
    </section>
  );
}
