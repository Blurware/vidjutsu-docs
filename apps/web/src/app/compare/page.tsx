import type { Metadata } from "next";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { COMPARISONS } from "@/lib/compare";

export const metadata: Metadata = {
  title: "Compare",
  description: "How VidJutsu, simple video editing for agents, compares with Descript, DaVinci Resolve and other video editors that weren't built for AI.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return (
    <main className="vj-landing" id="main">
      <SiteNav />
      <section className="vj-compare-hero vj-frame">
        <span className="vj-eyebrow">Compare</span>
        <h1>Video editors were built for hands. VidJutsu is built for agents.</h1>
        <p>
          Traditional editors expect a person on the timeline and a computer
          that does the rendering. VidJutsu lets your agent do the cutting while
          you review in the browser, and renders in the cloud.
        </p>
      </section>
      <section className="vj-frame vj-compare-index">
        {COMPARISONS.map((c) => (
          <a key={c.slug} href={`/compare/${c.slug}`}>
            <span>VIDJUTSU VS</span>
            <h2>{c.name}</h2>
            <p>{c.summary}</p>
            <i>Read the comparison →</i>
          </a>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
