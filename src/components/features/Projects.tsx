"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Sparkles, Zap, Brain, Bot, Database, Layers } from "lucide-react";
import { SectionHeader, LiquidBlob } from "@/components/ui";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  color: string;
  impact?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Code Graph RAG Platform",
    description: "Production Code Graph RAG system with multi-agent AI using AST parsing, Neo4j, Qdrant, LangChain, and FastAPI for semantic code search and codebase intelligence.",
    tags: ["GraphRAG", "Neo4j", "Multi-Agent AI", "LangChain"],
    icon: Brain,
    color: "from-violet-500 to-fuchsia-500",
    impact: "Semantic code search across services",
  },
  {
    title: "Agentic AI Platform",
    description: "Enterprise agentic AI platform with RAG, conversational memory, AWS Bedrock, and OpenSearch Serverless for intelligent end-user assistance.",
    tags: ["AWS Bedrock", "Agentic AI", "RAG", "OpenSearch"],
    icon: Bot,
    color: "from-cyan-500 to-blue-500",
    impact: "Improved user assistance reliability",
  },
  {
    title: "AI Audit Assistant",
    description: "LLM-powered Audit Assistant on AWS, automating property inspections with 60% faster response time and 30% reduced cloud costs.",
    tags: ["LLM", "AWS", "Cost Optimization"],
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    impact: "60% faster audit response",
  },
  {
    title: "LLM Availability Bot",
    description: "Real-time availability bot using Rasa Framework and Mistral AI on AWS Bedrock, achieving 99.9% uptime for instant queries.",
    tags: ["Rasa", "Mistral AI", "Real-time"],
    icon: Sparkles,
    color: "from-emerald-500 to-teal-500",
    impact: "99.9% uptime achieved",
  },
  {
    title: "Fusion Platform",
    description: "Modern Spring Boot application using DDD with gRPC microservices, Keycloak auth, CQRS with Kafka, and PostgreSQL persistence.",
    tags: ["Spring Boot", "Microservices", "CQRS", "Kafka"],
    icon: Layers,
    color: "from-pink-500 to-rose-500",
    impact: "Enterprise-grade architecture",
    link: "https://fusionassetmgmt.com/",
  },
  {
    title: "Agentic RAG Services",
    description: "Modular agentic AI system using RAG, ChromaDB, and Qdrant vector stores, improving semantic retrieval accuracy by 40%.",
    tags: ["ChromaDB", "Qdrant", "RAG"],
    icon: Database,
    color: "from-indigo-500 to-violet-500",
    impact: "40% better retrieval accuracy",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [10, -10]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-10, 10]), { stiffness: 200, damping: 30 });
  
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
      className="group relative"
    >
      <motion.div
        className="relative h-full p-6 rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
        whileHover={{ 
          borderColor: "rgba(139, 92, 246, 0.3)",
          transition: { duration: 0.3 }
        }}
      >
        {/* Gradient Glow */}
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.color}`}
          style={{ filter: "blur(60px)", transform: "scale(0.6)", transformOrigin: "center" }}
        />
        
        {/* Icon */}
        <motion.div 
          className={`relative z-10 inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br ${project.color}`}
          style={{ transformStyle: "preserve-3d", translateZ: isHovered ? 30 : 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        {/* Title */}
        <motion.div 
          className="relative z-10 text-xl font-bold text-white mb-3 flex items-center justify-between"
          style={{ transformStyle: "preserve-3d", translateZ: isHovered ? 20 : 0 }}
        >
          {project.link ? (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors flex items-center gap-2"
            >
              {project.title}
              <ArrowUpRight 
                className="w-5 h-5 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
              />
            </a>
          ) : (
            <span>{project.title}</span>
          )}
        </motion.div>
        
        {/* Description */}
        <motion.p 
          className="relative z-10 text-slate-400 text-sm leading-relaxed mb-4"
          style={{ transformStyle: "preserve-3d", translateZ: isHovered ? 15 : 0 }}
        >
          {project.description}
        </motion.p>
        
        {/* Impact Badge */}
        {project.impact && (
          <motion.div 
            className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
            style={{ transformStyle: "preserve-3d", translateZ: isHovered ? 25 : 0 }}
          >
            <Zap className="w-3 h-3" />
            {project.impact}
          </motion.div>
        )}
        
        {/* Tags */}
        <motion.div 
          className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5"
          style={{ transformStyle: "preserve-3d", translateZ: isHovered ? 10 : 0 }}
        >
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2.5 py-1 bg-white/5 text-slate-400 text-xs rounded-md border border-white/5"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-fuchsia-950/5 to-[#0a0a0f]" />
      <LiquidBlob 
        className="bottom-[10%] left-[-15%]" 
        color1="#f472b6" 
        color2="#8b5cf6" 
        size="550px"
      />
      <LiquidBlob 
        className="top-[20%] right-[-20%]" 
        color1="#06b6d4" 
        color2="#3b82f6" 
        size="450px"
        delay={0.5}
      />
      
      <div className="container relative z-10">
        <SectionHeader
          label="Featured Work"
          title="Projects &"
          gradientText="Impact"
          description="Production-grade AI and backend systems that drive real business value."
          centered
        />
        
        {/* Projects Grid with Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <p className="text-slate-400 mb-4">Want to learn more about my work?</p>
          <a
            href="https://github.com/rickors560"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-violet-500/20 hover:border-violet-500/50 text-white font-medium transition-all group"
          >
            View More on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
