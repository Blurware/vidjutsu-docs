const finishedStages = [
  "Downloading the source into a stable VidJutsu asset",
  "Transcribing the video with word-level timing",
  "Running a compliance check against your rules",
] as const;

const resultRows = [
  "download complete · asset stored",
  "transcript returned · 12.4s duration",
  "overlay applied · job completed",
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
          <p>Download this TikTok post, transcribe it, then burn the first line as an overlay: <strong>“When our product finally clicks.”</strong></p>
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
          <p>The finished video is ready with the requested overlay:</p>
          <div className="vj-result-list">
            {resultRows.map((row, index) => <div key={row}><span>{String(index + 1).padStart(2, "0")}</span><code>{row}</code><i>↗</i></div>)}
          </div>
        </article>
      </div>
    </div>
  );
}
