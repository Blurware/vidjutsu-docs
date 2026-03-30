import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Hiring a VA",
  description:
    "Why hiring a virtual assistant for Instagram management costs more than you think — and how VidJutsu's API replaces the entire workflow.",
};

export default function HiringAVa() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          VidJutsu vs Hiring a VA
        </h1>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p className="text-base">
            A virtual assistant for social media runs $300-500/month. For that you get a human who needs onboarding, training, direction, and management. They don't know your niche until you teach them.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The management tax</h2>

          <p>
            A VA doesn't eliminate your involvement — it redirects it. Instead of posting, you're reviewing content, giving feedback, answering questions, and approving drafts. You traded one type of work for another.
          </p>

          <p>
            The promise is "hands off." The reality is 30-60 minutes a day managing someone who still needs guidance on what to post, when to post, and what voice to use.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The niche knowledge gap</h2>

          <p>
            Your VA doesn't know what's trending in your niche right now. They're not scraping top-performing content daily. They're not analyzing which hooks get engagement. They're posting what seems right based on general social media intuition.
          </p>

          <p>
            VidJutsu's research pipeline scrapes and analyzes niche performance data on every cycle. Every post is informed by what's actually working, not what a human thinks might work.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The reliability problem</h2>

          <p>
            VAs get sick, take time off, miscommunicate, and sometimes just disappear. When your VA stops posting for 3 days, your page's reach tanks. An API doesn't take days off.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Cost comparison</h2>

          <p>
            VA: $300-500/month + your management time. VidJutsu Starter: $297/month + zero management time. Your agent calls the API. No onboarding, no training, no oversight.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Replace the VA with an API call.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
