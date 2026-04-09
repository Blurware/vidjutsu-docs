const FEATURES = [
  {
    title: "Critic",
    desc: "Is this video production quality? Score face consistency, artifacts, motion, and audio. Pass/fail before anything posts.",
  },
  {
    title: "Breakdown",
    desc: "What's in this video? Deep frame-level analysis. Hooks, transitions, pacing, tags.",
  },
  {
    title: "Viral Score",
    desc: "Will this perform? Score content against niche context. Hook strength, pacing, format match, engagement prediction.",
  },
  {
    title: "Agent-Native API",
    desc: "Every response is structured JSON your agent acts on. No dashboards. No UI. Score in, decision out.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 sm:px-8 py-16 sm:py-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4 text-center">
          Capabilities
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-12 text-center">
          Everything your agent needs to evaluate video
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
