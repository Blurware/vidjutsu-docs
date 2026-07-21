export function Hero() {
  return (
    <section className="px-5 sm:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-5">
            Clone viral videos
          </p>

          <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-5 max-w-2xl mx-auto">
            Your agent can clone viral videos now
          </h1>

          <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-9 max-w-lg mx-auto">
            Set up your character once. Then point your agent at any video
            that is already working, and it clones that character into it,
            ready to post.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://docs.vidjutsu.ai/get-api-key"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white text-sm font-semibold rounded hover:bg-brand-hover transition-colors"
            >
              Get API Key
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
