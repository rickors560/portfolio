"use client";

import { FloatingParticles } from "@/components/ui";
import Navbar from "@/components/features/Navbar";
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Experience from "@/components/features/Experience";
import Skills from "@/components/features/Skills";
import Projects from "@/components/features/Projects";
import Contact from "@/components/features/Contact";
import Footer from "@/components/features/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-200 overflow-x-hidden">
      {/* Global Floating Particles */}
      <FloatingParticles count={20} />
      
      {/* Noise Overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
