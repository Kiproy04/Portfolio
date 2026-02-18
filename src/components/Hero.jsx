import { useEffect, useRef } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

// ── Plasma Canvas ────────────────────────────────────────────────────────────
function PlasmaCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Portfolio-matched palette — blues, cyans, deep purples (no magenta/pink)
    const palette = (v) => {
      const r = Math.floor(10  + 60  * Math.pow(Math.sin(Math.PI * v * 2 + 0.5), 2)); // low red — keeps it cool
      const g = Math.floor(20  + 120 * Math.pow(Math.sin(Math.PI * v * 2.5 + 1.8), 2)); // cyan/teal punch
      const b = Math.floor(80  + 175 * Math.pow(Math.sin(Math.PI * v * 1.8 + 0.8), 2)); // dominant blue
      return `rgb(${r},${g},${b})`;
    };

    const CELL = 4;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const cols = Math.ceil(W / CELL);
      const rows = Math.ceil(H / CELL);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col / cols;
          const y = row / rows;

          // Richer plasma — 5 overlapping waves for more complex patterns
          const v =
            Math.sin(x * 12 + t * 1.1) +
            Math.sin(y * 12 + t * 0.9) +
            Math.sin((x + y) * 9 + t * 1.4) +
            Math.sin((x - y) * 7 + t * 0.7) +
            Math.sin(
              Math.sqrt(
                Math.pow((x - 0.5) * 9, 2) +
                Math.pow((y - 0.5) * 9, 2)
              ) - t * 1.2
            );

          const norm = (v + 5) / 10; // normalise to [0,1]
          ctx.fillStyle = palette(norm);
          ctx.fillRect(col * CELL, row * CELL, CELL, CELL);
        }
      }

      // Lighter veil — blue plasma is naturally darker so needs less overlay
      ctx.fillStyle = "rgba(4, 4, 12, 0.50)";
      ctx.fillRect(0, 0, W, H);

      t += 0.018; // slightly faster movement
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#04040c]"
    >
      <PlasmaCanvas />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-10" />

      {/* Radial darkening at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_40%,rgba(4,4,12,0.75)_100%)] pointer-events-none z-10" />
      {/* Top vignette — stops plasma bleeding into navbar */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#04040c] to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-6 pt-24 pb-24">

        {/* Greeting Badge */}
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 backdrop-blur-md border border-blue-400/40 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <span className="text-2xl">👋</span>
            <span className="text-blue-300 font-semibold text-sm sm:text-base">Hey, I'm</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span
            className="text-white"
            style={{
              textShadow:
                "0 0 80px rgba(180,120,255,0.5), 0 0 30px rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.9)",
            }}
          >
            Leroy Kirui
          </span>
        </h1>

        {/* Title */}
        <h2 className="animate-fade-in-up animation-delay-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          <span
            className="text-cyan-300"
            style={{
              textShadow:
                "0 0 25px rgba(103,232,249,0.9), 0 0 60px rgba(34,211,238,0.5), 0 2px 4px rgba(0,0,0,0.9)",
            }}
          >
            Backend Engineer
          </span>
        </h2>

        {/* Description */}
        <p
          className="animate-fade-in-up animation-delay-400 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95)" }}
        >
          I build <span className="text-white font-bold">scalable APIs</span> and{" "}
          <span className="text-white font-bold">robust backend systems</span> using Python, Django,
          and modern database solutions.{" "}
          <span className="text-cyan-300 font-bold">Let's create something amazing together.</span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:shadow-[0_0_45px_rgba(99,102,241,0.9)] w-full sm:w-auto"
          >
            <span className="relative z-10">View My Work</span>
            <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white/60 text-white font-bold rounded-full transition-all hover:scale-105 w-full sm:w-auto shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Let's Talk
          </a>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up animation-delay-800 flex items-center justify-center gap-4">
          {[
            { href: "https://github.com/Kiproy04",                   icon: FiGithub,   label: "GitHub"   },
            { href: "https://linkedin.com/in/leroy-kirui-1a4829249", icon: FiLinkedin, label: "LinkedIn" },
            { href: "mailto:delleroy04@gmail.com",                   icon: FiMail,     label: "Email"    },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="group p-3 bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-violet-400/60 rounded-xl transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
            >
              <Icon className="text-gray-300 group-hover:text-white transition-colors" size={22} />
            </a>
          ))}
        </div>

        {/* Availability Badge */}
        <div className="animate-fade-in-up animation-delay-1000">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-green-500/20 backdrop-blur-md border border-green-400/40 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
            </span>
            <span className="text-sm font-semibold text-green-300">Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 text-gray-400 animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20" />
    </section>
  );
}