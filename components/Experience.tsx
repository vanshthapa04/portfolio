"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-28">
      <p className="font-mono text-xs mb-4" style={{ color: "#8B85E8" }}>
        04 — Experience
      </p>
      <h2
        className="text-3xl md:text-4xl font-semibold max-w-2xl leading-tight"
        style={{ color: "#EDEDEF" }}
      >
        Where I&apos;ve worked.
      </h2>

      <div
        className="mt-16 pl-8 flex flex-col gap-10"
        style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
      >
        {experience.map((job, idx) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            <span
              className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "#4F46E5" }}
            />
            <span className="font-mono text-xs" style={{ color: "#71717A" }}>
              {job.period}
            </span>
            <h3 className="mt-1 text-xl font-medium" style={{ color: "#EDEDEF" }}>
              {job.role}
            </h3>
            <p className="text-sm mt-0.5" style={{ color: "#8B85E8" }}>
              {job.company}
            </p>
            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="text-sm flex items-start gap-2 max-w-2xl leading-relaxed"
                  style={{ color: "#A1A1AA" }}
                >
                  <span
                    className="mt-2 w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: "#71717A" }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
