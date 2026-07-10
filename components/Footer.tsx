import { social } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p className="text-sm" style={{ color: "#71717A" }}>
        © {new Date().getFullYear()} Vansh Thapa. Built with Next.js.
      </p>
      <div className="flex items-center gap-6 text-sm">
        <a
          href={social.github}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#A1A1AA" }}
          className="hover:opacity-80 transition-opacity"
        >
          GitHub
        </a>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#A1A1AA" }}
          className="hover:opacity-80 transition-opacity"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${social.email}`}
          style={{ color: "#A1A1AA" }}
          className="hover:opacity-80 transition-opacity"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
