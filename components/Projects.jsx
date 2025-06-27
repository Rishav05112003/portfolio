"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { projects } from "@/lib/constants";

const fadeInVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Projects() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, margin: "-100px" });

  return (
    <section id="projects" className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          ref={titleRef}
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12 max-w-xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          A few selected projects that showcase what I’ve been working on lately.
        </motion.p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-4 shadow-md hover:shadow-lg transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInVariants}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-md w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4 mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">
                {project.description}
              </p>
              <p className="text-sm text-muted-foreground bg-m mb-4">
                Tech Stack : <span className="bg-muted text-white">{project.tech}</span>
              </p>
              <div className="flex gap-4">
                <Link href={project.github} target="_blank">
                  <Button variant="outline">GitHub</Button>
                </Link>
                <Link href={project.live} target="_blank">
                  <Button variant="default">Live Demo</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
        >
          
        </motion.div>
      </div>
    </section>
  );
}
