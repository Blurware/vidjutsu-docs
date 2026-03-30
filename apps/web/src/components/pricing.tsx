export function Pricing() {
  return (
    <section id="pricing" className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em]">
            Transparent. Cancel anytime.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Starter */}
          <div className="flex flex-col p-6 sm:p-8 border border-border rounded">
            <div className="text-sm font-medium text-ink-muted mb-3">
              Starter
            </div>
            <div className="text-[2.5rem] font-bold tracking-[-0.03em] leading-none mb-1">
              $297
              <span className="text-base font-normal text-ink-muted">/mo</span>
            </div>
            <p className="text-ink-muted text-sm mb-8">
              1 managed Instagram page
            </p>
            <ul className="space-y-2.5 text-sm mb-auto">
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>2 posts per day, every day</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Niche research + content generation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Link in bio tracking</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Learning loop</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Bring your own content</span>
              </li>
            </ul>
            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="block text-center mt-8 px-5 py-2.5 border border-border text-sm font-medium rounded hover:border-ink/30 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Scale */}
          <div className="flex flex-col p-6 sm:p-8 border-2 border-brand rounded relative shadow-[0_0_24px_-4px_rgba(37,99,235,0.3)]">
            <div className="absolute -top-3 left-6 px-2 py-0.5 bg-brand text-white text-[10px] font-medium tracking-[0.1em] uppercase rounded-sm">
              Most popular
            </div>
            <div className="text-sm font-medium text-ink-muted mb-3">
              Scale
            </div>
            <div className="text-[2.5rem] font-bold tracking-[-0.03em] leading-none mb-1">
              $697
              <span className="text-base font-normal text-ink-muted">/mo</span>
            </div>
            <p className="text-ink-muted text-sm mb-8">
              3 managed Instagram pages
            </p>
            <ul className="space-y-2.5 text-sm mb-auto">
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Everything in Starter</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>3 managed Instagram pages</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-ink-light mt-0.5 text-xs">+</span>
                <span>Different link per page (optional)</span>
              </li>
            </ul>
            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="block text-center mt-8 px-5 py-2.5 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>

        <p className="text-ink-muted text-xs mt-6 text-center">
          Need more than 3 pages? Email us for custom pricing.
        </p>
      </div>
    </section>
  );
}
