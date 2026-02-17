import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#0f0f0f] via-[#0a0a0a] to-[#050505] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-float-delayed"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Main Content — padded top for navbar, padded bottom for availability badge */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-6 pt-24 pb-24">

        {/* Greeting Badge */}
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
            <span className="text-2xl">👋</span>
            <span className="text-blue-400 font-semibold text-sm sm:text-base">Hey, I'm</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span
            className="text-white"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.3), 0 4px 8px rgba(0,0,0,0.8)" }}
          >
            Leroy Kirui
          </span>
        </h1>

        {/* Title */}
        <h2 className="animate-fade-in-up animation-delay-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          <span
            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 25px rgba(59,130,246,0.6))",
            }}
          >
            Backend Engineer
          </span>
        </h2>

        {/* Description */}
        <p
          className="animate-fade-in-up animation-delay-400 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
        >
          I build <span className="text-white font-bold">scalable APIs</span> and{" "}
          <span className="text-white font-bold">robust backend systems</span> using Python, Django,
          and modern database solutions.{" "}
          <span className="text-cyan-400 font-bold">Let's create something amazing together.</span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] w-full sm:w-auto"
          >
            <span className="relative z-10">View My Work</span>
            <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-bold rounded-full transition-all hover:scale-105 w-full sm:w-auto"
          >
            Let's Talk
          </a>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up animation-delay-800 flex items-center justify-center gap-4">
          <a
            href="https://github.com/Kiproy04"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 rounded-xl transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub className="text-gray-300 group-hover:text-white transition-colors" size={22} />
          </a>
          <a
            href="https://linkedin.com/in/leroy-kirui-1a4829249"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 rounded-xl transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-gray-300 group-hover:text-white transition-colors" size={22} />
          </a>
          <a
            href="mailto:delleroy04@gmail.com"
            className="group p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 rounded-xl transition-all hover:scale-110"
            aria-label="Email"
          >
            <FiMail className="text-gray-300 group-hover:text-white transition-colors" size={22} />
          </a>
        </div>

        {/* Availability Badge */}
        <div className="animate-fade-in-up animation-delay-1000">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-green-500/20 backdrop-blur-sm border border-green-500/40 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-green-400">Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — anchored to bottom, always visible */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-1 text-gray-500">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
    </section>
  );
}