import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Generation Skill — VidJutsu",
  description:
    "Agent skill for generating images with optional style transfer via the VidJutsu API.",
};

export default function ImageGeneration() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Image Generation
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Generate images from text prompts with optional style transfer.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through generating images via the VidJutsu API — for thumbnails, post images, or as inputs for video generation.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Collects purpose, style, aspect ratio, and resolution preferences</li>
            <li>Generates images using Nano Banana 2</li>
            <li>Supports style transfer from reference images</li>
            <li>Creates multiple variations for user selection</li>
            <li>Chains into video generation (image-to-video)</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Credits</h2>
          <p>4 credits per image. Supports 1K, 2K, and 4K resolution in PNG or JPG.</p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/api-reference/images/generate" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              API Reference &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
