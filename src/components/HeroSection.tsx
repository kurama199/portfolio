import { navData } from "@/utils/utils";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id={navData.Home}
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Nikhil
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">
              Lal Pawa
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl max-auto opacity-0 animate-fade-in-delay-3">
            Front-End Engineer with 4+ years of experience in optimizing React
            apps, leading GraphQL migrations, and delivering high-impact
            features that improving performance, scalability, and user
            engagement.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4">
            <a href={`#${navData.Project}`} className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        <a
          className="absolute bottom-15 left-1/2 transform -translate-1/2 flex flex-col items-center animate-bounce"
          href={`#${navData.About}`}
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
    </section>
  );
};
