const USE_CASES = [
  {
    label: "Running AI-generated ads at volume.",
    desc: "Strikes hit faster than a small team can review. Catch the violation before the platform does so you don't lose the ad account.",
  },
  {
    label: "Managing client ad accounts.",
    desc: "Every creative gets a compliance report before it's submitted. Keep accounts out of multi-day review holds.",
  },
  {
    label: "Launching campaigns with real spend behind them.",
    desc: "A single flagged moment can pause a live campaign. Catch it before you load the budget, not after.",
  },
  {
    label: "Working with UGC creators.",
    desc: "Creators don't read Meta or TikTok policy docs. Your agent reviews their output for you before it touches the ad account.",
  },
  {
    label: "Reducing ad rejection loops.",
    desc: "Instead of fix-and-resubmit until a reviewer is happy, catch everything in one pass. Fix once, submit once.",
  },
];

export function IcpQuotes() {
  return (
    <section
      id="voices"
      aria-label="Use cases"
      className="px-5 sm:px-8 py-14 sm:py-20 bg-surface-alt border-y border-border"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-3">
            Use cases
          </p>
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em]">
            When you'd reach for this.
          </h2>
        </div>

        <ul className="space-y-7">
          {USE_CASES.map((item) => (
            <li key={item.label} className="border-l-2 border-brand/40 pl-5 sm:pl-6">
              <p className="text-ink font-semibold text-base sm:text-lg mb-1.5">
                {item.label}
              </p>
              <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
