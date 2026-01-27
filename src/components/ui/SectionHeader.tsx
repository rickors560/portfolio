"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  gradientText?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  gradientText,
  description,
  centered = false
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <motion.span 
          className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {label}
        </motion.span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        {title}{" "}
        {gradientText && (
          <span className="text-gradient">{gradientText}</span>
        )}
      </h2>
      {description && (
        <p className={`text-lg text-slate-400 ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
