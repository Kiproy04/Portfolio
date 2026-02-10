import { motion } from "framer-motion"
import { useRef } from "react"

export default function ProjectCard({ title, description, tech }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = ((y / rect.height) - 0.5) * -12
    const rotateY = ((x / rect.width) - 0.5) * 12

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `
  }

  const handleMouseLeave = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl bg-neutral-900 p-6 border border-neutral-800 shadow-lg transition-transform duration-200"
>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl
        bg-gradient-to-r from-blue-500/20 to-purple-500/40
        opacity-0 group-hover:opacity-100
        blur-xl transition duration-300" />


      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
