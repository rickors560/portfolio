"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { SectionHeader, LiquidBlob } from "@/components/ui";

interface ExperienceItem {
  role: string;
  period: string;
  highlights?: string[];
  isActive?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    role: "Module Lead",
    period: "May 2025 – Present",
    isActive: true,
    highlights: [
      "Leading backend & AI module initiatives",
      "Architecting production-grade agentic AI systems",
      "Mentoring 6+ junior engineers",
    ],
  },
  {
    role: "Senior Software Engineer",
    period: "May 2023 – Apr 2025",
    highlights: [
      "Built Code Graph RAG Platform with multi-agent AI",
      "Deployed Agentic AI Platform with AWS Bedrock",
      "Reduced cloud costs by 30% for AI workloads",
    ],
  },
  {
    role: "Software Engineer",
    period: "May 2022 – Apr 2023",
    highlights: [
      "Architected Fusion using Spring Boot with DDD",
      "Enhanced API performance by up to 80%",
      "Implemented CQRS with Kafka and PostgreSQL",
    ],
  },
  {
    role: "Associate Software Engineer",
    period: "Jul 2021 – Apr 2022",
    highlights: [
      "Developed microservices with Spring Boot",
      "Modernized authentication with OAuth 2.0",
      "Contributed to high-performance API development",
    ],
  },
  {
    role: "Associate Software Engineer Trainee",
    period: "Mar 2021 – Jun 2021",
    highlights: [
      "Learned enterprise software development",
      "Built foundational Java/Spring Boot skills",
      "Contributed to team projects",
    ],
  },
];

function TimelineItem({ exp, index, isLast }: { exp: ExperienceItem; index: number; isLast: boolean }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 0, 0]);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, scale, x }}
      className="relative pl-8 md:pl-16"
    >
      {/* Timeline Node */}
      <div className="absolute left-0 top-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={`relative z-10 w-4 h-4 rounded-full ${
            exp.isActive 
              ? "bg-gradient-to-r from-violet-500 to-cyan-500" 
              : "bg-slate-700 border-2 border-slate-600"
          }`}
        >
          {exp.isActive && (
            <span className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-50" />
          )}
        </motion.div>
      </div>
      
      {/* Timeline Line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute left-[7px] top-4 w-[2px] h-full origin-top bg-gradient-to-b from-violet-500/50 to-transparent"
        />
      )}
      
      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 * index }}
        className={`relative p-6 rounded-2xl mb-8 transition-all duration-300 ${
          exp.isActive 
            ? "bg-gradient-to-br from-violet-500/10 to-cyan-500/5 border border-violet-500/30" 
            : "bg-white/[0.02] border border-white/5 hover:border-white/10"
        }`}
      >
        {exp.isActive && (
          <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Current
          </span>
        )}
        
        {/* Role */}
        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
        
        {/* Company & Period */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-slate-400">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-violet-400" />
            <a 
              href="https://www.taazaa.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
            >
              Taazaa Inc.
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Noida, U.P.</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{exp.period}</span>
          </div>
        </div>
        
        {/* Highlights */}
        {exp.highlights && (
          <ul className="space-y-2">
            {exp.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-2 text-slate-400"
              >
                <ChevronRight className="w-4 h-4 mt-1 text-cyan-400 flex-shrink-0" />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-violet-950/5 to-[#0a0a0f]" />
      <LiquidBlob 
        className="top-[20%] left-[-20%]" 
        color1="#8b5cf6" 
        color2="#f472b6" 
        size="500px"
      />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="Career Journey"
            title="Work"
            gradientText="Experience"
            description="A progressive journey of growth, innovation, and impact at Taazaa Inc."
          />
          
          {/* Timeline */}
          <div className="relative mt-12">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={index} 
                exp={exp} 
                index={index} 
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
          
          {/* Career Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex justify-center gap-8 flex-wrap"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "5", label: "Promotions" },
              { value: "1", label: "Amazing Company" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-3xl font-bold text-gradient">{stat.value}</span>
                <span className="text-sm text-slate-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
