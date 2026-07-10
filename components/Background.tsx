export default function Background() {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{ backgroundColor: "#0A0A0C" }}
      >
        <div className="vt-grid" />
        <div className="vt-noise" />
  
        <div
          className="vt-orb"
          style={{
            width: 560,
            height: 560,
            top: "-160px",
            left: "8%",
            backgroundColor: "rgba(79,70,229,0.22)"
          }}
        />
        <div
          className="vt-orb vt-orb-slow"
          style={{
            width: 480,
            height: 480,
            top: "35%",
            right: "-140px",
            backgroundColor: "rgba(139,133,232,0.14)",
            animationDelay: "-4s"
          }}
        />
        <div
          className="vt-orb"
          style={{
            width: 520,
            height: 520,
            bottom: "-220px",
            left: "30%",
            backgroundColor: "rgba(79,70,229,0.16)",
            animationDelay: "-8s"
          }}
        />
  
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(10,10,12,0.4) 60%, #0A0A0C 100%)"
          }}
        />
      </div>
    );
  }
  