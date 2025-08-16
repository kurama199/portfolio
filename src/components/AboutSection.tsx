import { navData } from "@/utils/utils";
import { Code, GraduationCap, Link, Workflow } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id={`${navData.About}`} className="py-24 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">
              A Passionate Web Developer
            </h3>
            <p className="text-muted-foreground">
              With over 4+ years of experience in Web Development. I specialize
              in creating performant web applications using technologies like
              React, Redux, Tailwind, SCSS, TypeScript, JavaScript etc.
            </p>
            <p className="text-muted-foreground">
              Passionate about continuous learning, I strive to improve and
              refine my work, adapting quickly to the ever-evolving IT
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
              <a href={`#${navData.Contact}`} className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="Nikhil_CV.pdf"
                download="Nikhil_CV.pdf"
                className="px-6 py-1 rounded-full border-4 border-primary text-primary hover:bg-primary/10 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    Graduated in 2020 from the prestigious{" "}
                    <span className="text-primary font-bold">
                      IIT (ISM) Dhanbad
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DSA</h4>
                  <p className="text-muted-foreground">
                    Strong problem-solving and algorithmic thinking skills with
                    500+ problems solved on{" "}
                    <a
                      className="text-primary font-bold cursor-pointer items-center hover:underline inline-block gap-1"
                      href="https://leetcode.com/u/nikhillalpawa/"
                      target="_blank"
                    >
                      Leetcode
                      <Link size={15} className="inline-block ml-0.5" />
                    </a>{" "}
                    (Top 13.38% globally).
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Work Ethics</h4>
                  <p className="text-muted-foreground">
                    Committed to a user-first approach, continuously improving
                    and refining deliverables to ensure quality and usability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
