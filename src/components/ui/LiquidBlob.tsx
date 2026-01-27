"use client";

import { motion } from "framer-motion";

interface LiquidBlobProps {
  className?: string;
  color1?: string;
  color2?: string;
  size?: string;
  delay?: number;
}

export default function LiquidBlob({ 
  className = "", 
  color1 = "#8b5cf6", 
  color2 = "#06b6d4",
  size = "500px",
  delay = 0
}: LiquidBlobProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay }}
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color1}40, ${color2}40)`,
        filter: "blur(80px)",
      }}
    >
      <div 
        className="w-full h-full animate-morph"
        style={{
          background: `linear-gradient(135deg, ${color1}60, ${color2}60)`,
        }}
      />
    </motion.div>
  );
}
