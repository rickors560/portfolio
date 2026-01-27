"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Users, Award } from "lucide-react";
import { GlowCard, SectionHeader, LiquidBlob } from "@/components/ui";

const stats = [
  { icon: Zap, value: "30%", label: "Cloud Cost Reduction", color: "from-amber-500 to-orange-500" },
  { icon: TrendingUp, value: "80%", label: "Performance Boost", color: "from-emerald-500 to-cyan-500" },
  { icon: Users, value: "25%", label: "Team Velocity", color: "from-violet-500 to-purple-500" },
  { icon: Award, value: "5+", label: "Major Awards", color: "from-pink-500 to-rose-500" },
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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-violet-950/10 to-[#0a0a0f]" />
      <LiquidBlob 
        className="top-[10%] left-[-20%]" 
        color1="#8b5cf6" 
        color2="#06b6d4" 
        size="500px"
      />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              className="space-y-6 text-slate-400 text-lg leading-relaxed"
            >
              <p>
                As a <span className="text-white font-semibold">Module Lead – Backend & AI</span> with 
                over 5+ years of experience, I've transformed from a Java/Spring Boot specialist into 
                a <span className="text-violet-400">Generative AI pioneer</span>.
              </p>
              <p>
                My journey has been marked by continuous learning and delivering 
                <span className="text-cyan-400"> production-grade LLM applications</span>, 
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
                <GlowCard className="h-full">
                  <div className="flex flex-col items-center text-center py-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-white mb-2">{stat.value}</span>
                    <span className="text-sm text-slate-400">{stat.label}</span>
                  </div>
                </GlowCard>
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
          className="mt-20 overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Recognition & Awards</h3>
          </div>
          
          <div className="relative">
            <div className="flex animate-[scroll_30s_linear_infinite] gap-8 whitespace-nowrap">
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
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20"
                >
                  <span className="text-amber-400">✦</span>
                  <span className="text-slate-300 font-medium">{award}</span>
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
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20"
                >
                  <span className="text-amber-400">✦</span>
                  <span className="text-slate-300 font-medium">{award}</span>
                </div>
              ))}
            </div>
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
