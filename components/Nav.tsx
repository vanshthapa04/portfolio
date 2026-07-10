export default function Nav() {
  const linkStyle = { color: "#A1A1AA" };
  return (
    <nav className="relative z-10 max-w-6xl mx-auto px-6 pt-8 flex items-center justify-between">
      <span className="font-mono text-sm font-medium" style={{ color: "#EDEDEF" }}>
        VT<span style={{ color: "#4F46E5" }}>.</span>
      </span>
      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#about" style={linkStyle} className="hover:opacity-80 transition-opacity">About</a>
        <a href="#work" style={linkStyle} className="hover:opacity-80 transition-opacity">Work</a>
        <a href="#stack" style={linkStyle} className="hover:opacity-80 transition-opacity">Stack</a>
        <a href="#contact" style={linkStyle} className="hover:opacity-80 transition-opacity">Contact</a>
      </div>
      <a
        href="#contact"
        className="text-sm rounded-full px-4 py-1.5 transition-colors"
        style={{ border: "1px solid rgba(255,255,255,0.08)", color: "#EDEDEF" }}
      >
        Let&apos;s talk
      </a>
    </nav>
  );
}
