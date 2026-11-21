"use client";

import { useState } from "react";

type Surface = "mcp" | "cli" | "api";
type Agent = "cc" | "codex" | "cursor" | "claude" | "any";

const MCP_URL = "https://api.vidjutsu.ai/mcp";
const DOCS = "https://docs.vidjutsu.ai";
const ASK = "Ask your agent to read the comments on your latest version and fix them.";

const surfaces: { id: Surface; label: string }[] = [
  { id: "mcp", label: "MCP" },
  { id: "cli", label: "CLI" },
  { id: "api", label: "API" },
];

const agents: Record<Agent, { label: string; steps: string[]; code: string }> = {
  cc: {
    label: "Claude Code",
    steps: ["Run this in your terminal.", "Run /mcp in Claude Code and choose Authenticate.", ASK],
    code: `claude mcp add --transport http vidjutsu ${MCP_URL}`,
  },
  codex: {
    label: "Codex",
    steps: ["Run this in your terminal.", "Sign in when the browser opens, or use an API key.", ASK],
    code: `codex mcp add vidjutsu --url ${MCP_URL}`,
  },
  cursor: {
    label: "Cursor",
    steps: ["Open Cursor Settings, then MCP, then Add new MCP server.", "Paste this config and sign in when asked.", ASK],
    code: `{"mcpServers":{"vidjutsu":{"type":"http","url":"${MCP_URL}"}}}`,
  },
  claude: {
    label: "Claude",
    steps: ["In the Claude app: Settings, Connectors, Add custom connector.", "Paste the server URL below and sign in when the browser opens.", ASK],
    code: MCP_URL,
  },
  any: {
    label: "Any MCP client",
    steps: ["Add a streamable HTTP server in your client.", "Use this URL. Sign in with OAuth or an API key.", ASK],
    code: MCP_URL,
  },
};

function panel(surface: Surface, agent: Agent) {
  if (surface === "mcp") {
    const a = agents[agent];
    return {
      eyebrow: `MCP / ${a.label.toUpperCase()}`,
      title: "Connect your agent over MCP",
      support: `Point Claude Code, Codex, Cursor, or any MCP client at ${MCP_URL}. It signs in with OAuth or an API key.`,
      steps: a.steps,
      code: a.code,
      guide: "MCP guide",
      href: `${DOCS}/mcp`,
    };
  }
  if (surface === "cli") {
    return {
      eyebrow: "CLI",
      title: "Edit from your terminal",
      support: "The vidjutsu command line: upload, edit and render from any shell your agent can run.",
      steps: ["Install the CLI.", "Run vidjutsu login. It emails you a code and saves a key.", ASK],
      code: "npm i -g vidjutsu",
      guide: "CLI guide",
      href: `${DOCS}/cli/index`,
    };
  }
  return {
    eyebrow: "API",
    title: "Build on the API",
    support: "The same operations as the MCP tools, over REST, with date-based versions.",
    steps: [
      "Get an API key with vidjutsu login, or two sign-up calls.",
      "Send requests to https://api.vidjutsu.ai with your key and a version header.",
      "Upload, edit and render from your own app.",
    ],
    code: 'curl https://api.vidjutsu.ai/projects -H "Authorization: Bearer vj_live_..." -H "VidJutsu-Version: 2026-11-03"',
    guide: "API reference",
    href: `${DOCS}/api-reference/introduction`,
  };
}

export function SetupConfigurator() {
  const [surface, setSurface] = useState<Surface>("mcp");
  const [agent, setAgent] = useState<Agent>("cc");
  const [copied, setCopied] = useState(false);
  const tab = panel(surface, agent);

  function copy() {
    navigator.clipboard?.writeText(tab.code).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1_800);
  }

  return (
    <section className="vl-connect" id="start" aria-label="Connect your agent">
      <div className="vl-connect-top">
        <div role="tablist" aria-label="How you connect">
          {surfaces.map((s) => (
            <button key={s.id} type="button" role="tab" aria-selected={surface === s.id} className={surface === s.id ? "active" : ""} onClick={() => { setSurface(s.id); setCopied(false); }}>
              {s.label}
            </button>
          ))}
        </div>
        <span>The video editing MCP for agents. API for builders.</span>
      </div>
      {surface === "mcp" && (
        <div className="vl-connect-agents" role="tablist" aria-label="Your agent">
          {(Object.keys(agents) as Agent[]).map((id) => (
            <button key={id} type="button" role="tab" aria-selected={agent === id} className={agent === id ? "active" : ""} onClick={() => { setAgent(id); setCopied(false); }}>
              {agents[id].label}
            </button>
          ))}
          <span>Grok Bot · soon</span>
        </div>
      )}
      <div className="vl-connect-body">
        <header>
          <div>
            <span>{tab.eyebrow}</span>
            <h2>{tab.title}</h2>
            <p>{tab.support}</p>
          </div>
          <a href={`${DOCS}/quickstart`}>Quickstart ↗</a>
        </header>
        <ol>
          {tab.steps.map((step, i) => <li key={step}><i>{i + 1}</i><span>{step}</span></li>)}
        </ol>
        <div className="vl-command"><code>{tab.code}</code><button type="button" onClick={copy}>{copied ? "COPIED" : "COPY"}</button></div>
        <footer><span>Your access is scoped to your account and can be revoked any time.</span><a href={tab.href}>{tab.guide} ↗</a></footer>
      </div>
    </section>
  );
}
