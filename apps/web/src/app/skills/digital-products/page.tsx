import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Digital Products Skill — VidJutsu",
  description:
    "Agent skill for promoting digital products via Instagram pages.",
};

const RELATED = [
  { name: "Niche Research", href: "/skills/niche-research" },
  { name: "Talking Head", href: "/skills/talking-head" },
  { name: "Campaign Management", href: "/skills/campaign-management" },
];

export default function DigitalProducts() {
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
          Digital Products
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-14">
          Promote templates, ebooks, tools, presets, and guides through
          Instagram. Your agent runs the page &mdash; you supply the product.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What the agent does
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Collects your product details",
                detail:
                  "Product URL, category, and content style. Works with Stan Store, Gumroad, or any product page.",
              },
              {
                label: "Researches top-performing promotions",
                detail:
                  "Scrapes accounts that successfully sell digital products in your category.",
              },
              {
                label: "Provisions managed Instagram pages",
                detail:
                  "Real accounts operated by US-based account managers. 7-day warming before posting.",
              },
              {
                label: "Drafts demo, behind-the-scenes, and results-based content",
                detail:
                  "Content that shows the product in action and drives purchases.",
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
          <CopyCommand command="npx skills add tfcbot/vidjutsu-skills" />
        </div>
      </div>
    </main>
  );
}
