"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, Database, Terminal, Cpu, Layers, Cloud } from "lucide-react";
import { SectionHeader, LiquidBlob } from "@/components/ui";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-violet-500 to-purple-500",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Groovy", "C++", "C#"],
  },
  {
    title: "AI & ML",
    icon: Cpu,
    color: "from-fuchsia-500 to-pink-500",
    skills: ["LangChain", "RAG", "GraphRAG", "TensorFlow", "PyTorch", "Hugging Face", "NLP", "Rasa"],
  },
  {
    title: "Backend",
    icon: Layers,
    color: "from-cyan-500 to-blue-500",
    skills: ["Spring Boot", "FastAPI", "Flask", ".NET", "gRPC", "REST APIs", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    skills: ["AWS Bedrock", "S3", "OpenSearch", "Azure", "Docker", "Kubernetes", "CI/CD", "Git"],
  },
  {
    title: "Data & Databases",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    skills: ["PostgreSQL", "Neo4j", "Qdrant", "ChromaDB", "FAISS", "Redis", "Kafka", "Memgraph"],
  },
  {
    title: "Practices",
    icon: Terminal,
    color: "from-rose-500 to-red-500",
    skills: ["System Design", "CQRS", "DDD", "SOLID", "Clean Code", "Agile", "Code Review"],
  },
];

function SkillPill({ skill, delay }: { skill: string; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium cursor-default overflow-hidden group"
      style={{
        background: isHovered 
          ? "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))"
          : "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 text-slate-300 group-hover:text-white transition-colors">
        {skill}
      </span>
    </motion.span>
  );
}

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden">
        {/* Gradient Glow on Hover */}
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${category.color}`}
          style={{ filter: "blur(80px)", transform: "scale(0.5)" }}
        />
        
        {/* Header */}
        <div className="relative z-10 flex items-center gap-4 mb-6">
          <motion.div 
            className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
        </div>
        
        {/* Skills */}
        <div className="relative z-10 flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <SkillPill 
              key={skill} 
              skill={skill} 
              delay={0.1 + skillIndex * 0.03}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-cyan-950/5 to-[#0a0a0f]" />
      <LiquidBlob 
        className="bottom-[-20%] right-[-15%]" 
        color1="#06b6d4" 
        color2="#8b5cf6" 
        size="600px"
      />
      
      <div className="container relative z-10">
        <SectionHeader
          label="Tech Stack"
          title="Technical"
          gradientText="Arsenal"
          description="A comprehensive toolkit for building modern, scalable AI and backend solutions."
          centered
        />
        
        {/* Skills Grid with Bento-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Animated Skill Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            <span className="text-5xl font-bold text-gradient">40+</span>
            <span className="block mt-2 text-lg">Technologies mastered and counting</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
