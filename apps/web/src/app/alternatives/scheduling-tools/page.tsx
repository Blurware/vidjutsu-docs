import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Using VidJutsu Instead of Scheduling Tools — Playbook",
  description:
    "Later, Buffer, and Hootsuite queue content. VidJutsu manages the full account lifecycle through an API your agent calls.",
};

const SKILLS = [
  {
    name: "Account Management",
    href: "/skills/account-management",
    what: "Full account lifecycle — provisioning, warming, shadow ban detection, and auto-replacement.",
  },
  {
    name: "Campaign Management",
    href: "/skills/campaign-management",
    what: "Campaign setup, post scheduling, monitoring, and optimization across accounts.",
  },
  {
    name: "Media Analysis",
    href: "/skills/media-analysis",
    what: "QA every video before posting — hooks, artifacts, CTA quality.",
  },
  {
    name: "VidJutsu API",
    href: "/skills/vidjutsu-api",
    what: "Core API reference for accounts, posts, analytics, and comments.",
  },
];

export default function SchedulingTools() {
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
          Playbook
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Your agent doesn&rsquo;t need a dashboard
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-16">
          Later, Buffer, and Hootsuite are dashboards for humans. VidJutsu is an
          API for agents. Different tool for a different workflow.
        </p>

        {/* What scheduling tools don't do */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What scheduling tools don&rsquo;t do
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "No account provisioning",
                detail:
                  "They connect to your existing account. They don't create, warm, or replace accounts.",
              },
              {
                label: "No quality control",
                detail:
                  "Buffer doesn't review your video before posting. Whatever you queue goes out.",
              },
              {
                label: "No comment moderation",
                detail:
                  "Scheduling tools publish. They don't manage engagement after the post goes live.",
              },
              {
                label: "Not built for agents",
                detail:
                  "They're designed for humans clicking through a UI. Your agent needs an API.",
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
                  <span className="text-ink-muted text-sm">
                    {item.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The playbook */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-6">
            The playbook
          </h2>
          <ol className="space-y-6 list-none pl-0">
            {[
              {
                step: "Agent provisions and warms an account",
                detail:
                  "No connecting an existing account. VidJutsu provisions a fresh Instagram account, operated by a US-based account manager. 7-day warming period before posting starts.",
              },
              {
                step: "Agent submits videos for QA",
                detail:
                  "Every video runs through the Media Analysis skill before scheduling. Hooks, AI artifacts, CTA quality — checked before anything posts.",
              },
              {
                step: "Agent writes captions and schedules posts",
                detail:
                  "Your agent calls the API to schedule posts. Up to 2 per day. Captions, timing, and targeting — all programmatic.",
              },
              {
                step: "Agent manages comments",
                detail:
                  "Comment moderation through the API. Your agent handles engagement without a dashboard.",
              },
              {
                step: "Agent reads analytics",
                detail:
                  "Post-level views, likes, link taps. All returned from API calls. No logging into a dashboard to check numbers.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-ink-light font-mono text-sm leading-7 shrink-0 w-6 text-right">
                  {i + 1}.
                </span>
                <div>
                  <p className="text-ink font-medium leading-7">{item.step}</p>
                  <p className="text-ink-muted text-sm leading-relaxed mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-6">
            Skills you&rsquo;ll use
          </h2>
          <div className="space-y-4">
            {SKILLS.map((skill) => (
              <a
                key={skill.name}
                href={skill.href}
                className="group block border-l-2 border-border hover:border-brand pl-4 py-1 transition-colors"
              >
                <span className="text-sm font-semibold text-ink group-hover:text-brand transition-colors">
                  {skill.name}
                </span>
                <p className="text-ink-muted text-sm mt-0.5">{skill.what}</p>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-border pt-10">
          <p className="text-ink font-medium mb-4">
            Full account lifecycle, not just scheduling.
          </p>
          <CopyCommand command="npx skills add tfcbot/vidjutsu-skills" className="mb-4" />
          <a
            href="https://docs.vidjutsu.ai"
            className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors"
          >
            Read Docs &rarr;
          </a>
        </div>
      </div>
    </main>
  );
}
