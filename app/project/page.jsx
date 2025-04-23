import React from "react";
import { HeroParallaxDemo } from "../components/ProjectParallex";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen w-full p-4 md:p-10">
      <HeroParallaxDemo />
      <br />
    </div>
  );
}

export default page;
