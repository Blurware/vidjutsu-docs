const STEPS = [
  {
    num: "01",
    title: "Send a URL or text",
    desc: "Point us at a hosted video, or paste a prompt, script, caption, or ad line you plan to use.",
  },
  {
    num: "02",
    title: "We run the deep check",
    desc: "For compliance, we watch the full video and stack it next to hundreds of platform rules. Other tools do watch, extract, transcribe, or custom checks.",
  },
  {
    num: "03",
    title: "Read the report, then post",
    desc: "You get a risk score, reasons in plain language, and citations — so you fix issues before the upload button.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4 text-center">
          How it works
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-10 text-center max-w-xl mx-auto">
          Three steps from file to clear go / no-go
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
