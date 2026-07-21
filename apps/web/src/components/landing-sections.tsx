import { WorkflowChat } from "@/components/workflow-chat";

const faqs = [
  ["What does VidJutsu do?", "VidJutsu gives agents typed video primitives: scrape and download TikTok or Instagram posts, watch or transcribe a video, run a compliance check, and burn an overlay or disclaimer."],
  ["Do I need to chain the calls myself?", "You call each primitive directly, in whatever order your workflow needs. Every media operation returns a durable job you can poll for status and final output."],
  ["What social sources are supported?", "Public TikTok and Instagram posts. X, YouTube, Reddit, and ad-library sources are not supported."],
  ["What happens while a job is running?", "The job tracks status and retries. Your agent polls it and gets the final artifact back once it completes."],
] as const;

export function LandingSections() {
  return (
    <>
      <section className="vj-difference" id="difference">
        <div className="vj-frame">
          <div className="vj-section-heading"><div><span>02 / THE DIFFERENCE</span><h2>Call the primitive. Skip the glue code.</h2></div><p>Typed video operations for the work your agent already knows how to direct.</p></div>
          <div className="vj-comparison-grid">
            <article><span>WITHOUT VIDJUTSU</span><h3>You become the media pipeline.</h3><ul><li>Find and download a usable source video</li><li>Wire up transcription and watch providers</li><li>Track jobs, retries, and artifacts yourself</li><li>Apply overlays and disclaimers after the fact</li><li>Build your own compliance rules and checks</li></ul></article>
            <article className="with"><span>WITH VIDJUTSU</span><h3>Your agent calls the primitive it needs.</h3><ul><li>Pull a reference into a stable asset</li><li>Compose typed, durable media primitives</li><li>Poll a job for status and final output</li><li>Check compliance before you publish</li></ul><footer>ONE API · DETERMINISTIC PRIMITIVES</footer></article>
          </div>
        </div>
      </section>
      <section className="vj-workflow" id="workflow">
        <div className="vj-frame"><div className="vj-section-heading"><div><span>03 / HOW IT WORKS</span><h2>One call in. A durable job out.</h2></div><p>Each primitive is a single typed call. Your agent handles the sequencing.</p></div><WorkflowChat /></div>
      </section>
      <section className="vj-pricing" id="pricing"><div className="vj-frame"><div className="vj-pricing-heading"><h2>Simple access.</h2><p>One API key for every video primitive.</p></div><article className="vj-price-card"><div><span>VIDJUTSU API</span><h3>$99 <small>/ month</small></h3><p>API access for scrape, download, watch, transcribe, compliance checks, overlays, and jobs.</p></div><a href="https://docs.vidjutsu.ai/get-api-key">Get API key</a></article></div></section>
      <section className="vj-faq vj-frame" id="faq"><div><span>05 / FAQ</span><h2>The short version.</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section className="vj-closing"><div className="vj-frame"><span>BUILT FOR AGENTS</span><h2>Pull the video. Get the primitive you need.</h2><div><a className="vj-primary" href="https://docs.vidjutsu.ai/get-api-key">Get API key</a><a href="https://docs.vidjutsu.ai">Read the docs ↗</a></div></div></section>
      <footer className="vj-footer vj-frame"><a href="#main"><b>VJ</b> vidjutsu</a><p>Deterministic video primitives. Built for agents.</p><div><a href="https://docs.vidjutsu.ai">Docs</a><a href="https://api.vidjutsu.ai">API status</a><a href="https://docs.vidjutsu.ai/legal/terms">Terms</a></div></footer>
    </>
  );
}
