"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is VidJutsu for?",
    a: "It is an API that understands video and text. The main win for most teams is compliance: we score a clip or prompt against hundreds of platform rules and return a risk report with citations. You can also watch a video with a free-form question, extract frames and audio, transcribe speech, or run custom checks.",
  },
  {
    q: "Why check before I post?",
    a: "Platforms often enforce terms after content is public — strikes, removals, or reduced reach you were not warned about ahead of time. A pre-publish scan surfaces rule conflicts while you can still edit.",
  },
  {
    q: "Do I need VidJutsu to make the video?",
    a: "No. Use any generator or editor you like. VidJutsu reviews what you already made — or the text you plan to use — so your pipeline can stay automated end to end.",
  },
  {
    q: "What is the difference between watch and transcribe?",
    a: "Watch answers a question about the full picture and sound. Transcribe is speech-to-text only, with a time stamp on each word.",
  },
  {
    q: "What can I do with extract?",
    a: "Pull key frames, an audio file, and technical details such as length and resolution from a hosted URL. It runs on our side so you do not need local ffmpeg jobs.",
  },
  {
    q: "How do credits work?",
    a: "The $99 per month plan includes 1,000 credits. Watch and transcribe cost 10 credits each call. Extract and check cost 5 credits each. Uploads and storage cost zero credits. Extra credits are $0.10 each.",
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
