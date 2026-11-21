import { COMPARISONS } from "@/lib/compare";

export const APP_URL = "https://app.vidjutsu.ai";
export const DOCS_URL = "https://docs.vidjutsu.ai";

function Logo({ href }: { href: string }) {
  return <a className="vl-logo" href={href}><b>VJ</b>vidjutsu</a>;
}

export function SiteNav({ home = false }: { home?: boolean }) {
  return (
    <nav className="vl-nav" aria-label="Primary navigation">
      <Logo href={home ? "#main" : "/"} />
      <div>
        <a href={home ? "#pricing" : "/#pricing"}>Pricing</a>
        <a href={DOCS_URL}>Docs</a>
        <a className="vl-signin" href={APP_URL}>Sign in</a>
      </div>
    </nav>
  );
}

export function SiteFooter({ home = false }: { home?: boolean }) {
  return (
    <footer className="vl-footer">
      <div><Logo href={home ? "#main" : "/"} /><p>Give your agent a video editor.</p></div>
      <nav aria-label="Product"><b>Product</b><a href={APP_URL}>App</a><a href={DOCS_URL}>Docs</a><a href={`${DOCS_URL}/mcp`}>For agents</a><a href={home ? "#pricing" : "/#pricing"}>Pricing</a></nav>
      <nav aria-label="Comparisons"><b>Compare</b>{COMPARISONS.map((c) => <a key={c.slug} href={`/compare/${c.slug}`}>vs {c.name}</a>)}</nav>
      <nav aria-label="Company"><b>Company</b><a href="/contact">Contact</a><a href={`${DOCS_URL}/legal/terms`}>Terms</a></nav>
    </footer>
  );
}
