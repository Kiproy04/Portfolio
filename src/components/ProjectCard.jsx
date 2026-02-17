import { motion } from "framer-motion";
import { useRef } from "react";
import PixelCard from "./PixelCard";

export default function ProjectCard({ title, description, tech, variant = "pink" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <PixelCard variant={variant} className="w-full max-w-xs">
      {/* Absolute content over PixelCard canvas */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 p-6 flex flex-col justify-between rounded-lg overflow-hidden group"
      >
        {/* Glow effect */}
        <div className="pointer-events-none absolute inset-0 rounded-lg
          bg-gradient-to-r from-blue-500/20 to-purple-500/40
          opacity-0 group-hover:opacity-100 blur-xl transition duration-300" />

        {/* Card Title & Description */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>

        {/* Tech Tags */}
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

        {/* Pixel Corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-pink-400"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-pink-400"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-pink-400"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-400"></div>
      </motion.div>
    </PixelCard>
  );
}
