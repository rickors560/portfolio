"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Users, Award } from "lucide-react";
import { SectionHeader, GlowCard } from "@/components/ui";

const stats = [
  { icon: Zap, value: "30%", label: "Cloud Cost Reduction" },
  { icon: TrendingUp, value: "80%", label: "Performance Boost" },
  { icon: Users, value: "25%", label: "Team Velocity" },
  { icon: Award, value: "5+", label: "Major Awards" },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="relative section-padding overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <SectionHeader
              label="About Me"
              title="Crafting"
              gradientText="Digital Excellence"
              description="A passionate technologist turning complex problems into elegant solutions."
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light"
            >
              <p>
                As a <span className="text-white font-medium">Software Engineer – Backend & AI</span> with 
                over 5+ years of experience, I've transformed from a Java/Spring Boot specialist into 
                a <span className="text-zinc-200">Generative AI pioneer</span>.
              </p>
              <p>
                My journey has been marked by continuous learning and delivering 
                <span className="text-zinc-200"> production-grade LLM applications</span>, 
                agentic systems, and RAG platforms that create real business impact.
              </p>
              <p>
                I believe in clean architecture, mentoring the next generation of engineers, 
                and always shipping solutions that matter.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Stats Cards */}
          <motion.div 
            style={{ y }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="h-full p-6 bg-zinc-900/50 border border-white/5 rounded-2xl flex flex-col items-center text-center hover:border-zinc-700 transition-colors">
                  <div className="p-3 rounded-xl bg-zinc-800 text-zinc-100 mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-sm text-zinc-500">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Awards Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 overflow-hidden border-t border-zinc-900 pt-10"
        >
          <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
            <Award className="w-5 h-5 text-zinc-500" />
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Recognition & Awards</h3>
          </div>
          
          <div className="relative">
            <div className="flex animate-[scroll_40s_linear_infinite] gap-8 whitespace-nowrap">
              {[
                "Value Champion Q2 2025",
                "Annual Excellence Award 2025",
                "CEO Outstanding Contributor 2022",
                "Core Value – Create for Tomorrow 2026",
                "Value Champion Q4 2021",
                "Annual Excellence Award 2023",
              ].map((award, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800"
                >
                  <span className="text-zinc-600">✦</span>
                  <span className="text-zinc-300 font-medium">{award}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "Value Champion Q2 2025",
                "Annual Excellence Award 2025",
                "CEO Outstanding Contributor 2022",
                "Core Value – Create for Tomorrow 2026",
                "Value Champion Q4 2021",
                "Annual Excellence Award 2023",
              ].map((award, index) => (
                <div
                  key={`dup-${index}`}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800"
                >
                  <span className="text-zinc-600">✦</span>
                  <span className="text-zinc-300 font-medium">{award}</span>
                </div>
              ))}
            </div>
            
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
