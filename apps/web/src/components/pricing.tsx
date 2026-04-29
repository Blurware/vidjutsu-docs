"use client";

import { useState } from "react";

type Billing = "monthly" | "annual";

const PLAN: Record<
  Billing,
  {
    label: string;
    price: string;
    billedLine: string;
    description: string;
    rateLimit: string;
  }
> = {
  monthly: {
    label: "Pro",
    price: "$99",
    billedLine: "Billed monthly",
    description:
      "Full API access. Get a compliance report on every creative before it goes to Meta or TikTok review.",
    rateLimit: "20 video reports / day · 100 text reports / day",
  },
  annual: {
    label: "Pro Annual",
    price: "$59",
    billedLine: "Billed annually as $708 · 40% off",
    description:
      "Full API access with triple the rate limits. Get a compliance report on every creative before it goes to Meta or TikTok review.",
    rateLimit: "60 video reports / day · 300 text reports / day",
  },
};

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("annual");
  const plan = PLAN[billing];
  const isAnnual = billing === "annual";

  return (
    <section id="pricing" className="px-5 sm:px-8 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-3">
            Pricing
          </p>
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-2">
            One plan. Full API access.
          </h2>
          <p className="text-ink-muted text-sm max-w-md mx-auto">
            40% off on annual. Launch offer. A single paused campaign costs
            more than a year of this.
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label="Billing period"
          className="flex justify-center mb-8"
        >
          <div className="inline-flex p-1 rounded border border-border bg-surface-alt">
            <button
              type="button"
              role="radio"
              aria-checked={billing === "monthly"}
              onClick={() => setBilling("monthly")}
              className={`px-4 py-1.5 text-[13px] font-medium rounded transition-colors cursor-pointer ${
                billing === "monthly"
                  ? "bg-surface text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={billing === "annual"}
              onClick={() => setBilling("annual")}
              className={`px-4 py-1.5 text-[13px] font-medium rounded transition-colors cursor-pointer ${
                billing === "annual"
                  ? "bg-surface text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Annual{" "}
              <span
                className={
                  billing === "annual" ? "text-brand" : "text-ink-light"
                }
              >
                · save 40%
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative p-8 rounded border border-brand bg-brand/5">
            {isAnnual && (
              <div className="absolute -top-3 left-6">
                <span className="inline-block px-2.5 py-1 bg-brand text-white text-[10px] font-semibold tracking-[0.1em] uppercase rounded">
                  Launch offer
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-sm font-medium text-ink-muted mb-2">
                {plan.label}
              </h3>
              <div className="text-[2.5rem] font-bold tracking-[-0.03em] leading-none">
                {plan.price}
                <span className="text-base font-normal text-ink-muted">
                  /mo
                </span>
              </div>
              <p className="text-xs text-ink-light mt-2">{plan.billedLine}</p>
            </div>

            <p className="text-sm text-ink-muted mb-4 leading-relaxed">
              {plan.description}
            </p>

            <p className="text-[12px] text-ink-light font-mono mb-6">
              {plan.rateLimit}
            </p>

            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="block w-full text-center px-5 py-2.5 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
            >
              Get API Key
            </a>
            <p className="text-xs text-ink-light mt-4 text-center">
              <a
                href="https://docs.vidjutsu.ai/credits-and-billing"
                className="underline hover:text-ink-muted transition-colors"
              >
                Rate limits and billing details
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
