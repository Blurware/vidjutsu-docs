const FEATURES = [
  {
    title: "Post management",
    desc: "Your agent schedules posts, writes captions, manages comments, and posts up to twice a day. You just supply the videos.",
  },
  {
    title: "Video QA",
    desc: "Every video you submit goes through quality review before posting. Bad hooks, AI artifacts, weak CTAs — caught before they go live.",
  },
  {
    title: "Managed account",
    desc: "A real US-based account manager provisions and operates the Instagram page. Niche warming, shadow ban detection, auto-replacement.",
  },
  {
    title: "Analytics",
    desc: "Post-level views and engagement data. Your agent tracks what performs and uses it to improve.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 sm:px-8 py-16 sm:py-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4 text-center">
          What your agent does
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-12 text-center">
          Everything your agent needs to grow your page
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
