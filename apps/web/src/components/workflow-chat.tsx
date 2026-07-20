const finishedStages = [
  "Importing the source into a stable VidJutsu asset",
  "Checking cloneability before any generation work",
  "Creating the character and clean starting image",
] as const;

const resultRows = [
  "clone check passed · Kling motion control selected",
  "motion clone complete · source sound preserved",
  "wall text applied · final QA passed",
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
          <p>Clone this TikTok with a new character. Keep the source motion and sound, then add this wall text: <strong>“The second I started building with AI.”</strong></p>
        </article>
        <article className="vj-message vj-message-agent">
          <span>02 · AGENT</span>
          <p>On it. I&apos;ll check that the source is a fit before I create any paid media.</p>
          <div className="vj-work-log">
            {finishedStages.map((item) => <div key={item}><i>✓</i>{item}</div>)}
          </div>
        </article>
        <article className="vj-message vj-message-result">
          <span>03 · AGENT</span>
          <p>The final clip is ready with the requested overlay:</p>
          <div className="vj-result-list">
            {resultRows.map((row, index) => <div key={row}><span>{String(index + 1).padStart(2, "0")}</span><code>{row}</code><i>↗</i></div>)}
          </div>
        </article>
      </div>
    </div>
  );
}
