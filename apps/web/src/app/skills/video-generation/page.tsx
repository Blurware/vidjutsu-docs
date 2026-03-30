import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Generation Skill — VidJutsu",
  description:
    "Agent skill for generating short-form videos from text or images via the VidJutsu API.",
};

export default function VideoGeneration() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Video Generation
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Generate short-form videos from text prompts or images. Powered by Veo 3.1.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through generating videos via the VidJutsu API — prompt crafting, model selection, quality validation, and batch generation for content banks.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Collects niche, video style, and aspect ratio preferences</li>
            <li>Crafts niche-matched prompts (UGC, animation, slideshow, product showcase)</li>
            <li>Generates videos using Veo 3.1 or Veo 3.1-fast</li>
            <li>Runs critic analysis on each video before presenting</li>
            <li>Batch generates content banks (14+ videos for a week of 2/day posting)</li>
            <li>Supports text-to-video and image-to-video modes</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Credits</h2>
          <p>6 credits per video.</p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/api-reference/videos/generate" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              API Reference &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
