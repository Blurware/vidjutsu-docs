"use client";

import { useState } from "react";

type Connection = "mcp" | "cli" | "api";
type Agent = "claude" | "claude-code" | "chatgpt" | "openclaw" | "hermes";

const connections: { id: Connection; label: string }[] = [
  { id: "mcp", label: "MCP" },
  { id: "cli", label: "CLI" },
  { id: "api", label: "API" },
];

const agents: { id: Agent; label: string; icon: string }[] = [
  { id: "claude", label: "Claude", icon: "/agent-icons/claude.svg" },
  { id: "claude-code", label: "Claude Code", icon: "/agent-icons/claude.svg" },
  { id: "chatgpt", label: "ChatGPT", icon: "/agent-icons/chatgpt.svg" },
  { id: "openclaw", label: "OpenClaw", icon: "/agent-icons/openclaw.svg" },
  { id: "hermes", label: "Hermes", icon: "/agent-icons/hermes.svg" },
];

function label(agent: Agent) {
  return agents.find((item) => item.id === agent)?.label ?? "your agent";
}

const connectorHints: Record<Agent, string> = {
  claude:
    "In the Claude app: Settings, Connectors, Add custom connector. On claude.ai: claude.ai/customize/connectors.",
  "claude-code": "",
  chatgpt: "In ChatGPT: Settings, Connectors, add a custom connector.",
  openclaw: "In OpenClaw: add an MCP server in your connector settings.",
  hermes: "In Hermes: add an MCP server in your connector settings.",
};

function setup(connection: Connection, agent: Agent) {
  const agentLabel = label(agent);
  if (connection === "mcp") {
    const description =
      "Connect once and your agent can upload media, edit timelines and render through VidJutsu's tools. The server is at api.vidjutsu.ai/mcp and signs in with OAuth or an API key.";
    if (agent === "claude-code") {
      return {
        title: `Connect ${agentLabel} over MCP`,
        description,
        steps: [
          "Run the command below. The http transport is required for a remote server.",
          "Run /mcp in a session, pick vidjutsu, and choose Authenticate. A browser opens to sign in.",
          "Ask your agent to cut your takes together and render them.",
        ],
        command: "claude mcp add --transport http vidjutsu https://api.vidjutsu.ai/mcp",
        copy: "COPY COMMAND",
        note: "Prefer a key? Add --header \"Authorization: Bearer vj_live_...\".",
        guide: "MCP guide ↗",
        href: "https://docs.vidjutsu.ai/mcp",
      };
    }
    return {
      title: `Connect ${agentLabel} over MCP`,
      description,
      steps: [
        connectorHints[agent] || "Add a custom MCP connector in your agent settings.",
        "Paste the server URL below and sign in when the browser opens. There is no command to run.",
        "Ask your agent to cut your takes together and render them.",
      ],
      command: "https://api.vidjutsu.ai/mcp",
      copy: "COPY URL",
      note: "Your access is scoped to your account and can be revoked any time.",
      guide: "MCP guide ↗",
      href: "https://docs.vidjutsu.ai/mcp",
    };
  }
  if (connection === "cli") {
    return {
      title: `Use VidJutsu from ${agentLabel}`,
      description: "Install the CLI where your agent works. Every command prints JSON your agent can read.",
      steps: [
        "Install the VidJutsu CLI.",
        "Run vidjutsu login, enter your email and the code we send you.",
        "Ask your agent to upload, edit and render.",
      ],
      command: "npm install -g vidjutsu",
      copy: "COPY INSTALL",
      note: "Works anywhere your agent has a terminal.",
      guide: "CLI guide ↗",
      href: "https://docs.vidjutsu.ai/cli/index",
    };
  }
  return {
    title: `Call the API from ${agentLabel}`,
    description: "Two calls sign you up and return an API key. Then it's plain JSON over HTTPS.",
    steps: [
      "Ask for a sign-in code with the command below.",
      "Send the code to POST /v3/auth/verify to get your API key and a checkout link.",
      "Send the key as Authorization: Bearer vj_live_... on every call.",
    ],
    command: "curl -X POST https://api.vidjutsu.ai/v3/auth/email -H 'Content-Type: application/json' -d '{\"email\":\"you@example.com\"}'",
    copy: "COPY COMMAND",
    note: "Agents can run sign-up on their own; you only read the code.",
    guide: "API reference ↗",
    href: "https://docs.vidjutsu.ai/api-reference/introduction",
  };
}

export function SetupConfigurator() {
  const [connection, setConnection] = useState<Connection>("mcp");
  const [agent, setAgent] = useState<Agent>("claude");
  const [copied, setCopied] = useState(false);
  const current = setup(connection, agent);

  async function copyCommand() {
    await navigator.clipboard.writeText(current.command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1_800);
  }

  return (
    <section className="vj-setup" id="start" aria-labelledby="setup-heading">
      <div className="vj-frame">
        <div className="vj-setup-heading">
          <h2 id="setup-heading">Connect your agent.</h2>
          <p>
            Connect with MCP for typed tools, use the CLI in a terminal, or
            call the API from your own code.
          </p>
        </div>

        <div className="vj-setup-panel">
          <div className="vj-connection-tabs" role="tablist" aria-label="Connection type">
            {connections.map((item) => (
              <button key={item.id} type="button" role="tab" aria-selected={connection === item.id} className={connection === item.id ? "active" : ""} onClick={() => setConnection(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="vj-agent-tabs" role="tablist" aria-label="Agent runtime">
            {agents.map((item) => (
              <button key={item.id} type="button" role="tab" aria-selected={agent === item.id} className={agent === item.id ? "active" : ""} onClick={() => setAgent(item.id)}>
                <span className="vj-agent-icon" aria-hidden="true"><img src={item.icon} alt="" /></span>{item.label}
              </button>
            ))}
          </div>
          <div className="vj-setup-content" key={`${connection}-${agent}`}>
            <header>
              <div>
                <span>{connection} / {label(agent)}</span>
                <h2>{current.title}</h2>
                <p>{current.description}</p>
              </div>
              <a href="https://docs.vidjutsu.ai/quickstart">GET STARTED ↗</a>
            </header>
            <ol>
              {current.steps.map((step, index) => <li key={step}><i>{index + 1}</i><p>{step}</p></li>)}
            </ol>
            <div className="vj-command"><code>{current.command}</code><button type="button" onClick={copyCommand}>{copied ? "COPIED" : current.copy}</button></div>
            <footer><span>{current.note}</span><a href={current.href}>{current.guide}</a></footer>
          </div>
        </div>
        <p className="vj-setup-note">Start with <strong>MCP</strong> to connect an agent runtime directly. Use the <strong>CLI</strong> for a terminal workspace, or the <strong>API</strong> from your own code.</p>
      </div>
    </section>
  );
}
