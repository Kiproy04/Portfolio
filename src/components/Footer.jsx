import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
  {
    icon: FaEnvelope,
    href: "mailto:leroy.dev@email.com",
    label: "Email",
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950 py-12">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
          >
            © {new Date().getFullYear()} Leroy.dev — Built with React & Framer Motion
          </motion.p>

          {/* Social icons */}
          <div className="flex gap-6">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15 }}
                className="relative group"
              >
                {/* Glow */}
                <span
                  className="absolute inset-0 rounded-full
                  bg-gradient-to-br from-blue-500/40 to-purple-500/40
                  blur-xl opacity-0 group-hover:opacity-100 transition"
                />

                {/* Icon container */}
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full
                  border border-neutral-800 bg-neutral-900 text-gray-300
                  group-hover:text-white transition"
                >
                  <Icon size={18} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
