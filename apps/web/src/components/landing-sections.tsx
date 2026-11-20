import { WorkflowChat } from "@/components/workflow-chat";
import { APP_URL, SiteFooter } from "@/components/site-nav";

const faqs = [
  ["What does VidJutsu do?", "It's simple video editing for agents. Upload your takes, your agent cuts them on a timeline with full history, you review and comment in your browser, and the render runs on cloud machines. You get an MP4 and a link to share."],
  ["Does it generate video?", "No. VidJutsu edits and renders footage you bring: camera takes, screen recordings, music, stills, and clips you made in any AI video tool. Use it to assemble and finish, not to generate."],
  ["How much does it cost?", "You pay as you go from a prepaid wallet: every job is billed by the box time it uses, at $0.03 per vCPU-minute by the second with no minimums, plus $0.05 per GB-month of storage. A minute of 1080p output comes to about $0.18. There is no monthly fee and no free plan. To start, add a card and at least $5; top up whenever you like."],
  ["Do I need to install anything?", "No. VidJutsu is fully hosted. The editor runs in Chrome at app.vidjutsu.ai, your agent connects to the hosted MCP server at api.vidjutsu.ai/mcp, and storage, transcripts, Studio Sound and renders all run on our cloud. You don't need accounts or API keys with any other vendor: everything is paid from one wallet."],
  ["Which agents work with it?", "Anything that speaks MCP (Claude Code, Claude Desktop, Cursor and others) at api.vidjutsu.ai/mcp, anything with a terminal through the vidjutsu CLI, or your own code through the REST API."],
  ["What happens to my edits?", "Every edit is a new revision. Nothing is overwritten, you can render any earlier revision, and a render after a small change reuses everything that didn't change."],
] as const;

export function LandingSections() {
  return (
    <>
      <section className="vj-difference" id="difference">
        <div className="vj-frame">
          <div className="vj-section-heading"><div><span>THE DIFFERENCE</span><h2>Legacy editors weren't built for agents.</h2></div><p>Descript, DaVinci Resolve and Premiere are built for hands on a timeline. VidJutsu is built for your agent, with you reviewing. <a href="/compare">See the comparisons →</a></p></div>
          <div className="vj-comparison-grid">
            <article><span>A LEGACY EDITOR</span><h3>You drive every cut.</h3><ul><li>Drag clips on a timeline by hand</li><li>Install it, keep it updated, keep the files on your disk</li><li>Export ties up your machine for as long as it takes</li><li>Every change means another full export</li><li>Your agent can only watch</li></ul></article>
            <article className="with"><span>WITH VIDJUTSU</span><h3>Your agent drives the cut.</h3><ul><li>Your agent makes the edits; you comment on the cut</li><li>Runs in your browser, files live in the cloud</li><li>Renders run on many cloud machines at once</li><li>A small change re-renders only what changed</li><li>Every revision is kept and renderable</li></ul><footer>BRING YOUR AGENT · MCP, CLI OR API</footer></article>
          </div>
        </div>
      </section>
      <section className="vj-workflow" id="workflow">
        <div className="vj-frame"><div className="vj-section-heading"><div><span>IN ACTION</span><h2>What a session looks like.</h2></div><p>You ask. Your agent uploads, edits the timeline and hands back a finished file.</p></div><WorkflowChat /></div>
      </section>
      <section className="vj-pricing" id="pricing"><div className="vj-frame"><div className="vj-pricing-heading"><h2>Simple pricing.</h2><p>No monthly fee. Pay only for what you use.</p></div><article className="vj-price-card"><div><span>PAY AS YOU GO</span><h3>$0.03 <small>/ vCPU-minute</small></h3><p>One rate for every job: renders, transcripts, Studio Sound. About $0.18 per minute of 1080p output. Storage $0.05 per GB-month. Billed by the second, no minimums. Paid from a prepaid wallet: add a card and $5 to start, top up any time. Need more? <a href="/contact">Enterprise</a>.</p></div><a href={APP_URL}>Get started</a></article></div></section>
      <section className="vj-faq vj-frame" id="faq"><div><span>FAQ</span><h2>The short version.</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section className="vj-closing"><div className="vj-frame"><span>SIMPLE VIDEO EDITING FOR AGENTS</span><h2>Your agent can edit video now.</h2><div><a className="vj-primary" href={APP_URL}>Open the app</a><a href="#start">Connect your agent</a><a href="https://docs.vidjutsu.ai">Read the docs ↗</a></div></div></section>
      <SiteFooter />
    </>
  );
}
