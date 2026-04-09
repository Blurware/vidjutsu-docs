const STEPS = [
  {
    num: "01",
    title: "Upload or pass a video URL",
    desc: "Send any video to the API. Direct upload or a public URL — both work.",
  },
  {
    num: "02",
    title: "VidJutsu analyzes it",
    desc: "Run critic for quality scoring, breakdown for deep content analysis, or viral score for performance prediction.",
  },
  {
    num: "03",
    title: "Get actionable feedback",
    desc: "Structured results your agent acts on. Pass/fail gates, frame-level tags, engagement scores — all machine-readable.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-10 text-center">
          How it works
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16">
          {STEPS.map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-[-0.04em] text-ink-light/40 leading-none mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
