import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Generation Skill — VidJutsu",
  description:
    "Agent skill for generating background music and audio tracks via the VidJutsu API.",
};

export default function MusicGeneration() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Music Generation
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Generate background music and audio tracks from text descriptions. Powered by Suno V5.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through generating music via the VidJutsu API — mood selection, instrumental vs vocal modes, and building a reusable music library.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Collects mood, genre, and vocal preferences</li>
            <li>Generates instrumental or vocal tracks</li>
            <li>Builds a music library across different moods for brand consistency</li>
            <li>Pairs generated tracks with videos</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Credits</h2>
          <p>3 credits per track — the cheapest generation type.</p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/api-reference/music/generate" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              API Reference &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
