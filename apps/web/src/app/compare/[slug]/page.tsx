import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompareView } from "@/components/compare-table";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { COMPARISONS, bySlug } from "@/lib/compare";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = bySlug((await params).slug);
  if (!c) return {};
  return { title: c.title, description: c.summary, alternates: { canonical: `/compare/${c.slug}` } };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = bySlug((await params).slug);
  if (!c) notFound();
  return (
    <main className="vj-landing" id="main">
      <SiteNav />
      <CompareView c={c} />
      <SiteFooter />
    </main>
  );
}
