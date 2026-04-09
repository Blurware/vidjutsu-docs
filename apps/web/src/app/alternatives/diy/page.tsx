import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "VidJutsu vs Manual Video Review",
  description:
    "You're reviewing every AI video manually before it ships. That doesn't scale. VidJutsu is the automated QA gate.",
};

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
          You&rsquo;re reviewing every AI video manually. That doesn&rsquo;t
          scale.
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-16">
          Watching every generated video, checking for artifacts, face drift,
          garbled speech. It works for 1 video. It breaks at 14 per week.
        </p>

        {/* The problem */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-4">
            The manual QA trap
          </h2>
          <div className="space-y-3 text-ink-muted leading-relaxed max-w-2xl">
            <p>
              Every AI-generated video needs a quality check before it ships.
              Flickering hands, warped faces, audio that drifts out of sync,
              hooks that don&rsquo;t land. You&rsquo;re the bottleneck &mdash;
              watching, rewinding, deciding.
            </p>
            <p>
              At 2 videos a day, that&rsquo;s manageable. At 14 per week across
              multiple formats, you&rsquo;re spending hours on review instead of
              production. And you still miss things when you&rsquo;re tired.
            </p>
          </div>
        </section>

        {/* What VidJutsu does */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-6">
            Automated QA gate
          </h2>
          <ol className="space-y-6 list-none pl-0">
            {[
              {
                step: "Submit a video URL to the Critic endpoint",
                detail:
                  "Your agent sends the video. VidJutsu returns a structured quality score in seconds — hooks, pacing, artifacts, CTA strength.",
              },
              {
                step: "Set a quality threshold",
                detail:
                  "Your agent decides what ships. Score above 7? Publish. Below? Flag for re-generation or manual review.",
              },
              {
                step: "Use Breakdown for scene-level detail",
                detail:
                  "Need to know exactly where the video falls apart? Breakdown returns timestamped analysis — scene by scene, with quality flags on each.",
              },
              {
                step: "Predict distribution with Viral Score",
                detail:
                  "Before a video goes anywhere, get a distribution prediction. Your agent prioritizes the videos most likely to perform.",
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
                Manual review
              </p>
              <p className="text-ink font-semibold">~5 hrs/week</p>
              <p className="text-ink-muted text-sm mt-1">
                At 14 videos/week
              </p>
            </div>
            <div className="bg-surface p-4">
              <p className="text-xs text-ink-light uppercase tracking-wide mb-1">
                VidJutsu Critic
              </p>
              <p className="text-ink font-semibold">Seconds per video</p>
              <p className="text-ink-muted text-sm mt-1">
                Automated, consistent, scalable
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-border pt-10">
          <p className="text-ink font-medium mb-4">
            Critic scores in seconds. Your agent decides what ships.
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
