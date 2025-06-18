import Header from "@/components/layout/Header";
import { HeroSection } from "@/components/hero/HeroSection";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen gap-4 mx-auto font-[family-name:var(--font-geist-sans)]">
      <Header />
      <HeroSection />
      <div className="min-h-screen bg-red-500"></div>
    </div>
  );
}
