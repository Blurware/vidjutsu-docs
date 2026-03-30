import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reflect Skill — VidJutsu",
  description:
    "Agent skill for reviewing campaign analytics and generating performance reports.",
};

export default function Reflect() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Reflect
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Review analytics and generate a performance report for your next content cycle.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through reviewing campaign analytics and post performance. It identifies what worked, what didn't, and generates recommendations for the next cycle.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Pulls performance data across all managed accounts</li>
            <li>Identifies top-performing posts by views, clicks, and engagement</li>
            <li>Analyzes which content styles, hooks, and topics converted best</li>
            <li>Generates a comprehensive report with specific recommendations</li>
            <li>Feeds insights back into the next content generation cycle</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
