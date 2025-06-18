import Header from "@/components/layout/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Temoignages } from "@/components/Temoignages";
export default function Home() {
  return (
    <div className="min-h-screen gap-0 mx-auto font-[family-name:var(--font-geist-sans)]">
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <Temoignages />
    </div>
  );
}
