const FEATURES = [
  {
    title: "Weekly creative briefs",
    desc: "14 talking points mapped to your product across every level of buyer awareness. Your agent writes the brief, you make the videos.",
  },
  {
    title: "Video QA",
    desc: "Every video you submit goes through quality review before posting. Bad hooks, AI artifacts, weak CTAs — caught before they go live.",
  },
  {
    title: "Managed account + daily posting",
    desc: "A real US-based account manager runs the Instagram page. Your agent schedules 2 posts a day, every day.",
  },
  {
    title: "Analytics and weekly reflection",
    desc: "Post-level performance data. What drove clicks, what flopped, and why. Your agent uses it to write a sharper brief next round.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 sm:px-8 py-16 sm:py-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4 text-center">
          What your agent does
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-12 text-center">
          Your creative director that never sleeps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 max-w-3xl mx-auto">
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
