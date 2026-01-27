"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { LiquidBlob, MagneticButton, FloatingParticles } from "@/components/ui";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-[#0a0a0f] to-cyan-950/20" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Particles */}
        <FloatingParticles count={40} />
        
        {/* Liquid Blobs */}
        <LiquidBlob 
          className="top-[-10%] left-[-10%]" 
          color1="#8b5cf6" 
          color2="#6366f1" 
          size="600px"
        />
        <LiquidBlob 
          className="bottom-[-20%] right-[-10%]" 
          color1="#06b6d4" 
          color2="#3b82f6" 
          size="700px"
          delay={0.3}
        />
        <LiquidBlob 
          className="top-[30%] right-[20%]" 
          color1="#f472b6" 
          color2="#a855f7" 
          size="400px"
          delay={0.6}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container max-w-5xl mx-auto px-6"
        style={{ y, opacity }}
      >
        <div className="space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-violet-300">Available for new opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <motion.span 
                className="block text-white"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I&apos;m
              </motion.span>
              <motion.span 
                className="block text-gradient relative"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ritik Sharma
                <Sparkles className="absolute -right-8 -top-2 w-6 h-6 text-amber-400 animate-pulse" />
              </motion.span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-3xl text-slate-400 font-medium flex items-center gap-3"
          >
            <span className="w-12 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500" />
            Module Lead – Backend & AI
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            I craft <span className="text-violet-400 font-medium">scalable systems</span> and 
            <span className="text-cyan-400 font-medium"> production-grade AI solutions</span>. 
            Specializing in microservices architecture, Generative AI, and 
            building robust RAG platforms that drive real business value.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <MagneticButton 
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-full font-bold shadow-lg shadow-violet-500/25"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>

            <MagneticButton 
              href="https://drive.google.com/file/d/1ptitKLZCrRrboJgmchu8YYXdbm-Cdsib/view"
              external
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold backdrop-blur-sm"
            >
              <Download className="w-5 h-5" />
              <span>Resume</span>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 pt-8"
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
                className="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-slate-400 group-hover:text-violet-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-violet-400"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
