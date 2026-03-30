import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storefront Skill — VidJutsu",
  description:
    "Agent skill for running Instagram pages that drive traffic to ecommerce stores.",
};

export default function Storefront() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Storefront
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Drive Instagram traffic to your Shopify, dropshipping, or DTC store.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through setting up a campaign that drives traffic from Instagram pages to your ecommerce store. It handles ICP research, content generation, post scheduling, and performance tracking.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Collects your store URL, product niche, and content style</li>
            <li>Researches 10-15 top-performing accounts in your niche</li>
            <li>Provisions and warms managed Instagram pages</li>
            <li>Builds a content bank of AI-generated or user-supplied videos</li>
            <li>Drafts and schedules posts with optimized captions</li>
            <li>Tracks performance and optimizes each cycle</li>
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
