import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Talking Head Skill — VidJutsu",
  description:
    "Agent skill for creating talking-head short-form videos for Instagram with recording guides, settings, and AI generation via Wavespeed.",
};

const RELATED = [
  { name: "Podcast", href: "/skills/podcast" },
  { name: "Clipper", href: "/skills/clipper" },
  { name: "Media Analysis", href: "/skills/media-analysis" },
];

export default function TalkingHead() {
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
          Format Skill
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Talking Head
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-14">
          The most effective format for niche Instagram pages. One person
          speaking directly to camera. Record yourself or generate with AI.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What the agent does
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Drafts posts with specific hooks and talking points",
                detail:
                  "Each post includes a hook, key points, and delivery notes.",
              },
              {
                label: "Rotates settings across videos",
                detail:
                  "Car, living room, office, coffee shop, outdoor. Visual variety without re-scripting.",
              },
              {
                label: "Includes delivery notes",
                detail:
                  "Lean forward, start mid-sentence, eye contact. Small cues that affect performance.",
              },
              {
                label: "Guides batch recording",
                detail:
                  "14 videos in one afternoon. Your agent plans the batch, you record it.",
              },
              {
                label: "QAs every video before posting",
                detail:
                  "Checks hooks, framing, and delivery quality.",
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
            AI generation
          </h2>
          <p className="text-ink-muted text-sm leading-relaxed max-w-2xl">
            Don&rsquo;t want to record? Your agent can generate starting images
            with KIE and animate them into videos with Wavespeed (Veo 3.1). You
            bring the API keys, the skill handles prompt crafting and QA.
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
