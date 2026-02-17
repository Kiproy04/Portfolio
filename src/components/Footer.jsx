import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi"
import { GiMuscleUp } from "react-icons/gi"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      href: "https://github.com/Kiproy04",
      color: "hover:text-purple-400 hover:border-purple-500/40",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      href: "https://linkedin.com/in/leroy-kirui-1a4829249",
      color: "hover:text-blue-400 hover:border-blue-500/40",
    },
    {
      name: "Email",
      icon: FiMail,
      href: "mailto:delleroy04@gmail.com",
      color: "hover:text-red-400 hover:border-red-500/40",
    },
  ]

  const quickLinks = [
    { label: "Home",     id: "home"     },
    { label: "About",    id: "about"    },
    { label: "Projects", id: "projects" },
    { label: "Contact",  id: "contact"  },
  ]

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" })
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative bg-[#050505] border-t border-gray-900/80 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Main grid ── */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Scroll to top"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                L
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                leedev
              </span>
            </button>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Backend Engineer crafting scalable APIs and systems with Python and Django.
              Always learning, always building.
            </p>

            <p className="flex items-center gap-1.5 text-xs text-gray-600">
              Made with grit
              <GiMuscleUp className="text-orange-400" size={14} />
              · React & Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-500 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="block w-0 group-hover:w-3 h-px bg-blue-500 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-center w-11 h-11 bg-gray-900 border border-gray-800 rounded-xl text-gray-400 ${social.color} transition-all hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon size={19} />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              Open to freelance &amp; full-time opportunities.<br />
              Based in Kenya · Remote friendly.
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-gray-900/80">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Leroy Kirui. All rights reserved.
          </p>

          {/* Scroll to top — offset upward so it clears the WhatsApp FAB */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-600 rounded-full text-gray-400 hover:text-white text-xs font-medium transition-all"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            Back to top
          </button>
        </div>

      </div>
    </footer>
  )
}