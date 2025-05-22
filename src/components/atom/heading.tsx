"use client";

import { TextAnimate } from "../animation/text-animate";

export const HeroHeading = () => {
  return (
    <TextAnimate
      animation="slideUp"
      by="character"
      as={"h1"}
      className="font-display text-2xl font-light md:text-4xl lg:text-[5rem]"
    >
      Launching Soon
    </TextAnimate>
  );
};
