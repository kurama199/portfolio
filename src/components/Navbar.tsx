import { cn, navData } from "@/utils/utils";
import { Download, Menu, X } from "lucide-react";
import { useLayoutEffect, useMemo, useState } from "react";
import ThemeToggle, { type ThemeToggleProps } from "./ThemeToggle";

export const Navbar = ({
  isDarkMode = false,
  setIsDarkMode,
}: ThemeToggleProps) => {
  const navItems = useMemo(() => {
    const toReturn: { name: string; href: string }[] = [];
    Object.entries(navData).forEach(([key, value]: string[]) => {
      toReturn.push({
        name: key,
        href: value,
      });
    });
    return toReturn;
  }, []);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useLayoutEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);
  return (
    <nav
      className={cn(
        "fixed transition-all duration-300 z-40 w-full m-auto",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-sm shadow-md"
          : "py-5",
        isMenuOpen ? "h-full" : ""
      )}
    >
      <div className="flex items-center justify-center">
        <div className="container flex items-center md:justify-between md:gap-0 gap-5">
          <button
            onClick={() => setIsMenuOpen((i) => !i)}
            className="md:hidden p-2 text-foreground z-50 cursor-pointer"
            aria-label={isMenuOpen ? "Close Menu" : "open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a
            href={`#${navData.Home}`}
            className="text-xl font-bold text-primary flex items-center"
          >
            <span className="relative z-40 cursor-pointer">
              <span className="text-foreground text-glow">Nikhil's </span>
              Portfolio
            </span>
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={`#${item.href}`}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex">
          <a
            href="Nikhil_CV.pdf"
            download="Nikhil_CV.pdf"
            title="Download CV"
            className="p-2 rounded-full bg-primary/50 mr-2 hover:bg-primary/80 border-border border transition-colors duration-75"
          >
            <Download size={24} />
          </a>
        </div>

        <ThemeToggle
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          className="mr-5"
        />
        {/* mobile nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background/20 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden cursor-pointer",
            isMenuOpen
              ? "opacity-100 pointer-events-auto h-full"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className=" flex flex-col space-y-8 text-xl ">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={`#${item.href}`}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
