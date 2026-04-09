"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What does VidJutsu do?",
    a: "Video intelligence API. Critic scores production quality. Breakdown analyzes content frame-by-frame. Viral score predicts performance against your niche.",
  },
  {
    q: "Do I need VidJutsu to generate videos?",
    a: "No. Use any generation tool — Kling, Veo, Runway, whatever. VidJutsu checks the output. It's the QA gate, not the generator.",
  },
  {
    q: "What's the difference between critic and breakdown?",
    a: "Critic is instant pass/fail. Face consistency, artifacts, motion, audio — scored and returned immediately. Breakdown is deep async analysis: hooks, transitions, pacing, tags, frame-level detail.",
  },
  {
    q: "How does viral scoring work?",
    a: "You pass content plus niche keywords. VidJutsu scores against its understanding of what performs — hook strength, pacing, format match, engagement prediction.",
  },
  {
    q: "What are accounts and posts?",
    a: "Pure data records for organizing your content library. Tag-based queries, no provisioning, no posting. Just structured storage your agent can query.",
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
