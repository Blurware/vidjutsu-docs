import { APP_URL } from "@/components/site-nav";
import { CHECKED, type Comparison } from "@/lib/compare";

export function CompareView({ c }: { c: Comparison }) {
  return (
    <>
      <section className="vj-compare-hero vj-frame">
        <a href="/compare" className="vj-back">← All comparisons</a>
        <span className="vj-eyebrow">Compare</span>
        <h1>{c.title}</h1>
        <p>{c.summary}</p>
        <div className="vj-hero-actions">
          <a className="vj-primary" href={APP_URL}>Open the app</a>
          <a href="/#start">Connect your agent →</a>
        </div>
      </section>
      <section className="vj-frame">
        <table className="vj-compare-table">
          <thead><tr><th scope="col"><span className="sr-only">Topic</span></th><th scope="col">{c.name}</th><th scope="col">VidJutsu</th></tr></thead>
          <tbody>
            {c.rows.map((r) => (
              <tr key={r.topic}><th scope="row">{r.topic}</th><td>{r.them}</td><td>{r.us}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="vj-frame vj-compare-choose">
        <article><span>CHOOSE {c.name.toUpperCase()} IF</span><ul>{c.chooseThem.map((x) => <li key={x}>{x}</li>)}</ul></article>
        <article className="with"><span>CHOOSE VIDJUTSU IF</span><ul>{c.chooseUs.map((x) => <li key={x}>{x}</li>)}</ul></article>
      </section>
      <p className="vj-frame vj-compare-note">
        {`Compared from public product information as of ${CHECKED}. ${c.trademark} VidJutsu edits and renders footage you bring; it doesn’t generate video.`}
      </p>
    </>
  );
}
