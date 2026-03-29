import { CopyButton } from "./copy-button";

const INSTALL_CMD = "curl -fsSL https://vidjutsu.ai/install.sh | bash";

export function CtaBanner() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-24 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          Start now
        </h2>
        <p className="text-ink-muted text-sm sm:text-base mb-8">
          Install the CLI and launch your first theme page today.
        </p>

        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-surface-alt text-sm font-mono mb-6">
          <span className="text-brand select-none">$</span>
          <code className="text-ink/70">{INSTALL_CMD}</code>
          <CopyButton text={INSTALL_CMD} />
        </div>

        <div className="flex justify-center gap-3">
          <a
            href="https://docs.vidjutsu.ai"
            className="px-6 py-2.5 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand-dark transition-colors"
          >
            Read Docs
          </a>
          <a
            href="https://docs.vidjutsu.ai/quickstart"
            className="px-6 py-2.5 border border-border text-ink text-sm font-semibold rounded-lg hover:border-ink/30 transition-colors"
          >
            Get API Key
          </a>
        </div>
      </div>
    </section>
  );
}
