import { CHECKED, type Comparison } from "@/lib/compare";

export function CompareView({ c }: { c: Comparison }) {
  return (
    <>
      <header className="vl-page-hero">
        <a href="/compare" className="vl-back">← All comparisons</a>
        <span className="vl-eyebrow">Compare</span>
        <h1>{c.title}</h1>
        <p>{c.summary}</p>
        <div className="vl-actions">
          <a href="/#start">Connect your agent →</a>
        </div>
      </header>
      <div className="vl-card" style={{ overflow: "hidden" }}>
        <table className="vl-compare-table">
          <thead><tr><th scope="col"><span className="sr-only">Topic</span></th><th scope="col">{c.name}</th><th scope="col">VidJutsu</th></tr></thead>
          <tbody>
            {c.rows.map((r) => (
              <tr key={r.topic}><th scope="row">{r.topic}</th><td data-label={c.name}>{r.them}</td><td data-label="VidJutsu">{r.us}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="vl-choose">
        <article className="vl-card"><span>CHOOSE {c.name.toUpperCase()} IF</span><ul>{c.chooseThem.map((x) => <li key={x}>{x}</li>)}</ul></article>
        <article className="vl-card with"><span>CHOOSE VIDJUTSU IF</span><ul>{c.chooseUs.map((x) => <li key={x}>{x}</li>)}</ul></article>
      </section>
      <p className="vl-note-small">
        {`Compared from public product information as of ${CHECKED}. ${c.trademark} VidJutsu edits and renders footage you bring. It doesn’t generate video.`}
      </p>
    </>
  );
}
