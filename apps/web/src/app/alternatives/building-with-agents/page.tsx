import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "VidJutsu vs Building Your Own Video QA Stack",
  description:
    "You could wire up vision models, scoring prompts, and artifact detection yourself. Or you could call VidJutsu.",
};

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
          You could build video compliance yourself. Or you could call
          VidJutsu.
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-16">
          You&rsquo;re building a video production pipeline. You could wire up
          vision models, prompt engineer scoring logic, and maintain endpoints
          yourself. Or you could make one API call and get video understanding,
          frame extraction, transcription, or spec validation back in seconds.
        </p>

        {/* What you'd have to build */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What you&rsquo;d have to build yourself
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Vision model integration",
                detail:
                  "Pick a model, manage API keys, handle rate limits, parse outputs. Then do it again when the model changes.",
              },
              {
                label: "Scoring prompts",
                detail:
                  "Design and maintain prompts that reliably score hooks, pacing, CTA quality, and visual coherence. Prompt drift is real.",
              },
              {
                label: "Artifact detection",
                detail:
                  "AI-generated video has tells — flickering hands, warped text, inconsistent lighting. Detecting these programmatically is its own project.",
              },
              {
                label: "Face consistency tracking",
                detail:
                  "Across scenes, does the subject look like the same person? Building reliable face-match logic takes significant effort.",
              },
              {
                label: "Async analysis pipeline",
                detail:
                  "Videos take time to analyze. You need queuing, status polling, retries, and timeout handling.",
              },
              {
                label: "Result storage",
                detail:
                  "Scores, breakdowns, and metadata need to live somewhere queryable. That means a schema, a database, and an API layer.",
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

        {/* What VidJutsu gives you */}
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-6">
            What VidJutsu gives you
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Watch",
                detail:
                  "Submit a video URL, get freeform video understanding — hooks, pacing, artifacts, CTA strength. One call.",
              },
              {
                label: "Extract",
                detail:
                  "Pull frames, audio, and metadata from any video. No vision model wrangling.",
              },
              {
                label: "Transcribe",
                detail:
                  "Speech-to-text for any video. Get accurate transcripts your agent can reason over.",
              },
              {
                label: "Check",
                detail:
                  "Validate a video against a spec before it ships. Your agent decides what to publish based on pass/fail.",
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

        {/* CTA */}
        <div className="border-t border-border pt-10">
          <p className="text-ink font-medium mb-4">
            Skip the infrastructure. One API call &mdash; watch, extract,
            transcribe, or check. Done.
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
