"use client";

import { AnimatedGroup } from "../ui/animated-group";
import { transitionVariants } from "@/lib/transitions";
import { scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const HeroContent = () => {
  return (
    <>
      <AnimatedGroup variants={transitionVariants}>
        <h1 className="mt-8 max-w-4xl mx-auto text-balance text-4xl md:text-6xl lg:mt-11 xl:text-[4.75rem]">
          Le seul développeur web qui transforme les défis des PME malagasy en
          opportunités digitales
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
          Développeur web expérimenté qui applique les meilleures pratiques aux
          PME malagasy. Qualité professionnelle, prix local, service
          personnalisé.
        </p>
      </AnimatedGroup>
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.75,
              },
            },
          },
          ...transitionVariants,
        }}
        className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
      >
        <div key={1} className="bg-foreground/10 rounded-[14px] border p-0.5">
          <Button
            asChild
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="rounded-xl px-5 text-base group cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="text-nowrap">Demander un audit gratuit</span>
              <ArrowRight className="m-auto size-5 group-hover:translate-x-2 transition-all duration-300" />
            </span>
          </Button>
        </div>
      </AnimatedGroup>
    </>
  );
};
