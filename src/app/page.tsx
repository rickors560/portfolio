"use client";

import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Experience from "@/components/features/Experience";
import Skills from "@/components/features/Skills";
import Projects from "@/components/features/Projects";
import Contact from "@/components/features/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-slate-600 border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} Ritik Sharma. All rights reserved.</p>
      </footer>
    </main>
  );
}
