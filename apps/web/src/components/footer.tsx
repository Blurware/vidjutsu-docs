export function Footer() {
  return (
    <footer className="border-t border-border px-5 sm:px-8 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-semibold text-ink/30">VidJutsu</span>
        <nav className="flex gap-6">
          <a href="https://docs.vidjutsu.ai" className="text-sm text-ink-muted hover:text-ink transition-colors">Docs</a>
          <a href="https://github.com/tfcbot/vidjutsu-cli" className="text-sm text-ink-muted hover:text-ink transition-colors">GitHub</a>
          <a href="https://docs.vidjutsu.ai/api-reference" className="text-sm text-ink-muted hover:text-ink transition-colors">API</a>
        </nav>
      </div>
    </footer>
  );
}
