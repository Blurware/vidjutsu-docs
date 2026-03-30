import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Skill — VidJutsu",
  description:
    "Agent skill for driving app downloads and signups via Instagram pages.",
};

export default function MobileApp() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Mobile App
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Drive app downloads and signups through Instagram.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through running Instagram pages that drive installs for your mobile app. It researches what app promo content performs and posts daily.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Collects your app store URL, category, and target audience</li>
            <li>Researches successful app promotion strategies on Instagram</li>
            <li>Generates feature demos, use-case videos, and social proof content</li>
            <li>Provisions managed Instagram pages</li>
            <li>Tracks link clicks to your app store listing</li>
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
