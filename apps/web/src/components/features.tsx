const FEATURES = [
  {
    title: "Niche research",
    desc: "Your agent studies what's working in your niche — hooks, formats, topics. Every post is based on real data.",
  },
  {
    title: "2 posts a day",
    desc: "Every day. Your page stays active and consistent without you doing anything.",
  },
  {
    title: "Analytics",
    desc: "Performance data feeds back into research. What gets clicks shapes what gets made next. The page improves every cycle.",
  },
  {
    title: "Human account manager",
    desc: "A US-based account manager creates and posts on the account. Real person, not a bot — less likely to get flagged.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 sm:px-8 py-16 sm:py-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4 text-center">
          What your agent gets
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-12 text-center">
          Everything it needs to run your page
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 max-w-3xl mx-auto">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h3 className="text-[15px] font-semibold mb-2">{f.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
