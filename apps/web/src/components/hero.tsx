export function Hero() {
  return (
    <section className="px-5 sm:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-5">
            Video editing for agents
          </p>

          <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-5 max-w-2xl mx-auto">
            Your agent can edit video now
          </h1>

          <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-9 max-w-lg mx-auto">
            Upload your takes. Your agent cuts them on a timeline that keeps
            every revision, then renders 1080p or 4K on cloud machines. One
            API, a CLI and MCP. No editor to click through.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="vj-hero-primary inline-flex items-center justify-center px-6 py-3 bg-brand text-sm font-semibold rounded hover:bg-brand-hover transition-colors"
            >
              Get started
            </a>
            <a
              href="https://docs.vidjutsu.ai"
              className="inline-flex items-center justify-center px-6 py-3 text-ink-muted text-sm font-medium hover:text-ink transition-colors"
            >
              Read Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
