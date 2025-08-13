import { cn, navData } from "@/utils/utils";
import { useState } from "react";

const skills = [
  // Programmng Languages
  { name: "Typescript", level: 90, category: "Programming Languages" },
  { name: "Javascript", level: 90, category: "Programming Languages" },
  { name: "Java", level: 60, category: "Programming Languages" },
  { name: "Python", level: 40, category: "Programming Languages" },
  { name: "CSS", level: 80, category: "Programming Languages" },
  // frameworks
  { name: "React", level: 95, category: "Frameworks" },
  { name: "Redux", level: 90, category: "Frameworks" },
  { name: "Tailwind", level: 75, category: "Frameworks" },
  { name: "SCSS", level: 80, category: "Frameworks" },
  { name: "Apollo Client", level: 75, category: "Frameworks" },
  //tools
  { name: "VS Code", level: 100, category: "tools" },
  { name: "Git/GitHub", level: 100, category: "tools" },
  { name: "MongoDB", level: 60, category: "tools" },
  { name: "GitLab", level: 100, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Jira", level: 100, category: "tools" },
  // IT constructs
  { name: "DSA", level: 75, category: "IT Constructs" },
  { name: "OOPS", level: 90, category: "IT Constructs" },
  { name: "Agile", level: 100, category: "IT Constructs" },
  { name: "Cross-Team Communication", level: 90, category: "IT Constructs" },
  { name: "Design System", level: 95, category: "IT Constructs" },
];

const categories = [
  "All",
  "Programming Languages",
  "Frameworks",
  "tools",
  "IT Constructs",
];

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCaterogy] = useState("All");
  return (
    <section id={navData.Skills} className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                category === selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setSelectedCaterogy(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skill, key) =>
            selectedCategory == "All" || skill.category === selectedCategory ? (
              <div
                key={key + selectedCategory}
                className="bg-card p-6 rounded-lg card-hover text-glow"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-grow"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};
