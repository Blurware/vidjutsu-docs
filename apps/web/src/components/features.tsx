import { APP_URL } from "@/components/site-nav";

const FEATURES = [
  {
    title: "Edit right in your browser",
    body: "Open app.vidjutsu.ai in Chrome and your projects are there: the timeline, the script, every file. Cut by selecting words, record screen and camera, play the cut. Nothing to download or install.",
  },
  {
    title: "Comment for feedback",
    body: "Pin a comment to a moment and a spot on the picture. Start it with @agent and your agent picks it up, makes the change and answers in the thread.",
  },
  {
    title: "Cloud rendering, not your laptop",
    body: "Renders run on many cloud machines at once, in 1080p or 4K. No export queue tying up your computer, no running out of disk or GPU, and a small change re-renders only the part that changed.",
  },
  {
    title: "Every edit kept, every edit undoable",
    body: "Each change your agent or you make is a revision with who made it and why. Undo any single change, or render any earlier version.",
  },
] as const;

export function Features() {
  return (
    <section className="vj-features" id="features" aria-labelledby="features-heading">
      <div className="vj-frame vj-features-grid">
        <div className="vj-features-intro">
          <span>FEATURES</span>
          <h2 id="features-heading">Your agent does the editing. You stay in charge of the cut.</h2>
          <p>Simple on purpose: upload, cut, comment, render. All the heavy lifting runs in the cloud.</p>
          <a className="vj-primary" href={APP_URL}>Open the app</a>
        </div>
        <ol>
          {FEATURES.map((f, i) => (
            <li key={f.title}>
              <i>{String(i + 1).padStart(2, "0")}</i>
              <div><h3>{f.title}</h3><p>{f.body}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
