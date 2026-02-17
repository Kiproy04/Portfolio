import { useState } from "react";
import { FiGithub, FiExternalLink, FiFolder, FiStar, FiGitCommit, FiLock } from "react-icons/fi";
import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiReact,
  SiFastapi,
  SiMongodb,
  SiDocker,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Zinocare Backend",
      description:
        "Healthcare management system with user authentication, appointment scheduling, and comprehensive medical records management. Built with RESTful API architecture and secure data handling.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tech: [
        { name: "Python", icon: SiPython, color: "text-yellow-400" },
        { name: "Django", icon: SiDjango, color: "text-green-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      ],
      github: "https://github.com/Kiproy04/Zinocare_Backend",
      demo: null,
      featured: true,
      stats: { stars: "12", commits: "150+" },
      hasRepo: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and Tailwind CSS. Features smooth animations, responsive design, and modern UI/UX patterns.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
      ],
      github: "https://github.com/Kiproy04/Portfolio",
      demo: "https://portfolio-roan-one-78.vercel.app/",
      featured: true,
      stats: { stars: "8", commits: "80+" },
      hasRepo: true,
    },
    {
      id: 3,
      title: "E-Commerce API",
      description:
        "Full-featured REST API with JWT authentication, payment integration, order management, and real-time inventory tracking. Scalable architecture with caching layer.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tech: [
        { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Redis", icon: SiRedis, color: "text-red-400" },
      ],
      github: null,
      demo: null,
      featured: false,
      stats: null,
      hasRepo: false,
    },
    {
      id: 4,
      title: "Task Manager API",
      description:
        "Team collaboration tool with real-time updates, role-based access control, file uploads, and notification system. Containerized deployment with Docker.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tech: [
        { name: "Django", icon: SiDjango, color: "text-green-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      ],
      github: null,
      demo: null,
      featured: false,
      stats: null,
      hasRepo: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">

        {/* ── Section Header ── */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <FiFolder className="text-purple-400" size={16} />
            <span className="text-sm font-medium text-purple-400">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Backend systems and APIs showcasing scalable architecture, clean code practices, and production-ready solutions
          </p>
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-gray-900/50 border border-gray-800/60 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* ── Image ── */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-black flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-yellow-500/95 rounded-full">
                    <FiStar size={11} className="text-black fill-black" />
                    <span className="text-xs font-bold text-black">Featured</span>
                  </div>
                )}

                {/* Stats — only shown if repo exists */}
                {project.stats && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full">
                      <FiStar size={11} className="text-yellow-400" />
                      <span className="text-xs font-medium text-white">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full">
                      <FiGitCommit size={11} className="text-gray-300" />
                      <span className="text-xs font-medium text-gray-300">{project.stats.commits}</span>
                    </div>
                  </div>
                )}

                {/* Hover overlay — desktop */}
                <div
                  className={`absolute inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 hidden md:flex ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-100 transition-all hover:scale-105"
                    >
                      <FiGithub size={17} />
                      Code
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-gray-400 rounded-full font-semibold text-sm cursor-not-allowed">
                      <FiLock size={15} />
                      Private
                    </div>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-500 transition-all hover:scale-105"
                    >
                      <FiExternalLink size={17} />
                      Live
                    </a>
                  )}
                </div>
              </div>

              {/* ── Content ── */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-black/50 border border-gray-800 rounded-lg text-xs"
                    >
                      <tech.icon className={`text-sm ${tech.color}`} />
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile links — always visible on mobile */}
                <div className="flex gap-2 pt-3 border-t border-gray-800/60 md:hidden">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl text-sm font-medium transition-colors"
                    >
                      <FiGithub size={15} />
                      Code
                    </a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gray-800/60 border border-gray-700/40 text-gray-500 rounded-xl text-sm font-medium cursor-not-allowed">
                      <FiLock size={14} />
                      Private
                    </div>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-blue-600/90 hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition-colors"
                    >
                      <FiExternalLink size={15} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── View All CTA ── */}
        <div className="text-center">
          <a
            href="https://github.com/Kiproy04"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-500 text-white rounded-full font-semibold transition-all duration-300"
          >
            <FiGithub className="group-hover:rotate-12 transition-transform" size={20} />
            <span>View All Projects on GitHub</span>
            <FiExternalLink
              size={16}
              className="text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

      </div>
    </section>
  );
}