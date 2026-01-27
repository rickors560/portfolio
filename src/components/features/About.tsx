"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
              <User size={24} />
            </div>
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          
          <div className="prose prose-invert prose-lg text-slate-400">
            <p>
              I am a <span className="text-slate-200 font-medium">Module Lead – Backend & AI</span> with over 5 years of experience in building scalable systems. 
              My journey started with <span className="text-indigo-400">Java/Spring Boot microservices</span> (3.5 years), and I successfully transitioned to <span className="text-indigo-400">Python and Generative AI</span>.
            </p>
            <p>
              I specialize in delivering production-grade LLM-powered applications, agentic systems, and RAG platforms. 
              Throughout my career, I have driven significant impact by cutting cloud costs by <span className="text-slate-200">30%</span>, improving performance by <span className="text-slate-200">80%</span>, 
              and increasing team delivery velocity by <span className="text-slate-200">25%</span> through clean architecture, system design, and mentorship.
            </p>
            <p>
              My focus is on shipping robust, production-ready AI solutions in Agile environments, ensuring high reliability and user value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
