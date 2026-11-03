import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VidJutsu Editor for Mac",
  description:
    "A free Mac app for working with your agent on a cut: edit the transcript, watch the timeline, leave comments and chat. Coming soon.",
};

const features = [
  ["Review by transcript", "Read the cut as a script next to the video, and mark what to cut or keep."],
  ["Watch the timeline", "Scrub and play the current cut with thumbnails and waveforms."],
  ["Comment on moments", "Pin a comment to a stretch of the cut, then mark it approved or needing changes."],
  ["Chat with an agent", "Ask for changes in plain words. The agent edits and renders through the same API as the CLI and MCP."],
  ["Record takes", "Record your screen, camera and microphone and send the take straight into a project."],
  ["Free", "The app costs nothing. Video work runs on VidJutsu Cloud and is paid from your prepaid wallet."],
] as const;

export default function EditorPage() {
  return (
    <main className="min-h-screen px-5 sm:px-8 pt-20 sm:pt-28 pb-20" id="main">
      <div className="max-w-5xl mx-auto">
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors">
          &larr; VidJutsu
        </a>

        <div className="max-w-2xl mx-auto text-center mt-10">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-5">
            Mac app &middot; coming soon
          </p>
          <h1 className="text-[clamp(1.9rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-5">
            See the cut your agent made
          </h1>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-9 max-w-lg mx-auto">
            VidJutsu Editor is a free, native Mac app. Your agent does the
            cutting; you read the script, watch the timeline, say what to
            change and approve it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://docs.vidjutsu.ai/editor/index"
              className="vj-hero-primary inline-flex items-center justify-center px-6 py-3 bg-brand text-sm font-semibold rounded hover:bg-brand-hover transition-colors"
            >
              Read about the editor
            </a>
            <a
              href="https://docs.vidjutsu.ai/quickstart"
              className="inline-flex items-center justify-center px-6 py-3 text-ink-muted text-sm font-medium hover:text-ink transition-colors"
            >
              Start with the API today
            </a>
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-16" aria-label="Features">
          {features.map(([title, body]) => (
            <article key={title} className="rounded-lg border border-ink/10 p-6">
              <h2 className="text-base font-semibold text-ink mb-2">{title}</h2>
              <p className="text-sm text-ink-muted leading-relaxed">{body}</p>
            </article>
          ))}
        </section>

        <section className="max-w-2xl mx-auto mt-16">
          <h2 className="text-xl font-semibold text-ink mb-4">What you need</h2>
          <ul className="space-y-3 text-ink-muted leading-relaxed list-disc pl-5">
            <li>A Mac with macOS 15 (Sequoia) or later, Apple silicon or Intel.</li>
            <li>
              A VidJutsu Cloud account. The editor uses the same API key as the{" "}
              <code className="font-mono text-sm">vidjutsu</code> CLI.
            </li>
            <li>
              For chat: Sign in with ChatGPT, or your own OpenAI or Anthropic API
              key. Editing by hand needs none of these.
            </li>
          </ul>
          <p className="text-ink-muted leading-relaxed mt-8">
            Not released yet. Download and install steps will be on{" "}
            <a className="text-ink underline" href="https://docs.vidjutsu.ai/editor/index">
              the editor docs
            </a>{" "}
            with the first release.
          </p>
        </section>
      </div>
    </main>
  );
}
