import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#0f0f0f] via-[#0a0a0a] to-[#050505] overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-float-delayed"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <div className="space-y-6 md:space-y-8">
          
          {/* Greeting Badge */}
          <div className="flex justify-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
              <span className="text-3xl">👋</span>
              <span className="text-blue-400 font-semibold">Hey, I'm</span>
            </div>
          </div>

          {/* Name - Large & Bold */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up px-4">
            <span 
              className="text-white block"
              style={{ textShadow: '0 0 40px rgba(255,255,255,0.3), 0 4px 8px rgba(0,0,0,0.8)' }}
            >
              Leroy Kirui
            </span>
          </h1>

          {/* Title - Backend Engineer */}
          <div className="animate-fade-in-up animation-delay-200 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span 
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block"
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 25px rgba(59,130,246,0.6))'
                }}
              >
                Backend Engineer
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up animation-delay-400 px-4">
            <p 
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              I build <span className="text-white font-bold">scalable APIs</span> and{' '}
              <span className="text-white font-bold">robust backend systems</span> using{' '}
              Python, Django, and modern database solutions.{' '}
              <span className="text-cyan-400 font-bold">Let's create something amazing together.</span>
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="animate-fade-in-up animation-delay-600 pt-4 px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]"
              >
                <span className="relative z-10">View My Work</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-bold rounded-full transition-all hover:scale-105"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up animation-delay-800 pt-6 px-4">
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/Kiproy04"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 rounded-xl transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub className="text-gray-300 group-hover:text-white transition-colors" size={24} />
              </a>
              
              <a
                href="https://linkedin.com/in/leroy-kirui-1a4829249"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 rounded-xl transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-gray-300 group-hover:text-white transition-colors" size={24} />
              </a>
              
              <a
                href="mailto:leroii780@gmail.com"
                className="group p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 rounded-xl transition-all hover:scale-110"
                aria-label="Email"
              >
                <FiMail className="text-gray-300 group-hover:text-white transition-colors" size={24} />
              </a>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="animate-fade-in-up animation-delay-1000 pt-4 px-4">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-green-500/20 backdrop-blur-sm border border-green-500/40 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-green-400">Available for opportunities</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow hidden md:block">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium">Scroll Down</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
    </section>
  );
}