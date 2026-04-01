"use client";

import { useState, useCallback } from "react";

export function CopyCommand({ command, className = "" }: { command: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [command]);

  return (
    <button
      onClick={copy}
      className={`group flex items-center justify-between w-full bg-surface-alt border border-border rounded p-4 font-mono text-[13px] text-left hover:border-ink-light transition-colors cursor-pointer ${className}`}
    >
      <span>
        <span className="text-ink-light select-none">$ </span>
        <span className="text-ink">{command}</span>
      </span>
      <span className="text-[11px] text-ink-light group-hover:text-ink-muted transition-colors ml-4 shrink-0">
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}
