"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "Java", "Groovy", "JavaScript", "TypeScript", "SQL", "C++", "C#", "html", "css"],
  },
  {
    title: "Backend & AI",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Spring Boot", "FastAPI", "Flask", "LangChain", "RAG", "GraphRAG", "TensorFlow", "PyTorch", "Hugging Face", "NLP", "Rasa", ".NET"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["AWS Bedrock", "S3", "OpenSearch", "Azure", "Docker", "Kubernetes", "Kafka", "CI/CD", "Git", "Maven"],
  },
  {
    title: "Data & Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "Neo4j", "Qdrant", "ChromaDB", "FAISS", "Memgraph", "ksqlDB", "Redis"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A comprehensive toolset for building modern, scalable AI and backend solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:bg-slate-700 transition-colors cursor-default"
                  >
                    {skill}
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
