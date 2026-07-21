import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { TerminalDemo } from "@/components/terminal-demo";
import { LandingSections } from "@/components/landing-sections";
import { SetupConfigurator } from "@/components/setup-configurator";

export default function Home() {
  return (
    <main className="vj-landing" id="main">
      <nav className="vj-nav" aria-label="Primary navigation">
        <a className="vj-wordmark" href="#main"><b>VJ</b> vidjutsu</a>
        <div><a href="#start">Get started</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a><a href="https://docs.vidjutsu.ai">Docs ↗</a></div>
        <a className="vj-nav-access" href="https://docs.vidjutsu.ai/get-api-key"><i /> Get access</a>
      </nav>
      <Hero />
      <SetupConfigurator />
      <HowItWorks />
      <TerminalDemo />
      <LandingSections />
    </main>
  );
}
