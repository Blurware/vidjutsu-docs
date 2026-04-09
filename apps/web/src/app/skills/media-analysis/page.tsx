import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Media Analysis Skill",
  description:
    "Agent skill for analyzing video and image content via the VidJutsu API — watch endpoint with different prompts for quality scoring, verification, and deep analysis.",
};

const RELATED = [
  { name: "Niche Research", href: "/skills/niche-research" },
  { name: "Talking Head", href: "/skills/talking-head" },
  { name: "VidJutsu API", href: "/skills/vidjutsu-api" },
];

export default function MediaAnalysis() {
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
          Infrastructure Skill
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Media Analysis
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-14">
          Quality gate before posting. Use the watch endpoint with different
          prompts for quality scoring, verification, and deep analysis. 10 credits per call.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            Four endpoints
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Watch",
                detail:
                  "Freeform video understanding. Prompt it for quality scoring, verification, or deep analysis — one endpoint, many uses.",
              },
              {
                label: "Extract",
                detail:
                  "Pull frames, audio tracks, and metadata from any video.",
              },
              {
                label: "Transcribe",
                detail:
                  "Speech-to-text for any video. Accurate transcripts your agent can reason over.",
              },
              {
                label: "Check",
                detail:
                  "Validate a video against a spec. Pass/fail gate before publishing.",
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
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What the agent does
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Runs watch + check on every video before posting",
                detail: "Nothing goes live without passing QA.",
              },
              {
                label: "Flags unverifiable claims",
                detail: "Catches claims that could get your account in trouble.",
              },
              {
                label: "Analyzes competitor content",
                detail:
                  "Extracts winning hooks and formats from top performers in your niche.",
              },
              {
                label: "Reviews own post performance",
                detail: "Understands what worked and why.",
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
