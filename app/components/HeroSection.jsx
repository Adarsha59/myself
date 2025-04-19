import React from "react";
import { TypewriterEffectSmoothDemo } from "./TextReveal";
import { TextHoverEffectDemo } from "./Intro";
import { LampDemo } from "./Lamb";

function HeroSection() {
  return (
    <div className="flex flex-col pt-25  items-center justify-center   ">
      <LampDemo />
      <TypewriterEffectSmoothDemo />
      <TextHoverEffectDemo />
    </div>
  );
}

export default HeroSection;
