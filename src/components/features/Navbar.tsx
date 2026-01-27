"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="relative z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl font-bold">
            <span className="text-gradient">RS</span>
            <span className="text-white">.</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="https://drive.google.com/file/d/1ptitKLZCrRrboJgmchu8YYXdbm-Cdsib/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-semibold transition-all shadow-lg shadow-violet-500/20"
          >
            <Download className="w-4 h-4" />
            Resume
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="relative z-50 p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : "100%"
          }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                transition={{ delay: 0.1 * index }}
                className="text-3xl font-bold text-white hover:text-violet-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                href="https://drive.google.com/file/d/1ptitKLZCrRrboJgmchu8YYXdbm-Cdsib/view"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
