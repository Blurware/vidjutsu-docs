const BENEFITS = [
  {
    num: "01",
    title: "Get a clone score",
    desc: "Know a video is worth cloning before you spend anything. Every clone starts with a score.",
  },
  {
    num: "02",
    title: "Swap in your own characters",
    desc: "Keep the motion that is already winning. Put your own face or brand character in it.",
  },
  {
    num: "03",
    title: "Get views",
    desc: "Post what is already trending, at the pace an agent can work. More at bats, more hits.",
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
