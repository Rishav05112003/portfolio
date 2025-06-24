"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MaskContainer } from "./ui/svg-mask-effect";

const About = () => {
  return (
    <MaskContainer
     revealText={
        <section
      id="about"
      className="min-h-[60vh] w-full px-4 pt-4 bg-black text-foreground flex flex-col items-center justify-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-md md:text-lg max-w-2xl text-muted-foreground leading-relaxed mb-6"
      >
        I'm a final-year undergraduate at <span className="font-bold bg-muted">NIT Durgapur</span> with a strong passion for building full-stack web applications. I specialize in <span className="font-bold bg-muted">Next.js, React, Express, Prisma, and PostgreSQL</span>, and I enjoy bringing ideas to life through clean and scalable code.
        <br className="hidden md:block" />
         </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        
      </motion.div>
    </section>
     }>
    <p className="font-bold text-2xl px-20">What you see is only the surface. Behind these projects is a developer who obsesses over details, learns relentlessly, and believes in building things that matter. Scroll to reveal the journey.</p>
    <Link href="/about">
          <Button className="bg-black font-bold text-white hover:bg-muted hover:text-white">More About Me</Button>
        </Link>
    </MaskContainer>
  );
};

export default About;
