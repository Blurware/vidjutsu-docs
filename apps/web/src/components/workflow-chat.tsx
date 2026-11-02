const finishedStages = [
  "Uploaded take1.mov, take2.mov and music.m4a",
  "Created project q3-update",
  "Placed both takes with their sound, music at 25% under both",
  "Cut 4 pauses across every track",
  "Rendered in 4K on 23 machines",
] as const;

const resultRows = [
  "q3-update.mp4 · 3840x2160 · 2:41",
  "revision · 7c1e... (5 edits, all kept)",
  "download link · valid 7 days",
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
          <p>Cut my two takes back to back, cut the long pauses, put <strong>music.m4a</strong> under it and render 4K.</p>
        </article>
        <article className="vj-message vj-message-agent">
          <span>02 · AGENT</span>
          <p>On it. Uploading, then building the timeline.</p>
          <div className="vj-work-log">
            {finishedStages.map((item) => <div key={item}><i>✓</i>{item}</div>)}
          </div>
        </article>
        <article className="vj-message vj-message-result">
          <span>03 · AGENT</span>
          <p>Done. Here it is:</p>
          <div className="vj-result-list">
            {resultRows.map((row, index) => <div key={row}><span>{String(index + 1).padStart(2, "0")}</span><code>{row}</code><i>↗</i></div>)}
          </div>
        </article>
      </div>
    </div>
  );
}
