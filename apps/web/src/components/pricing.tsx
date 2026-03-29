const CREDIT_COSTS = [
  { name: "Managed account (TikTok)", credits: 32, price: "$24.00" },
  { name: "Managed account (Instagram)", credits: 72, price: "$54.00" },
  { name: "Video generation", credits: 6, price: "$4.50" },
  { name: "Image generation", credits: 4, price: "$3.00" },
  { name: "Music generation", credits: 3, price: "$2.25" },
  { name: "Post scheduling", credits: 3, price: "$2.25" },
  { name: "Media analysis", credits: 1, price: "$0.75" },
];

export function Pricing() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-24 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-4">
          Simple pricing
        </h2>
        <p className="text-ink-muted text-center text-sm sm:text-base mb-12 max-w-md mx-auto">
          $99/month membership. 50 credits included. Additional credits $0.75 each.
        </p>

        {/* Membership card */}
        <div className="border border-brand/20 bg-brand/[0.02] rounded-xl p-6 sm:p-8 mb-8 text-center">
          <div className="text-sm font-medium text-brand mb-2">Membership</div>
          <div className="text-4xl font-bold mb-1">$99<span className="text-lg font-normal text-ink-muted">/mo</span></div>
          <p className="text-ink-muted text-sm mb-4">50 credits included each month</p>
          <div className="flex justify-center gap-4 text-xs text-ink-muted">
            <span>Up to 3 managed accounts</span>
            <span>All API endpoints</span>
            <span>$0.75/credit overage</span>
          </div>
        </div>

        {/* Credit costs table */}
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 bg-surface-alt border-b border-border">
            <h3 className="text-sm font-semibold">Credit costs</h3>
          </div>
          <div className="divide-y divide-border">
            {CREDIT_COSTS.map((item) => (
              <div key={item.name} className="px-5 py-3 flex items-center justify-between">
                <span className="text-sm">{item.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-ink-muted font-mono">{item.credits} credits</span>
                  <span className="text-sm font-medium w-16 text-right">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-ink-muted text-xs mt-4">
          Campaign pricing varies by configuration. Use the estimate endpoint to preview costs.
        </p>
      </div>
    </section>
  );
}
