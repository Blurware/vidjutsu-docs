const STEPS = [
  {
    num: "01",
    title: "Pull the source",
    endpoint: "POST /v1/videos/download/tiktok",
    desc: "Download the trending TikTok clip into a stable VidJutsu asset.",
  },
  {
    num: "02",
    title: "Check cloneability",
    endpoint: "POST /v1/clones/check",
    desc: "Get a verdict (strong, possible, or weak), a 0-100 score, and the evidence behind it.",
  },
  {
    num: "03",
    title: "Build the character",
    endpoint: "POST /v1/characters",
    desc: "Create the character your clone will use for the render.",
  },
  {
    num: "04",
    title: "Generate the starting frame",
    endpoint: "POST /v1/clones/starting-image",
    desc: "Produce a clean starting frame with no overlays or on-screen text.",
  },
  {
    num: "05",
    title: "Render the clone",
    endpoint: "POST /v1/clones/video",
    desc: "Kick off the render. Kling motion-control by default, Seedance as an option. Returns 202 with a task id.",
  },
  {
    num: "06",
    title: "Poll for the result",
    endpoint: "GET /v1/clones/video/{id}",
    desc: "Poll the task until it completes and you get the finished video URL back.",
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
          A link in. A clone out.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16">
          {STEPS.map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-[-0.04em] text-ink-light/40 leading-none mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
              <p className="font-mono text-[11px] text-ink-light mb-2">
                {s.endpoint}
              </p>
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
