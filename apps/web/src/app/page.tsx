import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
