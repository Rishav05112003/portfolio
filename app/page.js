import About from "@/components/About";
import Hero from "@/components/Hero";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { images } from "@/lib/constants";
import Skills from "@/components/Skills";
import { WavyBackground } from "@/components/ui/wavy-background";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    
    <div className="relative mx-auto flex-col flex w-full max-w-7xl items-center justify-center  bg-black ">
       <Hero/>
       
      <InfiniteMovingCards 
      items={images}
      className=""></InfiniteMovingCards>
      <About/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/>
    </div>
  );
}
