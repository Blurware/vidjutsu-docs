import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Management Skill — VidJutsu",
  description:
    "Agent skill for orchestrating multi-account campaigns across Instagram via the VidJutsu API.",
};

export default function CampaignManagement() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Campaign Management
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Orchestrate multi-account campaigns with cost estimation, execution, and tracking.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through the full campaign lifecycle — cost estimation, creation, execution, monitoring, and cancellation with prorated refunds.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Estimates campaign cost before committing credits</li>
            <li>Creates campaigns with 1-50 accounts and 1-20 posts per account</li>
            <li>Executes campaigns — triggers provisioning, warming, content generation, and posting</li>
            <li>Monitors progress across all accounts and posts</li>
            <li>Supports cancellation with prorated credit refunds</li>
            <li>Add-ons: edit slots, comment moderation</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Credits</h2>
          <p>Variable — use the estimate endpoint to calculate cost before creating.</p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/api-reference/campaigns/create" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              API Reference &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
