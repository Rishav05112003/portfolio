"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/constants";

const Skills = () => {
  return (
    <section
      className="w-full bg-black text-white py-20 px-6 md:px-20"
      id="skills"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text"
        >
          MY SKILLS
        </motion.h2>
        <div className="mx-auto h-1 w-16 bg-white mt-4 rounded" />
      </div>

      <div className="grid gap-y-16 md:grid-cols-2 lg:grid-cols-3 place-items-center text-sm md:text-base">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-300">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-xs">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-md bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-white/10 text-white text-sm hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
