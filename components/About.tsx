"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Full-stack by default",
    body: "I build complete products — frontend UI, backend systems, and the database layer between them — not just isolated features."
  },
  {
    title: "Backend-leaning",
    body: "APIs, authentication, and data modeling are where I spend the most attention. A fast frontend means nothing on top of a fragile backend."
  },
  {
    title: "Ships, not sketches",
    body: "Every project on this site is deployed and working. I'd rather have seven finished products than twenty half-built repos."
  }
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-xs mb-4"
        style={{ color: "#8B85E8" }}
      >
        01 — About
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-4xl font-semibold max-w-2xl leading-tight"
        style={{ color: "#EDEDEF" }}
      >
        A computer science undergraduate who&apos;d rather deploy than theorize.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-2xl leading-relaxed"
        style={{ color: "#A1A1AA" }}
      >
        I specialize in full-stack development using React, Node.js, and
        modern backend systems — with a particular focus on AI-integrated
        products. Clean architecture and real-world problem solving matter
        more to me than following trends.
      </motion.p>

      <div
        className="mt-16 grid md:grid-cols-3 gap-px rounded-xl overflow-hidden"
        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
      >
        {pillars.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -6, borderColor: "rgba(79,70,229,0.4)" }}
            className="p-8"
            style={{ backgroundColor: "#0A0A0C" }}
          >
            <span className="font-mono text-xs" style={{ color: "#71717A" }}>
              0{idx + 1}
            </span>
            <h3 className="mt-3 text-lg font-medium" style={{ color: "#EDEDEF" }}>
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
