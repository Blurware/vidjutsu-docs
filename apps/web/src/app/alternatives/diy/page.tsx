import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Doing It Yourself",
  description:
    "Why manually running an Instagram page doesn't scale — and how VidJutsu gives your agent the tools to manage it for you.",
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
            You know you should be posting on Instagram every day. That's 60 posts a month. Each one needs an idea, a video, a caption, and a scheduled publish time. Most people start, post for 2 weeks, get busy, and stop.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The consistency problem</h2>

          <p>
            Consistency is the game on short-form platforms. Miss a few days and the algorithm buries you. Reach drops. The page flatlines. That's what humans are worst at when they have a day job.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What your agent does differently</h2>

          <p>
            With VidJutsu, your agent manages a real Instagram account — provisioned, warmed, and operated by a US-based account manager. You supply the videos. Your agent QAs them, writes captions, schedules posts up to twice a day, and manages comments. It never misses a day.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The numbers</h2>

          <p>
            DIY at 1.5 hours/day = 45 hours/month. VidJutsu: $59/mo subscription + credits for posting. Your agent handles scheduling, QA, and analytics. You just make the videos when you have time.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Let your agent handle the page.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
