import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Scheduling Tools (Later, Buffer, Hootsuite)",
  description:
    "Scheduling tools still require you to make the content. VidJutsu handles research, generation, and posting through a single API.",
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
            Later, Buffer, and Hootsuite solve one problem: publishing content on a schedule. They don't create the content, they don't research your niche, and they don't improve over time. You still do all the work — they just queue it up.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The content bottleneck</h2>

          <p>
            Scheduling tools assume you have content ready to post. That's the hard part. Finding ideas, creating videos, writing captions — that's 90% of the effort. Scheduling the finished product is the easy 10%.
          </p>

          <p>
            If you solve the content problem, scheduling is trivial. VidJutsu solves the content problem.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">No research, no learning</h2>

          <p>
            Buffer doesn't know what's trending in your niche. Later doesn't analyze which hooks are getting engagement. They're calendar tools, not intelligence tools.
          </p>

          <p>
            VidJutsu's research pipeline scrapes and analyzes niche performance on every cycle. Content generation is informed by real data, not your best guess.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">No account management</h2>

          <p>
            Scheduling tools connect to your existing account. They don't provision accounts, don't warm them, and don't manage credentials. VidJutsu handles the full stack — from account creation and warming through posting and analytics.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Composable — or use the full stack</h2>

          <p>
            If you already have a content pipeline and just need distribution, VidJutsu works as the posting and analytics layer. The post endpoint accepts any media URL — generate content however you want and VidJutsu handles account management, warming, posting, and performance tracking.
          </p>

          <p>
            Or use the full stack: research, generation, posting, and analytics through a single API. Every endpoint works independently — use as much or as little as you need.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Skip the calendar. Automate the whole pipeline.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
