import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Billing",
};

export default function BillingPage() {
  return (
    <SimplePage badge="ok" title="Billing updated">
      <p>
        You can close this tab and go back to your agent or terminal. To update
        your card or see receipts again, run <code>vidjutsu billing portal</code>.
      </p>
      <div className="vl-actions">
        <a className="vl-button" href="https://docs.vidjutsu.ai/pricing">Pricing and billing</a>
      </div>
    </SimplePage>
  );
}
