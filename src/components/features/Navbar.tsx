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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="relative z-50 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl font-bold tracking-tight">
            <span className="text-zinc-100 group-hover:text-white transition-colors">RS</span>
            <span className="text-blue-500">.</span>
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
              className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-zinc-100 group-hover:w-1/2 transition-all duration-300 opacity-50" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-semibold transition-all shadow-lg shadow-white/5"
          >
            <Download className="w-4 h-4" />
            Resume
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="relative z-[102] p-2 md:hidden text-zinc-100 hover:bg-zinc-800 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <motion.div
  initial={false}
  animate={isOpen ? "open" : "closed"}
  variants={{
    open: { 
      opacity: 1, 
      x: "0%",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    closed: { 
      opacity: 0, 
      x: "100%",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    }
  }}
  className="fixed inset-0 z-[101] bg-zinc-950 md:hidden flex flex-col items-center justify-center pointer-events-auto"
  style={{ pointerEvents: isOpen ? "auto" : "none" }}
>
  <nav className="flex flex-col items-center gap-8">
    {navLinks.map((link, index) => (
      <motion.a
        key={link.label}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="text-3xl font-bold text-zinc-400 hover:text-white transition-colors"
        variants={{
          open: { 
            opacity: 1, 
            y: 0, 
            transition: { delay: 0.1 + index * 0.1 } 
          },
          closed: { 
            opacity: 0, 
            y: 20 
          }
        }}
      >
        {link.label}
      </motion.a>
    ))}
    
    <motion.div
      variants={{
        open: { opacity: 1, y: 0, transition: { delay: 0.6 } },
        closed: { opacity: 0, y: 20 }
      }}
      className="mt-8"
    >
      <Link
        href="https://drive.google.com/file/d/1ptitKLZCrRrboJgmchu8YYXdbm-Cdsib/view"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsOpen(false)}
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors"
      >
        <Download className="w-5 h-5" />
        Resume
      </Link>
    </motion.div>
  </nav>
</motion.div>
      </div>
    </motion.header>
  );
}
