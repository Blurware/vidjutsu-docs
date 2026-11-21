import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Payment canceled",
};

export default function BillingCanceledPage() {
  return (
    <SimplePage badge="off" title="Payment canceled">
      <p>
        Nothing was charged. When you&rsquo;re ready, ask your agent for a new
        payment link, or run <code>vidjutsu billing checkout</code> if you
        haven&rsquo;t signed up yet.
      </p>
      <div className="vl-actions">
        <a className="vl-button" href="/">Back to Home</a>
      </div>
    </SimplePage>
  );
}
