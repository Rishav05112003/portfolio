"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          ref={ref}
          className="text-4xl font-bold mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-10 max-w-2xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Have a question, opportunity, or just want to say hi? I’d love to hear from you.
        </motion.p>

        <motion.div
          className="relative w-full  lg:w-2/3 mx-auto p-10 rounded-2xl bg-muted  shadow-2xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <h3 className="text-2xl font-sans font-semibold ">Reach out to me via</h3>
          <h4 className="mb-4 text-gay-200 text-sm font-sans">Lets make something good togather</h4>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:rishavdeep.skills@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium shadow hover:scale-105 transition-transform"
            >
              <Mail size={18} /> Email
            </a>

            <a
              href="https://www.linkedin.com/in/rishavdeep-maity-314b61256/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-600 to-blue-700 rounded-lg text-white font-medium shadow hover:scale-105 transition-transform"
            >
              <Linkedin size={18} /> LinkedIn
            </a>

            <a
              href="https://www.instagram.com/rishav.213.m/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-500 rounded-lg text-white font-medium shadow hover:scale-105 transition-transform"
            >
              <Instagram size={18} /> Instagram
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100076734696236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white font-medium shadow hover:scale-105 transition-transform"
            >
              <Facebook size={18} /> Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
