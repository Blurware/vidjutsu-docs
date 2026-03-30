import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Analysis Skill — VidJutsu",
  description:
    "Agent skill for analyzing video and image content with critic, verify, and breakdown modes via the VidJutsu API.",
};

export default function MediaAnalysis() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Media Analysis
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Analyze content with critic, verify, and breakdown modes. Quality gate before posting.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through analyzing media content via the VidJutsu API — quality checks before posting, claim verification, and frame-by-frame competitor analysis.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Three modes</h2>

          <ul className="space-y-2">
            <li><strong>Critic</strong> — Quality analysis of any video or image. Use before posting to catch issues.</li>
            <li><strong>Verify</strong> — Fact-checking and claim verification. Essential for regulated niches.</li>
            <li><strong>Breakdown</strong> — Frame-by-frame analysis powered by Gemini. Identifies hooks, transitions, and engagement patterns.</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Runs critic on every generated video before presenting to the user</li>
            <li>Flags unverifiable claims before posting</li>
            <li>Analyzes competitor content to extract winning hooks and formats</li>
            <li>Reviews own post performance to understand what worked</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Credits</h2>
          <p>1 credit per analysis — cheap enough to analyze everything.</p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/api-reference/analyze/analyze" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              API Reference &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
