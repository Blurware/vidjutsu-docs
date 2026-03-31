import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Social Media Agencies",
  description:
    "Agencies charge $1,000-3,000/month. VidJutsu gives your agent managed Instagram pages for $59/mo + credits.",
};

export default function SocialMediaAgencies() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          VidJutsu vs Social Media Agencies
        </h1>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p className="text-base">
            Agencies charge $1,000-3,000/month minimum with 3-6 month contracts. They're built for brands with marketing budgets and approval workflows. If you're running a side hustle or ecom store, that's the wrong tool.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What you're paying for</h2>

          <p>
            Agency pricing covers account managers, content strategists, designers, and reporting. Most of that overhead exists to serve the approval process. If you don't need approvals and strategy decks, you're paying for services you'll never use.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Speed and volume</h2>

          <p>
            Agencies deliver 15-30 posts per month. Your agent with VidJutsu posts up to 60. Agencies operate on weekly content calendars — by the time content is approved, the trend is dead.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">VidJutsu's model</h2>

          <p>
            $59/mo subscription + credits. No contracts. Your agent manages the page via API — QA, captions, posting, analytics, comment moderation. You supply the videos. Account operated by a real US-based account manager.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Agency-level management at API prices.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
