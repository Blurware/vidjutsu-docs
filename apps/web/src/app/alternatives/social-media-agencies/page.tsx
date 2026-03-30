import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Social Media Agencies",
  description:
    "Why agencies charge $1,000-3,000/month for what an agent can do through VidJutsu's API for $297/month.",
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
            Social media agencies charge $1,000-3,000/month minimum. They're built for established brands with marketing budgets, content approval workflows, and quarterly strategy decks. If you're running a side hustle or an ecom store, that's the wrong tool for the job.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What you're paying for</h2>

          <p>
            Agency pricing covers account managers, content strategists, designers, and reporting. Most of that overhead exists to serve the approval process — the back-and-forth between the agency and the client on every piece of content.
          </p>

          <p>
            If you don't need approvals, strategy decks, or a dedicated account manager, you're paying for services you'll never use.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Speed and volume</h2>

          <p>
            Agencies typically deliver 15-30 posts per month. VidJutsu pages post 60 per month on Starter. The volume difference matters on short-form platforms where consistency drives reach.
          </p>

          <p>
            Agencies also operate on weekly or biweekly content calendars. By the time content is ideated, created, reviewed, revised, and approved, the trend it was based on is already dead. VidJutsu's research loop runs daily.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The contract problem</h2>

          <p>
            Most agencies require 3-6 month contracts. VidJutsu is month-to-month. Cancel anytime. No lock-in, no early termination fees.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">When an agency makes sense</h2>

          <p>
            If you need custom creative direction, brand guidelines enforcement, multi-platform strategy, and human oversight on every post — hire an agency. If you need an Instagram page that posts daily and drives traffic to a link — that's what VidJutsu's API is for.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Agency results at API prices.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
