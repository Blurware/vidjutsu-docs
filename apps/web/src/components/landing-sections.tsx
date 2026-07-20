import { WorkflowChat } from "@/components/workflow-chat";

const faqs = [
  ["What does VidJutsu do?", "VidJutsu gives agents a typed media layer for importing social video, checking cloneability, creating a character and starting image, generating motion, applying overlays, and verifying the final result."],
  ["Will every source video work?", "No. Clone check is a hard gate. If the source is too long, has more than one primary subject, or fails the evidence-based rules, the workflow stops before paid generation."],
  ["Can I choose the video model?", "Yes. Clone video requires Seedance or Kling motion control. VidJutsu never silently switches model families."],
  ["What happens while generation is running?", "The job saves ordered checkpoints and provider state. Your agent can tail progress and resume a waiting task without starting again."],
] as const;

export function LandingSections() {
  return (
    <>
      <section className="vj-difference" id="difference">
        <div className="vj-frame">
          <div className="vj-section-heading"><div><span>02 / THE DIFFERENCE</span><h2>Build the creative. Not the glue.</h2></div><p>One media layer for the work your agent already knows how to direct.</p></div>
          <div className="vj-comparison-grid">
            <article><span>WITHOUT VIDJUTSU</span><h3>You become the media workflow.</h3><ul><li>Find a usable source URL</li><li>Coordinate image and motion providers</li><li>Track jobs, retries, and artifacts yourself</li><li>Apply text after video generation</li><li>Guess whether the final output passed QA</li></ul></article>
            <article className="with"><span>WITH VIDJUTSU</span><h3>Your agent starts with the creative decision.</h3><ul><li>Import a social source into a stable asset</li><li>Compose typed, durable media primitives</li><li>Tail ordered progress and retain lineage</li><li>Finish only after final QA passes</li></ul><footer>ONE API · VERIFIED VIDEO WORKFLOWS</footer></article>
          </div>
        </div>
      </section>
      <section className="vj-workflow" id="workflow">
        <div className="vj-frame"><div className="vj-section-heading"><div><span>03 / HOW IT WORKS</span><h2>Give it a video. Keep the control.</h2></div><p>One request. Your agent handles the media stages with durable state.</p></div><WorkflowChat /></div>
      </section>
      <section className="vj-pricing" id="pricing"><div className="vj-frame"><div className="vj-pricing-heading"><h2>Simple access.</h2><p>One API key for the video workflow your agent needs.</p></div><article className="vj-price-card"><div><span>VIDJUTSU API</span><h3>$99 <small>/ month</small></h3><p>API access for imports, analysis, cloning, overlays, tasks, and jobs.</p></div><a href="https://docs.vidjutsu.ai/get-api-key">Get API key</a></article></div></section>
      <section className="vj-faq vj-frame" id="faq"><div><span>05 / FAQ</span><h2>The short version.</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section className="vj-closing"><div className="vj-frame"><span>BUILT FOR AGENTS</span><h2>Make the video workflow your agent needs.</h2><div><a className="vj-primary" href="https://docs.vidjutsu.ai/get-api-key">Get API key</a><a href="https://docs.vidjutsu.ai">Read the docs ↗</a></div></div></section>
      <footer className="vj-footer vj-frame"><a href="#main"><b>VJ</b> vidjutsu</a><p>Verified AI video workflows. Built for agents.</p><div><a href="https://docs.vidjutsu.ai">Docs</a><a href="https://api.vidjutsu.ai">API status</a><a href="https://docs.vidjutsu.ai/legal/terms">Terms</a></div></footer>
    </>
  );
}
