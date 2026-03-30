"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What's in a round?",
    a: "14 researched creative briefs mapped to your product, video QA on every submission, 2 posts per day for 7 days, and a weekly performance reflection that shapes the next round.",
  },
  {
    q: "Do I have to make the videos myself?",
    a: "Yes — but your agent tells you exactly what to make. Each brief includes the hook, talking points, CTA, and visual setting. Use any tool you want: your phone, CapCut, Runway, Kling, whatever.",
  },
  {
    q: "What if my video fails QA?",
    a: "Your agent tells you what's wrong — weak hook, AI artifacts, wrong format. Fix it and resubmit. Nothing goes live until it passes.",
  },
  {
    q: "How does billing work?",
    a: "No subscription. $99 gets your account provisioned with your first round of briefs. After that, order rounds at $96/week whenever you're ready. Pause anytime.",
  },
  {
    q: "Does this work with my agent?",
    a: "Yes. Any agent that can make HTTP requests can use VidJutsu. Claude, GPT, custom agents — one API key gives access to everything.",
  },
  {
    q: "What analytics do I get?",
    a: "Post-level views, clicks, and engagement. Your agent analyzes which awareness levels, hooks, and topics drove traffic to your link. You can query insights anytime, not just at the end of a round.",
  },
  {
    q: "How long before the page starts posting?",
    a: "Accounts warm for up to 7 days. Your first round of briefs is delivered immediately so you can start making videos while the account warms.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer group"
      >
        <span className="text-sm font-medium pr-8 group-hover:text-ink transition-colors">
          {q}
        </span>
        <span
          className="text-ink-light text-sm shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-ink-muted text-sm leading-relaxed pb-4 pr-8">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="px-5 sm:px-8 py-16 sm:py-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em]">
              Common questions
            </h2>
          </div>
          <div>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
