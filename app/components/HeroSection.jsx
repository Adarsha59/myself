import React from "react";
import { TypewriterEffectSmoothDemo } from "./TextReveal";
import { TextHoverEffectDemo } from "./Intro";

function HeroSection() {
  return (
    <div className="flex flex-col pt-25  items-center justify-center   ">
      <TypewriterEffectSmoothDemo />
      <TextHoverEffectDemo />
    </div>
  );
}

export default HeroSection;
