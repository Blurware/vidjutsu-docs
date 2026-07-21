const STEPS = [
  {
    num: "01",
    title: "Pull the source",
    desc: "Scrape or download a public TikTok or Instagram post into a stable asset.",
  },
  {
    num: "02",
    title: "Watch, transcribe, or check",
    desc: "Ask what's in the video, get a word-level transcript, or run a compliance check.",
  },
  {
    num: "03",
    title: "Overlay and verify",
    desc: "Burn the final overlay or disclaimer, poll the durable job, and review the output.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 sm:px-8 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-3 text-center">
          How it works
        </p>
        <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-10 text-center max-w-md mx-auto">
          Source in. Verified output out.
        </h2>

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
