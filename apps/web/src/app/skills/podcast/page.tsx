import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Skill — VidJutsu",
  description:
    "Agent skill for creating podcast-style short-form clips for Instagram — solo or duo, from scratch or existing episodes.",
};

export default function Podcast() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Podcast
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Create podcast-style clips for Instagram — solo or duo, from scratch or existing episodes.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill guides your agent through creating podcast-format short-form videos. Microphone visible, conversational tone, caption overlays. Record them yourself or generate with Wavespeed and KIE.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What your agent does</h2>

          <ul className="space-y-2">
            <li>Drafts posts with hooks optimized for podcast format (bold claims, hot takes)</li>
            <li>Guides solo or duo recording setup</li>
            <li>Clips from existing podcast episodes if you have them</li>
            <li>Suggests caption overlays for key quotes</li>
            <li>QAs audio quality, framing, and hook delivery</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">AI generation</h2>

          <p>
            Your agent can generate podcast-style starting images with KIE (desk + microphone scenes) and animate them with Wavespeed (Veo 3.1). Useful for creating visual variety without recording new footage.
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
