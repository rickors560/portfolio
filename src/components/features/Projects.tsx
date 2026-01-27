"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Sparkles, Zap, Brain, Bot, Database, Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  impact?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Code Graph RAG Platform",
    description: "Production Code Graph RAG system with multi-agent AI using AST parsing, Neo4j, Qdrant, LangChain, and FastAPI for semantic code search and codebase intelligence.",
    tags: ["GraphRAG", "Neo4j", "Multi-Agent AI", "LangChain"],
    icon: Brain,
    impact: "Semantic code search across services",
  },
  {
    title: "Agentic AI Platform",
    description: "Enterprise agentic AI platform with RAG, conversational memory, AWS Bedrock, and OpenSearch Serverless for intelligent end-user assistance.",
    tags: ["AWS Bedrock", "Agentic AI", "RAG", "OpenSearch"],
    icon: Bot,
    impact: "Improved user assistance reliability",
  },
  {
    title: "AI Audit Assistant",
    description: "LLM-powered Audit Assistant on AWS, automating property inspections with 60% faster response time and 30% reduced cloud costs.",
    tags: ["LLM", "AWS", "Cost Optimization"],
    icon: Zap,
    impact: "60% faster audit response",
  },
  {
    title: "LLM Availability Bot",
    description: "Real-time availability bot using Rasa Framework and Mistral AI on AWS Bedrock, achieving 99.9% uptime for instant queries.",
    tags: ["Rasa", "Mistral AI", "Real-time"],
    icon: Sparkles,
    impact: "99.9% uptime achieved",
  },
  {
    title: "Fusion Platform",
    description: "Modern Spring Boot application using DDD with gRPC microservices, Keycloak auth, CQRS with Kafka, and PostgreSQL persistence.",
    tags: ["Spring Boot", "Microservices", "CQRS", "Kafka"],
    icon: Layers,
    impact: "Enterprise-grade architecture",
    link: "https://fusionassetmgmt.com/",
  },
  {
    title: "Agentic RAG Services",
    description: "Modular agentic AI system using RAG, ChromaDB, and Qdrant vector stores, improving semantic retrieval accuracy by 40%.",
    tags: ["ChromaDB", "Qdrant", "RAG"],
    icon: Database,
    impact: "40% better retrieval accuracy",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [5, -5]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-5, 5]), { stiffness: 200, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const Icon = project.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transformStyle: "preserve-3d",
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      className="group relative h-full"
    >
      <div
        className="relative h-full p-6 sm:p-8 rounded-2xl overflow-hidden bg-zinc-900/40 border border-white/5 hover:border-zinc-700/50 transition-colors duration-300"
      >
        {/* Subtle Gradient Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-transparent pointer-events-none"
        />
        
        {/* Icon */}
        <div 
          className="relative z-10 inline-flex p-3 rounded-xl mb-6 bg-zinc-800/50 text-zinc-300 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors duration-300"
        >
          <Icon className="w-6 h-6" />
        </div>
        
        {/* Title */}
        <div className="relative z-10 flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
            {project.link ? (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </a>
            ) : (
              <span>{project.title}</span>
            )}
          </h3>
        </div>
        
        {/* Description */}
        <p className="relative z-10 text-zinc-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        {/* Impact Badge */}
        {project.impact && (
          <div 
            className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
          >
            <Zap className="w-3 h-3" />
            {project.impact}
          </div>
        )}
        
        {/* Tags */}
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2.5 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded-full border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="container relative z-10">
        <SectionHeader
          label="Featured Compositions"
          title="Selected"
          gradientText="Work"
          description="A collection of production-grade systems powering real-world applications."
          centered
        />
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/rickors560"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 font-medium transition-all group"
          >
            Explore more on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
