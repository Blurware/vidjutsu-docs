"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-sm border-b border-border"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-center h-14 gap-8">
        <a href="/" className="text-[15px] font-semibold tracking-[-0.02em]">
          VidJutsu
        </a>
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden sm:block text-[13px] text-ink-muted hover:text-ink transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://docs.vidjutsu.ai/quickstart"
          className="hidden sm:block text-[13px] font-medium text-brand hover:text-brand-hover transition-colors"
        >
          Get API Key
        </a>
      </div>
    </nav>
  );
}
