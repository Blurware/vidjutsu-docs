import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses Skill — VidJutsu",
  description:
    "Agent skill for promoting online courses via Instagram pages.",
};

export default function Courses() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Courses
        </h1>
        <p className="text-ink-muted text-base mb-8">
          Promote online courses and educational content through Instagram.
        </p>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            This skill walks your agent through running Instagram pages that drive enrollments for your online course. It researches educational content that converts and posts daily.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What the agent does</h2>

          <ul className="space-y-2">
            <li>Collects your course URL, topic, and target audience</li>
            <li>Researches top-performing educational content in your niche</li>
            <li>Generates tip-based, preview, and testimonial content</li>
            <li>Provisions managed Instagram pages</li>
            <li>Tracks which content types drive the most enrollments</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Install</h2>

          <pre className="bg-surface-alt border border-border rounded p-4 font-mono text-[13px] overflow-x-auto">
            npx skills add tfcbot/vidjutsu-skills
          </pre>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href="https://github.com/tfcbot/vidjutsu-skills" className="text-brand text-sm font-semibold hover:underline">
              GitHub &rarr;
            </a>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-ink-muted text-sm font-semibold hover:text-ink transition-colors">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
