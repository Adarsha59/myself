"use client";

import { cn } from "@/lib/utils";

export function CardDemo() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group relative h-120 w-full overflow-hidden shadow-xl mx-auto border transition-all duration-500",
          "rounded-bl-3xl rounded-tr-3xl"
        )}
      >
        {/* Default background image with SEO-friendly alt text */}
        <img
          src="
          https://i.pinimg.com/736x/b6/7e/71/b67e713fc5ad2722b96ad3c86fa901bc.jpg
          "
          alt="Adarsha Paudyal - Electronic and Communication Engineer"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 rounded-bl-3xl rounded-tr-3xl"
        />

        {/* Hover background image with alt text */}
        <img
          src="https://adarsha59.github.io/assets/images/adarsha-paudyal-electronic-communication-engineer.jpg"
          alt="Adarsha Paudyal smiling - Electronic and Communication Engineer"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-3xl rounded-tr-3xl"
        />

        <img
          src="
        https://i.pinimg.com/736x/9b/9e/81/9b9e8138bd2b0d4875d83a387116fa5e.jpg

          "
          alt="Adarsha Paudyal - Electronic and Communication Engineer"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 rounded-bl-3xl rounded-tr-3xl"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10 rounded-bl-3xl rounded-tr-3xl">
          <span className="text-white text-xl font-semibold">Hey 👋</span>
        </div>

        {/* Text Content — optional */}
        <div className="relative z-20 p-4 flex items-end h-full">
          <h1 className="font-bold text-xl md:text-2xl text-white drop-shadow">
            {/* Optional heading text for SEO */}
            Adarsha Paudyal
          </h1>
        </div>
      </div>
    </div>
  );
}
