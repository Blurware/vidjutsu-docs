export function Pricing() {
  return (
    <section id="pricing" className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-3">
            $99 to start. $96 a round.
          </h2>
          <p className="text-ink-muted text-sm max-w-md mx-auto">
            No subscriptions. Buy rounds when you're ready. Each round is one week of content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Account */}
          <div className="flex flex-col p-6 sm:p-8 border border-border rounded">
            <div className="text-sm font-medium text-ink-muted mb-3">
              Get started
            </div>
            <div className="text-[2.5rem] font-bold tracking-[-0.03em] leading-none mb-1">
              $99
              <span className="text-base font-normal text-ink-muted"> once</span>
            </div>
            <p className="text-ink-muted text-sm mb-8">
              Managed Instagram account
            </p>
            <ul className="space-y-2.5 text-sm mb-auto">
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Real US-based account manager</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Up to 7 days niche warming</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Shadow ban detection + auto-replace</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Your first round of 14 creative briefs</span>
              </li>
            </ul>
            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="block text-center mt-8 px-5 py-2.5 border border-border text-sm font-medium rounded hover:border-ink/30 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Weekly round */}
          <div className="flex flex-col p-6 sm:p-8 border-2 border-brand rounded shadow-[0_0_24px_-4px_rgba(37,99,235,0.3)] relative">
            <div className="absolute -top-3 left-6 px-2 py-0.5 bg-brand text-white text-[10px] font-medium tracking-[0.1em] uppercase rounded-sm">
              Weekly round
            </div>
            <div className="text-sm font-medium text-ink-muted mb-3">
              Per round
            </div>
            <div className="text-[2.5rem] font-bold tracking-[-0.03em] leading-none mb-1">
              $96
              <span className="text-base font-normal text-ink-muted">/round</span>
            </div>
            <p className="text-ink-muted text-sm mb-8">
              14 posts over 7 days
            </p>
            <ul className="space-y-2.5 text-sm mb-auto">
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>14 researched creative briefs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Video QA on every submission</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>2 posts per day, scheduled and posted</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Weekly performance reflection</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Analytics and insights on demand</span>
              </li>
            </ul>
            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="block text-center mt-8 px-5 py-2.5 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
            >
              Order a Round
            </a>
          </div>
        </div>

        <p className="text-ink-muted text-xs mt-6 text-center">
          ~$384/month if you run every week. Order rounds as needed — no commitment.
        </p>
      </div>
    </section>
  );
}
