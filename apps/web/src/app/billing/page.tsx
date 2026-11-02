import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing",
};

export default function BillingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center animate-fade-in">
        <h1 className="text-2xl font-semibold text-ink mb-2">Billing updated</h1>
        <p className="text-ink-muted mb-6">
          You can close this tab and go back to your agent or terminal. To
          open the billing portal again, run
          <code className="font-mono text-sm"> vidjutsu billing portal</code>.
        </p>
        <a
          href="https://docs.vidjutsu.ai/pricing"
          className="inline-block px-5 py-2.5 rounded-lg bg-ink text-surface text-sm font-medium hover:bg-ink/90 transition-colors"
        >
          Pricing and billing
        </a>
      </div>
    </main>
  );
}
