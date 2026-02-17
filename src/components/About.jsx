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
  SiCss3,
} from "react-icons/si"

export default function About() {
  const skillCategories = [
    {
      title: "Backend",
      icon: FiServer,
      color: "from-green-500 to-emerald-500",
      borderHover: "hover:border-green-500/40",
      skills: [
        { name: "Django", icon: SiDjango, color: "text-green-400" },
        { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
        { name: "Flask", icon: SiFlask, color: "text-gray-400" },
      ],
    },
    {
      title: "Databases",
      icon: FiDatabase,
      color: "from-blue-500 to-cyan-500",
      borderHover: "hover:border-blue-500/40",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Redis", icon: SiRedis, color: "text-red-400" },
      ],
    },
    {
      title: "Languages",
      icon: FiCode,
      color: "from-yellow-500 to-orange-500",
      borderHover: "hover:border-yellow-500/40",
      skills: [
        { name: "Python", icon: SiPython, color: "text-yellow-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
        { name: "HTML", icon: SiHtml5, color: "text-orange-400" },
        { name: "CSS", icon: SiCss3, color: "text-blue-400" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: FiTool,
      color: "from-purple-500 to-pink-500",
      borderHover: "hover:border-purple-500/40",
      skills: [
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "Git", icon: SiGit, color: "text-orange-500" },
        { name: "Linux", icon: SiLinux, color: "text-gray-300" },
        { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      ],
    },
  ]

  const journey = [
    {
      year: "2024–2025",
      title: "ALX Software Engineering",
      description:
        "Completed intensive backend specialization. Built multiple full-stack projects and mastered Python, Django, and database design.",
      icon: FiAward,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2025",
      title: "Portfolio Development",
      description:
        "Learned React and Tailwind CSS to build full-stack capabilities and better showcase backend work.",
      icon: FiBookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "Present",
      title: "Open to Opportunities",
      description:
        "Actively seeking backend developer roles where I can build scalable systems and grow as an engineer.",
      icon: FiCalendar,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const learning = [
    { name: "React", icon: SiReact, color: "text-cyan-400", border: "hover:border-cyan-500/50" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", border: "hover:border-teal-500/50" },
    { name: "TypeScript", icon: SiJavascript, color: "text-blue-400", border: "hover:border-blue-500/50" },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-[#050505] relative">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ── Section Header ── */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <FiCode className="text-blue-400" size={16} />
            <span className="text-sm font-medium text-blue-400">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            From backend enthusiast to building production-ready systems
          </p>
        </div>

        {/* ── Story + Timeline ── */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Story Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-5">Who I Am</h3>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm a <span className="text-white font-semibold">backend engineer</span> passionate about
                  building efficient, scalable systems that solve real problems. Based in Kenya, I specialize
                  in Python and Django with a focus on robust APIs and clean database architectures.
                </p>
                <p>
                  As an <span className="text-blue-400 font-semibold">ALX Software Engineering</span> graduate,
                  I've built a strong foundation in system design, computer science fundamentals, and clean code
                  practices — writing code that's not just functional, but maintainable.
                </p>
                <p>
                  I'm currently expanding into React to better understand full-stack development and deliver
                  more complete solutions. Always learning, always building.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-800/60">
                <div className="text-center p-4 rounded-2xl bg-black/30 border border-gray-800/40">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    10+
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Projects Built</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-black/30 border border-gray-800/40">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    500+
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Git Commits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Timeline</h3>
              <div className="space-y-0">
                {journey.map((item, index) => (
                  <div key={index} className="relative flex gap-5">
                    {/* Vertical line */}
                    {index !== journey.length - 1 && (
                      <div className="absolute left-[22px] top-12 bottom-0 w-px bg-gradient-to-b from-gray-700 to-transparent" />
                    )}

                    {/* Icon */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mt-1`}
                    >
                      <item.icon className="text-white" size={18} />
                    </div>

                    {/* Content */}
                    <div className="pb-8 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h4 className="text-white font-bold">{item.title}</h4>
                        <span className="text-xs text-gray-500 font-mono bg-gray-800/60 px-2 py-1 rounded-lg">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Skills Grid ── */}
        <div className="space-y-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center">Technical Skills</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className={`group relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 ${category.borderHover} rounded-2xl p-6 transition-all duration-300 hover:bg-gray-900/80`}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 bg-gradient-to-br ${category.color} rounded-xl shadow-md`}>
                    <category.icon className="text-white" size={18} />
                  </div>
                  <h4 className="text-white font-semibold text-sm">{category.title}</h4>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 border border-gray-800/60 rounded-lg hover:border-gray-600 transition-colors"
                    >
                      <skill.icon className={`${skill.color} text-sm`} />
                      <span className="text-gray-300 text-xs font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Currently Learning ── */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Currently Learning</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
              Always expanding my skill set — right now diving into React, TypeScript, and modern
              frontend development to build complete full-stack solutions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {learning.map((tech, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-4 py-2.5 bg-black/40 border border-gray-800 rounded-xl ${tech.border} transition-all`}
                >
                  <tech.icon className={`${tech.color} text-lg`} />
                  <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}