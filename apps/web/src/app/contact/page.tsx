import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to us about VidJutsu Enterprise: higher limits, single sign-on, your own storage or a custom fleet.",
};

export default function ContactPage() {
  return (
    <SimplePage eyebrow="Enterprise" title="Need more than pay as you go?">
      <p>
        Enterprise is an annual contract with volume pricing, higher limits,
        single sign-on, your own storage, a custom render fleet and an SLA.
      </p>
      <p>
        Email <a href="mailto:support@vidjutsu.ai?subject=Enterprise">support@vidjutsu.ai</a>{" "}
        with what you&rsquo;re building and roughly how many minutes you render a month.
      </p>
      <div className="vl-actions">
        <a href="/">← Back to VidJutsu</a>
      </div>
    </SimplePage>
  );
}
