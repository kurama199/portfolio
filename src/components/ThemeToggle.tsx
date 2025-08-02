import { cn, localStorageKeys } from "@/utils/utils";
import { Moon, Sun } from "lucide-react";
import React, { useLayoutEffect } from "react";

interface ThemeToggleProps {
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
        "relative w-[80px] h-[40px] flex items-center rounded-full border-4 border-solid p-2 transition-colors duration-300 ease-in-out z-10",
        isDarkMode
          ? "bg-gray-800 border-gray-400"
          : "bg-yellow-200 border-yellow-500",
        className
      )}
    >
      <span
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out",
          "h-[24px] w-[24px] rounded-full flex items-center justify-center",
          isDarkMode ? "translate-x-[32px]" : "translate-x-0"
        )}
      >
        {isDarkMode ? (
          <Moon className="text-white" size={20} />
        ) : (
          <Sun className="text-yellow-500" size={20} />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
