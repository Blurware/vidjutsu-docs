"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What does VidJutsu do?",
    a: "Video intelligence API with four primitives. Watch uses Gemini to understand video from a freeform prompt. Extract pulls frames, audio, and metadata via server-side ffmpeg. Transcribe converts speech to text with word-level timing. Check validates specs against rules.",
  },
  {
    q: "Do I need VidJutsu to generate videos?",
    a: "No. Use any generation tool — Kling, Veo, Runway, whatever. VidJutsu understands and validates the output. It's the intelligence layer, not the generator.",
  },
  {
    q: "What's the difference between watch and transcribe?",
    a: "Watch sends the full video to Gemini with a freeform prompt — you can ask anything about the visual and audio content. Transcribe is speech-to-text only, returning word-level timestamps for what was said.",
  },
  {
    q: "What can I do with extract?",
    a: "Pull keyframes, audio tracks, and metadata from any video. Server-side ffmpeg — no local install needed. Use it to feed frames into other models, generate thumbnails, or get technical metadata like resolution and FPS.",
  },
  {
    q: "How do credits work?",
    a: "Your $99/mo subscription includes 1,000 credits. Watch and transcribe cost 10 credits each. Extract and check cost 5 credits each. Upload and storage are free. Need more? Buy additional credits at $0.10 each.",
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
