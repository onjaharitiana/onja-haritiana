import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (sectionId: string) => {
  console.log(sectionId);
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};
