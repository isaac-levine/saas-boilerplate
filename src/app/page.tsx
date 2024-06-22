import Link from "next/link";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HeroSection from "./home/HeroSection";
import FeaturesSection from "./home/FeaturesSection";
import TestimonialsSection from "./home/TestimonialsSection";
import PricingSection from "./home/PricingSection";
import CompaniesSection from "./home/CompaniesSection";
import TechStackSection from "./home/TechStackSection";
import FrequentlyAskedQuestionsSection from "./home/FrequentlyAskedQuestionsSection";
import MoreThanJustABoilerplateSection from "./home/MoreThanJustABoilerplateSection";

// This is the home page / landing page.
// Different components of this page are contained in the `home` folder.
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <title>Home • Social Media App</title>
      <main className="flex-1">
        <HeroSection />
        {/* <CompaniesSection /> */}
        <TechStackSection />
        <MoreThanJustABoilerplateSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FrequentlyAskedQuestionsSection />
        <PricingSection />
      </main>
    </div>
  );
}
