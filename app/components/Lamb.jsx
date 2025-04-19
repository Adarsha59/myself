"use client";
import { cn } from "@/lib/utils";

export function CardDemo() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group relative h-120 w-full overflow-hidden shadow-xl mx-auto border transition-all duration-500",
          "rounded-bl-3xl rounded-tr-3xl" // Apply specific rounded corners
        )}
      >
        {/* Default background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-0 rounded-bl-3xl rounded-tr-3xl"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/39/98/a1/3998a1d0f9c12f41bf552e3bcb1b0336.jpg')",
          }}
        />

        {/* Hover background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-3xl rounded-tr-3xl"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/b6/7e/71/b67e713fc5ad2722b96ad3c86fa901bc.jpg')",
          }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10 rounded-bl-3xl rounded-tr-3xl">
          <span className="text-white text-xl font-semibold">Hey 👋</span>
        </div>

        {/* Text Content */}
        <div className="relative z-20 p-4 flex items-end h-full">
          <h1 className="font-bold text-xl md:text-2xl text-white drop-shadow"></h1>
        </div>
      </div>
    </div>
  );
}
