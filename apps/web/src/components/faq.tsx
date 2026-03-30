"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Does this work with my agent?",
    a: "Yes. Any agent that can make HTTP requests can use VidJutsu. One API key gives access to accounts, content, posting, and analytics.",
  },
  {
    q: "Is this for humans or agents?",
    a: "Agents. VidJutsu is an API. Your agent provisions accounts, generates content, schedules posts, and tracks performance. There's no dashboard — your agent is the interface.",
  },
  {
    q: "What type of videos get posted?",
    a: "You pick a style — UGC, animation, or slideshows. Videos are short-form, 0-15 seconds, with editing and captioning included. You can also bring your own videos.",
  },
  {
    q: "How long before the page starts posting?",
    a: "Accounts warm for up to 7 days first. No content goes out until the account is ready. If a shadow ban is detected, the agent replaces the account automatically.",
  },
  {
    q: "What is the learning loop?",
    a: "Research what works. Generate content to match. Post it. Track performance. Feed that data back into the next round. Every cycle makes the content better.",
  },
  {
    q: "Will these accounts get banned?",
    a: "Every order goes through an initial review to avoid creating accounts with a high chance of getting banned. Accounts are managed by real people, not bots. If an account does get banned, it gets replaced.",
  },
  {
    q: "What does my agent need to get started?",
    a: "An API key, a niche, and a link. The agent calls the account endpoint, warming starts, and posting begins when the account is ready.",
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
