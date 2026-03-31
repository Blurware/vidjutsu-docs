import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Hiring a VA",
  description:
    "Why hiring a VA for Instagram costs more than you think — and how VidJutsu lets your agent handle it instead.",
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
            A VA for social media runs $300-500/month. For that you get a human who needs onboarding, training, direction, and daily management. They don't know your niche until you teach them.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The management tax</h2>

          <p>
            A VA doesn't eliminate your involvement — it redirects it. Instead of posting, you're reviewing content, giving feedback, and approving drafts. You traded one type of work for another.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The reliability problem</h2>

          <p>
            VAs get sick, take time off, and sometimes disappear. When they stop posting for 3 days, your page's reach tanks. An API doesn't take days off.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What your agent does instead</h2>

          <p>
            With VidJutsu, your agent manages the page. It QAs your videos, writes captions, schedules posts daily, and manages comments. The account is operated by a real US-based account manager — no VA needed.
          </p>

          <p>
            $59/mo + credits vs $300-500/mo + your management time. No onboarding. No training. No oversight.
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
