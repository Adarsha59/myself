import { EvervaultCardDemo } from "@/components/ui/lamp";
import { ImagesSliderDemo } from "./components/HeroImage";
import { MacbookScrollDemo } from "./components/HeroScroll";
import HeroSection from "./components/HeroSection";
import { ThreeDCardDemo } from "./components/Mycard";
import { CardDemo } from "./components/Lamb";

export default function Home() {
  return (
    <main className="flex flex-col  items-center justify-center  w-full">
      <HeroSection />

      {/* Your component */}
      {/* <ImagesSliderDemo /> */}
      <CardDemo />

      {/* <MacbookScrollDemo /> */}
      {/* <ThreeDCardDemo /> */}
    </main>
  );
}
