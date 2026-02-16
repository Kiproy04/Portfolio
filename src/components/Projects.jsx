import { useState } from "react"
import { FiGithub, FiExternalLink, FiFolder, FiStar } from "react-icons/fi"
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
} from "react-icons/si"
import Plasma from "./Plasma"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Zinocare Backend",
      description: "Healthcare management system with user authentication, appointment scheduling, and comprehensive medical records management. Built with RESTful API architecture and secure data handling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tech: [
        { name: "Python", icon: SiPython, color: "text-yellow-400" },
        { name: "Django", icon: SiDjango, color: "text-green-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      ],
      github: "https://github.com/Kiproy04/Zinocare_Backend",
      demo: null,
      featured: true,
      stats: { stars: "12", commits: "150+" }
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS. Features smooth animations, responsive design, and modern UI/UX patterns. Showcases projects and technical skills.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tech: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
      ],
      github: "https://github.com/Kiproy04/Portfolio",
      demo: "https://leroy.dev",
      featured: true,
      stats: { stars: "8", commits: "80+" }
    },
    {
      id: 3,
      title: "E-Commerce API",
      description: "Full-featured REST API with JWT authentication, payment integration, order management, and real-time inventory tracking. Scalable architecture with caching layer.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tech: [
        { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Redis", icon: SiRedis, color: "text-red-400" },
      ],
      github: "#",
      demo: null,
      featured: false,
      stats: { stars: "5", commits: "120+" }
    },
    {
      id: 4,
      title: "Task Manager API",
      description: "Team collaboration tool with real-time updates, role-based access control, file uploads, and notification system. Containerized deployment with Docker.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tech: [
        { name: "Django", icon: SiDjango, color: "text-green-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      ],
      github: "#",
      demo: null,
      featured: false,
      stats: { stars: "3", commits: "90+" }
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Plasma Background */}
      <div className="absolute inset-0 opacity-20">
        <Plasma 
          color="#8b5cf6"
          speed={0.3}
          direction="forward"
          scale={1.3}
          opacity={0.5}
          mouseInteractive={false}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full">
            <FiFolder className="text-purple-400" size={18} />
            <span className="text-sm font-medium text-purple-400">Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Backend systems and APIs showcasing scalable architecture, clean code practices, and production-ready solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-500 h-full flex flex-col">
                
                {/* Project Image - FIXED HEIGHT */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-yellow-500/90 backdrop-blur-sm rounded-full">
                      <FiStar size={12} className="text-black fill-black" />
                      <span className="text-xs font-bold text-black">Featured</span>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                      <FiStar size={12} className="text-yellow-400" />
                      <span className="text-xs font-medium text-white">{project.stats.stars}</span>
                    </div>
                    <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-medium text-gray-300">{project.stats.commits} commits</span>
                    </div>
                  </div>

                  {/* Hover overlay with links */}
                  <div 
                    className={`absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center gap-4 transition-all duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
                      onClick={(e) => project.github === "#" && e.preventDefault()}
                    >
                      <FiGithub size={20} />
                      <span>Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
                      >
                        <FiExternalLink size={20} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-gray-800 rounded-lg hover:border-gray-700 transition-all group/tech"
                      >
                        <tech.icon className={`text-base ${tech.color} group-hover/tech:scale-125 transition-transform`} />
                        <span className="text-xs text-gray-300 font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Links */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-800/50 md:hidden">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      onClick={(e) => project.github === "#" && e.preventDefault()}
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        <FiExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <a
            href="https://github.com/Kiproy04"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-800 hover:border-white rounded-full font-semibold transition-all hover:bg-white/5"
          >
            <FiGithub className="group-hover:rotate-12 transition-transform" size={22} />
            <span>View All Projects on GitHub</span>
            <FiExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}