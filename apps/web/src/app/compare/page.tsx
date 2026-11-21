import type { Metadata } from "next";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { COMPARISONS } from "@/lib/compare";

export const metadata: Metadata = {
  title: "Compare",
  description: "How VidJutsu compares with Descript, DaVinci Resolve, Premiere Pro, Final Cut Pro and CapCut: other editors sell AI as plugins or per-action credits, VidJutsu works with the agent you already pay for.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return (
    <main className="vl" id="main">
      <div className="vl-wrap">
        <SiteNav />
        <header className="vl-page-hero">
          <span className="vl-eyebrow">Compare</span>
          <h1>Other editors sell you AI. VidJutsu works with yours.</h1>
          <p>Most editors sell AI as plugins or credits per action. VidJutsu uses the AI plan you already pay for. You pay only for rendering and storage.</p>
        </header>
        <section className="vl-compare-index">
          {COMPARISONS.map((c) => (
            <a key={c.slug} className="vl-card" href={`/compare/${c.slug}`}>
              <h2>vs {c.name}</h2>
              <p>{c.what}</p>
              <span>{c.ai}</span>
            </a>
          ))}
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
