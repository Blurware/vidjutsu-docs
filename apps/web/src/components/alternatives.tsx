const ALTERNATIVES = [
  {
    name: "Building it yourself with agents",
    summary:
      "You wire up account provisioning, warming, content pipelines, posting, and recovery. VidJutsu is that system already built.",
    gap: "Missing: account warming, shadow ban detection, performance-driven improvement.",
    href: "/alternatives/building-with-agents",
  },
  {
    name: "Doing it yourself",
    summary: "1-2 hours a day, every day. Most people stop in 2 weeks.",
    gap: "Missing: consistency, niche research, performance tracking.",
    href: "/alternatives/diy",
  },
  {
    name: "Hiring a VA",
    summary:
      "$300-500/mo plus your time managing them. They don't know your niche.",
    gap: "Missing: niche intelligence, content generation, self-improving loop.",
    href: "/alternatives/hiring-a-va",
  },
  {
    name: "Social media agencies",
    summary: "$1,000-3,000/mo with contracts. 15-30 posts/month.",
    gap: "Missing: daily posting volume, real-time research, agent automation.",
    href: "/alternatives/social-media-agencies",
  },
];

export function Alternatives() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
            Alternatives
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em]">
            None handle the full loop
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ALTERNATIVES.map((alt) => (
            <a
              key={alt.name}
              href={alt.href}
              className="group block p-5 border border-border rounded hover:border-ink/20 transition-colors"
            >
              <h3 className="text-[15px] font-semibold mb-1.5 group-hover:text-brand transition-colors">
                {alt.name}
              </h3>
              <p className="text-ink-muted text-sm mb-2">{alt.summary}</p>
              <p className="text-[12px] text-ink-light font-mono">{alt.gap}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
