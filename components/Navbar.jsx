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
    // Function to update time
    const updateTime = () => {
      // Get current time in your timezone (change timezone as needed)
      const now = DateTime.now().setZone("Asia/Kolkata"); // Or "America/New_York", "UTC", etc.

      // Format: "Wed, Dec 17, 2025 • 01:49 PM"
      const formatted = now.toFormat("ccc, LLL dd, yyyy • hh:mm a");
      setTime(formatted);
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between w-full px-6">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <Link className="flex gap-2" href="/">
            <div className="h-8 w-8 flex justify-center items-center bg-white rounded-md">
              <h5 className="text-black font-bold text-[15px] text-center">
                Rm
              </h5>
            </div>
            <div className="text-white text-2xl font-bold font-sans tracking-wide">
              <h2 className="text-[15px] font-semibold">Rishavdeep Maity</h2>
              <div className="text-[10px] text-neutral-500 font-normal">
                {time}
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/#projects"
            className="text-neutral-400 hover:text-white transition-colors duration-200 text-[15px] font-medium"
          >
            Projects
          </Link>
          <Link
            href="/#blogs"
            className="text-neutral-400 hover:text-white transition-colors duration-200 text-[15px] font-medium"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="text-neutral-400 hover:text-white transition-colors duration-200 text-[15px] font-medium"
          >
            About Me
          </Link>
          <Link href="/#contact">
            <button className="text-neutral-400 hover:text-white transition-colors duration-200 text-[15px] font-medium">
              Contact
            </button>
          </Link>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-950/30 border border-green-800/50 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 text-sm font-medium">
              Available
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-20 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-white focus:outline-none"
          >
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-5 w-48 bg-black/95 backdrop-blur-md rounded-xl shadow-lg py-2 px-4 flex flex-col space-y-3 text-sm border border-neutral-800"
              >
                <Link
                  href="/#projects"
                  className="text-neutral-400 hover:text-white transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/#blogs"
                  className="text-neutral-400 hover:text-white transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-white transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  About Me
                </Link>
                <Link
                  href="/#contact"
                  className="text-neutral-400 hover:text-white transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-950/30 border border-green-800/50 rounded-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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
