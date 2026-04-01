import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Media Analysis Skill — VidJutsu",
  description:
    "Agent skill for analyzing video and image content with critic, verify, and breakdown modes via the VidJutsu API.",
};

const RELATED = [
  { name: "Niche Research", href: "/skills/niche-research" },
  { name: "Talking Head", href: "/skills/talking-head" },
  { name: "Campaign Management", href: "/skills/campaign-management" },
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
          Quality gate before posting. Analyze content with critic, verify, and
          breakdown modes. 1 credit per analysis.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            Three modes
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Critic",
                detail:
                  "Quality analysis of any video or image. Catches bad hooks, AI artifacts, and weak CTAs before posting.",
              },
              {
                label: "Verify",
                detail:
                  "Fact-checking and claim verification. Essential for regulated niches.",
              },
              {
                label: "Breakdown",
                detail:
                  "Frame-by-frame analysis powered by Gemini. Identifies hooks, transitions, and engagement patterns in competitor content.",
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
                label: "Runs critic on every video before posting",
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
