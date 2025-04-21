"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "NetFlix Clone",
    link: "https://hamro-netflix.vercel.app/",
    thumbnail:
      "https://img.freepik.com/free-vector/social-distancing-movie-theater_23-2148549191.jpg?t=st=1745220526~exp=1745224126~hmac=8eaaead445f853459ff708b8b277f03532fb1c9eec3508570008bf9a6b27d271&w=740",
  },
  {
    title: "NGL",
    link: "hamro-ngl.vercel.app/",
    thumbnail:
      "https://framerusercontent.com/images/v9v7nmCuQWuKMhx9ajbiGlhCrD4.png",
  },
  {
    title: "HamroAI",
    link: "hamroai.vercel.app/",
    thumbnail:
      "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399295.jpg?t=st=1745221088~exp=1745224688~hmac=73ee489e641942c6e005e4a3b21e228cd33ca112d7225b1ddc53182dd495ab60&w=996",
  },

  {
    title: "Hamro-Blog",
    link: "hamroblog.vercel.app",
    thumbnail:
      "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?t=st=1745221179~exp=1745224779~hmac=453eb2fe56a58e3a8fcedf64a60a2a71e2f203b96facbed6692f9f803b7a0cd5&w=826",
  },
  {
    title: "Tour- MERN",
    link: "https://github.com/Adarsha59/Tour-Full-MERN",
    thumbnail:
      "https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?t=st=1745221248~exp=1745224848~hmac=0e1b9d85123c3816c01c0ff8fd90483a4c332cf05e2e82124e614ef604a8ca47&w=1380",
  },
  {
    title: "Blog - BOT",
    link: "https://github.com/Adarsha59/blog-bot",
    thumbnail:
      "https://img.freepik.com/free-vector/call-center-isometric-concept_1284-69078.jpg?t=st=1745221366~exp=1745224966~hmac=4e78a5fa6b68b598c663e810d736f68e06243e1e6fab5b32194e7050510a3d12&w=740",
  },

  {
    title: "TELEGRAM BOT",
    link: "https://web.telegram.org/k/#@newmoviehuntbot",
    thumbnail:
      "https://img.freepik.com/free-vector/telegram-icon_23-2147894417.jpg?t=st=1745221559~exp=1745225159~hmac=6d21f07827fe7a4ccf74772284f075d49158a4eea7351520675b092d10414969&w=740",
  },
  {
    title: "Final Project",
    link: "https://github.com/Adarsha59/7thsem-project",
    thumbnail:
      "https://img.freepik.com/free-photo/face-recognition-ar-hologram-screen-smart-technology_53876-167350.jpg?t=st=1745221715~exp=1745225315~hmac=f4fb81274aa7db43f4385c36dfef00dfb2a029b0aa793eb5c745e6c24764c5dc&w=996",
  },
  {
    title: "FRBAS",
    link: "https://github.com/Adarsha59/FRBAS",
    thumbnail:
      "https://img.freepik.com/free-vector/confirmed-attendance-concept-illustration_114360-30959.jpg?t=st=1745221772~exp=1745225372~hmac=45e1c381b017036e5ef55736f9ab65d512f1efb7b156141f997dac791327a898&w=740",
  },
];
