import type { Metadata } from "next";
import { CopyCommand } from "@/components/copy-command";

export const metadata: Metadata = {
  title: "Skills Directory",
  description:
    "Browse all VidJutsu skills — video intelligence, video formats, production tools, and content quality.",
};

const GITHUB_BASE = "https://github.com/tfcbot/vidjutsu-skills/tree/main/skills";

const INFRASTRUCTURE = [
  {
    name: "Watch",
    slug: "media-analysis",
    description: "Freeform video understanding — hooks, pacing, artifacts, CTA strength. Submit a URL, get structured insight.",
  },
  {
    name: "Extract",
    slug: "media-analysis",
    description: "Pull frames, audio, and metadata from any video.",
  },
  {
    name: "Transcribe",
    slug: "media-analysis",
    description: "Speech-to-text for any video. Accurate transcripts your agent can reason over.",
  },
  {
    name: "Check",
    slug: "media-analysis",
    description: "Validate a video against a spec before it ships.",
  },
  {
    name: "VidJutsu API",
    slug: "vidjutsu-api",
    description: "Core API endpoint reference and authentication. The foundation every agent needs.",
  },
  {
    name: "Niche Research",
    slug: "niche-research",
    description: "Scrape top-performing short-form content and analyze what hooks and formats work.",
  },
  {
    name: "Media Analysis",
    slug: "media-analysis",
    description: "QA content before publishing with watch, extract, transcribe, and check endpoints.",
  },
];

const FORMATS = [
  {
    name: "Talking Head",
    slug: "talking-head",
    description: "One person speaking to camera. Hooks, delivery notes, batch recording guides.",
  },
  {
    name: "Podcast",
    slug: "podcast",
    description: "Podcast-style clips — solo or duo, from scratch or existing episodes.",
  },
  {
    name: "Clipper",
    slug: "clipper",
    description: "Clip long-form YouTube or podcast content into daily short-form posts.",
  },
  {
    name: "B2C",
    slug: "ugc-b2c",
    description: "15 formats for general B2C products — unboxings, reviews, lifestyle.",
    formats: 15,
  },
  {
    name: "DTC",
    slug: "ugc-dtc",
    description: "15 formats for DTC brands — rituals, textures, restocks.",
    formats: 15,
  },
  {
    name: "Fashion",
    slug: "ugc-fashion",
    description: "20 formats for fashion — OOTDs, try-ons, styling.",
    formats: 20,
  },
  {
    name: "Lifestyle B-Roll",
    slug: "ugc-lifestyle-broll",
    description: "20 lifestyle b-roll formats — ambient, cinematic, no dialogue.",
    formats: 20,
  },
  {
    name: "Mobile",
    slug: "ugc-mobile",
    description: "15 formats for mobile apps — reactions, routines, social proof.",
    formats: 15,
  },
  {
    name: "SaaS",
    slug: "ugc-saas",
    description: "15 formats for SaaS products — desk tours, rants, wins.",
    formats: 15,
  },
  {
    name: "Skincare",
    slug: "ugc-skincare",
    description: "20 formats for skincare — routines, textures, shelfies.",
    formats: 20,
  },
  {
    name: "Supplements",
    slug: "ugc-supplements",
    description: "15 formats for supplements — stacks, taste tests, check-ins.",
    formats: 15,
  },
  {
    name: "Yapper",
    slug: "ugc-yapper",
    description: '15 "ugly ad" formats — raw, imperfect, freestyle delivery.',
    formats: 15,
  },
];

const PRODUCTION = [
  {
    name: "Models Marketplace",
    slug: "models-marketplace",
    description: "Configure video generation (KIE, Wavespeed, Fal, Replicate) and audio (ElevenLabs).",
  },
  {
    name: "VidLang",
    slug: "vidlang",
    description: "Write structured video specs and lint them for errors before generation.",
  },
  {
    name: "Video Producer",
    slug: "video-producer",
    description: "Multi-scene AI video production with per-scene QA, frame chaining, and voice swap.",
  },
];

const QUALITY = [
  {
    name: "Content Grader",
    slug: "ugc-content-grader",
    description: "Score scripts for quality, complexity, and nativeness before producing.",
  },
];

type Skill = {
  name: string;
  slug: string;
  description: string;
  formats?: number;
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <a
      href={`${GITHUB_BASE}/${skill.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-border rounded-lg p-5 hover:border-ink-light transition-colors"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-sm font-semibold text-ink group-hover:text-brand transition-colors">
          {skill.name}
        </h3>
        {skill.formats && (
          <span className="text-[11px] font-medium text-ink-light bg-surface-alt px-2 py-0.5 rounded shrink-0">
            {skill.formats} formats
          </span>
        )}
      </div>
      <p className="text-ink-muted text-sm leading-relaxed">
        {skill.description}
      </p>
    </a>
  );
}

function Section({
  title,
  description,
  skills,
}: {
  title: string;
  description: string;
  skills: Skill[];
}) {
  return (
    <section className="mb-16">
      <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-2">
        {title}
      </h2>
      <p className="text-ink-muted text-sm mb-6">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.slug} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default function Directory() {
  const totalSkills =
    INFRASTRUCTURE.length +
    FORMATS.length +
    PRODUCTION.length +
    QUALITY.length;
  const totalFormats = FORMATS.reduce((sum, s) => sum + (s.formats ?? 0), 0);

  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <a
          href="/"
          className="text-sm text-ink-muted hover:text-ink transition-colors mb-10 block"
        >
          &larr; Back
        </a>

        <div className="mb-14">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
            Skills Directory
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Browse all skills
          </h1>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
            {totalSkills} skills with {totalFormats}+ video formats. Each skill is a markdown
            file your agent reads and follows. Browse the source on GitHub or install them all.
          </p>
          <CopyCommand command="npx skills add tfcbot/shortform-distribution-skills" />
        </div>

        <Section
          title="Video Intelligence"
          description="Watch, Extract, Transcribe, Check, and the VidJutsu API. The core of automated video QA."
          skills={INFRASTRUCTURE}
        />

        <Section
          title="Video Format Reference"
          description="Format libraries with shot-by-shot guides and AI generation prompt templates."
          skills={FORMATS}
        />

        <Section
          title="Video Production"
          description="AI video production pipeline — provider setup, spec writing, and multi-scene production with QA."
          skills={PRODUCTION}
        />

        <Section
          title="Content Quality"
          description="Score and grade content before producing."
          skills={QUALITY}
        />
      </div>
    </main>
  );
}
