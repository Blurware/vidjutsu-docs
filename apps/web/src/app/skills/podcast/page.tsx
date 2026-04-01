import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Podcast Skill — VidJutsu",
  description:
    "Agent skill for creating podcast-style short-form clips for Instagram — solo or duo, from scratch or existing episodes.",
};

const RELATED = [
  { name: "Talking Head", href: "/skills/talking-head" },
  { name: "Clipper", href: "/skills/clipper" },
  { name: "Media Analysis", href: "/skills/media-analysis" },
];

export default function Podcast() {
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
          Podcast
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-14">
          Create podcast-style clips for Instagram &mdash; solo or duo, from
          scratch or existing episodes. Microphone visible, conversational tone.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What the agent does
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Drafts posts with podcast-format hooks",
                detail:
                  "Bold claims, hot takes, conversational openers optimized for the format.",
              },
              {
                label: "Guides solo or duo recording setup",
                detail:
                  "Microphone placement, framing, and audio quality notes.",
              },
              {
                label: "Clips from existing podcast episodes",
                detail:
                  "If you already have a podcast, your agent extracts the best moments.",
              },
              {
                label: "Suggests caption overlays for key quotes",
                detail:
                  "Highlighted text that hooks scrollers before audio plays.",
              },
              {
                label: "QAs audio quality, framing, and hook delivery",
                detail:
                  "Every video checked before posting.",
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
