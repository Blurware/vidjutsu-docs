export function Pricing() {
  return (
    <section id="pricing" className="px-5 sm:px-8 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-3">
            Pricing
          </p>
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-2">
            $99 / month. API access.
          </h2>
          <p className="text-ink-muted text-sm max-w-md mx-auto">
            Flat subscription. Daily limits per endpoint — see docs for current
            numbers. Compliance video scans have their own daily cap.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="p-8 rounded border border-brand bg-brand/5">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-ink-muted mb-2">
                Pro
              </h3>
              <div className="text-[2.5rem] font-bold tracking-[-0.03em] leading-none">
                $99
                <span className="text-base font-normal text-ink-muted">
                  /mo
                </span>
              </div>
            </div>

            <p className="text-sm text-ink-muted mb-6 leading-relaxed">
              Full API access for your stack. Use it as a gate before anything goes
              public on YouTube, TikTok, Instagram, or Meta ads.
            </p>

            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="block w-full text-center px-5 py-2.5 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
            >
              Get API Key
            </a>
            <p className="text-xs text-ink-light mt-4 text-center">
              <a
                href="https://docs.vidjutsu.ai/credits-and-billing"
                className="underline hover:text-ink-muted transition-colors"
              >
                Rate limits and billing details
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
