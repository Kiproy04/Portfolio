import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from "react-icons/fi"
import { SiWhatsapp } from "react-icons/si"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      href: "https://github.com/Kiproy04",
      color: "hover:text-purple-400"
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      href: "https://linkedin.com/in/leroy-kirui-1a4829249",
      color: "hover:text-blue-400"
    },
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      href: "https://wa.me/254746349486",
      color: "hover:text-green-400"
    },
    {
      name: "Email",
      icon: FiMail,
      href: "mailto:delleroy04@gmail.com",
      color: "hover:text-red-400"
    },
  ]

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#050505] border-t border-gray-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Leroy
              </span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Backend Engineer crafting scalable solutions with Python and Django. 
              Always learning, always building.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <FiHeart className="text-red-500 fill-red-500 animate-pulse" size={14} />
              <span>using React & Tailwind</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-blue-500 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center justify-center w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl ${social.color} transition-all hover:scale-110 hover:border-gray-700`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Open to freelance & full-time opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-900">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Leroy Kirui. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-110 transition-all z-40"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </button>
      </div>
    </footer>
  )
}