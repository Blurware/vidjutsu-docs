const FEATURES = [
  {
    title: "Compliance",
    desc: "YouTube, TikTok, Instagram, and Meta ad rules in one pass. Your clip gets a risk score and the exact policy quote for each flag.",
  },
  {
    title: "Watch",
    desc: "Ask a plain question about a video. You get an answer based on what is on screen and in the audio.",
  },
  {
    title: "Transcribe",
    desc: "Speech to text with a time stamp for every word.",
  },
  {
    title: "Extract",
    desc: "Pull frames, audio, and metadata from a URL. Nothing to install on your machine.",
  },
  {
    title: "Check",
    desc: "Run your own brief against your own rules. Pass or fail, every time.",
  },
  {
    title: "Storage",
    desc: "Store videos, tag them, and pull them back fast.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 sm:px-8 py-16 sm:py-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4 text-center">
          What you get
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-12 text-center max-w-2xl mx-auto">
          Compliance is the headline. Watch, extract, transcribe, and check fill out the stack.
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
