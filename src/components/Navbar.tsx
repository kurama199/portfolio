import { cn, navData } from "@/utils/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export const Navbar = () => {
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
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed transition-all duration-300 z-40 w-8/10 m-auto",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center md:justify-between md:gap-0 gap-5">
        <button
          onClick={() => setIsMenuOpen((i) => !i)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <a
          href={`#${navData.Home}`}
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-40">
            <span className="text-foreground text-glow">Nikhil </span>Portfolio
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
        {/* mobile nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background/20 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
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
