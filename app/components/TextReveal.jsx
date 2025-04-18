"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Engineer ",
    },
    {
      text: "by ",
    },
    {
      text: "Mind, ",
    },
    {
      text: "Creator ",
    },
    {
      text: "by ",
    },
    {
      text: "Heart.",
      className: "text-blue-500 dark:text-blue-500", // Optional color styling
    },
  ];

  return (
    <div className="flex items-center justify-center ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
