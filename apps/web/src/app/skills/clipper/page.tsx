import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clipper Skill — VidJutsu",
  description:
    "Agent skill for clipping long-form content into daily Instagram posts.",
};

export default function Clipper() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Clipper
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Clip long-form video content into daily Instagram posts.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through clipping YouTube videos, podcast episodes, or raw footage into short-form Instagram content. It researches your niche, builds clips, and schedules them daily.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Collects your content source — YouTube, podcast, or raw uploads</li>
            <li>Researches top-performing clip formats in your niche</li>
            <li>Creates talking head clips, b-roll montages, tutorial snippets, or quote cards</li>
            <li>Provisions managed Instagram pages</li>
            <li>Schedules 2 posts per day from your content bank</li>
            <li>Tracks what clip styles drive the most traffic to your link</li>
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
