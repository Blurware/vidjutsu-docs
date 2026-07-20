"use client";

import { useState } from "react";

type Connection = "mcp" | "cli" | "skill";
type Agent = "claude" | "claude-code" | "chatgpt" | "openclaw" | "hermes";

const connections: { id: Connection; label: string }[] = [
  { id: "mcp", label: "MCP" },
  { id: "cli", label: "CLI" },
  { id: "skill", label: "SKILL" },
];

const agents: { id: Agent; label: string; mark: string }[] = [
  { id: "claude", label: "Claude", mark: "✦" },
  { id: "claude-code", label: "Claude Code", mark: "✦" },
  { id: "chatgpt", label: "ChatGPT", mark: "◉" },
  { id: "openclaw", label: "OpenClaw", mark: "⌘" },
  { id: "hermes", label: "Hermes", mark: "H" },
];

function label(agent: Agent) {
  return agents.find((item) => item.id === agent)?.label ?? "your agent";
}

function setup(connection: Connection, agent: Agent) {
  const agentLabel = label(agent);
  if (connection === "mcp") {
    return {
      title: `VidJutsu MCP is coming soon`,
      description: "A public remote MCP server is not configured yet. Use the Skill or CLI today to give your agent the same typed video workflow.",
      steps: [
        "Install the VidJutsu Skill in your agent workspace.",
        "Keep VIDJUTSU_API_KEY in the workspace secret store.",
        "Ask your agent to clone a meme video for your brand.",
      ],
      command: "npx skills add tfcbot/vidjutsu-skills",
      copy: "COPY SKILL",
      note: "This tab is a roadmap preview, not a live MCP endpoint.",
      guide: "Agent auth guide ↗",
      href: "https://docs.vidjutsu.ai/auth.md",
    };
  }
  if (connection === "cli") {
    return {
      title: `Use VidJutsu from ${agentLabel}`,
      description: "Install the CLI in the workspace your agent can use, then call deterministic media primitives.",
      steps: [
        "Install the VidJutsu CLI in the agent’s terminal environment.",
        "Set VIDJUTSU_API_KEY as an environment secret.",
        "Ask your agent to clone a meme video for your brand.",
      ],
      command: "curl -fsSL https://vidjutsu.ai/install.sh | bash",
      copy: "COPY INSTALL",
      note: "The installer works on macOS and Linux.",
      guide: "CLI guide ↗",
      href: "https://docs.vidjutsu.ai/cli/install",
    };
  }
  return {
    title: `Give ${agentLabel} the VidJutsu workflow`,
    description: "Install the public workflow instructions so your agent uses typed primitives instead of guessing HTTP calls.",
    steps: [
      "Install the VidJutsu skill in the agent workspace.",
      "Set VIDJUTSU_API_KEY in the trusted environment.",
      "Ask your agent to clone a meme video for your brand.",
    ],
    command: "npx skills add tfcbot/vidjutsu-skills",
    copy: "COPY SKILL",
    note: "Keys stay in the environment, not in the skill instructions.",
    guide: "Skill guide ↗",
    href: "https://docs.vidjutsu.ai/auth.md",
  };
}

export function SetupConfigurator() {
  const [connection, setConnection] = useState<Connection>("skill");
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
          <h1 id="setup-heading">Clone meme videos for your brand.</h1>
          <p>
            Start with a short reference. VidJutsu gives your agent the primitives to check it,
            recreate the performance with your character, add your text, and verify the result.
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
                <i aria-hidden="true">{item.mark}</i>{item.label}
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
              <a href="https://docs.vidjutsu.ai/get-api-key">GET ACCESS ↗</a>
            </header>
            <ol>
              {current.steps.map((step, index) => <li key={step}><i>{index + 1}</i><p>{step}</p></li>)}
            </ol>
            <div className="vj-command"><code>{current.command}</code><button type="button" onClick={copyCommand}>{copied ? "COPIED" : current.copy}</button></div>
            <footer><span>{current.note}</span><a href={current.href}>{current.guide}</a></footer>
          </div>
        </div>
        <p className="vj-setup-note">Start with the <strong>Skill</strong>. Use the <strong>CLI</strong> for a terminal workspace. <strong>MCP</strong> is not public yet.</p>
      </div>
    </section>
  );
}
