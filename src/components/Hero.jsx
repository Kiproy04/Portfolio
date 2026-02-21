import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from "react-icons/fi";
import Orb from "./Orb";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#04040c]"
    >
      {/* Orb background — sized to always cover content area */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Orb
          hue={0}
          hoverIntensity={0.8}
          rotateOnHover={true}
          forceHoverState={false}
          backgroundColor="#04040c"
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-10" />

      {/* Radial darkening at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_40%,rgba(4,4,12,0.75)_100%)] pointer-events-none z-10" />

      {/* Top vignette — stops orb bleeding into navbar */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#04040c] to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-5 pt-28 pb-16">

        {/* Greeting Badge */}
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-500/20 backdrop-blur-md border border-blue-400/40 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <span className="text-xl sm:text-2xl">👋</span>
            <span className="text-blue-300 font-semibold text-xs sm:text-base">Hey, I'm</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
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
        <h2 className="animate-fade-in-up animation-delay-200 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
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
          className="animate-fade-in-up animation-delay-400 text-sm sm:text-lg text-gray-200 max-w-2xl leading-relaxed"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.95)" }}
        >
          I build <span className="text-white font-bold">scalable APIs</span> and{" "}
          <span className="text-white font-bold">robust backend systems</span> using Python, Django,
          and modern database solutions.{" "}
          <span className="text-cyan-300 font-bold">Let's create something amazing together.</span>
        </p>

        {/* CTA Buttons
            — always side-by-side (flex-row), each button takes equal share of space.
            — min-w-0 + flex-1 keeps them sharing space without overflowing on tiny screens.
            — px scales down on very small screens so text fits.
        */}
        <div className="animate-fade-in-up animation-delay-600 flex flex-row gap-3 w-full max-w-sm mx-auto">
          <a
            href="#projects"
            className="group relative inline-flex flex-1 min-w-0 items-center justify-center gap-1.5 px-4 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:shadow-[0_0_45px_rgba(99,102,241,0.9)]"
          >
            <span className="relative z-10 text-sm sm:text-base whitespace-nowrap">My Work</span>
            <FiArrowRight className="relative z-10 flex-shrink-0 group-hover:translate-x-1 transition-transform" size={18} />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </a>

          <a
            href="/resume.pdf"
            download
            className="group inline-flex flex-1 min-w-0 items-center justify-center gap-2 px-4 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 backdrop-blur-md border-2 border-cyan-400/40 hover:border-cyan-300/70 text-cyan-300 hover:text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            <FiDownload className="flex-shrink-0 group-hover:-translate-y-0.5 transition-transform" size={16} />
            <span className="text-sm sm:text-base whitespace-nowrap">Download CV</span>
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
              className="group p-2.5 sm:p-3 bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-blue-400/60 rounded-xl transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <Icon className="text-gray-300 group-hover:text-white transition-colors" size={20} />
            </a>
          ))}
        </div>

        {/* Availability Badge */}
        <div className="animate-fade-in-up animation-delay-1000">
          <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-green-500/20 backdrop-blur-md border border-green-400/40 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-full w-full bg-green-400" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-green-300">Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on small mobile to save space */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1 text-gray-400 animate-bounce">
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