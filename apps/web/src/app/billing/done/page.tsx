import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Payment received",
};

export default function BillingDonePage() {
  return (
    <SimplePage badge="ok" title="Payment received">
      <p>
        Your wallet is funded and your account is active. Go back to your agent
        or terminal. Run <code>vidjutsu usage</code> to see your balance.
      </p>
      <small>You can close this tab.</small>
    </SimplePage>
  );
}
