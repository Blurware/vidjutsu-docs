import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Scheduling Tools (Later, Buffer, Hootsuite)",
  description:
    "Scheduling tools queue content. VidJutsu gives your agent managed accounts with QA, posting, analytics, and comment moderation.",
};

export default function SchedulingTools() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          VidJutsu vs Scheduling Tools
        </h1>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p className="text-base">
            Later, Buffer, and Hootsuite solve one problem: publishing content on a schedule. They don't provision accounts, don't warm them, don't QA your videos, and don't manage comments. You still do all the work — they just queue it up.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">No account management</h2>

          <p>
            Scheduling tools connect to your existing account. They don't provision new accounts, don't handle warming, and don't recover from shadow bans. VidJutsu handles the full lifecycle — account creation, niche warming, posting, and auto-replacement if flagged.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">No quality control</h2>

          <p>
            Buffer doesn't review your video before posting. VidJutsu's QA catches bad hooks, AI artifacts, and weak CTAs before anything goes live. Your agent runs every video through review.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Built for agents, not humans</h2>

          <p>
            Scheduling tools are dashboards designed for humans to click through. VidJutsu is an API designed for agents to call. Your agent provisions accounts, schedules posts, and reads analytics programmatically. No UI needed.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Your agent doesn't need a dashboard.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
