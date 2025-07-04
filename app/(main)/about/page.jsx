"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/lib/constants";

const About = () => {
  return (
    <section className="w-full bg-black mx-auto flex flex-col items-center text-foreground px-4 py-16 space-y-32">
      {/* 1. Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row items-center px-2 gap-6 max-w-6xl mx-5 md:mx-10"
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, <span className="bg-muted ">Rishav</span> here
          </h2>
          <p className="mb-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            I’m Rishavdeep ; a passionate tech enthusiast driven by curiosity
            and a deep desire to solve real-world problems. I thrive under
            pressure, adapt quickly, and never stop learning.
          </p>
          <p className="mb-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            Grounded, focused, and quietly relentless, I find meaning in
            building products that create real impact. I approach every
            challenge with a calm mindset and creative logic, always working
            toward clarity in complexity.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            What you see here isn’t just a list of achievements. It’s a
            reflection of growth ; shaped through curiosity, challenges, and
            mindful execution. One lesson, one project, one step at a time.
          </p>
        </div>
        <div className="flex-1 items-center justify-center">
          <Image
            src="/profile-pic.jpeg"
            alt="Rishavdeep Maity"
            width={300}
            height={300}
            className="rounded-xl object-cover mx-auto"
          />
        </div>
      </motion.div>

      {/* 2. Education Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto relative flex p-4 flex-col gap-10"
      >
        <Timeline data={data} />
      </motion.div>
      {/* 3. Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Next.js",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Prisma",
            "JavaScript",
            "TypeScript",
            "Python",
            "Git",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium shadow hover:scale-105 transition-transform duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
