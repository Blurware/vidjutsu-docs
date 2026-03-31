import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talking Head Skill — VidJutsu",
  description:
    "Agent skill for creating talking-head short-form videos for Instagram with recording guides, settings, and AI generation via Wavespeed.",
};

export default function TalkingHead() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Talking Head
        </h1>
        <p className="text-ink-muted text-base mb-8">
          The most effective format for niche Instagram pages. One person speaking directly to camera.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill guides your agent through drafting talking-head video posts — with hooks, talking points, settings, and delivery notes. You record the videos, or generate them with Wavespeed and KIE.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What your agent does</h2>

          <ul className="space-y-2">
            <li>Drafts posts with specific hooks, talking points, and visual settings</li>
            <li>Rotates settings across videos: car, living room, office, coffee shop, outdoor</li>
            <li>Includes delivery notes for each video (lean forward, start mid-sentence)</li>
            <li>Guides batch recording — 14 videos in one afternoon</li>
            <li>QAs every video before posting</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">AI generation</h2>

          <p>
            Don't want to record? Your agent can generate starting images with KIE and animate them into videos with Wavespeed (Veo 3.1). You bring the API keys, the skill handles prompt crafting and QA.
          </p>

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
