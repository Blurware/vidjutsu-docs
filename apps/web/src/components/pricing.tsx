export function Pricing() {
  return (
    <section id="pricing" className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-3">
            $59/mo + pay for what your agent uses
          </h2>
        </div>

        <div className="max-w-lg mx-auto border border-border rounded p-6 sm:p-8">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <div className="text-[2rem] font-bold tracking-[-0.03em] leading-none">
                $59
                <span className="text-base font-normal text-ink-muted">/mo</span>
              </div>
              <p className="text-ink-muted text-sm mt-1">Includes 100 credits. Required for API access.</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">$0.10</div>
              <p className="text-ink-muted text-xs">per credit</p>
            </div>
          </div>

          <div className="space-y-0 text-sm border-t border-border">
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-ink-muted">Instagram account</span>
              <span className="font-medium">990 cr · $99</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-ink-muted">Post</span>
              <span className="font-medium">36 cr · $3.60</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-ink-muted">Analyze / QA</span>
              <span className="font-medium">10 cr · $1.00</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-ink-muted">Niche scrape</span>
              <span className="font-medium">10 cr · $1.00</span>
            </div>
          </div>

          <a
            href="https://docs.vidjutsu.ai/quickstart"
            className="block text-center mt-8 px-5 py-2.5 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
          >
            Get API Key
          </a>

          <p className="text-ink-light text-xs mt-4 text-center">
            Your agent subscribes and buys credits via the API. Typical week at 2 posts/day: ~$63 in credits.
          </p>
        </div>
      </div>
    </section>
  );
}
