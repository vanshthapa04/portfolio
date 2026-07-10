"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { social } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "#0F0F12"
        }}
      >
        <p className="font-mono text-xs mb-4 relative" style={{ color: "#8B85E8" }}>
          06 — Contact
        </p>
        <h2
          className="text-3xl md:text-5xl font-semibold max-w-2xl mx-auto leading-tight relative"
          style={{ color: "#EDEDEF" }}
        >
          Open to full-stack and AI engineering roles.
        </h2>
        <p
          className="mt-6 max-w-lg mx-auto leading-relaxed relative"
          style={{ color: "#A1A1AA" }}
        >
          Have a role, a project, or just want to talk shop? My inbox is
          open.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <a
            href={`mailto:${social.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#EDEDEF", color: "#0A0A0C" }}
          >
            <Mail size={16} /> {social.email}
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#EDEDEF"
            }}
          >
            <Linkedin size={16} /> Connect on LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
