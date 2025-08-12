import { navData } from "@/utils/utils";
import { ArrowRight } from "lucide-react";

const Projects = [
  {
    title: "Design System",
    Description:
      "Lead the project for creating a library for implementing Design System using Figma. Library had support for Pure React components which would use SCSS generated using tokens fetched from Figma which Devs can use.",
    Impact:
      "No need to write the UI layers or the structure likewise. Created pixel-perfect consistency across clients. 4-6 days reductions in development depending on project",
  },
  {
    title: "Migrating from Axios to ApolloClient",
    Description:
      "Lead the Project to migrate From Axios to ApolloClient for IAP in the app",
    Impact:
      "Reduced Data overfetch by 40-60%, improved API Response time by 25-30%",
  },
  {
    title: "In-App-Purchase (IAP) integration",
    Description:
      "Developed and Deployed IAP feature allowing users to view and manage subscriptions",
    Impact:
      "Gained strong user engagement with 100K+ clicks and 1k+ upsells. Reduced customer support costs by 40-60% saving annual cost of $400k-$600k.",
  },
];
export const ProjectSection = () => {
  return (
    <section id={navData.Project} className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Here are some of the projects where I have contributed significantly
          thorughout my exprience as a FrontEnd Developer
        </p>
        <div className="rounded-xl py-5 px-3 flex flex-col gap-4">
          {Projects.map((project, key) => (
            <div
              className="bg-card rounded-xl px-8 py-6 text-left card-hover"
              key={key}
            >
              <h3 className="font-bold text-xl md:text-2xl text-primary mb-4">
                {project.title}
              </h3>
              <div className="font-semibold text-muted-foreground/95 text-lg md:text-xl">
                {project.Description}
              </div>
              <div className="font-bold text-foreground md:text-xl mt-10">
                {project.Impact}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/dashboard"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            CheckOut My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
