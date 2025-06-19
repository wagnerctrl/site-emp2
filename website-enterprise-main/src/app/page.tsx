// import Image from "next/image";
import { AnimatedTestimonialsDemo } from "./components/animated-testimonials-demo";
// import { MacbookScrollDemo } from "./components/macbook-scroll-demo";
import HeroParallaxDemo from "./components/hero-demo";
import { FeaturesSectionDemo } from "./components/cards-demo";
import { CarouselDemo } from "./components/carousel-demo";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F] ">
      <HeroParallaxDemo />
      <FeaturesSectionDemo />
      <CarouselDemo />
      <AnimatedTestimonialsDemo />
      {/* <MacbookScrollDemo /> */}
    </main>
  );
}
