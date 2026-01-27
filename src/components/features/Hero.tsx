"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Ritik Sharma</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-slate-400 font-medium">
            Module Lead – Backend & AI
          </h2>
          
          <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
            Building scalable systems and production-grade AI solutions. 
            Specializing in Java/Spring Boot microservices, Python, and Generative AI 
            to deliver robust RAG platforms and agentic systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            
            <Link 
              href="https://drive.google.com/file/d/1ptitKLZCrRrboJgmchu8YYXdbm-Cdsib/view" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg font-medium transition-colors"
            >
              Download Resume
            </Link>
          </div>

          <div className="flex gap-6 pt-8 text-slate-400">
            <a 
              href="https://www.linkedin.com/in/ritik-sharma-b14149190/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/rickors560" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:rickors560@gmail.com" 
              className="hover:text-indigo-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
