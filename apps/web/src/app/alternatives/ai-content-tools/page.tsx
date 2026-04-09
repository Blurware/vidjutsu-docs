import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "VidJutsu vs AI Content Tools",
  description:
    "AI content tools generate video but stop at output. VidJutsu checks that output before it ships.",
};

const SKILLS = [
  {
    name: "Talking Head",
    href: "/skills/talking-head",
    what: "Draft video scripts with hooks, settings, and delivery notes. Generate with AI or record yourself.",
  },
  {
    name: "Clipper",
    href: "/skills/clipper",
    what: "Turn long-form YouTube or podcast content into daily short-form clips.",
  },
  {
    name: "Media Analysis",
    href: "/skills/media-analysis",
    what: "QA every video before it ships — catches artifacts, bad hooks, face drift, and weak CTAs.",
  },
  {
    name: "VidJutsu API",
    href: "/skills/vidjutsu-api",
    what: "Core API reference — watch, extract, transcribe, check. Everything your agent calls.",
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
          Keep using them for generation. Use VidJutsu to check the output
          before it ships.
        </p>

        {/* The gap */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-4">
            The gap
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-2xl">
            AI content tools create video assets. After that, you&rsquo;re on
            your own. Generation tools stop at output &mdash; they don&rsquo;t
            tell you if the hook lands, if there are AI artifacts in frame 47,
            or if the face drifts between scenes. VidJutsu sits between
            generation and distribution. It scores what the tool made so your
            agent can decide what ships.
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
                  "Opus Clip, Pictory, Descript, any AI generator, or your phone. VidJutsu doesn't generate video — you bring the content.",
              },
              {
                step: "Submit video URLs to the Watch endpoint",
                detail:
                  "Your agent sends a video URL. VidJutsu returns freeform video understanding — hooks, pacing, artifacts, CTA strength.",
              },
              {
                step: "Use Extract for frames, audio, and metadata",
                detail:
                  "Pull the raw assets and metadata out of any video. Know exactly what you're working with before you ship it.",
              },
              {
                step: "Validate specs with Check",
                detail:
                  "Run videos against your quality spec. Your agent publishes what passes and flags what doesn't.",
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
            Generate anywhere. Score through VidJutsu.
          </p>
          <CopyCommand command="npx skills add tfcbot/shortform-distribution-skills" className="mb-4" />
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
