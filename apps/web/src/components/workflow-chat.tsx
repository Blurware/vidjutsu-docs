const finishedStages = [
  "Checking cloneability against the source clip",
  "Building the character",
  "Generating a clean starting frame",
] as const;

const resultRows = [
  "verdict strong · score 95",
  "starting frame ready · no overlays",
  "clone rendered · videoUrl ready",
] as const;

export function WorkflowChat() {
  return (
    <div className="vj-workflow-chat" aria-label="Example VidJutsu agent session">
      <header>
        <div><span className="vj-chat-mark">VJ</span><div><strong>VidJutsu</strong><small>Agent session</small></div></div>
        <span className="vj-chat-status"><i /> COMPLETE</span>
      </header>
      <div className="vj-chat-body">
        <article className="vj-message vj-message-user">
          <span>01 · YOU</span>
          <p>Clone this trending skit: <strong>https://www.tiktok.com/@creator/video/7534210998821</strong></p>
        </article>
        <article className="vj-message vj-message-agent">
          <span>02 · AGENT</span>
          <p>On it. Each step is a typed call with its own durable job.</p>
          <div className="vj-work-log">
            {finishedStages.map((item) => <div key={item}><i>✓</i>{item}</div>)}
          </div>
        </article>
        <article className="vj-message vj-message-result">
          <span>03 · AGENT</span>
          <p>The clone is rendered and ready:</p>
          <div className="vj-result-list">
            {resultRows.map((row, index) => <div key={row}><span>{String(index + 1).padStart(2, "0")}</span><code>{row}</code><i>↗</i></div>)}
          </div>
        </article>
      </div>
    </div>
  );
}
