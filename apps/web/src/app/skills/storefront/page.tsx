import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Storefront Skill — VidJutsu",
  description:
    "Agent skill for running Instagram pages that drive traffic to ecommerce stores.",
};

const RELATED = [
  { name: "Niche Research", href: "/skills/niche-research" },
  { name: "Clipper", href: "/skills/clipper" },
  { name: "Campaign Management", href: "/skills/campaign-management" },
];

export default function Storefront() {
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
          Storefront
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-14">
          Drive Instagram traffic to your Shopify, dropshipping, or DTC store.
          Your agent runs the campaign &mdash; you supply the products.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What the agent does
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Collects your store details",
                detail:
                  "Store URL, product niche, and content style preferences.",
              },
              {
                label: "Researches top-performing accounts",
                detail:
                  "Scrapes 10-15 accounts in your niche to identify what hooks and formats work.",
              },
              {
                label: "Provisions managed Instagram pages",
                detail:
                  "Real accounts operated by US-based account managers. 7-day warming before posting.",
              },
              {
                label: "Schedules your videos as posts",
                detail:
                  "You upload videos, your agent schedules them with optimized captions. Up to 2 posts per day.",
              },
              {
                label: "Tracks post performance",
                detail:
                  "Views, likes, comments, and shares via analytics.",
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
          <CopyCommand command="npx skills add tfcbot/shortform-media-skills" />
        </div>
      </div>
    </main>
  );
}
