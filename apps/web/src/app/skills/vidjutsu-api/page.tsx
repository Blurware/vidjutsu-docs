import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu API Skill — VidJutsu",
  description:
    "Agent skill with API endpoint reference and authentication for calling the VidJutsu API.",
};

export default function VidjutsuApi() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          VidJutsu API
        </h1>
        <p className="text-ink-muted text-base mb-8">
          API endpoint reference and authentication for agents calling VidJutsu.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill gives your agent a complete reference for every VidJutsu API endpoint. It covers authentication, credit costs, and all available operations.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What's included</h2>

          <ul className="space-y-2">
            <li>Authentication setup — API key creation via Stripe checkout</li>
            <li>Video, image, and music generation endpoints</li>
            <li>Account provisioning and management</li>
            <li>Post scheduling and campaign orchestration</li>
            <li>Niche research and content scraping</li>
            <li>Media analysis (critic, verify, breakdown modes)</li>
            <li>Balance and credit management</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/api-reference" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              API Reference &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
