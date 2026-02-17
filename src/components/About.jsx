import { FiCode, FiDatabase, FiServer, FiTool, FiAward, FiBookOpen, FiCalendar } from "react-icons/fi"
import { 
  SiPython, 
  SiDjango, 
  SiPostgresql, 
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiLinux,
  SiFastapi,
  SiFlask,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3
} from "react-icons/si"

export default function About() {
  const skillCategories = [
    {
      title: "Backend Frameworks",
      icon: FiServer,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Django", icon: SiDjango, level: 90, color: "text-green-400" },
        { name: "FastAPI", icon: SiFastapi, level: 85, color: "text-teal-400" },
        { name: "Flask", icon: SiFlask, level: 80, color: "text-gray-400" },
      ]
    },
    {
      title: "Databases",
      icon: FiDatabase,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, level: 88, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, level: 85, color: "text-orange-400" },
        { name: "MongoDB", icon: SiMongodb, level: 75, color: "text-green-400" },
        { name: "Redis", icon: SiRedis, level: 70, color: "text-red-400" },
      ]
    },
    {
      title: "Languages",
      icon: FiCode,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Python", icon: SiPython, level: 92, color: "text-yellow-400" },
        { name: "JavaScript", icon: SiJavascript, level: 75, color: "text-yellow-300" },
        { name: "HTML", icon: SiHtml5, level: 85, color: "text-orange-400" },
        { name: "CSS", icon: SiCss3, level: 80, color: "text-blue-400" },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: FiTool,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", icon: SiDocker, level: 80, color: "text-blue-500" },
        { name: "Git", icon: SiGit, level: 88, color: "text-orange-500" },
        { name: "Linux", icon: SiLinux, level: 82, color: "text-gray-300" },
        { name: "Postman", icon: SiPostman, level: 90, color: "text-orange-400" },
      ]
    },
  ]

  const journey = [
    {
      year: "2024-2025",
      title: "ALX Software Engineering",
      description: "Completed intensive backend specialization program. Built multiple full-stack projects and mastered Python, Django, and database design.",
      icon: FiAward,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2025",
      title: "Portfolio Development",
      description: "Learning React and modern frontend technologies to build full-stack capabilities and better showcase my backend work.",
      icon: FiBookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "Present",
      title: "Open to Opportunities",
      description: "Actively seeking backend developer roles where I can build scalable systems and grow as an engineer.",
      icon: FiCalendar,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section
      id="about"
      className="pt-24 pb-8 px-6 bg-[#050505] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
            <FiCode className="text-blue-400" size={18} />
            <span className="text-sm font-medium text-blue-400">About Me</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From backend enthusiast to building production-ready systems
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Story Card */}
          <div className="space-y-6">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-6">Who I Am</h3>
                
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    I'm a <span className="text-white font-semibold">backend engineer</span> passionate about 
                    building efficient, scalable systems that solve real problems. Based in Kenya, I specialize 
                    in Python and Django, with a focus on creating robust APIs and database architectures.
                  </p>
                  <p>
                    As an <span className="text-blue-400 font-semibold">ALX Software Engineering</span> graduate, 
                    I've developed a strong foundation in computer science fundamentals, system design, and 
                    clean code practices. I believe in writing code that's not just functional, but maintainable 
                    and well-documented.
                  </p>
                  <p>
                    Currently, I'm expanding my skill set by learning React to better understand full-stack 
                    development and create more comprehensive solutions. I'm always eager to learn new 
                    technologies and take on challenging projects.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-800/50">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                      10+
                    </div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                      500+
                    </div>
                    <div className="text-sm text-gray-500">Commits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-500">Dedicated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="space-y-6">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-8">Timeline</h3>
                
                <div className="space-y-8">
                  {journey.map((item, index) => (
                    <div key={index} className="relative flex gap-4 group/item">
                      {/* Timeline line */}
                      {index !== journey.length - 1 && (
                        <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-gray-700 to-transparent"></div>
                      )}
                      
                      {/* Icon */}
                      <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform`}>
                        <item.icon className="text-white" size={20} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="text-white font-bold text-lg">{item.title}</h4>
                          <span className="text-sm text-gray-500 font-medium whitespace-nowrap">{item.year}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`}></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-gray-700 transition-all h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-white font-bold text-lg">{category.title}</h4>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <skill.icon className={`text-lg ${skill.color} group-hover/skill:scale-125 transition-transform`} />
                            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          </div>
                          <span className="text-gray-500 text-xs font-mono">{skill.level}%</span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden border border-gray-800">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${catIndex * 100 + skillIndex * 50}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Currently Learning</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              Always expanding my skill set. Right now I'm diving deep into React, TypeScript, 
              and modern frontend development to build complete full-stack solutions.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all group/tech">
                <SiReact className="text-cyan-400 text-xl group-hover/tech:scale-125 transition-transform" />
                <span className="text-gray-300 font-medium">React</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border border-gray-800 rounded-xl hover:border-teal-500/50 transition-all group/tech">
                <SiTailwindcss className="text-teal-400 text-xl group-hover/tech:scale-125 transition-transform" />
                <span className="text-gray-300 font-medium">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}