import { HeroSection } from "@/components/sections/HeroSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <ProblemSection />
      <ServiceOverview />
      <RoadmapSection />
      <ContactSection />
    </>
  );
}
