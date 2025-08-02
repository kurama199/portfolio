import ThemeToggle from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { useState } from "react";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle
        className="absolute right-5 top-5"
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      {isDarkMode ? <StarBackground /> : null}
      {/* Bckground effects */}
      {/* Navbar */}
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
};
