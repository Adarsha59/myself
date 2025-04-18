import { ImagesSliderDemo } from "./components/HeroImage";
import { MacbookScrollDemo } from "./components/HeroScroll";
import HeroSection from "./components/HeroSection";
import { ThreeDCardDemo } from "./components/Mycard";

export default function Home() {
  return (
    <main className="flex flex-col  items-center justify-center  w-full">
      <HeroSection />
      <div className="flex flex-col items-center justify-center w-[90%] h-[40%] max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20">
        <ImagesSliderDemo />
      </div>
      {/* <MacbookScrollDemo /> */}
      {/* <ThreeDCardDemo /> */}
    </main>
  );
}
