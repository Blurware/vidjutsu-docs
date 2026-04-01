import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Booking Skill — VidJutsu",
  description:
    "Agent skill for driving inbound leads to booking links via Instagram pages.",
};

const RELATED = [
  { name: "Talking Head", href: "/skills/talking-head" },
  { name: "Niche Research", href: "/skills/niche-research" },
  { name: "Account Management", href: "/skills/account-management" },
];

export default function Booking() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="text-sm text-ink-muted hover:text-ink transition-colors mb-10 block"
        >
          &larr; Back
        </a>

        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
          Campaign Skill
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Booking
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-14">
          Drive inbound leads to your Calendly, Cal.com, or booking page.
          Your agent runs the Instagram page &mdash; you handle the calls.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What the agent does
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Collects your booking details",
                detail:
                  "Booking URL, service type, and target audience.",
              },
              {
                label: "Researches service promotion content",
                detail:
                  "Scrapes top-performing accounts in your niche to identify what drives bookings.",
              },
              {
                label: "Provisions managed Instagram pages",
                detail:
                  "Real accounts operated by US-based account managers. 7-day warming before posting.",
              },
              {
                label: "Drafts authority-building content",
                detail:
                  "Case study, tip-based, and results-oriented posts that build trust.",
              },
              {
                label: "Tracks clicks to your booking link",
                detail:
                  "Post-level views, engagement, and link taps.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="text-ink-light text-sm leading-6 shrink-0">
                  &mdash;
                </span>
                <div>
                  <span className="text-ink text-sm font-medium">
                    {item.label}.
                  </span>{" "}
                  <span className="text-ink-muted text-sm">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-4">
            Related skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {RELATED.map((skill) => (
              <a
                key={skill.name}
                href={skill.href}
                className="text-sm text-ink-muted border border-border px-3 py-1.5 hover:border-ink/20 hover:text-ink transition-colors"
              >
                {skill.name}
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-border pt-10">
          <CopyCommand command="npx skills add tfcbot/vidjutsu-skills" />
        </div>
      </div>
    </main>
  );
}
