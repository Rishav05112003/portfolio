"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { blogs } from "@/lib/constants";

const fadeInVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};



export default function Blogs() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, margin: "-100px" });

  return (
    <section
      id="blogs"
      className="w-full bg-background text-white py-20 px-6 md:px-16 "
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          ref={titleRef}
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Blogs
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12 max-w-xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Some thoughts and breakdowns from my journey in development and tech.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInVariants}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{blog.date}</p>
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {blog.excerpt}
                </p>
                <Link
                  href={blog.slug}
                  className="text-white hover:underline font-medium text-sm"
                >
                  Read full post →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
