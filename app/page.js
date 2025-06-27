import About from "@/components/About";
import Hero from "@/components/Hero";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { images } from "@/lib/constants";
import Skills from "@/components/Skills";
import { WavyBackground } from "@/components/ui/wavy-background";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className=" flex flex-col  justify-center items-center ">
      <Hero/>
      <InfiniteMovingCards 
      items={images}
      className=""></InfiniteMovingCards>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}
