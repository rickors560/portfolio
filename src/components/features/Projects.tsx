"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: "Code Graph RAG Platform",
    description: "Designed a production Code Graph RAG system with multi-agent AI using AST parsing, Neo4j, Qdrant, LangChain, and FastAPI for semantic code search.",
    tags: ["GraphRAG", "Neo4j", "FastAPI", "Multi-Agent AI"],
    links: { demo: "#" } // Example of existence, though standard is none
  },
  {
    title: "Agentic AI Platform",
    description: "Deployed an agentic AI platform with RAG, conversational memory, AWS Bedrock, and OpenSearch Serverless, improving end-user assistance reliability.",
    tags: ["AWS Bedrock", "Agentic AI", "RAG", "OpenSearch"],
  },
  {
    title: "AI Audit Assistant",
    description: "Built an AI Audit Assistant using LLMs on AWS, cutting audit response time by 60% and reducing cloud inference costs by 30%.",
    tags: ["LLM", "AWS", "Cost Optimization", "Automation"],
  },
  {
    title: "Sales AI Assessment App",
    description: "Full-stack delivery of a Sales AI Assessment web app helping customers evaluate AI compatibility in their business domain.",
    tags: ["React.js", "FastAPI", "AI Assessment"],
  },
  {
    title: "Fusion (LIHTC Properties)",
    description: "Architected modern Spring Boot application using DDD with gRPC microservices protected by Keycloak and CQRS with Kafka.",
    tags: ["Spring Boot", "Microservices", "Kafka", "CQRS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-900/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Selected works demonstrating my expertise in AI and Distributed Systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/50 transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                {project.links && (project.links.demo || project.links.github) && (
                   <a 
                     href={project.links.demo || project.links.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-slate-600 group-hover:text-indigo-400 transition-colors"
                   >
                     <ArrowUpRight size={20} />
                   </a>
                )}
              </div>
              
              <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-slate-900 text-indigo-300 text-xs rounded border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
