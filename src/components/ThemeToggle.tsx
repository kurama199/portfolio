import { cn, localStorageKeys } from "@/utils/utils";
import { Moon, Sun } from "lucide-react";
import React, { useLayoutEffect } from "react";

export interface ThemeToggleProps {
  className?: string;
  isDarkMode?: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
  isDarkMode = false,
  setIsDarkMode,
}: ThemeToggleProps) => {
  useLayoutEffect(() => {
    const theme = localStorage.getItem(localStorageKeys.theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);
  return (
    <button
      onClick={() =>
        setIsDarkMode((i: boolean) => {
          if (!i) {
            document.documentElement.classList.add("dark");
            localStorage.setItem(localStorageKeys.theme, "dark");
          } else {
            localStorage.setItem(localStorageKeys.theme, "light");
            document.documentElement.classList.remove("dark");
          }
          return !i;
        })
      }
      className={cn(
        "p-2 rounded-full transition-colors duration-300 ease-in-out z-50 cursor-pointer border",
        isDarkMode
          ? "bg-gray-800 border-gray-400"
          : "bg-yellow-200/80 border-yellow-500/80",
        className
      )}
    >
      {isDarkMode ? (
        <Moon className="text-white" size={24} />
      ) : (
        <Sun className="text-yellow-500/80" size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
