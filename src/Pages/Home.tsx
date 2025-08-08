import ThemeToggle from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {isDarkMode ? <StarBackground /> : null}
      <div>
        <ThemeToggle
          className="absolute right-5 top-5"
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <Navbar />
      </div>
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
};
