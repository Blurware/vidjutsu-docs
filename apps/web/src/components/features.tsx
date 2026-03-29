const FEATURES = [
  {
    title: "Managed accounts",
    desc: "Theme pages, fan accounts, clip pages on TikTok and Instagram. Warming takes up to 7 days.",
    endpoint: "POST /v1/accounts",
    credits: "10 credits",
  },
  {
    title: "Video generation",
    desc: "Text-to-video and image-to-video. Veo 3.1 and Veo 3.1 Fast models.",
    endpoint: "POST /v1/videos/generate",
    credits: "6 credits",
  },
  {
    title: "Post scheduling",
    desc: "Schedule posts to any managed account. Set a time or publish immediately.",
    endpoint: "POST /v1/posts",
    credits: "3 credits",
  },
  {
    title: "Image generation",
    desc: "Generate images for thumbnails and posts. Up to 4K resolution.",
    endpoint: "POST /v1/images/generate",
    credits: "4 credits",
  },
  {
    title: "Music generation",
    desc: "Background music and full tracks. Instrumental or with vocals.",
    endpoint: "POST /v1/music/generate",
    credits: "3 credits",
  },
  {
    title: "Campaigns",
    desc: "Group accounts, content, and posts into campaigns for tracking.",
    endpoint: "POST /v1/campaigns",
    credits: "Free",
  },
];

export function Features() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-24 bg-surface-alt border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-4">
          Built for agents
        </h2>
        <p className="text-ink-muted text-center text-sm sm:text-base mb-12 sm:mb-16 max-w-md mx-auto">
          Every capability is a REST endpoint. Pipe them together however you want.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-5 sm:p-6 rounded-xl border border-border bg-surface hover:border-brand/25 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-[15px]">{f.title}</h3>
                <span className="text-[11px] font-mono text-brand bg-brand/8 px-2 py-0.5 rounded-full">
                  {f.credits}
                </span>
              </div>
              <p className="text-ink-muted text-sm leading-relaxed mb-3">
                {f.desc}
              </p>
              <code className="text-ink/25 text-[11px] font-mono">{f.endpoint}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
