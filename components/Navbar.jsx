"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { DateTime } from "luxon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = DateTime.now().setZone("Asia/Kolkata");
      const formatted = now.toFormat("ccc, LLL dd, yyyy • hh:mm a");
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className=" flex top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      {/* Inner Container */}
      <div className="mx-auto flex h-14 md:h-16 items-center justify-between 
                      max-w-7xl w-full px-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 flex items-center justify-center bg-white rounded-md">
            <span className="text-black font-bold text-[15px]">Rm</span>
          </div>

          {/* Name & Time (Desktop only) */}
          <div className="hidden md:block text-white">
            <h2 className="text-[15px] font-semibold">Rishavdeep Maity</h2>
            <p className="text-[10px] text-neutral-500">{time}</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#projects"
            className="text-neutral-400 hover:text-white transition text-[15px] font-medium"
          >
            Projects
          </Link>

          <Link
            href="/#blogs"
            className="text-neutral-400 hover:text-white transition text-[15px] font-medium"
          >
            Blogs
          </Link>

          <Link
            href="/about"
            className="text-neutral-400 hover:text-white transition text-[15px] font-medium"
          >
            About Me
          </Link>

          <Link
            href="/#contact"
            className="text-neutral-400 hover:text-white transition text-[15px] font-medium"
          >
            Contact
          </Link>

          {/* Availability */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full
                          bg-green-950/30 border border-green-800/50">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 text-sm font-medium">
              Available
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-white"
          >
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-5 w-48 rounded-xl
                           bg-black/95 backdrop-blur-md
                           border border-neutral-800 shadow-lg
                           flex flex-col gap-3 p-4 text-sm"
              >
                {[
                  ["Projects", "/#projects"],
                  ["Blogs", "/#blogs"],
                  ["About Me", "/about"],
                  ["Contact", "/#contact"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-400 hover:text-white transition"
                  >
                    {label}
                  </Link>
                ))}

                <div className="flex items-center gap-2 px-3 py-2 rounded-md
                                bg-green-950/30 border border-green-800/50">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-500 text-sm font-medium">
                    Available
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
