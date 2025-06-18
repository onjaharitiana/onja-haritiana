"use client";

import { AnimatedGroup } from "../ui/animated-group";
import Image from "next/image";

export const HeroBackground = () => {
  return (
    <AnimatedGroup
      variants={{
        container: {
          visible: {
            transition: {
              delayChildren: 1,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.3,
              duration: 2,
            },
          },
        },
      }}
      className="absolute inset-0 -z-20"
    >
      <Image
        src="/images/hero-dark-bg.jpg"
        alt="background"
        className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
        width="3276"
        height="4095"
      />
    </AnimatedGroup>
  );
};
