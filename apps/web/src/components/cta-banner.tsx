export function CtaBanner() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-4">
          Give your agent a page to run
        </h2>
        <p className="text-ink-muted text-sm sm:text-base mb-8">
          API key. Niche. Link. Your agent handles the rest.
        </p>

        <div className="flex justify-center gap-3">
          <a
            href="https://docs.vidjutsu.ai/quickstart"
            className="inline-flex items-center px-5 py-2.5 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
          >
            Get API Key
          </a>
          <a
            href="https://docs.vidjutsu.ai"
            className="inline-flex items-center px-5 py-2.5 text-ink-muted text-sm font-medium hover:text-ink transition-colors"
          >
            Read Docs
          </a>
        </div>
      </div>
    </section>
  );
}
