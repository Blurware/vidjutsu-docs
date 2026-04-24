const FEATURES = [
  {
    title: "Compliance",
    desc: "Scan a video or caption against YouTube, TikTok, Instagram, or Facebook Ads policies. Deterministic 0–100 risk score, verdict, and verbatim policy citations you can verify against the live source.",
  },
  {
    title: "Watch",
    desc: "AI watches your video and answers what you ask. Freeform prompt — no rigid schema, just a question and an answer.",
  },
  {
    title: "Transcribe",
    desc: "Speech-to-text with word-level timing. Know exactly what was said and when.",
  },
  {
    title: "Extract",
    desc: "Pull frames, audio, metadata. Server-side processing — no local install. Auto-select keyframes or request specific counts.",
  },
  {
    title: "Check",
    desc: "Validate specs against built-in rules and your own custom rules. Define rules once, run checks programmatically.",
  },
  {
    title: "Storage",
    desc: "Upload to a global CDN. Organize posts, accounts, assets, and references with AWS-style key-value tags.",
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
          Everything your agent needs to pre-flight and understand video
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
