import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Bachelor of Engineering",
      content: (
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Bachelor of Engineering
          </h3>
          <p className="text-base font-medium text-neutral-700 dark:text-neutral-100 mb-1">
            <strong>Duration:</strong> 2020 *
          </p>
          <p className="text-base text-neutral-700 dark:text-neutral-100 mb-1">
            <strong>Institution:</strong> Nepal College of Information
            Technology (NCIT)
          </p>
          <p className="text-base text-neutral-700 dark:text-neutral-100 mb-1">
            <strong>Program:</strong> Electronics and Communication Engineering
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
            Focuses on electronic hardware and communication systems, empowering
            students to solve real-world problems through innovation.
          </p>
        </div>
      ),
    },
    {
      title: "Higher Secondary (+2) Science",
      content: (
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Higher Secondary Education
          </h3>
          <p className="text-base font-medium text-neutral-700 dark:text-neutral-100 mb-1">
            <strong>Duration:</strong> 2018 – 2019
          </p>
          <p className="text-base text-neutral-700 dark:text-neutral-100 mb-1">
            <strong>Institution:</strong> St. Lawrence College
          </p>
          <p className="text-base text-neutral-700 dark:text-neutral-100 mb-1">
            <strong>Program:</strong> Science (Physics, Chemistry, Biology,
            Mathematics)
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
            Studied core science subjects along with electives like Applied
            Mathematics.
          </p>
        </div>
      ),
    },
    {
      title: "SEE",
      content: (
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Secondary Education Examination
          </h3>
          <p className="text-base font-medium text-neutral-700 dark:text-neutral-100 mb-1">
            <strong>Year:</strong> 2017
          </p>
          <p className="text-base text-neutral-700 dark:text-neutral-100 mb-1">
            <strong>Institution:</strong> Thangpaldhap Secondary School
          </p>
          <p className="text-base text-neutral-700 dark:text-neutral-100 mb-1">
            <strong>Program:</strong> SEE with Optional Maths & Computer Science
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
            Completed foundational education with a focus on analytical and
            logical subjects.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip p-6  min-h-screen">
      <Timeline data={data} />
    </div>
  );
}
