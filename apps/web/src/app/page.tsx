import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { IcpQuotes } from "@/components/icp-quotes";
import { WhoItsFor } from "@/components/who-its-for";
import { TerminalDemo } from "@/components/terminal-demo";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <HowItWorks />
        <IcpQuotes />
        <WhoItsFor />
        <TerminalDemo />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
