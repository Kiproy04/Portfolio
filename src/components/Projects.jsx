import ProjectCard from "./ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind.",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "Job Matching Platform",
      description: "Bubble.io platform connecting employers and candidates.",
      tech: ["Bubble.io", "API", "UX"],
    },
    {
      title: "AgriCare System",
      description: "Livestock vaccination tracking system for vets.",
      tech: ["React", "Data Tracking", "AgriTech"],
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
