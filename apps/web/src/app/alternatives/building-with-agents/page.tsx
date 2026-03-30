import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu vs Building It Yourself With Agents",
  description:
    "Why orchestrating your own agent stack for Instagram pages is harder than it looks — and how VidJutsu replaces the entire pipeline with a single API.",
};

export default function BuildingWithAgents() {
  return (
    <main className="px-5 sm:px-8 py-16 sm:py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-8 block">&larr; Back</a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          VidJutsu vs Building It Yourself With Agents
        </h1>

        <div className="prose prose-sm text-ink-muted space-y-6 leading-relaxed">
          <p className="text-base">
            You already have Claude, OpenClaw, or a custom agent stack. You could wire up your own Instagram pipeline — scrape trending content, generate videos, post through an automation tool, track results. The question is whether you should.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">The real cost of building it yourself</h2>

          <p>
            The content generation part is the easy part. Your agent can call Fal, Wavespeed, or Replicate to make videos. The hard parts are everything else:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Account provisioning.</strong> Creating Instagram accounts programmatically, handling verification flows, managing credentials securely.</li>
            <li><strong>Account warming.</strong> New accounts that start posting immediately get flagged and suppressed. Warming takes 7 days of organic activity in the right niche. You have to build and maintain this pipeline yourself.</li>
            <li><strong>Posting infrastructure.</strong> Instagram doesn't have a public posting API for video. You need a publishing layer that handles format requirements, rate limits, retries, and session management.</li>
            <li><strong>Recovery and maintenance.</strong> Accounts get locked, sessions expire, posting fails silently. Your agent team needs monitoring, alerting, and recovery logic. This is ongoing maintenance, not a one-time build.</li>
            <li><strong>Niche research at scale.</strong> Scraping what's working in a niche, analyzing hooks and formats, feeding that into content generation — this is a pipeline, not a prompt.</li>
          </ul>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What you're actually maintaining</h2>

          <p>
            An agent team that manages Instagram pages is not a single agent making API calls. It's an orchestration system: a research agent, a generation agent, a posting agent, a monitoring agent, and a recovery agent. Each one needs its own tools, error handling, and state management. When one breaks, the others need to know.
          </p>

          <p>
            You're not building a feature — you're building infrastructure. And you're maintaining it forever.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">What VidJutsu replaces</h2>

          <p>
            VidJutsu is the infrastructure layer. Your agent calls a single API. Account provisioning, warming, content generation, niche research, posting, and tracking are all handled behind the endpoints. No agent teams to orchestrate. No sessions to manage. No warming pipeline to build.
          </p>

          <p>
            Your agent gets an API key and goes. One endpoint to create an account. One endpoint to post. One endpoint to check analytics. The learning loop — research, generate, post, track, improve — runs on VidJutsu's infrastructure, not yours.
          </p>

          <h2 className="text-xl font-semibold text-ink mt-10 mb-3">Composable — use what you need</h2>

          <p>
            VidJutsu isn't all-or-nothing. If your agent already generates great content with Fal or Wavespeed, use VidJutsu just for distribution — account provisioning, warming, posting, and analytics. If you have your own research pipeline, skip VidJutsu's scrape endpoint and just use generation and posting. Every endpoint works independently.
          </p>

          <p>
            The API is designed to slot into your existing agent stack, not replace it. Use as much or as little as you need.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-brand/20 bg-brand/[0.02]">
            <p className="text-ink font-medium mb-2">Get an API key and skip the infrastructure.</p>
            <a href="https://docs.vidjutsu.ai/quickstart" className="text-brand text-sm font-semibold hover:underline">
              Get started &rarr;
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
