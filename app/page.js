import HeroSection from "./components/HeroSection";
import { ThreeDCardDemo } from "./components/Mycard";

export default function Home() {
  return (
    <main className="flex flex-col  items-center justify-center min-h-screen w-full">
      <HeroSection />
      <ThreeDCardDemo />
    </main>
  );
}
