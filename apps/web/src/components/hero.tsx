import { APP_URL } from "@/components/site-nav";

export function Hero() {
  return (
    <section className="vj-hero">
      <div className="vj-frame">
        <span className="vj-eyebrow">For creators, faceless channels, AI dramas, AI ads and launch videos</span>
        <h1>Simple video editing for agents.</h1>
        <p>
          Your agent edits the video; you just say what to change. Bring Claude
          Code, Codex or any agent you already use. It cuts your
          footage on a timeline in the cloud while you watch in your browser,
          leave comments, and get the finished render. Nothing to install, and
          no long renders on your laptop.
        </p>
        <div className="vj-hero-actions">
          <a className="vj-primary" href={APP_URL}>Open the app</a>
          <a href="#start">Connect your agent →</a>
        </div>
        <ul className="vj-hero-proof" aria-label="At a glance">
          <li><b>In the browser</b> app.vidjutsu.ai</li>
          <li><b>Your agent</b> over MCP, CLI or API</li>
          <li><b>Cloud renders</b> 1080p or 4K</li>
          <li><b>Pay as you go</b> no monthly fee</li>
        </ul>
      </div>
    </section>
  );
}
