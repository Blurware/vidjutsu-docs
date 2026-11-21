import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Credits added",
};

export default function BillingToppedUpPage() {
  return (
    <SimplePage badge="ok" title="Payment received">
      <p>
        Your credits are added to your wallet. Go back to your agent or terminal.
        Run <code>vidjutsu usage</code> to see your new balance.
      </p>
      <small>You can close this tab.</small>
    </SimplePage>
  );
}
