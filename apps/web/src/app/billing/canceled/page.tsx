import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout canceled",
};

export default function BillingCanceledPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-alt mb-6">
          <svg
            className="w-8 h-8 text-ink-muted"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-ink mb-2">
          Checkout canceled
        </h1>
        <p className="text-ink-muted mb-6">
          Nothing was charged. When you&rsquo;re ready, get a new link with
          <code className="font-mono text-sm"> vidjutsu billing checkout</code>.
        </p>
        <a
          href="/"
          className="inline-block px-5 py-2.5 rounded-lg bg-ink text-surface text-sm font-medium hover:bg-ink/90 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
