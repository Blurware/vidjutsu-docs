"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What does VidJutsu check?",
    a: "Your video file, end to end, against the platform rules we track for the network you choose. You get a risk score and citations so you know what to change before you post.",
  },
  {
    q: "Why scan before I post?",
    a: "Many networks react after the fact — strikes, removed videos, or reach that drops with little warning. Scanning first turns that into a fix list while you still control the file.",
  },
  {
    q: "How do I start?",
    a: "Grab an API key and call the compliance video endpoint from your code or the CLI. Full steps are in the quickstart.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
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
    <section id="faq" className="px-5 sm:px-8 py-14 sm:py-20 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-3">
              FAQ
            </p>
            <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em]">
              Quick answers
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
