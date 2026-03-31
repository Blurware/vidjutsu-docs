const STEPS = [
  {
    num: "01",
    title: "Upgrade your Claude agent with VidJutsu",
    desc: "Install the CLI and skills. Your agent gets the ability to manage Instagram pages, post content, and track performance.",
  },
  {
    num: "02",
    title: "Account warms up",
    desc: "Your agent provisions a managed Instagram account. It warms into your niche for up to 7 days before any content goes live.",
  },
  {
    num: "03",
    title: "Schedule your videos",
    desc: "Submit your videos. Your agent QAs them, writes captions, posts up to twice a day, and manages comments.",
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
