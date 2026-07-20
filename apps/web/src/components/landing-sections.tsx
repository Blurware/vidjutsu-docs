import { WorkflowChat } from "@/components/workflow-chat";

const faqs = [
  ["What does VidJutsu do?", "VidJutsu gives agents a typed media layer for turning a short meme reference into a brand-ready video: import, clone check, character, starting image, motion, overlay, and final QA."],
  ["Will every meme video work?", "No. Clone check is a hard gate. If the reference is too long, has more than one primary subject, or fails the evidence-based rules, the workflow stops before paid generation."],
  ["Can I choose the video model?", "Yes. Clone video requires Seedance or Kling motion control. VidJutsu never silently switches model families."],
  ["What happens while generation is running?", "The job saves ordered checkpoints and provider state. Your agent can tail progress and resume a waiting task without starting again."],
] as const;

export function LandingSections() {
  return (
    <>
      <section className="vj-difference" id="difference">
        <div className="vj-frame">
          <div className="vj-section-heading"><div><span>02 / THE DIFFERENCE</span><h2>Make the meme yours. Not manual.</h2></div><p>One media layer for the work your agent already knows how to direct.</p></div>
          <div className="vj-comparison-grid">
            <article><span>WITHOUT VIDJUTSU</span><h3>You become the media workflow.</h3><ul><li>Find and download a usable meme</li><li>Coordinate image and motion providers</li><li>Track jobs, retries, and artifacts yourself</li><li>Apply your wall text after generation</li><li>Guess whether the brand version passed QA</li></ul></article>
            <article className="with"><span>WITH VIDJUTSU</span><h3>Your agent starts with the creative idea.</h3><ul><li>Import a reference into a stable asset</li><li>Compose typed, durable media primitives</li><li>Tail ordered progress and retain lineage</li><li>Finish only after brand QA passes</li></ul><footer>ONE API · VERIFIED MEME CLONING</footer></article>
          </div>
        </div>
      </section>
      <section className="vj-workflow" id="workflow">
        <div className="vj-frame"><div className="vj-section-heading"><div><span>03 / HOW IT WORKS</span><h2>Give it a meme. Make it your brand.</h2></div><p>One request. Your agent handles the media stages with durable state.</p></div><WorkflowChat /></div>
      </section>
      <section className="vj-pricing" id="pricing"><div className="vj-frame"><div className="vj-pricing-heading"><h2>Simple access.</h2><p>One API key for your brand&apos;s meme-video workflow.</p></div><article className="vj-price-card"><div><span>VIDJUTSU API</span><h3>$99 <small>/ month</small></h3><p>API access for imports, analysis, cloning, overlays, tasks, and jobs.</p></div><a href="https://docs.vidjutsu.ai/get-api-key">Get API key</a></article></div></section>
      <section className="vj-faq vj-frame" id="faq"><div><span>05 / FAQ</span><h2>The short version.</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section className="vj-closing"><div className="vj-frame"><span>BUILT FOR AGENTS</span><h2>Clone the meme. Make it your brand.</h2><div><a className="vj-primary" href="https://docs.vidjutsu.ai/get-api-key">Get API key</a><a href="https://docs.vidjutsu.ai">Read the docs ↗</a></div></div></section>
      <footer className="vj-footer vj-frame"><a href="#main"><b>VJ</b> vidjutsu</a><p>Brand-ready meme videos. Built for agents.</p><div><a href="https://docs.vidjutsu.ai">Docs</a><a href="https://api.vidjutsu.ai">API status</a><a href="https://docs.vidjutsu.ai/legal/terms">Terms</a></div></footer>
    </>
  );
}
