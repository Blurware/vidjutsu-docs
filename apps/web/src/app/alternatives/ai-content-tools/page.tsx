import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs AI Content Tools (Opus Clip, Pictory, Descript)",
  description:
    "AI content tools generate clips. VidJutsu gives your agent managed accounts, QA, posting, analytics, and comment moderation.",
};

export default function AiContentTools() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          VidJutsu vs AI Content Tools
        </h1>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p className="text-base">
            Opus Clip, Pictory, and Descript are good at one thing: generating video clips. But they stop there. You still have to review output, write captions, manage accounts, and post manually.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">They solve generation, not distribution</h2>

          <p>
            AI content tools create assets. They don't manage Instagram accounts, don't warm them, don't schedule posts, don't QA content, and don't moderate comments. The gap between "generated a clip" and "that clip is driving traffic on Instagram" is where VidJutsu lives.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Use them together</h2>

          <p>
            VidJutsu doesn't generate videos — you do, with whatever tool you want. Generate clips with Opus Clip, Wavespeed, KIE, or your phone. Then submit them to VidJutsu. Your agent QAs every video, writes captions, schedules posts, and tracks performance.
          </p>

          <p>
            Generate anywhere. Distribute through VidJutsu.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Built for agents</h2>

          <p>
            Content tools are designed for humans in a browser. VidJutsu is an API your agent calls. No uploads, no dashboards, no clicking. Your agent submits a video URL, VidJutsu handles the rest.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Generate anywhere. Post through VidJutsu.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
