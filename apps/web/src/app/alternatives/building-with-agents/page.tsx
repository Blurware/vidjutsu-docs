import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Building It Yourself With Agents",
  description:
    "Why building your own Instagram agent stack is harder than it looks — and how VidJutsu gives your agent the infrastructure out of the box.",
};

export default function BuildingWithAgents() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          VidJutsu vs Building It Yourself
        </h1>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p className="text-base">
            You already have an agent. You could build your own Instagram pipeline — account creation, posting, analytics. The question is whether you should.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What you'd have to build</h2>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Account provisioning.</strong> Creating Instagram accounts programmatically, handling verification, managing credentials.</li>
            <li><strong>Account warming.</strong> New accounts that post immediately get flagged. Warming takes 7 days of organic activity. You build and maintain this yourself.</li>
            <li><strong>Posting infrastructure.</strong> Instagram doesn't have a public video posting API. You need a publishing layer with format handling, rate limits, and retries.</li>
            <li><strong>Shadow ban recovery.</strong> Accounts get suppressed. You need detection and automatic replacement.</li>
            <li><strong>Comment moderation.</strong> Someone needs to manage engagement on the account.</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What VidJutsu replaces</h2>

          <p>
            VidJutsu is the infrastructure layer your agent calls. Account provisioning, warming, posting, QA, analytics, and comment moderation — all through the API. Real US-based account managers handle the account operations. Your agent just makes API calls.
          </p>

          <p>
            You supply the videos. Your agent calls VidJutsu to QA them, write captions, schedule posts, and track performance. No infrastructure to build or maintain.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Skip the infrastructure. Give your agent VidJutsu.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
