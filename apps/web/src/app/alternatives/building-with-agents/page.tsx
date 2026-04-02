import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "VidJutsu vs Building Your Own Agent Stack",
  description:
    "You have an agent. You could build your own Instagram pipeline. Here's why VidJutsu is faster and what skills to install.",
};

const SKILLS = [
  {
    name: "VidJutsu API",
    href: "/skills/vidjutsu-api",
    what: "Core API reference — accounts, posts, analytics, comments. Everything your agent calls.",
  },
  {
    name: "Account Management",
    href: "/skills/account-management",
    what: "Provision, warm, and manage Instagram accounts. Handles verification and shadow ban replacement.",
  },
  {
    name: "Campaign Management",
    href: "/skills/campaign-management",
    what: "Multi-account campaign setup, scheduling, monitoring, and optimization.",
  },
  {
    name: "Media Analysis",
    href: "/skills/media-analysis",
    what: "QA gate for every video — checks hooks, artifacts, and CTA quality before posting.",
  },
];

export default function BuildingWithAgents() {
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
          You have an agent. Skip the Instagram infrastructure.
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-16">
          Building account provisioning, warming, posting, and recovery yourself
          is months of work. VidJutsu is that system, as an API your agent
          calls.
        </p>

        {/* What you'd have to build */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What you&rsquo;d have to build yourself
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Account provisioning",
                detail:
                  "Creating Instagram accounts programmatically, handling verification, managing credentials.",
              },
              {
                label: "Account warming",
                detail:
                  "New accounts that post immediately get flagged. Warming takes ~7 days of organic-looking activity.",
              },
              {
                label: "Posting infrastructure",
                detail:
                  "Instagram doesn't have a public video posting API. You need a publishing layer with format handling, rate limits, and retries.",
              },
              {
                label: "Shadow ban recovery",
                detail:
                  "Accounts get suppressed. You need detection and automatic replacement.",
              },
              {
                label: "Comment moderation",
                detail:
                  "Engagement management on every account you operate.",
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
            How to use VidJutsu instead
          </h2>
          <ol className="space-y-6 list-none pl-0">
            {[
              {
                step: "Install the VidJutsu API skill",
                detail:
                  "Gives your agent the full API reference — accounts, posts, analytics, comments. One install command.",
              },
              {
                step: "Agent provisions accounts via the API",
                detail:
                  "Your agent calls the API to create an Instagram account. A real US-based account manager operates it. Warming starts automatically.",
              },
              {
                step: "Agent submits videos and schedules posts",
                detail:
                  "Submit video URLs via the API. Agent writes captions, sets schedule. Up to 2 posts per day per account.",
              },
              {
                step: "QA runs before every post",
                detail:
                  "The Media Analysis skill checks video quality. Bad hooks, AI artifacts, weak CTAs get flagged before anything goes live.",
              },
              {
                step: "Agent reads analytics and manages comments",
                detail:
                  "Post-level views, likes, link taps. Comment moderation. All through API calls your agent already knows how to make.",
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
            Skip the infrastructure. Give your agent VidJutsu.
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
