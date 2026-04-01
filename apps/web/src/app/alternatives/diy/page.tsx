import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Using VidJutsu Instead of Doing It Yourself — Playbook",
  description:
    "Posting daily on Instagram is a full-time habit. Here's how to hand the page to your agent with VidJutsu.",
};

const SKILLS = [
  {
    name: "Storefront",
    href: "/skills/storefront",
    what: "Campaign skill for driving Instagram traffic to Shopify and ecommerce stores.",
  },
  {
    name: "Courses",
    href: "/skills/courses",
    what: "Campaign skill for promoting online courses through Instagram pages.",
  },
  {
    name: "Digital Products",
    href: "/skills/digital-products",
    what: "Campaign skill for promoting templates, ebooks, and digital products.",
  },
  {
    name: "Account Management",
    href: "/skills/account-management",
    what: "Provision, warm, and manage Instagram accounts through the API.",
  },
  {
    name: "Niche Research",
    href: "/skills/niche-research",
    what: "Research top-performing accounts and content in your niche.",
  },
];

export default function Diy() {
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
          Stop managing Instagram manually
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-16">
          You know you should post every day. You also know you&rsquo;ll stop in
          2 weeks. Here&rsquo;s how to hand the page to your agent.
        </p>

        {/* The problem */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-4">
            Why DIY doesn&rsquo;t scale
          </h2>
          <div className="space-y-3 text-ink-muted leading-relaxed max-w-2xl">
            <p>
              Consistency is the game on short-form platforms. Two posts a day,
              every day. That&rsquo;s 60 posts a month. Each needs an idea, a
              video, a caption, and a publish time. Miss a few days and the
              algorithm buries you.
            </p>
            <p>
              At 1.5 hours/day, that&rsquo;s 45 hours/month of your time.
              Agents don&rsquo;t get busy. They don&rsquo;t lose motivation.
              They post on schedule.
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
                step: "Pick a campaign skill for your business type",
                detail:
                  "Storefront for ecommerce, Courses for course creators, Digital Products for templates and ebooks, Booking for service businesses. Each skill walks your agent through the full campaign setup.",
              },
              {
                step: "Agent researches your niche",
                detail:
                  "The Niche Research skill scrapes top-performing accounts in your space — hooks, formats, posting frequency. This informs the content your agent drafts.",
              },
              {
                step: "Account gets provisioned and warmed",
                detail:
                  "VidJutsu provisions a real Instagram account, operated by a US-based account manager. It warms for 7 days before posting begins.",
              },
              {
                step: "You supply videos, agent handles the rest",
                detail:
                  "Record on your phone, generate with AI tools, or use the Talking Head skill for scripted content. Your agent QAs each video, writes captions, and schedules posts up to twice daily.",
              },
              {
                step: "Agent tracks performance",
                detail:
                  "Views, likes, and link taps per post — available through the API. Your agent reads the analytics and you decide what to adjust.",
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
                DIY
              </p>
              <p className="text-ink font-semibold">~45 hrs/mo</p>
              <p className="text-ink-muted text-sm mt-1">Your time</p>
            </div>
            <div className="bg-surface p-4">
              <p className="text-xs text-ink-light uppercase tracking-wide mb-1">
                VidJutsu
              </p>
              <p className="text-ink font-semibold">$59/mo + credits</p>
              <p className="text-ink-muted text-sm mt-1">
                ~$63/wk at 2 posts/day
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
            Let your agent handle the page.
          </p>
          <CopyCommand command="npx skills add tfcbot/shortform-media-skills" className="mb-4" />
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
