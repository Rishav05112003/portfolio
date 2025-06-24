"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="mx-auto max-w-5xl flex h-16 items-center justify-between w-full px-6 py-4 bg-black   text-white "
    >
      {/* Logo */}
      <div className="text-xl font-semibold">
        <Link href="/">Rishav</Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden sm:flex space-x-6">
        <Link href="/templates" className="hover:text-gray-300">
          Templates
        </Link>
        <Link href="/consultation" className="hover:text-gray-300">
          Consultation
        </Link>
        <Link href="/faq" className="hover:text-gray-300">
          FAQ
        </Link>
        <Link href="/support" className="hover:text-gray-300">
          Support
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden relative">
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
              className="absolute right-0 mt-5 w-48 bg-[#141414] rounded-xl shadow-lg py-2 px-4 flex flex-col space-y-3 text-sm border border-neutral-800"
            >
              <Link href="/templates" className="hover:text-gray-300">
                Templates
              </Link>
              <Link href="/faq" className="hover:text-gray-300">
                FAQ
              </Link>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/support" className="hover:text-gray-300">
                Support
              </Link>
              <Link href="/privacy-policy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/404" className="hover:text-gray-300">
                404
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
