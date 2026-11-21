import type { ReactNode } from "react";
import { SetupConfigurator } from "@/components/setup-configurator";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { RATES, REFUND_FAQ, START_AMOUNT, WALLET_FAQ } from "@/lib/pricing";
import { AgentWindow } from "./agent-window";
import { Faq } from "./faq";
import { Fit } from "./fit";
import { CommentPicture, FilesPicture, RenderPicture, ShotListPicture, TranscriptPicture } from "./pictures";

const VS = [
  ["Write a script, then edit it by hand.", "Your agent cuts the timeline."],
  ["AI as a plugin, or credits per AI action.", "Uses the AI plan you already pay for."],
  ["Hours of setup, then an agent clicking through menus.", "Connect once over MCP."],
  ["Renders tie up your laptop.", "Renders run in the cloud. A small change re-renders only what changed."],
  ["Notes as text or screenshots.", "Comments on the exact frame, and the agent fixes them."],
  ["Scrub the whole cut for mistakes.", "The agent checks for gaps, black frames and silence."],
  ["The agent guesses the story.", "You approve the shot list first."],
  ["Drag clips around.", "Leave a note, get v2."],
  ["Seats and monthly plans.", "Pay only for rendering and storage. No seats."],
] as const;

const FAQ = [
  ["Does VidJutsu make motion graphics?", "No. Make graphics in Claude Code, Codex, or HyperFrames, then bring the files here to assemble and render."],
  ["Does it generate video?", "No. You bring the footage: takes, screen recordings, clips and music. Your agent edits it here."],
  ["Do I need to download anything?", "No. VidJutsu runs in your browser at app.vidjutsu.ai, your agent connects over MCP, and renders run in the cloud."],
  ["Which agents work with it?", "Claude Code, Codex, Cursor, the Claude app, and any MCP client. Builders can use the API or the vidjutsu CLI."],
  ["Do I pay for AI here too?", "No. Your agent runs on the AI plan you already have. VidJutsu charges only for rendering and storage, from your wallet."],
  ["How does the wallet work?", WALLET_FAQ],
  ["Can I get a refund?", REFUND_FAQ],
] as const;

function Step({ id, n, label, title, body, flip, children }: { id: string; n: string; label: string; title: string; body: string; flip?: boolean; children: ReactNode }) {
  return (
    <section className={flip ? "vl-step flip" : "vl-step"} aria-labelledby={id}>
      <div className="vl-step-copy">
        <span className="vl-eyebrow">{n} · {label}</span>
        <h2 id={id}>{title}</h2>
        <p>{body}</p>
      </div>
      {children}
    </section>
  );
}

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f9e6f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
const Cross = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a3a6ad" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
);

export function Landing() {
  return (
    <main className="vl" id="main">
      <div className="vl-wrap">
        <SiteNav home />

        <header className="vl-hero">
          <h1>Give your agent<br />a video editor.</h1>
          <p>From raw footage to finished video, with the agent you already use.</p>
          <p className="vl-hook">AI-native timeline. <b>You don&apos;t edit, you comment.</b> Leave a note, and ask for the next version.</p>
        </header>

        <SetupConfigurator />

        <section className="vl-demo" aria-labelledby="demo-h">
          <h2 id="demo-h">Your agent cuts. You comment.</h2>
          <div className="vl-demo-window vl-desk"><Fit width={1865} height={988}><AgentWindow /></Fit></div>
          <div className="vl-demo-window vl-phone vl-chat" aria-hidden="true">
            <header><i />412-ep1 edits</header>
            <div>
              <span className="me">Do what my comments on 412-ep1 say, then render it.</span>
              <small>Used VidJutsu · comments, shot_list</small>
              <p>Read the 2 open comments and the shot list.</p>
              <small>Used VidJutsu · edit, add_comment, resolve_comment</small>
              <p>Held the shot at 0:04 for 0.6 s longer and cut the breath before &quot;every old weapon in the&quot;. I replied to both comments and resolved them.</p>
              <small>Used VidJutsu · render</small>
              <p>Version 5 is rendering in the cloud. I&apos;ll send you the watch link when it&apos;s done.</p>
            </div>
          </div>
        </section>

        <Step id="files-h" n="01" label="RAW FOOTAGE" title="Every raw take, in one place." body="Upload takes, screen recordings, music and stills. Files up to 50 GB.">
          <FilesPicture />
        </Step>
        <Step id="shots-h" n="02" label="THE PLAN" title="Start from a shot list." flip body="Your agent writes the plan. You tweak it before any cut. Then the agent edits from the shot list and checks the cut (gaps, black frames, silence) before you watch.">
          <ShotListPicture />
        </Step>
        <Step id="self-h" n="03" label="BY TRANSCRIPT" title="Easy edits, by transcript." body="Highlight words in the script to cut them or comment on them. You never have to touch the timeline.">
          <TranscriptPicture />
        </Step>
        <Step id="comment-h" n="04" label="YOUR NOTES" title="Comment right on the video." flip body="You don't edit, you comment. The agent fixes that frame and sends the next version.">
          <CommentPicture />
        </Step>
        <Step id="render-h" n="05" label="NEXT VERSION" title="Render in the cloud." body="See the price before you render. A small change re-renders only what changed.">
          <RenderPicture />
        </Step>

        <section className="vl-vs" aria-labelledby="vs-h">
          <h2 id="vs-h">With an agent, and without.</h2>
          <div className="vl-vs-table">
            <div className="vl-vs-head"><span>OTHER EDITORS</span><span>WITH VIDJUTSU</span></div>
            {VS.map(([without, withUs]) => (
              <div className="vl-vs-row" key={without}>
                <span><Cross />{without}</span>
                <span><Check />{withUs}</span>
              </div>
            ))}
          </div>
          <a className="vl-more" href="/compare">Compare with Descript, Premiere Pro and others →</a>
        </section>

        <section className="vl-pricing" id="pricing" aria-labelledby="price-h">
          <div className="vl-pricing-head">
            <h2 id="price-h">No subscription.</h2>
            <p>Load your wallet once. Pay for what you render, by the second.</p>
          </div>
          <div className="vl-rates">
            {RATES.map((r) => <div key={r.price}><b>{r.price}</b><span>{r.unit}</span></div>)}
          </div>
          <div className="vl-start">
            <div>
              <span>TO GET STARTED</span>
              <b>{START_AMOUNT}</b>
              <span>loaded into your wallet once</span>
            </div>
            <ul>
              <li><i>✓</i>No seats, no monthly fee.</li>
              <li><i>✓</i>Pay only for what you render and store.</li>
              <li><i>✓</i>Top up whenever you need more.</li>
            </ul>
          </div>
        </section>

        <section className="vl-faq" aria-labelledby="faq-h">
          <h2 id="faq-h">Questions</h2>
          <Faq items={FAQ} />
        </section>

        <SiteFooter home />
      </div>
    </main>
  );
}
