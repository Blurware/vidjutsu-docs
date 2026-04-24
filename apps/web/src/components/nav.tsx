"use client";

const LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why scan", href: "#voices" },
  { label: "Who it's for", href: "#who-its-for" },
  { label: "Example", href: "#try-it" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between sm:justify-center h-14 gap-4 sm:gap-8">
        <a href="/" className="text-[15px] font-semibold tracking-[-0.02em]">
          VidJutsu
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-ink-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://docs.vidjutsu.ai/quickstart"
          className="text-[13px] font-medium text-brand hover:text-brand-hover transition-colors shrink-0"
        >
          Get API Key
        </a>
      </div>
    </nav>
  );
}
