const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    calls: "50 calls/mo",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    calls: "2,000 calls/mo",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$99",
    period: "/mo",
    calls: "10,000 calls/mo",
    highlight: false,
  },
  {
    name: "Unlimited",
    price: "$249",
    period: "/mo",
    calls: "Unlimited calls",
    highlight: false,
  },
];

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
            Start free. Scale when you need to.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded border ${
                tier.highlight
                  ? "border-brand bg-brand/5"
                  : "border-border"
              }`}
            >
              <div className="mb-4">
                <h3 className="text-sm font-medium text-ink-muted mb-2">
                  {tier.name}
                </h3>
                <div className="text-[2rem] font-bold tracking-[-0.03em] leading-none">
                  {tier.price}
                  <span className="text-base font-normal text-ink-muted">
                    {tier.period}
                  </span>
                </div>
              </div>
              <p className="text-ink-muted text-sm">{tier.calls}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://docs.vidjutsu.ai/quickstart"
            className="inline-flex items-center px-5 py-2.5 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
          >
            Get API Key
          </a>
          <p className="text-ink-light text-xs mt-4">
            All tiers include critic, breakdown, viral score, and storage endpoints.
          </p>
        </div>
      </div>
    </section>
  );
}
