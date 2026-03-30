import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Management Skill — VidJutsu",
  description:
    "Agent skill for provisioning, warming, and managing Instagram and TikTok accounts via the VidJutsu API.",
};

export default function AccountManagement() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Account Management
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Provision, warm, and manage Instagram and TikTok accounts. Real account managers, not bots.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through the full account lifecycle — provisioning, warming, health monitoring, and shadow ban recovery.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Provisions managed accounts on Instagram or TikTok</li>
            <li>Monitors the 7-day warming period before posting begins</li>
            <li>Detects shadow bans and automatically replaces affected accounts</li>
            <li>Manages up to 3 accounts per user, each with different niches and links</li>
            <li>Tracks account health and engagement metrics</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Credits</h2>
          <p>32 credits per account. Covers provisioning, warming, and ongoing management by a US-based account manager.</p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/api-reference/accounts/create" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              API Reference &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
