import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "VidJutsu vs Hiring a VA",
  description:
    "A VA for social media costs $300-500/month and still needs your management. Here's how to use VidJutsu instead.",
};

const SKILLS = [
  {
    name: "Campaign Management",
    href: "/skills/campaign-management",
    what: "Multi-account campaign setup, scheduling, monitoring, and optimization.",
  },
  {
    name: "Account Management",
    href: "/skills/account-management",
    what: "Provision, warm, and manage Instagram accounts through the API.",
  },
  {
    name: "Niche Research",
    href: "/skills/niche-research",
    what: "Research top-performing accounts and content patterns in your niche.",
  },
  {
    name: "Reflect",
    href: "/skills/reflect",
    what: "Review analytics and generate performance reports across your accounts.",
  },
];

export default function HiringAVa() {
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
          Replace the VA with API calls
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-16">
          A social media VA costs $300&ndash;500/month and still needs your
          daily direction. Here&rsquo;s how to hand the work to your agent
          instead.
        </p>

        {/* The problem */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-4">
            The management tax
          </h2>
          <div className="space-y-3 text-ink-muted leading-relaxed max-w-2xl">
            <p>
              A VA doesn&rsquo;t eliminate your involvement &mdash; it redirects
              it. Instead of posting, you&rsquo;re reviewing content, giving
              feedback, approving drafts. You traded one type of work for
              another.
            </p>
            <p>
              VAs also get sick, take time off, and sometimes disappear. When
              they stop posting for 3 days, your page&rsquo;s reach drops. An
              API doesn&rsquo;t take days off.
            </p>
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
                step: "Set up your campaign with the Campaign Management skill",
                detail:
                  "Your agent walks through account setup, niche targeting, and content scheduling. No onboarding a new person.",
              },
              {
                step: "Agent researches your niche",
                detail:
                  "The Niche Research skill scrapes top-performing accounts in your space — what hooks work, what formats perform, what posting frequency to target.",
              },
              {
                step: "Account gets provisioned with a real account manager",
                detail:
                  "VidJutsu provisions a managed Instagram account, operated by a US-based account manager. No VA needed for the account itself.",
              },
              {
                step: "Supply videos, agent handles captions and scheduling",
                detail:
                  "You make or source videos when you have time. Your agent QAs them, writes captions, and schedules up to 2 posts per day. No daily check-ins.",
              },
              {
                step: "Review performance with the Reflect skill",
                detail:
                  "Your agent generates performance reports — views, engagement, link taps. You review on your schedule, not on a VA's.",
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

        {/* Cost comparison */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-4">
            The math
          </h2>
          <div className="grid grid-cols-2 gap-px bg-border overflow-hidden border border-border">
            <div className="bg-surface p-4">
              <p className="text-xs text-ink-light uppercase tracking-wide mb-1">
                VA
              </p>
              <p className="text-ink font-semibold">$300&ndash;500/mo</p>
              <p className="text-ink-muted text-sm mt-1">
                + your management time
              </p>
            </div>
            <div className="bg-surface p-4">
              <p className="text-xs text-ink-light uppercase tracking-wide mb-1">
                VidJutsu
              </p>
              <p className="text-ink font-semibold">$59/mo + credits</p>
              <p className="text-ink-muted text-sm mt-1">
                No onboarding, no oversight
              </p>
            </div>
          </div>
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
            No onboarding. No training. No oversight.
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
