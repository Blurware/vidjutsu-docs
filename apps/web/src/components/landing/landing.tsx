import type { ReactNode } from "react";
import { COMPARISONS } from "@/lib/compare";
import { APP_URL } from "@/components/site-nav";
import { SetupConfigurator } from "@/components/setup-configurator";
import { AgentWindow } from "./agent-window";
import { EditorMock } from "./editor-mock";
import { FileWall } from "./file-wall";
import { Fit } from "./fit";

const USE_CASES = [
  ["Creators", "Long-form, minus the grind"],
  ["Faceless channels", "Voiceover and B-roll, every week"],
  ["AI dramas", "Episodes from your AI clips"],
  ["AI ads", "Ten variants, one project"],
  ["Launch videos", "Demo to film by launch day"],
  ["Clipping", "Shorts cut from your long videos"],
] as const;

type Tape = { left?: number; right?: number; rotate: number };
type Note = { text: string; side: "left" | "right"; rotate: number };

function Feature({ title, flip, tilt, tape, note, children }: { title: string; flip?: boolean; tilt: number; tape: Tape; note: Note; children: ReactNode }) {
  return (
    <section className={flip ? "vl-feature flip" : "vl-feature"}>
      <h2>{title}</h2>
      <div className="vl-card" style={{ transform: `rotate(${tilt}deg)` }}>
        <i className="vl-tape" style={{ left: tape.left != null ? `${(tape.left / 806) * 100}%` : undefined, right: tape.right != null ? `${(tape.right / 806) * 100}%` : undefined, transform: `rotate(${tape.rotate}deg)` }} />
        <div className="vl-card-shot"><Fit width={806} height={504}>{children}</Fit></div>
        <span className={`vl-note ${note.side}`} style={{ transform: `rotate(${note.rotate}deg)` }}>{note.text}</span>
      </div>
    </section>
  );
}

function Editor(props: Parameters<typeof EditorMock>[0]) {
  return (
    <div style={{ width: 806, height: 504, overflow: "hidden", borderRadius: 9 }}>
      <div style={{ width: 1120, height: 700, transform: "scale(.72)", transformOrigin: "0 0" }}><EditorMock {...props} /></div>
    </div>
  );
}

export function Landing() {
  return (
    <main className="vl" id="main">
      <div className="vl-hero">
        <nav className="vl-nav" aria-label="Primary navigation">
          <a className="vl-logo" href="#main"><b>VJ</b>vidjutsu</a>
          <div>
            <a href="#use-cases">Use cases</a>
            <a href="#pricing">Pricing</a>
            <a href="https://docs.vidjutsu.ai">Docs</a>
            <a className="vl-signin" href={APP_URL}>Sign in</a>
          </div>
        </nav>
        <div className="vl-hero-copy">
          <h1>Simple video editing<br /> for agents.</h1>
          <p>Your agent edits. You review in the browser.</p>
          <a className="vl-cta" href={APP_URL}>Open the app</a>
        </div>
        <SetupConfigurator />
      </div>

      <section className="vl-agent" id="features">
        <h2>Edit from your favorite agent.</h2>
        <div className="vl-agent-window"><Fit width={1865} height={988}><AgentWindow /></Fit></div>
      </section>

      <Feature title="Every raw take, in one place." tilt={-0.5} tape={{ left: 340, rotate: -2 }} note={{ text: "raw assets live here, not on your laptop ↑", side: "right", rotate: -2 }}>
        <FileWall />
      </Feature>
      <Feature title="Start from a shot list." flip tilt={0.6} tape={{ left: 340, rotate: -3 }} note={{ text: "↖ record a scene right here", side: "right", rotate: -3 }}>
        <Editor view="shotlist" />
      </Feature>
      <Feature title="Or edit it yourself." tilt={-0.6} tape={{ left: 60, rotate: 2 }} note={{ text: "highlight words to cut or comment ↗", side: "left", rotate: -2 }}>
        <Editor comments={false} pin={false} menu="script" />
      </Feature>
      <Feature title="Comment right on the video." flip tilt={0.5} tape={{ right: 80, rotate: -2 }} note={{ text: "↑ fixed in r14, no export, no email", side: "right", rotate: -3 }}>
        <Editor comments pin />
      </Feature>
      <Feature title="Render in the cloud." tilt={-0.5} tape={{ left: 340, rotate: 3 }} note={{ text: "keep editing while it renders ↗", side: "left", rotate: -2 }}>
        <Editor comments={false} pin={false} menu="versions" />
      </Feature>

      <section className="vl-uses" id="use-cases">
        <h2>Made for</h2>
        <div>
          {USE_CASES.map(([title, line], i) => (
            <article key={title} style={{ transform: `rotate(${[-1, 0.8, -0.5, 1, -0.8, 0.6][i]}deg)` }}><b>{title}</b><span>{line}</span></article>
          ))}
        </div>
        <p>You bring the footage. VidJutsu never generates it.</p>
      </section>

      <section className="vl-price" id="pricing">
        <div>$0.03 <span>per vCPU-minute</span></div>
        <p>Pay as you go. No subscriptions.</p>
      </section>

      <footer className="vl-footer">
        <div><a className="vl-logo" href="#main"><b>VJ</b>vidjutsu</a><p>Simple video editing for agents.</p></div>
        <nav aria-label="Product"><b>Product</b><a href={APP_URL}>App</a><a href="https://docs.vidjutsu.ai">Docs</a><a href="https://docs.vidjutsu.ai/pricing">Pricing</a></nav>
        <nav aria-label="Comparisons"><b>Compare</b>{COMPARISONS.map((c) => <a key={c.slug} href={`/compare/${c.slug}`}>vs {c.name}</a>)}</nav>
        <nav aria-label="Company"><b>Company</b><a href="/contact">Contact</a><a href="https://docs.vidjutsu.ai/legal/terms">Terms</a></nav>
      </footer>
    </main>
  );
}
