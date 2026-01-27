"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { MagneticButton } from "@/components/ui";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-20" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container max-w-4xl mx-auto px-6 text-center"
        style={{ y, opacity }}
      >
        <div className="space-y-8 flex flex-col items-center">
          {/* Status Badge - Human & Clean */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-zinc-400">Open for new opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Building scalable <br className="hidden md:block" />
              <span className="text-zinc-500">intelligence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-light px-4"
            >
              I'm Ritik Sharma, a Software Engineer specializing in <span className="text-zinc-200 font-medium">Backend Systems</span> and <span className="text-zinc-200 font-medium">Agentic AI</span>.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <MagneticButton 
              href="#projects"
              className="px-8 py-3 bg-zinc-100 hover:bg-white text-zinc-900 rounded-full font-medium transition-colors shadow-lg shadow-zinc-500/10 flex items-center gap-2 justify-center"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton 
              href="https://drive.google.com/file/d/1ptitKLZCrRrboJgmchu8YYXdbm-Cdsib/view"
              external
              className="px-8 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 rounded-full font-medium transition-colors flex items-center gap-2 justify-center"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-6 pt-12 items-center justify-center border-t border-zinc-900 w-full max-w-xs"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/ritik-sharma-b14149190/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/rickors560", label: "GitHub" },
              { icon: Mail, href: "mailto:rickors560@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="text-zinc-500 hover:text-zinc-200 transition-colors"
                whileHover={{ y: -2 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
