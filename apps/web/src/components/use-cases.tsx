const USE_CASES = [
  {
    tag: "01 / CREATORS",
    title: "Long-form YouTube without the editing grind",
    body: "Record your takes, then have your agent cut retakes and long pauses, lay out screen and camera, add music and captions. You review the cut and comment where it needs work.",
  },
  {
    tag: "02 / FACELESS CHANNELS",
    title: "Voiceover, B-roll and screen recordings, assembled every week",
    body: "Hand your agent the voiceover and the clips. It builds the timeline from a shot list and renders in the cloud, so the next video can start while the last one renders.",
  },
  {
    tag: "03 / AI DRAMAS",
    title: "Episodes from clips you generated anywhere",
    body: "Make your shots in whatever video model you like, upload them, and let your agent sequence scenes, trim, add sound and render each episode. VidJutsu edits; it doesn't generate.",
  },
  {
    tag: "04 / AI ADS",
    title: "Many ad variants from the same footage",
    body: "Ask for ten hooks, three lengths, 16:9 and 9:16. Every variant is a revision of one project, and they all render on cloud machines at the same time.",
  },
] as const;

export function UseCases() {
  return (
    <section className="vj-usecases" id="use-cases" aria-labelledby="usecases-heading">
      <div className="vj-frame">
        <div className="vj-section-heading">
          <div><span>USE CASES</span><h2 id="usecases-heading">Built for people who make a lot of video.</h2></div>
          <p>If you'd rather describe the edit than drag clips around, your agent can do the cutting.</p>
        </div>
        <div className="vj-usecase-list">
          {USE_CASES.map((item) => (
            <article key={item.tag}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
