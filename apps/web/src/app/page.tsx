import { Hero } from "@/components/hero";
import { UseCases } from "@/components/use-cases";
import { Features } from "@/components/features";
import { LandingSections } from "@/components/landing-sections";
import { SetupConfigurator } from "@/components/setup-configurator";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <main className="vj-landing" id="main">
      <SiteNav home />
      <Hero />
      <UseCases />
      <Features />
      <SetupConfigurator />
      <LandingSections />
    </main>
  );
}
