"use client";

import { useState } from "react";

export function Faq({ items }: { items: readonly (readonly [string, string])[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="vl-faq-list">
      {items.map(([q, a], i) => (
        <div key={q}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            {q}<span aria-hidden="true">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <p>{a}</p>}
        </div>
      ))}
    </div>
  );
}
