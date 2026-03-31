"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is VidJutsu?",
    a: "An API your Claude agent calls to manage Instagram pages. Account provisioning, posting, QA, analytics, and comment moderation — you never need to log into a UI.",
  },
  {
    q: "Do I need to make the videos?",
    a: 'Yes — or use free VidJutsu skills (github.com/tfcbot/vidjutsu-skills) that let your agent generate videos with providers like Wavespeed or KIE. You bring the API key, the skill handles the rest.',
  },
  {
    q: "How does billing work?",
    a: "$59/mo subscription for API access (includes 100 credits). Buy more credits at $0.10 each. Your agent spends credits on accounts, posts, QA, and scraping.",
  },
  {
    q: "How long before the page starts posting?",
    a: "Accounts warm for up to 7 days. Your agent can start drafting posts immediately while the account warms.",
  },
  {
    q: "What about banned accounts?",
    a: "Accounts are managed by real US-based account managers. Shadow ban detection is built in. Flagged accounts are replaced automatically.",
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
