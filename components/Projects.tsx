"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-28">
      <p className="font-mono text-xs mb-4" style={{ color: "#8B85E8" }}>
        02 — Work
      </p>
      <h2
        className="text-3xl md:text-4xl font-semibold max-w-2xl leading-tight"
        style={{ color: "#EDEDEF" }}
      >
        Seven products. All deployed. All working right now.
      </h2>
      <p className="mt-6 max-w-xl leading-relaxed" style={{ color: "#A1A1AA" }}>
        Click through — every demo link below leads to a live application,
        not a screenshot.
      </p>

      <div className="mt-16 flex flex-col gap-20">
        {featured.map((project, idx) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
              <div
                className="relative rounded-xl overflow-hidden aspect-[16/10] group"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "#0F0F12"
                }}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
              <span className="font-mono text-xs" style={{ color: "#71717A" }}>
                0{idx + 1}
              </span>
              <h3 className="mt-2 text-2xl font-semibold" style={{ color: "#EDEDEF" }}>
                {project.name}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "#8B85E8" }}>
                {project.tagline}
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: "#A1A1AA" }}>
                {project.problem}
              </p>

              <ul className="mt-5 space-y-1.5">
                {project.features.slice(0, 4).map((f) => (
                  <li
                    key={f}
                    className="text-sm flex items-start gap-2"
                    style={{ color: "#A1A1AA" }}
                  >
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: "#71717A" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs rounded-full px-3 py-1"
                    style={{
                      color: "#71717A",
                      border: "1px solid rgba(255,255,255,0.08)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium rounded-lg px-4 py-2 transition-colors"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#EDEDEF"
                  }}
                >
                  <Github size={16} /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium rounded-lg px-4 py-2 transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: "#EDEDEF", color: "#0A0A0C" }}
                  >
                    Live demo <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-24">
        <p className="font-mono text-xs mb-8" style={{ color: "#71717A" }}>
          More shipped work
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project) => (
            <motion.a
              key={project.slug}
              href={project.demo ?? project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: "rgba(79,70,229,0.35)" }}
              className="group rounded-xl overflow-hidden transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "#0F0F12"
              }}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium" style={{ color: "#EDEDEF" }}>
                    {project.name}
                  </h4>
                  <ArrowUpRight size={16} style={{ color: "#71717A" }} />
                </div>
                <p className="mt-1 text-sm" style={{ color: "#A1A1AA" }}>
                  {project.tagline}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
