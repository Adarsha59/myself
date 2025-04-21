import React from "react";
import { TimelineDemo } from "../components/TimeLine";
import SkillsPage from "../components/Skills";

function Page() {
  return (
    <div className="min-h-screen w-full p-4 md:p-10">
      <TimelineDemo />
      <SkillsPage />
    </div>
  );
}

export default Page;
