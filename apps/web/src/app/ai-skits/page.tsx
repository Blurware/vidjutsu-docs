import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Skits with Agent Tasks",
  description:
    "Submit goal-oriented short-form video work through durable VidJutsu agent tasks.",
};

const ENDPOINTS = [
  ["POST", "/v1/videos/download/tiktok", "Import a TikTok video to a stable tenant-owned asset."],
  ["POST", "/v1/videos/download/instagram", "Import an Instagram video to a stable tenant-owned asset."],
  ["POST", "/v1/clones/check", "Evaluate whether a source is suitable for one-performer cloning."],
  ["POST", "/v1/characters", "Create a reusable character identity."],
  ["POST", "/v1/clones/starting-image", "Create a clean, character-swapped starting frame."],
  ["POST", "/v1/clones/video", "Clone motion with Seedance or Kling motion control."],
  ["POST", "/v1/agent/tasks", "Submit a goal-oriented asynchronous media task."],
  ["GET", "/v1/agent/tasks/events?id=…", "Tail structured checkpoints and terminal events."],
  ["GET", "/v1/jobs?id=…", "Inspect or poll any durable media job."],
] as const;

const sdkExample = `import { createClient } from "vidjutsu";

const client = createClient();
const task = await client.agentTasks.create(
  {
    prompt: \`Clone the source performer with a new character.
Preserve motion and sound, add the exact requested wall text,
and verify the final overlaid video.\`,
    inputs: [{ name: "source_video", url: sourceVideoUrl }],
  },
  { idempotencyKey: "campaign-42" },
);

for await (const event of client.agentTasks.tail(task.id)) {
  console.log(event.type, event.data);
}`;

export default function AiSkitsPage() {
  return (
    <main id="main" className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors mb-10 block">
          &larr; Back
        </a>

        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
          Developer API
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          AI skits, assembled from durable primitives
        </h1>
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-14">
          Turn a short source performance into a reusable-character, lipsync-style
          wall-of-text skit. Submit the goal once, then tail a durable task while
          the private agent composes typed VidJutsu primitives, provider waits,
          overlay, and prompted QA.
        </p>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            Public operations
          </h2>
          <div className="border border-border divide-y divide-border">
            {ENDPOINTS.map(([method, path, detail]) => (
              <div key={path} className="grid sm:grid-cols-[72px_240px_1fr] gap-2 sm:gap-5 px-4 py-4">
                <span className="font-mono text-xs text-brand">{method}</span>
                <code className="font-mono text-xs text-ink">{path}</code>
                <span className="text-sm text-ink-muted">{detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-ink-light mb-5">
            SDK
          </h2>
          <pre className="overflow-x-auto border border-border bg-surface-alt p-5 text-xs sm:text-sm leading-6 font-mono">
            <code>{sdkExample}</code>
          </pre>
        </section>

        <section className="grid sm:grid-cols-3 gap-5 mb-14">
          {[
            ["Explicit models", "Every video clone names Seedance or Kling motion control. Model families never change silently."],
            ["Safe retries", "Task submission supports idempotency keys, durable checkpoints, bounded retries, and provider deferral."],
            ["Traceable output", "Completed jobs retain intermediate artifacts, parent/child relationships, attempts, and final lineage."],
          ].map(([title, detail]) => (
            <div key={title} className="border border-border p-5">
              <h2 className="text-sm font-semibold mb-2">{title}</h2>
              <p className="text-sm text-ink-muted leading-relaxed">{detail}</p>
            </div>
          ))}
        </section>

        <p className="text-sm text-ink-muted">
          Clone workflows stop immediately when the source fails the cloneability
          gate. Successful tasks return the final overlaid asset plus intermediate
          lineage through the job record.
        </p>
      </div>
    </main>
  );
}
