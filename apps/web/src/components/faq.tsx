"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Who is this for?",
    a: "Anyone running paid creative on Meta or TikTok. DTC brands, performance marketers, agencies managing client accounts, UGC studios, affiliate teams. If your livelihood depends on ad accounts staying healthy, this is for you.",
  },
  {
    q: "Why can't my agent just do this already?",
    a: "Fair question. Your agent could do this. You'd just need to stitch three-plus things together: a way to watch video, a live corpus of each platform's ad policies, and a retrieval + citation layer that keeps pace with weekly policy updates. If you're technical and have the time, go for it. VidJutsu is that whole stack behind a single entry point, updated for you. Total cost of ownership ends up lower unless building compliance infrastructure is already what you do.",
  },
  {
    q: "What does VidJutsu check?",
    a: "Your agent runs the creative against VidJutsu's policy intelligence. Audio, frames, on-screen text, caption: all scored against current Meta Advertising Standards and TikTok Ads Policies. You get a risk score and the exact clause behind each flag.",
  },
  {
    q: "Does this guarantee my ads get approved?",
    a: "No. And anyone who tells you otherwise is lying. Platforms make the final call, and their reviewers have discretion. What VidJutsu does is make the risk clear before you submit: which clauses you're likely violating, which moments triggered the flag, and how severe each one is. You decide whether to ship, edit, or kill the creative. It's informational, not a guarantee or a legal opinion. See our Terms of Service for the full posture.",
  },
  {
    q: "What if Meta or TikTok update their policies?",
    a: "We re-ingest both policy sets weekly. Every response includes the policy snapshot date it's based on, so you know exactly what your risk score was checked against.",
  },
  {
    q: "How do I start?",
    a: "Install VidJutsu from the CLI, then install the Claude plugin. Now you can tell Claude to check any creative before you submit, or call it from the CLI directly. Full steps are in the quickstart.",
  },
  {
    q: "What about organic video?",
    a: "VidJutsu works on organic short-form video too, we just don't pitch it here. Ad safety is the wedge. If organic is your primary use case, email support and we'll get you set up.",
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
