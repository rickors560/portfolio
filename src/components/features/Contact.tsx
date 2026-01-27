"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, ArrowUpRight } from "lucide-react";
import { LiquidBlob, MagneticButton, WaveBackground } from "@/components/ui";

const socialLinks = [
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:rickors560@gmail.com",
    username: "rickors560@gmail.com",
    color: "from-rose-500 to-orange-500"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/ritik-sharma-b14149190/",
    username: "Ritik Sharma",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/rickors560",
    username: "@rickors560",
    color: "from-slate-500 to-slate-400"
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 via-[#0a0a0f] to-[#0a0a0f]" />
      <WaveBackground />
      <LiquidBlob 
        className="bottom-[-30%] left-[30%]" 
        color1="#8b5cf6" 
        color2="#06b6d4" 
        size="700px"
      />
      
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
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Send className="w-4 h-4" />
              Get in Touch
            </motion.span>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Let&apos;s Build
              <span className="block text-gradient">Something Amazing</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision. Let&apos;s connect!
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-12 text-slate-400"
          >
            <MapPin className="w-5 h-5 text-violet-400" />
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
              className="px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-full font-bold text-lg shadow-2xl shadow-violet-500/25"
            >
              <Mail className="w-5 h-5" />
              <span>Say Hello</span>
            </MagneticButton>

            <MagneticButton 
              href="https://www.linkedin.com/in/ritik-sharma-b14149190/"
              external
              className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold text-lg backdrop-blur-sm"
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
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all overflow-hidden"
              >
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${social.color}`}
                  style={{ filter: "blur(40px)", transform: "scale(0.6)" }}
                />
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${social.color}`}>
                    <social.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-white font-semibold">{social.label}</p>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors truncate">
                      {social.username}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
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
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-slate-400">
              Currently available for <span className="text-white font-medium">freelance & full-time</span> opportunities
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
