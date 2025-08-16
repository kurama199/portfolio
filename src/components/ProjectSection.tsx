import { navData } from "@/utils/utils";
import { ArrowRight } from "lucide-react";

const Projects = [
  {
    title: "Design System",
    projectPoints: [
      "Led the project and Developed a JavaScript library for the client, providing reusable and performant React pure components.",
      "Integrated the Figma API to automatically fetch style tokens and convert them into SCSS variables and React components.",
    ],
    description:
      "Led the project and Developed a JavaScript library for the client, providing reusable and performant React pure components. Integrated the Figma API to automatically fetch style tokens and convert them into SCSS variables and React components.",
    Impact: [
      "Eliminated the need for the client to manually build UI layers, reducing development time by 5–6 days improving overall project delivery speed by 10–15%.",
      "Ensured pixel-perfect design consistency, reducing QA testing efforts by 15–20%, minimizing bugs, and accelerating release cycles.",
    ],
  },
  {
    title: "REST to Apollo Client Migration",
    description:
      "Led the migration of In-App Purchase (IAP) flows from REST (Axios/RxJS) to a GraphQL backend using Apollo Client on the frontend.",
    projectPoints: [
      "Led the migration of In-App Purchase (IAP) flows from REST (Axios/RxJS) to a GraphQL backend using Apollo Client on the frontend.",
    ],
    Impact: [
      "Reduced data overfetching by 40–60% and improved API response time by 25–30%.",
      "Decreased reliance on Redux by leveraging Apollo Client’s caching capabilities, improving performance and maintainability.",
    ],
  },
  {
    title: "In-App Subscription Management",
    description:
      "Developed and deployed an IAP feature enabling users to view and manage their subscriptions.",
    projectPoints: [
      "Developed and deployed an IAP feature enabling users to view and manage their subscriptions.",
    ],
    Impact: [
      "Achieved high user engagement with 100K+ clicks and 1K+ upsells within a year.",
      "Reduced customer support costs by 40–60%, resulting in annual savings of $400K–$600K.",
    ],
  },
];
export const ProjectSection = () => {
  return (
    <section id={navData.Project} className="py-24 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Here are some of the key projects I've contributed significantly
          throughout my experience as a Front-End Developer
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
              <p className="font-semibold text-muted-foreground/95 text-md md:text-lg">
                {project?.description}
              </p>
              <ul className="list-disc font-bold text-foreground text-md md:text-lg mt-6">
                {project?.Impact.map((point, index) => (
                  <li key={index} className="mt-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/kurama199"
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
