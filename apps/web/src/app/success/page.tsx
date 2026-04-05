"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="ml-2 px-2 py-1 text-xs rounded bg-surface-alt border border-border hover:bg-border transition-colors font-mono"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const prompt = sessionId
    ? `Check my payment status for session ${sessionId}`
    : "Check my payment status";

  const cliCommand = sessionId
    ? `vidjutsu session ${sessionId}`
    : "vidjutsu session";

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-ink mb-2">
            Payment Complete
          </h1>
          <p className="text-ink-muted">
            Return to your agent or terminal where you started this payment to
            retrieve your API key.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-surface-alt p-4">
            <p className="text-xs font-medium text-ink-muted uppercase tracking-wide mb-2">
              Paste this prompt into your agent
            </p>
            <div className="flex items-center justify-between">
              <code className="text-sm font-mono text-ink break-all">
                {prompt}
              </code>
              <CopyButton text={prompt} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-alt p-4">
            <p className="text-xs font-medium text-ink-muted uppercase tracking-wide mb-2">
              Or run this in your terminal
            </p>
            <div className="flex items-center justify-between">
              <code className="text-sm font-mono text-ink break-all">
                {cliCommand}
              </code>
              <CopyButton text={cliCommand} />
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-ink-light mt-8">
          You can close this tab after copying the command above.
        </p>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-ink-muted">Loading...</p>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
