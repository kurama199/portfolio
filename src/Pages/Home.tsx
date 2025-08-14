import { useState } from "react";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectSection } from "@/components/ProjectSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {isDarkMode ? <StarBackground /> : null}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
