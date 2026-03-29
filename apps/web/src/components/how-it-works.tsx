const STEPS = [
  {
    step: "01",
    title: "Top up credits",
    desc: "Pay with any card via Stripe. Each credit costs $0.10.",
  },
  {
    step: "02",
    title: "Order accounts",
    desc: "Create theme pages, fan accounts, or clip pages on TikTok and Instagram.",
  },
  {
    step: "03",
    title: "Generate & post",
    desc: "Create videos with AI, schedule posts, drive traffic to your link.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12 sm:mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {STEPS.map((s) => (
            <div key={s.step} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand/8 text-brand text-sm font-mono font-bold mb-4">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
