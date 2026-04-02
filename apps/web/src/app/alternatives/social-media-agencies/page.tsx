import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "VidJutsu vs Social Media Agencies",
  description:
    "Agencies charge $1,000-3,000/month with contracts. Here's how to get managed Instagram pages for $59/mo + credits.",
};

const SKILLS = [
  {
    name: "Campaign Management",
    href: "/skills/campaign-management",
    what: "Multi-account campaign setup, scheduling, monitoring, and optimization.",
  },
  {
    name: "Niche Research",
    href: "/skills/niche-research",
    what: "Research top-performing accounts and content patterns — replaces the agency's content strategist.",
  },
  {
    name: "Account Management",
    href: "/skills/account-management",
    what: "Provision, warm, and manage Instagram accounts through the API.",
  },
  {
    name: "Reflect",
    href: "/skills/reflect",
    what: "Performance reports across accounts — replaces the agency's monthly reporting.",
  },
  {
    name: "Media Analysis",
    href: "/skills/media-analysis",
    what: "QA gate for every video before posting. Catches issues the agency's reviewer would.",
  },
];

export default function SocialMediaAgencies() {
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
          Agency-level management at API prices
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-16">
          Agencies charge $1,000&ndash;3,000/month with 3&ndash;6 month
          contracts. Most of that pays for people and process you don&rsquo;t
          need.
        </p>

        {/* The problem */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-4">
            What you&rsquo;re actually paying for
          </h2>
          <div className="space-y-3 text-ink-muted leading-relaxed max-w-2xl">
            <p>
              Agency pricing covers account managers, content strategists,
              designers, and reporting. Most of that overhead serves the approval
              process. If you don&rsquo;t need strategy decks and weekly
              check-ins, you&rsquo;re paying for services you&rsquo;ll never
              use.
            </p>
            <p>
              Agencies also deliver 15&ndash;30 posts per month and operate on
              weekly content calendars. By the time content is approved, the
              trend may be gone.
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
                step: "Replace the content strategist with Niche Research",
                detail:
                  "Your agent scrapes top-performing accounts in your niche — what hooks work, what formats perform. No strategy meetings.",
              },
              {
                step: "Replace the account manager with Account Management",
                detail:
                  "VidJutsu provisions a real Instagram account with a US-based account manager. Your agent manages it through the API.",
              },
              {
                step: "Replace the content calendar with Campaign Management",
                detail:
                  "Your agent sets up campaigns, schedules posts (up to 2/day — that's up to 60/month vs an agency's 15-30), and monitors performance.",
              },
              {
                step: "Replace the reviewer with Media Analysis",
                detail:
                  "Every video runs through QA before posting. Hooks, AI artifacts, CTA quality — checked automatically.",
              },
              {
                step: "Replace the monthly report with Reflect",
                detail:
                  "Your agent generates performance reports on demand — views, engagement, link taps. No waiting for end-of-month PDFs.",
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
                Agency
              </p>
              <p className="text-ink font-semibold">
                $1,000&ndash;3,000/mo
              </p>
              <p className="text-ink-muted text-sm mt-1">
                15&ndash;30 posts/mo, contract
              </p>
            </div>
            <div className="bg-surface p-4">
              <p className="text-xs text-ink-light uppercase tracking-wide mb-1">
                VidJutsu
              </p>
              <p className="text-ink font-semibold">$59/mo + credits</p>
              <p className="text-ink-muted text-sm mt-1">
                Up to 60 posts/mo, no contract
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
            No contracts. No approval workflows.
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
