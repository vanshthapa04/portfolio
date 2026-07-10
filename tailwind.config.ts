import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0C",
        surface: "#0F0F12",
        surface2: "#141417",
        foreground: "#EDEDEF",
        muted: "#A1A1AA",
        subtle: "#71717A",
        line: "rgba(255,255,255,0.08)",
        lineStrong: "rgba(255,255,255,0.16)",
        accent: "#4F46E5",
        accentSoft: "#8B85E8"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards"
      }
    }
  },
  plugins: []
};

export default config;
