"use client";

import { scrollToSection } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
export const NextArrow = ({ sectionId }: { sectionId: string }) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-black dark:text-white">
      <ChevronDown
        onClick={() => scrollToSection(sectionId)}
        className="w-8 h-8"
      />
    </div>
  );
};
