import About from "@/components/About";
import Hero from "@/components/Hero";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { images } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className=" flex flex-col  justify-center items-center ">
      <Hero/>
      <InfiniteMovingCards 
      items={images}
      className=""></InfiniteMovingCards>
      <About/>
      
    </div>
  );
}
