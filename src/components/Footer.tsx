import { navData } from "@/utils/utils";
import { ArrowUpCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="p-4 px-4 bg-card relative border-t border-border mt-12 flex-wrap justify-between items-center ">
      <a
        href={`#${navData.Home}`}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/50 text-primary inline-block"
      >
        <ArrowUpCircle />
      </a>
    </footer>
  );
};
