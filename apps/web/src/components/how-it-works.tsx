const STEPS = [
  {
    num: "01",
    title: "Paste your video URL",
    desc: "Send the hosted file you plan to publish. No upload drama — one URL is enough.",
  },
  {
    num: "02",
    title: "We scan the whole clip",
    desc: "We watch your video and check it against hundreds of platform rules for the network you pick.",
  },
  {
    num: "03",
    title: "Fix it, then post",
    desc: "You get a risk score, plain reasons, and the policy line behind each flag — before you hit publish.",
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
          URL in. Risk out. Then you ship.
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
