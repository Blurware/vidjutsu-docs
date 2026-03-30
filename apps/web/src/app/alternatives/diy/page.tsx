import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Doing It Yourself",
  description:
    "Why manually running an Instagram page doesn't scale — and how VidJutsu automates the entire pipeline through a single API.",
};

export default function Diy() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          VidJutsu vs Doing It Yourself
        </h1>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p className="text-base">
            You know you should be posting on Instagram every day. Twice a day, ideally. That's 60 posts a month. Each one needs an idea, a video, a caption, and a scheduled publish time. Do the math on your time and it's 1-2 hours daily.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The consistency problem</h2>

          <p>
            Most people start a page, post for 2 weeks, get busy, and stop. The algorithm notices immediately. Reach drops. The page flatlines. Starting over means warming a dead account from scratch.
          </p>

          <p>
            Consistency is the entire game on short-form platforms. Not creativity, not production quality — just showing up every day. That's exactly what humans are worst at when they have a day job.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The research problem</h2>

          <p>
            Even if you post consistently, you're guessing at what works. Scrolling your niche, trying to spot patterns, copying formats you think are performing. You're doing qualitative research by feel instead of quantitative research at scale.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What agents do differently</h2>

          <p>
            An agent using VidJutsu doesn't get tired, doesn't get busy, and doesn't guess. It calls the scrape endpoint to study what's performing. It calls the generate endpoint to make content matched to those patterns. It calls the post endpoint twice a day, every day. It never misses.
          </p>

          <p>
            Your time goes to building your business. The page runs on infrastructure, not willpower.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The numbers</h2>

          <p>
            DIY at 1.5 hours/day = 45 hours/month. At any reasonable hourly rate, that's $1,000+ worth of your time for a task that an agent handles for $297/month through the API.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Let your agent handle it.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
