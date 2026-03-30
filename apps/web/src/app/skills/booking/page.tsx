import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Skill — VidJutsu",
  description:
    "Agent skill for driving inbound leads to booking links via Instagram pages.",
};

export default function Booking() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Booking
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Drive inbound leads to your Calendly, Cal.com, or booking page.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through running Instagram pages that generate inbound leads for services. It researches what content drives bookings in your niche and posts daily.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Collects your booking URL, service type, and target audience</li>
            <li>Researches top-performing service promotion content</li>
            <li>Generates authority-building, case study, and tip-based content</li>
            <li>Provisions managed Instagram pages</li>
            <li>Tracks clicks to your booking link</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
