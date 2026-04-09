const ALTERNATIVES = [
  {
    name: "No QA at all",
    summary:
      "Your agent generates and posts without checking. Bad hooks, AI artifacts, and off-brand content go live uncaught.",
    gap: "Missing: quality gates, content analysis, performance prediction.",
    href: "/alternatives/no-qa",
  },
  {
    name: "Manual QA review",
    summary:
      "A human watches every video before it posts. Doesn't scale, blocks your pipeline, and adds hours of latency.",
    gap: "Missing: automation, structured feedback, agent-readable output.",
    href: "/alternatives/manual-review",
  },
  {
    name: "VidIQ",
    summary:
      "Built for humans managing YouTube channels. Dashboard-first, no API, no agent integration.",
    gap: "Missing: API access, video quality scoring, agent-native workflow.",
    href: "/alternatives/vidiq",
  },
  {
    name: "Building it yourself",
    summary:
      "Wire up vision models, prompt engineering, scoring logic, and storage. Weeks of work before you ship anything.",
    gap: "Missing: battle-tested scoring, niche context, maintained endpoints.",
    href: "/alternatives/building-yourself",
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
            None give your agent structured video feedback
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
