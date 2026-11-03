import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to us about VidJutsu Enterprise: higher limits, single sign-on, your own storage or a custom fleet.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full animate-fade-in">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-muted mb-4">
          Enterprise
        </p>
        <h1 className="text-2xl font-semibold text-ink mb-3">Need more than pay as you go?</h1>
        <p className="text-ink-muted mb-4">
          Enterprise is an annual contract with volume pricing, higher limits,
          single sign-on, your own storage, a custom render fleet and an SLA.
        </p>
        <p className="text-ink-muted mb-8">
          Email{" "}
          <a className="text-ink underline" href="mailto:support@vidjutsu.ai?subject=Enterprise">
            support@vidjutsu.ai
          </a>{" "}
          with what you&rsquo;re building and roughly how many minutes you
          render a month.
        </p>
        <a href="/" className="text-sm text-ink-muted hover:text-ink transition-colors">
          &larr; Back to VidJutsu
        </a>
      </div>
    </main>
  );
}
