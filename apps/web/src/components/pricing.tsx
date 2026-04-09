export function Pricing() {
  return (
    <section id="pricing" className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-3">
            Simple, predictable pricing
          </h2>
          <p className="text-ink-muted text-sm">
            One plan. No tiers to compare.
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

            <ul className="space-y-3 text-sm text-ink-muted mb-6">
              <li className="flex justify-between">
                <span>Included credits</span>
                <span className="font-medium text-ink">1,000/mo</span>
              </li>
              <li className="flex justify-between">
                <span>Watch</span>
                <span className="font-medium text-ink">10 credits/call</span>
              </li>
              <li className="flex justify-between">
                <span>Extract</span>
                <span className="font-medium text-ink">5 credits/call</span>
              </li>
              <li className="flex justify-between">
                <span>Transcribe</span>
                <span className="font-medium text-ink">10 credits/call</span>
              </li>
              <li className="flex justify-between">
                <span>Check</span>
                <span className="font-medium text-ink">5 credits/call</span>
              </li>
              <li className="flex justify-between">
                <span>Upload / accounts / posts</span>
                <span className="font-medium text-ink">0 credits</span>
              </li>
              <li className="flex justify-between">
                <span>Additional credits</span>
                <span className="font-medium text-ink">$0.10 each</span>
              </li>
            </ul>

            <p className="text-xs text-ink-light mb-6">
              That&apos;s ~100 video analyses per month included.
            </p>

            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="block w-full text-center px-5 py-2.5 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
            >
              Get API Key
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
