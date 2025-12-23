"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const Hero = () => {
  return (
    <section className="max-h-screen w-full flex items-center justify-center px-6 py-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 flex-1">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-mono font-bold text-neutral-700 uppercase tracking-wider flex items-center gap-0"
          >
            <span className="w-4 h-px mr-2 bg-neutral-700"></span>
            Hey there !!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            I'm Rishavdeep<br />
            <PointerHighlight
              rectangleClassName="bg-neutral-800 dark:bg-neutral-700 border-neutral-800 dark:border-neutral-600 leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mr-1"
            >
              <span className="text-primary relative z-10">Curious Engineer</span>
            </PointerHighlight>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            Building modern web applications with Next.js, React, Prisma & Express. Passionate about backend systems, frontend polish, and impactful user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link href="#projects">
              <Button>View Projects</Button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" /> Resume
              </Button>
            </Link>
            <Link href="https://github.com/Rishav05112003" target="_blank">
              <Button variant="ghost">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/rishavdeep-maity-314b61256/" target="_blank">
              <Button variant="ghost">
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side - Card (Hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block flex-shrink-0"
        >
          <div className="relative w-[400px] aspect-[4/4] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
            {/* Image */}
            <div className="w-full h-full relative">
              {/* Gradient Placeholder - Remove this div once you add your image */}
              <div className="w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
                <span className="text-6xl">🎨</span>
              </div>
              
              {/* Image */}
              <Image
                src="/wp.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Currently Badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-black/80 backdrop-blur-md rounded-xl px-4 py-3 border border-neutral-700">
                <p className="text-xs text-green-500 uppercase tracking-wider mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Currently
                </p>
                <p className="text-sm font-semibold text-white flex items-center gap-2">
                  Growing and Learning
                </p>
              </div>
            </div>

            {/* Based In Badge */}
            <div className="absolute bottom-6 left-6">
              <div className="bg-black/80 backdrop-blur-md rounded-xl px-4 py-3 border border-neutral-700">
                <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                  Based in
                </p>
                <p className="text-sm font-semibold text-white flex items-center gap-2">
                  Kolkata, India 🇮🇳
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;