const STEPS = [
  {
    num: "01",
    title: "Drop your link",
    desc: "Your store, community, booking page — wherever you want traffic.",
  },
  {
    num: "02",
    title: "Pick a niche",
    desc: "Choose your niche and video style. Your agent sets both via the API.",
  },
  {
    num: "03",
    title: "Agent runs the loop",
    desc: "Research. Generate. Post twice a day. Track performance. Improve. Repeat.",
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
