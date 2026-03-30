import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Products Skill — VidJutsu",
  description:
    "Agent skill for promoting digital products via Instagram pages.",
};

export default function DigitalProducts() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Digital Products
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Promote templates, ebooks, tools, presets, and guides through Instagram.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through running Instagram pages that sell digital products. It researches what content drives purchases in your category and posts daily.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Collects your product URL, category, and content style</li>
            <li>Researches top-performing digital product promotions</li>
            <li>Generates demo, behind-the-scenes, and results-based content</li>
            <li>Provisions managed Instagram pages</li>
            <li>Tracks clicks to your Stan Store, Gumroad, or product page</li>
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
