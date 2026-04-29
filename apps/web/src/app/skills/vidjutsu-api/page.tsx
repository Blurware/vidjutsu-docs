import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "VidJutsu API Skill",
  description:
    "Agent skill with API endpoint reference for watch, extract, transcribe, check, and media analysis.",
};

const RELATED = [
  { name: "Media Analysis", href: "/skills/media-analysis" },
  { name: "Niche Research", href: "/skills/niche-research" },
];

export default function VidjutsuApi() {
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
          VidJutsu API
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-14">
          Scan a video against platform guidelines before you post, plus the
          primitives agents need — watch, extract, transcribe, check.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            What&rsquo;s included
          </h2>
          <div className="space-y-4 max-w-2xl">
            {[
              {
                label: "Watch",
                detail:
                  "Freeform video understanding — submit a URL with any prompt and get structured insight back.",
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
                  "Validate a video against a spec. Pass/fail gate for automated QA.",
              },
              {
                label: "File upload",
                detail:
                  "Upload videos, images, and audio to the VidJutsu CDN.",
              },
              {
                label: "Authentication setup",
                detail:
                  "API key creation via Stripe checkout. Your agent knows how to authenticate.",
              },
              {
                label: "Balance and credit management",
                detail:
                  "Check balance, estimate costs, track usage.",
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
          <CopyCommand command="npx skills add tfcbot/shortform-distribution-skills" />
        </div>
      </div>
    </main>
  );
}
