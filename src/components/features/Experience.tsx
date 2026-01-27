"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Taazaa Inc.",
    role: "Module Lead",
    period: "May 2025 – Present",
    location: "Noida, U.P.",
  },
  {
    company: "Taazaa Inc.",
    role: "Senior Software Engineer",
    period: "May 2023 – Apr 2025",
    location: "Noida, U.P.",
  },
  {
    company: "Taazaa Inc.",
    role: "Software Engineer",
    period: "May 2022 – Apr 2023",
    location: "Noida, U.P.",
  },
  {
    company: "Taazaa Inc.",
    role: "Associate Software Engineer",
    period: "Jul 2021 – Apr 2022",
    location: "Noida, U.P.",
  },
  {
    company: "Taazaa Inc.",
    role: "Associate Software Engineer Trainee",
    period: "Mar 2021 – Jun 2021",
    location: "Noida, U.P.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-950/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            My professional journey and career growth.
          </p>
        </motion.div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-indigo-500" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                <span className="text-sm font-medium text-slate-500 flex items-center gap-1">
                  <Calendar size={14} /> {exp.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-indigo-400 font-medium">
                <Briefcase size={16} />
                <span>{exp.company}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-500 text-sm">{exp.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
