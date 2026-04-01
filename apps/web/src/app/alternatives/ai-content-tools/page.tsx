import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Using VidJutsu Instead of AI Content Tools — Playbook",
  description:
    "AI content tools generate clips but stop there. Here's how to use VidJutsu skills to go from generated video to posted, tracked, and managed.",
};

const SKILLS = [
  {
    name: "Talking Head",
    href: "/skills/talking-head",
    what: "Draft video scripts with hooks, settings, and delivery notes. Generate with Wavespeed + KIE or record yourself.",
  },
  {
    name: "Clipper",
    href: "/skills/clipper",
    what: "Turn long-form YouTube or podcast content into daily short-form posts.",
  },
  {
    name: "Media Analysis",
    href: "/skills/media-analysis",
    what: "QA every video before it goes live — catches bad hooks, AI artifacts, weak CTAs.",
  },
  {
    name: "Campaign Management",
    href: "/skills/campaign-management",
    what: "Multi-account campaign setup, monitoring, and optimization.",
  },
];

export default function AiContentTools() {
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
          Already using Opus Clip, Pictory, or Descript?
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-16">
          Keep using them for generation. Use VidJutsu for everything after
          that&nbsp;&mdash; QA, captions, posting, analytics, and comment
          moderation.
        </p>

        {/* The gap */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-4">
            The gap
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-2xl">
            AI content tools create video assets. After that, you&rsquo;re on
            your own. You still need to review output, write captions, find an
            account to post from, schedule it, and check if it performed. That
            gap between &ldquo;generated a clip&rdquo; and &ldquo;that clip is
            driving traffic on Instagram&rdquo; is where VidJutsu fits.
          </p>
        </section>

        {/* The playbook */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-6">
            How to use them together
          </h2>
          <ol className="space-y-6 list-none pl-0">
            {[
              {
                step: "Generate videos with your tool of choice",
                detail:
                  "Opus Clip, Pictory, Descript, Wavespeed, KIE, or your phone. VidJutsu doesn't generate video — you bring the content.",
              },
              {
                step: "Submit video URLs to VidJutsu via the API",
                detail:
                  "Your agent calls the API with a video URL. No uploads, no dashboards.",
              },
              {
                step: "Agent QAs every video before posting",
                detail:
                  "The Media Analysis skill checks hooks, AI artifacts, and CTA quality. Videos that don't pass get flagged, not posted.",
              },
              {
                step: "Agent writes captions and schedules posts",
                detail:
                  "Your agent writes niche-optimized captions and schedules posts up to twice a day on managed Instagram accounts.",
              },
              {
                step: "Track performance and adjust",
                detail:
                  "Post-level analytics — views, likes, link taps — available through the API. Your agent reads the numbers and adjusts.",
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
            Generate anywhere. Post through VidJutsu.
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
