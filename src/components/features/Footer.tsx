"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/rickors560", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ritik-sharma-b14149190/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rickors560@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-zinc-900 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="inline-block group">
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                Ritik Sharma<span className="text-blue-500">.</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Software Engineer – Backend & AI, crafting scalable systems and production-grade AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-100 font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-zinc-100 font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-900 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Ritik Sharma. Made with
            <Heart className="w-3.5 h-3.5 text-zinc-600 fill-zinc-900" />
            in India
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
