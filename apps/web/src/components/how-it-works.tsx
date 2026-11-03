const BENEFITS = [
  {
    num: "01",
    title: "Upload takes",
    desc: "Phone footage, screen recordings, ProRes, music, stills. Straight to storage, up to 50 GB a file.",
  },
  {
    num: "02",
    title: "Edit by calls",
    desc: "Place clips, trim, cut pauses, fade and level. Every edit is a revision, so nothing is lost and retries are safe.",
  },
  {
    num: "03",
    title: "Render in parallel",
    desc: "1080p or 4K on many machines at once. Change one cut and only that part renders again.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 sm:px-8 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14">
          {BENEFITS.map((b) => (
            <div key={b.num} className="text-center">
              <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-[-0.04em] text-brand/25 leading-none mb-4">
                {b.num}
              </div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed max-w-xs mx-auto">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
