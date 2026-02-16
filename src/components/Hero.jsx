import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi"
import Plasma from "./Plasma"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Plasma Background */}
      <div className="absolute inset-0 opacity-30">
        <Plasma 
          color="#3b82f6"
          speed={0.4}
          direction="forward"
          scale={1.2}
          opacity={0.6}
          mouseInteractive={true}
        />
      </div>

      <div className="absolute inset-0 opacity-20 mix-blend-screen">
        <Plasma 
          color="#a855f7"
          speed={0.3}
          direction="backward"
          scale={1.5}
          opacity={0.4}
          mouseInteractive={false}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-float-delayed"></div>
      </div>

      {/* Main Content - Centered & Minimal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Greeting */}
        <p className="text-gray-400 text-xl animate-fade-in">
          👋 Hey, I'm
        </p>

        {/* Name - Large & Bold */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none animate-fade-in-up">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Leroy Kirui
          </span>
        </h1>

        {/* Title - Accent Color */}
        <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
          Backend Engineer
        </h2>

        {/* Brief Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          I build scalable APIs and robust backend systems using Python, Django, and modern database solutions. 
          Let's create something amazing together.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-full hover:border-gray-500 hover:bg-white/5 transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Social Links - Subtle */}
        <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-up animation-delay-800">
          <a
            href="https://github.com/Kiproy04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:leroy.dev@email.com"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>

        {/* Small availability indicator */}
        <div className="inline-flex items-center gap-2 text-sm text-gray-500 animate-fade-in-up animation-delay-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>Available for opportunities</span>
        </div>
      </div>
    </section>
  )
}