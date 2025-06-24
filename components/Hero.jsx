"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const Hero = () => {
  return (
    <section className="min-h-24 flex flex-col justify-center items-center text-center px-4 py-16 bg-background text-foreground">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
      >
        Hey, I'm Rishavdeep<br />
        <PointerHighlight
             rectangleClassName="bg-neutral-800 dark:bg-neutral-700 border-neutral-800 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
        >
        <span className="text-primary relative z-10">Full-Stack Developer</span>
      </PointerHighlight>
       
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
      >
        Building modern web applications with Next.js, React, Prisma & Express. Passionate about backend systems, frontend polish, and impactful user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link href="#projects">
          <Button>View Projects</Button>
        </Link>
        <Link href="/Rishavdeep_Resume.pdf" target="_blank">
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" /> Resume
          </Button>
        </Link>
        <Link href="https://github.com/rishavdeep" target="_blank">
          <Button variant="ghost">
            <Github className="w-4 h-4 mr-2" /> GitHub
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/rishavdeepmaity" target="_blank">
          <Button variant="ghost">
            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
