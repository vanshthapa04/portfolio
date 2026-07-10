"use client";

import { motion } from "framer-motion";
import { Trophy, Rocket, Users } from "lucide-react";
import { achievements } from "@/lib/data";

const icons = [Trophy, Rocket, Users];

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-28">
      <p className="font-mono text-xs mb-4" style={{ color: "#8B85E8" }}>
        05 — Achievements
      </p>
      <h2
        className="text-3xl md:text-4xl font-semibold max-w-2xl leading-tight"
        style={{ color: "#EDEDEF" }}
      >
        Recognition along the way.
      </h2>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {achievements.map((a, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(79,70,229,0.4)" }}
              className="rounded-xl p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "#0F0F12"
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(79,70,229,0.10)",
                  border: "1px solid rgba(79,70,229,0.30)"
                }}
              >
                <Icon size={18} style={{ color: "#8B85E8" }} />
              </div>
              <h3 className="mt-4 font-medium" style={{ color: "#EDEDEF" }}>
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
                {a.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
