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
    <section className="w-full bg-black mx-auto text-foreground px-4 py-16 space-y-32">
      {/* 1. Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row items-center gap-6 max-w-6xl mx-20 md:mx-40"
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, <span className="bg-muted ">Rishav</span> here
          </h2>
          <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
            Grounded, curious, and quietly relentless — I find purpose in
            building things that matter. I approach every problem with a blend
            of creativity and calm logic, always striving for clarity in
            complexity. I’m someone who learns fast, works mindfully, and
            believes that thoughtful effort beats loud hustle. What follows is
            not just a list of events, but a timeline of how I’ve shaped myself
            — one challenge, one lesson, one step at a time.
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
