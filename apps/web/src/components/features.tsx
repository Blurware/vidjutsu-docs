const FEATURES = [
  {
    title: "Compliance",
    desc: "YouTube, TikTok, Instagram, Facebook Ads. We know the rules. Every video gets a risk score and the quote from the rulebook.",
  },
  {
    title: "Watch",
    desc: "Ask any question about a video. Your AI watches. Your AI answers.",
  },
  {
    title: "Transcribe",
    desc: "Turn speech into text. With timings for every word.",
  },
  {
    title: "Extract",
    desc: "Pull frames, audio, and metadata out of a video. No local tools.",
  },
  {
    title: "Check",
    desc: "Run your own rules against a spec. Pass or fail, every time.",
  },
  {
    title: "Storage",
    desc: "Store your videos. Tag them. Find them in a second.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 sm:px-8 py-16 sm:py-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4 text-center">
          What you get
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-12 text-center">
          Six tools. One job: keep you posting.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-5xl mx-auto">
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
