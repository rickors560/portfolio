"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Terminal, Cpu, Layers, Cloud } from "lucide-react";
import { SectionHeader } from "@/components/ui";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Groovy", "C++", "C#"],
  },
  {
    title: "AI & ML",
    icon: Cpu,
    skills: ["LangChain", "RAG", "GraphRAG", "TensorFlow", "PyTorch", "Hugging Face", "NLP", "Rasa"],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: ["Spring Boot", "FastAPI", "Flask", ".NET", "gRPC", "REST APIs", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS Bedrock", "S3", "OpenSearch", "Azure", "Docker", "Kubernetes", "CI/CD", "Git"],
  },
  {
    title: "Data & Databases",
    icon: Database,
    skills: ["PostgreSQL", "Neo4j", "Qdrant", "ChromaDB", "FAISS", "Redis", "Kafka", "Memgraph"],
  },
  {
    title: "Practices",
    icon: Terminal,
    skills: ["System Design", "CQRS", "DDD", "SOLID", "Clean Code", "Agile", "Code Review"],
  },
];

function SkillPill({ skill, delay }: { skill: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 hover:bg-zinc-700 hover:text-white hover:border-zinc-600 transition-colors cursor-default"
    >
      {skill}
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
      className="h-full"
    >
      <div className="h-full p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-zinc-700/50 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-2.5 rounded-xl bg-zinc-800 text-zinc-200 group-hover:bg-zinc-700 transition-colors">
            <Icon className="w-5 h-5 top-0.5 relative" />
          </div>
          <h3 className="text-lg font-bold text-zinc-100">{category.title}</h3>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2">
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
      <div className="container relative z-10">
        <SectionHeader
          label="Tech Stack"
          title="Technical"
          gradientText="Arsenal"
          description="A comprehensive toolkit for building modern, scalable AI and backend solutions."
          centered
        />
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500">
            <span className="text-4xl font-bold text-white block mb-2">40+</span>
            <span className="text-sm">Technologies mastered and counting</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
