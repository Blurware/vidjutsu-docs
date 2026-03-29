"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What are managed accounts?",
    a: "Managed accounts are TikTok and Instagram profiles we provision and maintain for you. We create theme pages, fan accounts, or clip pages, warm them with organic activity for up to 7 days, and keep them ready for posting.",
  },
  {
    q: "How do credits work?",
    a: "Every API operation costs a fixed number of credits. Your $99/month membership includes 50 credits. Additional credits cost $0.75 each. Credits are deducted immediately when a request is accepted. Included credits reset each billing cycle.",
  },
  {
    q: "How do I get my API key?",
    a: "Purchase credits via POST /v1/api_keys. Complete the Stripe checkout, then poll GET /v1/api_keys/status with your session ID. Your API key is returned in the response. Store it securely — it's shown once.",
  },
  {
    q: "What's the account limit?",
    a: "Each user can create up to 3 managed accounts (TikTok or Instagram). This applies to both individual account creation and campaign accounts.",
  },
  {
    q: "How long does account warming take?",
    a: "Account warming can take up to 7 days. During this period, the account builds organic activity to establish credibility. Don't schedule posts until the account reaches 'active' status.",
  },
  {
    q: "What video models are available?",
    a: "We offer Veo 3.1 (highest quality, 60-120s generation) and Veo 3.1 Fast (good quality, 30-60s). Both support text-to-video and image-to-video modes with 16:9, 9:16, and 1:1 aspect ratios.",
  },
  {
    q: "Can I use VidJutsu without a subscription?",
    a: "A $99/month membership is required for platform access. You can purchase additional credits on top of the 50 included each month.",
  },
  {
    q: "What happens if I lose my API key?",
    a: "Use POST /v1/api_keys/recover with your email to receive a recovery email. You can also rotate your key with POST /v1/api_keys/rotate, which invalidates the old key and issues a new one.",
  },
  {
    q: "Is there a CLI?",
    a: "Yes. Install with: curl -fsSL https://vidjutsu.ai/install.sh | bash. The CLI wraps the REST API — every command maps to an API call.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium pr-4">{q}</span>
        <span className="text-ink-muted text-lg shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="text-ink-muted text-sm leading-relaxed pb-4 pr-8">{a}</p>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-24 bg-surface-alt border-t border-border">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12">
          FAQ
        </h2>
        <div className="border border-border rounded-xl bg-surface px-5">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
