"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categories = Object.entries(skills);

export default function Skills() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-28">
      <p className="font-mono text-xs mb-4" style={{ color: "#8B85E8" }}>
        03 — Stack
      </p>
      <h2
        className="text-3xl md:text-4xl font-semibold max-w-2xl leading-tight"
        style={{ color: "#EDEDEF" }}
      >
        Tools I reach for, organized by what they&apos;re for.
      </h2>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {categories.map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -4, borderColor: "rgba(79,70,229,0.3)" }}
            className="rounded-xl p-6"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "#0F0F12"
            }}
          >
            <h3
              className="font-mono text-xs uppercase tracking-wide"
              style={{ color: "#71717A" }}
            >
              {category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "#141417",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#EDEDEF"
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
