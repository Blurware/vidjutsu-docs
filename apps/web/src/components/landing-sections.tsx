import { WorkflowChat } from "@/components/workflow-chat";

const faqs = [
  ["What does VidJutsu do?", "It lets your agent clone a video that is already working. Point it at a trending clip, put your own character in it, and get a finished video back."],
  ["How much does it cost?", "One flat monthly plan. No separate credit purchases and no per-clip math."],
  ["What do the clones look like?", "Vertical 9:16 video, ready for TikTok, Reels, and Shorts. Your character in the motion that is already getting views."],
  ["Do I need to host anything?", "No. VidJutsu does the work and hands back a finished video link. Nothing to deploy or host on your side."],
] as const;

export function LandingSections() {
  return (
    <>
      <section className="vj-difference" id="difference">
        <div className="vj-frame">
          <div className="vj-section-heading"><div><span>02 / THE DIFFERENCE</span><h2>Skip the editing. Keep the views.</h2></div><p>Your agent does the work. You post more of what is already winning.</p></div>
          <div className="vj-comparison-grid">
            <article><span>THE OLD WAY</span><h3>You do it all by hand.</h3><ul><li>Hunt for a video worth copying</li><li>Guess whether it will land</li><li>Reshoot or edit it yourself</li><li>Wait days for one video</li><li>Post one, hope it works</li></ul></article>
            <article className="with"><span>WITH VIDJUTSU</span><h3>Your agent ships the clone.</h3><ul><li>Score a video before you spend</li><li>Put your own character in it</li><li>Get a finished clone in minutes</li><li>Post at the pace an agent works</li></ul><footer>ONE KEY · YOUR AGENT DOES IT</footer></article>
          </div>
        </div>
      </section>
      <section className="vj-workflow" id="workflow">
        <div className="vj-frame"><div className="vj-section-heading"><div><span>03 / IN ACTION</span><h2>What a session looks like.</h2></div><p>You ask. Your agent scores it, swaps in your character, and hands back a clone.</p></div><WorkflowChat /></div>
      </section>
      <section className="vj-pricing" id="pricing"><div className="vj-frame"><div className="vj-pricing-heading"><h2>Simple access.</h2><p>One key, one flat plan. No credit math.</p></div><article className="vj-price-card"><div><span>VIDJUTSU</span><h3>$99 <small>/ month</small></h3><p>Clone trending videos with your own characters, as often as your agent can work.</p></div><a href="https://docs.vidjutsu.ai/get-api-key">Get API key</a></article></div></section>
      <section className="vj-faq vj-frame" id="faq"><div><span>05 / FAQ</span><h2>The short version.</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section className="vj-closing"><div className="vj-frame"><span>BUILT FOR AGENTS</span><h2>Your agent can clone viral videos now.</h2><div><a className="vj-primary" href="https://docs.vidjutsu.ai/get-api-key">Get API key</a><a href="https://docs.vidjutsu.ai">Read the docs ↗</a></div></div></section>
      <footer className="vj-footer vj-frame"><a href="#main"><b>VJ</b> vidjutsu</a><p>Clone viral videos. Built for agents.</p><div><a href="https://docs.vidjutsu.ai">Docs</a><a href="https://api.vidjutsu.ai">API status</a><a href="https://docs.vidjutsu.ai/legal/terms">Terms</a></div></footer>
    </>
  );
}
