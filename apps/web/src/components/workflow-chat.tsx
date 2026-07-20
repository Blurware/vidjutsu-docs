const finishedStages = [
  "Importing the source into a stable VidJutsu asset",
  "Checking cloneability before any generation work",
  "Creating the character and clean starting image",
] as const;

const resultRows = [
  "clone check passed · Kling motion control selected",
  "brand character is consistent · source sound preserved",
  "brand wall text applied · final QA passed",
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
          <p>Clone this meme video for my brand. Keep the timing and sound, use our character, then add this wall text: <strong>“When our product finally clicks.”</strong></p>
        </article>
        <article className="vj-message vj-message-agent">
          <span>02 · AGENT</span>
          <p>On it. I&apos;ll check that the reference is a fit before I create any paid media.</p>
          <div className="vj-work-log">
            {finishedStages.map((item) => <div key={item}><i>✓</i>{item}</div>)}
          </div>
        </article>
        <article className="vj-message vj-message-result">
          <span>03 · AGENT</span>
          <p>The brand-ready meme is ready with the requested overlay:</p>
          <div className="vj-result-list">
            {resultRows.map((row, index) => <div key={row}><span>{String(index + 1).padStart(2, "0")}</span><code>{row}</code><i>↗</i></div>)}
          </div>
        </article>
      </div>
    </div>
  );
}
