const VOICES = [
  "Advertisers wouldn't even see my videos because of some small change in the Terms of Service. Now I know without having to check every time.",
  "I used to guess whether a clip was safe. Now I run it through VidJutsu before it hits my channels — I catch problems before an automated system can strike or bury my reach.",
  "I post at volume. I do not have time to read every rule change. I needed one step that says \"fix this now\" instead of finding out after the fact.",
  "Brand deals mean I cannot afford a surprise takedown. I scan first — same file, clear risk readout, then I post.",
];

export function IcpQuotes() {
  return (
    <section
      id="voices"
      aria-label="Why creators scan first"
      className="px-5 sm:px-8 py-14 sm:py-20 bg-surface-alt border-y border-border"
    >
      <div className="max-w-2xl mx-auto space-y-10">
        {VOICES.map((text) => (
          <blockquote
            key={text}
            className="text-ink-muted text-base sm:text-lg leading-relaxed border-l-2 border-brand/40 pl-5 sm:pl-6 not-italic"
          >
            {text}
          </blockquote>
        ))}
      </div>
    </section>
  );
}
