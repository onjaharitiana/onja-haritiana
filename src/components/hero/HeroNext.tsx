"use client";

import { scrollToSection } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
export const HeroNext = () => {
  return (
    <ChevronDown
      onClick={() => scrollToSection("expertise")}
      className="w-8 h-8"
    />
  );
};
