"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SectionHeading = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
    className="text-3xl md:text-5xl font-bold mb-4 text-center text-primary"
  >
    {children}
  </motion.h2>
);

const page = () => {
  return (
    <main className="bg-background text-foreground px-6 py-16 max-w-4xl mx-auto space-y-20">
      {/* Introduction */}
      <section>
        <SectionHeading>Hello, I'm Rishavdeep</SectionHeading>
        <motion.p
          className="text-lg text-muted-foreground leading-relaxed text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          A passionate full-stack developer who loves solving real-world problems with code. I believe in blending clean aesthetics with scalable systems, and I’m always exploring ways to make technology feel more human.
        </motion.p>
      </section>

      {/* Education */}
      <section>
        <SectionHeading>Education</SectionHeading>
        <motion.div
          className="text-md text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>
            📚 Final-year B.Tech undergraduate at <strong>NIT Durgapur</strong><br />
            🎓 Major: Computer Science & Engineering<br />
            🏆 Academic Interest: Algorithms, Software Systems, and Creative Coding
          </p>
        </motion.div>
      </section>

      {/* Coding Journey */}
      <section>
        <SectionHeading>My Journey with Code</SectionHeading>
        <motion.p
          className="text-md text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          From tinkering with HTML and CSS as a curious teen to deploying full-stack apps with modern frameworks, my journey has been a blend of self-learning, experimentation, and open-source contributions. Whether it’s building tools with React & Next.js or designing clean APIs with Express and FastAPI, I strive to make my code not just work — but feel right.
        </motion.p>
      </section>

      {/* Skills */}
      <section>
        <SectionHeading>Skills</SectionHeading>
        <motion.ul
          className="grid grid-cols-2 md:grid-cols-3 gap-4 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <li>✅ JavaScript / TypeScript</li>
          <li>✅ React & Next.js</li>
          <li>✅ Node.js / Express</li>
          <li>✅ Prisma / PostgreSQL</li>
          <li>✅ Tailwind CSS / SCSS</li>
          <li>✅ MongoDB / Redis</li>
          <li>✅ FastAPI / Python</li>
          <li>✅ Git / GitHub</li>
          <li>✅ Figma / UI Design Principles</li>
        </motion.ul>
      </section>

      {/* Creative Outro */}
      <section>
        <SectionHeading>A Final Touch</SectionHeading>
        <motion.div
          className="text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mb-4">
            When I’m not coding, I’m sketching concepts, exploring animations, or making playlists that sound like the internet. ✨<br />
            Let's build something meaningful together.
          </p>
          <Button variant="outline" asChild>
            <a href="mailto:rishavdeep@example.com">Say Hello</a>
          </Button>
        </motion.div>
      </section>
    </main>
  );
};

export default page;
