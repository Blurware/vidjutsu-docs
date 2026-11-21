import type { ReactNode } from "react";
import { SiteFooter, SiteNav } from "@/components/site-nav";

/* A short page in the site style: nav, one card in the middle, footer. */
export function SimplePage({ badge, eyebrow, title, children }: { badge?: "ok" | "off"; eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <main className="vl" id="main">
      <div className="vl-wrap">
        <SiteNav />
        <section className="vl-simple">
          <div className="vl-card">
            {badge && (
              <span className={badge === "ok" ? "vl-badge" : "vl-badge off"} aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={badge === "ok" ? "M5 12.5l4.5 4.5L19 7.5" : "M6 6l12 12M18 6L6 18"} />
                </svg>
              </span>
            )}
            {eyebrow && <span className="vl-eyebrow">{eyebrow}</span>}
            <h1>{title}</h1>
            {children}
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
