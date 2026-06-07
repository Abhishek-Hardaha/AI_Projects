import HeroSection from "@/components/sections/HeroSection";
import FinancialDistillation from "@/components/sections/FinancialDistillation";
import MarktView from "@/components/sections/MarktView";
import SpendWise from "@/components/sections/SpendWise";
import NetworkThreat from "@/components/sections/NetworkThreat";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-auto snap-y snap-proximity md:snap-mandatory hide-scrollbar bg-background selection:bg-neon-blue/30 scroll-smooth">
      <HeroSection />
      <FinancialDistillation />
      <MarktView />
      <SpendWise />
      <NetworkThreat />
    </main>
  );
}
