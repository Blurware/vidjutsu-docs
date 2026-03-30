import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niche Research Skill — VidJutsu",
  description:
    "Agent skill for scraping and analyzing top-performing content across TikTok, Instagram, and YouTube.",
};

export default function NicheResearch() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Niche Research
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Scrape and analyze what's working across TikTok, Instagram, and YouTube.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through researching niche content performance — finding ICP accounts, analyzing hooks and formats, and building a data-driven content strategy.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Searches for top-performing accounts across TikTok, Instagram, and YouTube</li>
            <li>Runs frame-by-frame breakdown on top content to identify hooks and transitions</li>
            <li>Extracts YouTube transcripts for long-form analysis</li>
            <li>Compiles a research brief: winning hooks, formats, posting patterns, content gaps</li>
            <li>Schedules periodic re-research as trends shift</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Credits</h2>
          <p>1 credit per scrape request — cheap enough to research aggressively.</p>

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
