"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface CliLine {
  type: "command" | "output" | "success" | "spinner";
  text: string;
  delay: number;
}

const CLI_SEQUENCE: CliLine[] = [
  { type: "command", text: "vidjutsu auth --card tok_live_xxxx", delay: 0 },
  { type: "success", text: "Authenticated with card payment method.", delay: 800 },
  { type: "command", text: "vidjutsu topup 500", delay: 1400 },
  { type: "success", text: "500 credits added. Balance: 500", delay: 2200 },
  { type: "command", text: 'vidjutsu account create --platform tiktok --name "promo_nyc"', delay: 3000 },
  { type: "spinner", text: "Provisioning account...", delay: 3800 },
  { type: "success", text: "Account acc_8k2x created — warming started", delay: 4800 },
  { type: "command", text: 'vidjutsu generate --prompt "Street style lookbook"', delay: 5600 },
  { type: "spinner", text: "Generating video...", delay: 6400 },
  { type: "success", text: "Video vid_q9f3 ready (9:16, 8s)", delay: 7800 },
  { type: "command", text: "vidjutsu post schedule --account acc_8k2x --video vid_q9f3", delay: 8600 },
  { type: "success", text: "Post post_m2v1 scheduled for 14:00 UTC", delay: 9400 },
];

function TypewriterText({ text, speed = 25 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      i++;
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {!done && (
        <span
          className="inline-block w-[7px] h-[14px] bg-brand ml-0.5 align-middle"
          style={{ animation: "blink 1s step-end infinite" }}
        />
      )}
    </span>
  );
}

export function CliAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const hasStartedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    CLI_SEQUENCE.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [visibleLines]);

  return (
    <section ref={containerRef} className="relative px-5 sm:px-8 lg:px-16 py-20 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mb-4">
            Campaign in <span className="gradient-text">6 commands.</span>
          </h2>
          <p className="text-ink-light/60 text-base sm:text-lg max-w-md">
            Authenticate, fund, provision, generate, and post — all from your terminal.
          </p>
        </div>

        {/* Terminal with gradient border effect */}
        <div className="gradient-border max-w-3xl rounded-2xl overflow-hidden shadow-xl shadow-ink/5">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border-light bg-surface">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-ink-light/30 text-xs font-mono">vidjutsu</span>
          </div>

          {/* Terminal body — dark for contrast */}
          <div
            ref={scrollRef}
            className="bg-[#0E1525] p-5 sm:p-6 font-mono text-[11px] sm:text-[13px] leading-[1.8] max-h-[380px] sm:max-h-[440px] overflow-y-auto"
          >
            {CLI_SEQUENCE.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="mb-0.5">
                {line.type === "command" && (
                  <div className="text-[#C8D1E0] code-scroll">
                    <span className="text-brand-light">$ </span>
                    <TypewriterText text={line.text} speed={18} />
                  </div>
                )}
                {line.type === "success" && (
                  <div className="text-[#4ADE80]/80 pl-4">
                    <span className="text-[#4ADE80]">&#10003; </span>
                    {line.text}
                  </div>
                )}
                {line.type === "spinner" && (
                  <div className="text-[#C8D1E0]/30 pl-4">
                    <span className="animate-spin inline-block">&#9696;</span> {line.text}
                  </div>
                )}
              </div>
            ))}
            {visibleLines === 0 && (
              <div>
                <span
                  className="inline-block w-[7px] h-[14px] bg-brand-light/60"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
