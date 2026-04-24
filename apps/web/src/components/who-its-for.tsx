const AUDIENCES = [
  "Clippers",
  "Personal brands",
  "AI videos",
  "Short-form content under 5 minutes",
];

export function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      aria-label="Who this is for"
      className="px-5 sm:px-8 py-14 sm:py-20"
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-3 text-center">
          Who this is for
        </p>
        <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-8 text-center">
          Built for people who post a lot of video
        </h2>
        <ul className="text-ink-muted text-base sm:text-lg leading-relaxed space-y-3 max-w-md mx-auto">
          {AUDIENCES.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-brand font-semibold shrink-0" aria-hidden>
                ·
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
