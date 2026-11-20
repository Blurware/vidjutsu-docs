export const APP_URL = "https://app.vidjutsu.ai";

export function SiteNav({ home = false }: { home?: boolean }) {
  const at = (hash: string) => (home ? hash : `/${hash}`);
  return (
    <nav className="vj-nav" aria-label="Primary navigation">
      <a className="vj-wordmark" href={home ? "#main" : "/"}><b>VJ</b> vidjutsu</a>
      <div>
        <a href={at("#use-cases")}>Use cases</a>
        <a href={at("#features")}>Features</a>
        <a href="/compare">Compare</a>
        <a href={at("#pricing")}>Pricing</a>
        <a href="https://docs.vidjutsu.ai">Docs ↗</a>
      </div>
      <a className="vj-nav-access" href={APP_URL}><i /> Open the app</a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="vj-footer vj-frame">
      <a href="/"><b>VJ</b> vidjutsu</a>
      <p>Simple video editing for agents.</p>
      <div>
        <a href={APP_URL}>App</a>
        <a href="https://docs.vidjutsu.ai">Docs</a>
        <a href="/compare">Compare</a>
        <a href="https://docs.vidjutsu.ai/pricing">Pricing</a>
        <a href="/contact">Contact</a>
        <a href="https://docs.vidjutsu.ai/legal/terms">Terms</a>
      </div>
    </footer>
  );
}
