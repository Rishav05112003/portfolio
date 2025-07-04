"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto font-bold  z-100 font-sans max-w-5xl flex h-16 items-center justify-between w-full px-6 py-4 bg-black   text-white ">
      {/* Logo */}
      <div className="text-xl font-semibold">
        <Link href="/">
          <span className="text-primary text-2xl font-bold font-sans">
            R
            <span className="inline-block w-2 h-2 mx-1  bg-muted-foreground rounded-full"></span>
            <span className="font-sans text-3xl">m</span>
          </span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden sm:flex space-x-6">
        <Link href="/#projects" className="hover:text-gray-300 pt-1">
          Projects
        </Link>
        <Link href="/#blogs" className="hover:text-gray-300 pt-1">
          Blogs
        </Link>
        <Link href="/about" className="hover:text-gray-300 pt-1">
          About Me
        </Link>
        <Link href="/#contact" className="">
          <Button className="relative overflow-hidden bg-primary text-black text-lg px-6 py-2 rounded-md font-bold group hover:text-primary hover:bg-background transition-colors duration-300">
            <span className="relative z-10">Contact</span>
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden z-20 relative">
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
              className="absolute right-0 mt-5 w-48 bg-black rounded-xl shadow-lg py-2 px-4 flex flex-col space-y-3 text-sm border border-neutral-800"
            >
              <Link href="/#projects" className="hover:text-gray-300 pt-1">
                Projects
              </Link>
              <Link href="/#blogs" className="hover:text-gray-300 pt-1">
                Blogs
              </Link>
              <Link href="/about" className="hover:text-gray-300 pt-1">
                About Me
              </Link>
              <Link href="/#contact" className="hover:text-gray-300 pt-1">
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
