"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui";

const socialLinks = [
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:rickors560@gmail.com",
    username: "rickors560@gmail.com",
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/ritik-sharma-b14149190/",
    username: "Ritik Sharma",
  },
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/rickors560",
    username: "@rickors560",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm font-semibold text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Send className="w-3.5 h-3.5" />
              Get in Touch
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Let&apos;s Build
              <span className="block text-zinc-500">Something Amazing</span>
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light">
              I&apos;m always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-12 text-zinc-500"
          >
            <MapPin className="w-4 h-4" />
            <span>Noida, Uttar Pradesh, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 mb-16"
          >
            <MagneticButton 
              href="mailto:rickors560@gmail.com"
              className="px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full font-bold text-lg shadow-xl shadow-white/5 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Say Hello</span>
            </MagneticButton>

            <MagneticButton 
              href="https://www.linkedin.com/in/ritik-sharma-b14149190/"
              external
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 rounded-full font-bold text-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect</span>
            </MagneticButton>
          </motion.div>

          {/* Social Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-zinc-700 transition-all overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-zinc-800 text-zinc-100 group-hover:bg-zinc-700 group-hover:text-white transition-colors">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-zinc-200 font-semibold">{social.label}</p>
                    <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors truncate">
                      {social.username}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-16 flex items-center justify-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-zinc-500 text-sm">
              Open to <span className="text-zinc-300 font-medium">freelance & full-time</span> opportunities
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
