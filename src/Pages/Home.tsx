import ThemeToggle from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {isDarkMode ? <StarBackground /> : null}
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Navbar />
      <main>
        <HeroSection />
      </main>
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
};
