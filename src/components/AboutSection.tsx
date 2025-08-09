import { navData } from "@/utils/utils";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id={`${navData.About}`} className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
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
              With over 4+ years of experience in web Development, I specialize
              in creating performant web applications using modern technologies
              such as React, Tailwind, RTK etc.
            </p>
            <p className="text-muted-foreground">
              I am most passionate about learning, improving and refining my
              work. I am constantly learning and always evoliving in the
              ever-changing IT landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
              <a href={navData.Contact} className="cosmic-button">
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
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    Responsive Websites and Web Applications with modern
                    framework
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Responsive Websites and Web Applications with modern
                    framework
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Taking Projects from conception to completion while learning
                    and leading the team
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
