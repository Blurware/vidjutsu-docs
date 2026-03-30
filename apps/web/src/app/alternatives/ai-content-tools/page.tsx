import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs AI Content Tools (Opus Clip, Pictory, Descript)",
  description:
    "AI content tools generate clips but you still have to post them. VidJutsu handles the full pipeline from research to posting through a single API.",
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
            Opus Clip, Pictory, Descript, and similar tools are good at one thing: turning long-form content into short-form clips. But they stop there. You still have to review the output, pick which clips to use, write captions, and post them manually.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">They solve generation, not distribution</h2>

          <p>
            AI content tools generate assets. They don't manage accounts, don't warm them, don't schedule posts, and don't track attribution. The gap between "generated a clip" and "that clip is live on Instagram driving traffic to my link" is where all the real work lives.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">No niche intelligence</h2>

          <p>
            These tools don't know what's performing in your niche. They clip whatever content you feed them based on engagement signals within that video (pauses, hooks, captions). They're not studying the broader niche to inform what content should be made in the first place.
          </p>

          <p>
            VidJutsu's research pipeline scrapes what's working across the niche — not just within your existing content. Generation is informed by external performance data, not just internal signals.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Still requires a human in the loop</h2>

          <p>
            With Opus Clip or Pictory, someone still needs to: upload source content, review generated clips, select the best ones, write captions, download the finals, open Instagram, and post them. That's a human workflow.
          </p>

          <p>
            VidJutsu is an API. Your agent calls the endpoints. No human in the loop. Research, generate, post, track — all programmatic.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Composable — use them together</h2>

          <p>
            VidJutsu is designed to work alongside these tools, not replace them. If your agent already generates clips with Opus Clip, Pictory, Fal, or Wavespeed — post them through VidJutsu. The post endpoint accepts any media URL. Use whatever generation tool you want. VidJutsu handles the account management, warming, posting, performance analysis, and tracking layer.
          </p>

          <p>
            Generate anywhere. Distribute through VidJutsu. Every endpoint works independently — use the full stack or just the parts you need.
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
