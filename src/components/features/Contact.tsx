"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-indigo-400 font-medium mb-2 block">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build the Future
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your visions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:rickors560@gmail.com"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Say Hello
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ritik-sharma-b14149190/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold transition-all hover:bg-slate-700 border border-slate-700 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
