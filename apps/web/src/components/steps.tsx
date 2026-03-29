"use client";

import { useReveal } from "./use-reveal";

const STEPS = [
  {
    number: "01",
    title: "Top Up Credits",
    command: "vidjutsu topup 500",
    description: "Fund your account with any card via Stripe. Your agent decides how to spend them.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Order Accounts",
    command: "vidjutsu account create --platform tiktok",
    description: "Provision theme pages, fan accounts, and clip pages. They warm up automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Schedule Posts",
    command: "vidjutsu post schedule --account acc_8k2x",
    description: "Generate content and schedule posts across your network. Run campaigns from one command.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Promote Anything",
    command: "vidjutsu campaign create --config campaign.json",
    description: "Drive traffic to any link, shop, or digital product. A network of accounts pushing content to real audiences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
];

export function Steps() {
  const ref = useReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className="reveal relative px-5 sm:px-8 lg:px-16 py-20 sm:py-28 border-t border-border-light bg-surface-raised">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mb-4">
            How it <span className="gradient-text">works.</span>
          </h2>
          <p className="text-ink-light/60 text-base sm:text-lg max-w-md">
            Four steps from zero to a fully managed campaign driving real traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative p-6 sm:p-8 rounded-2xl border border-border-light bg-surface hover:border-brand/20 transition-all duration-300 hover:shadow-lg hover:shadow-brand/5"
            >
              {/* Step number watermark */}
              <div className="absolute top-4 right-5 text-[4rem] sm:text-[5rem] font-display font-extrabold text-ink/[0.03] leading-none select-none">
                {step.number}
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-brand/8 border border-brand/12 flex items-center justify-center text-brand mb-5 group-hover:bg-brand/12 transition-colors">
                  {step.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-ink-light/55 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="code-scroll bg-surface rounded-lg border border-border-light">
                  <code className="text-brand/60 text-[11px] sm:text-xs font-mono block px-3 py-2.5 whitespace-nowrap">
                    $ {step.command}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
