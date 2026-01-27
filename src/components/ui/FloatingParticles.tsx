"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles({ count = 50 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // random horizontal position
        y: Math.random() * -100, // start above the screen
        size: Math.random() * 3 + 2,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}px`,
            width: particle.size,
            height: particle.size,
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
            willChange: "transform"
          }}
          animate={{
            y: ["0vh", "120vh"],
            x: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      ))}
    </div>
  );
}
