"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects, social } from "@/lib/data";

const names = projects.map((p) => p.name);

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    let char = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = names[i];
      if (!deleting) {
        char++;
        setText(word.slice(0, char));
        if (char === word.length) {
          deleting = true;
          timeout = setTimeout(tick, 1100);
          return;
        }
      } else {
        char--;
        setText(word.slice(0, char));
        if (char === 0) {
          deleting = false;
          i = (i + 1) % names.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 40 : 70);
    };

    tick();
    return () => clearTimeout(timeout);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-40 flex flex-col items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs rounded-full px-3 py-1 mb-8 inline-flex items-center gap-2"
          style={{
            color: "#8B85E8",
            border: "1px solid rgba(79,70,229,0.4)",
            backgroundColor: "rgba(79,70,229,0.12)"
          }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ backgroundColor: "#4F46E5" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          Available for full-stack &amp; AI engineering roles
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[13vw] md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-3xl"
          style={{ color: "#EDEDEF" }}
        >
          Vansh Thapa builds
          <span className="block" style={{ color: "#A1A1AA" }}>
            products that ship.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg max-w-xl leading-relaxed"
          style={{ color: "#A1A1AA" }}
        >
          Full-stack developer specializing in AI-powered web products —
          from ATS resume engines to repository analyzers. Seven live
          products. Zero abandoned side projects.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-6 py-3 rounded-lg text-sm font-medium inline-block"
            style={{ backgroundColor: "#EDEDEF", color: "#0A0A0C" }}
          >
            View my work
          </motion.a>
          <motion.a
            href={social.resume}
            whileHover={{ y: -3, scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-6 py-3 rounded-lg text-sm font-medium inline-block"
            style={{
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#EDEDEF",
              backgroundColor: "rgba(255,255,255,0.04)"
            }}
          >
            Download resume
          </motion.a>
          <motion.a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-6 py-3 rounded-lg text-sm font-medium inline-block"
            style={{
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#EDEDEF",
              backgroundColor: "rgba(255,255,255,0.04)"
            }}
          >
            GitHub
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="mt-16 w-full max-w-2xl rounded-xl overflow-hidden"
          style={{
            backgroundColor: "rgba(15,15,18,0.7)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)"
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: "#FF5F56" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: "#FFBD2E" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: "#27C93F" }}
            />
            <span
              className="font-mono text-xs ml-2"
              style={{ color: "#71717A" }}
            >
              whoami.sh
            </span>
          </div>
          <div className="font-mono text-sm p-5 leading-relaxed">
            <p style={{ color: "#71717A" }}>$ curl vanshthapa.dev/status</p>
            <p className="mt-2">
              <span style={{ color: "#4F46E5" }}>shipped:</span>{" "}
              <span style={{ color: "#EDEDEF" }}>{text}</span>
              <span style={{ color: "#4F46E5" }}>▍</span>
            </p>
            <p className="mt-2" style={{ color: "#71717A" }}>
              7 production apps · 2 hackathon finals · 0 excuses
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hidden md:flex flex-col items-center gap-2 absolute left-1/2 bottom-10"
        style={{ transform: "translateX(-50%)" }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] tracking-widest" style={{ color: "#71717A" }}>
          SCROLL
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 6L8 11L13 6" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
