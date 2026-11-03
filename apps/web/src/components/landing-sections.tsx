import { WorkflowChat } from "@/components/workflow-chat";

const faqs = [
  ["What does VidJutsu do?", "It's a video editor your agent drives through an API. Upload takes, cut them on a timeline with full history, and render the result on cloud machines. You get an MP4 and a download link."],
  ["Does it generate video?", "No. VidJutsu edits and renders footage you bring: camera takes, screen recordings, music and stills. Use it to assemble and finish, not to generate."],
  ["How much does it cost?", "You pay as you go from a prepaid wallet: $0.10 per minute of 1080p output, $0.20 per 4K minute, $0.10 per voice minute for Studio Sound and $0.05 per GB-month of storage, all billed by the second with no minimums. There is no monthly fee and no free plan. To start, add a card and at least $5; top up whenever you like."],
  ["Which agents work with it?", "Anything that speaks MCP (Claude Code, Claude Desktop, Cursor and others) at api.vidjutsu.ai/mcp, anything with a terminal through the vidjutsu CLI, or your own code through the REST API."],
  ["What happens to my edits?", "Every edit is a new revision. Nothing is overwritten, you can render any earlier revision, and a render after a small change reuses everything that didn't change."],
] as const;

export function LandingSections() {
  return (
    <>
      <section className="vj-difference" id="difference">
        <div className="vj-frame">
          <div className="vj-section-heading"><div><span>02 / THE DIFFERENCE</span><h2>Storage and an editor, built for agents.</h2></div><p>Editors are built for hands on a timeline. VidJutsu is built for calls.</p></div>
          <div className="vj-comparison-grid">
            <article><span>A DESKTOP EDITOR</span><h3>You drive every cut.</h3><ul><li>Drag clips on a timeline by hand</li><li>Undo history lives in one app session</li><li>Export ties up your machine</li><li>Every change means another full export</li><li>Your agent can only watch</li></ul></article>
            <article className="with"><span>WITH VIDJUTSU</span><h3>Your agent drives the cut.</h3><ul><li>Edits are plain JSON calls</li><li>Every revision is kept and renderable</li><li>Renders run on many cloud machines at once</li><li>A small change re-renders only what changed</li></ul><footer>ONE KEY · API, CLI OR MCP</footer></article>
          </div>
        </div>
      </section>
      <section className="vj-workflow" id="workflow">
        <div className="vj-frame"><div className="vj-section-heading"><div><span>03 / IN ACTION</span><h2>What a session looks like.</h2></div><p>You ask. Your agent uploads, edits the timeline and hands back a finished file.</p></div><WorkflowChat /></div>
      </section>
      <section className="vj-pricing" id="pricing"><div className="vj-frame"><div className="vj-pricing-heading"><h2>Simple pricing.</h2><p>No monthly fee. Pay only for what you use.</p></div><article className="vj-price-card"><div><span>PAY AS YOU GO</span><h3>$0.10 <small>/ minute of 1080p</small></h3><p>$0.20 per 4K minute, $0.10 per voice minute of Studio Sound, $0.05 per GB-month of storage. Billed by the second, no minimums. Paid from a prepaid wallet: add a card and $5 to start, top up any time. Need more? <a href="/contact">Enterprise</a>.</p></div><a href="https://docs.vidjutsu.ai/quickstart">Get started</a></article></div></section>
      <section className="vj-faq vj-frame" id="faq"><div><span>05 / FAQ</span><h2>The short version.</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section className="vj-closing"><div className="vj-frame"><span>BUILT FOR AGENTS</span><h2>Your agent can edit video now.</h2><div><a className="vj-primary" href="https://docs.vidjutsu.ai/quickstart">Get started</a><a href="https://docs.vidjutsu.ai">Read the docs ↗</a></div></div></section>
      <footer className="vj-footer vj-frame"><a href="#main"><b>VJ</b> vidjutsu</a><p>Video editing. Built for agents.</p><div><a href="https://docs.vidjutsu.ai">Docs</a><a href="https://docs.vidjutsu.ai/pricing">Pricing</a><a href="/editor">Mac editor</a><a href="/contact">Contact</a><a href="https://docs.vidjutsu.ai/legal/terms">Terms</a></div></footer>
    </>
  );
}
