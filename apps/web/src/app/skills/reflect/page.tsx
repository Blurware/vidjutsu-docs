import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Reflect Skill",
  description:
    "Agent skill for reviewing campaign analytics and generating performance reports.",
};

const RELATED = [
  { name: "Campaign Management", href: "/skills/campaign-management" },
  { name: "Niche Research", href: "/skills/niche-research" },
  { name: "Media Analysis", href: "/skills/media-analysis" },
];

export default function Reflect() {
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
          Infrastructure Skill
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Reflect
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-14">
          Review analytics and generate a performance report for your next
          content cycle. Your agent reads the numbers and summarizes what
          worked.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What the agent does
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Pulls performance data across all managed accounts",
                detail:
                  "Followers, engagement rate, and video-level stats across all accounts.",
              },
              {
                label: "Identifies top-performing posts",
                detail:
                  "Ranked by views, likes, and engagement rate.",
              },
              {
                label: "Analyzes which content styles converted best",
                detail:
                  "Hooks, topics, and formats broken down by performance.",
              },
              {
                label: "Generates a report with recommendations",
                detail:
                  "Specific, actionable notes for the next content cycle.",
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
