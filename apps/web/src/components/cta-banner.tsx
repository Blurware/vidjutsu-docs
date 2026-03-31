export function CtaBanner() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-4">
          Give your Claude agent Instagram superpowers
        </h2>
        <p className="text-ink-muted text-sm sm:text-base mb-8">
          Install the CLI. Subscribe. Your agent manages the rest.
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
