import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Campaign Management Skill — VidJutsu",
  description:
    "Agent skill for orchestrating multi-account campaigns across Instagram via the VidJutsu API.",
};

const RELATED = [
  { name: "Account Management", href: "/skills/account-management" },
  { name: "VidJutsu API", href: "/skills/vidjutsu-api" },
  { name: "Reflect", href: "/skills/reflect" },
];

export default function CampaignManagement() {
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
          Campaign Management
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-14">
          Orchestrate multi-account campaigns with cost estimation, execution,
          and tracking. The full campaign lifecycle through the API.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What the agent does
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Estimates campaign cost before committing credits",
                detail:
                  "Your agent calls the estimate endpoint to see the cost upfront.",
              },
              {
                label: "Creates campaigns with 1-50 accounts",
                detail:
                  "Each account gets 1-20 posts. Scale up or down per campaign.",
              },
              {
                label: "Executes the full pipeline",
                detail:
                  "Triggers provisioning, warming, content scheduling, and posting.",
              },
              {
                label: "Monitors progress across all accounts",
                detail:
                  "Campaign-level status updates through the API.",
              },
              {
                label: "Supports cancellation with prorated refunds",
                detail:
                  "Cancel mid-campaign and get unused credits back.",
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
            Credits
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-2xl">
            Variable per campaign. Use the estimate endpoint to calculate cost
            before creating. Add-ons available: edit slots and comment
            moderation.
          </p>
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
