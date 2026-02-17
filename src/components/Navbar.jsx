import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

// Defined outside component — stable reference, never recreated on render
const NAV_ITEMS = [
  { id: 'home',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled]       = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // ── Scroll detection ────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const current = NAV_ITEMS
        .map(item => document.getElementById(item.id))
        .find(section => {
          if (!section) return false
          const rect = section.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        })

      if (current) setActiveSection(current.id)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Close mobile menu on resize to desktop ──────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // ── Smooth scroll ────────────────────────────────────────────────────────────
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      })
      setMobileMenuOpen(false)
      // Let scroll detection update activeSection naturally
    }
  }

  return (
    <>
      {/* ── Navbar ────────────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 py-3.5">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity flex-shrink-0"
              aria-label="Go to home"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm select-none">
                L
              </div>
              <span className="text-base sm:text-lg font-bold text-white">
                leedev
              </span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1 bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-full px-1.5 py-1.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-5 py-2 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right side — CV + mobile toggle */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* CV download button — desktop */}
              <a
                href="/resume.pdf"
                download
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-500 text-white text-xs font-semibold rounded-full transition-all"
                aria-label="Download CV"
              >
                <FiDownload size={13} />
                Resume
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-blue-500/60 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen
                  ? <FiX className="text-blue-400" size={18} />
                  : <FiMenu className="text-gray-300" size={18} />
                }
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ───────────────────────────────────────────────────────── */}
      <div
        className={`fixed left-4 right-4 bg-gray-900/95 backdrop-blur-md border border-gray-800/60 rounded-2xl shadow-2xl z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto top-[72px]'
            : 'opacity-0 -translate-y-3 pointer-events-none top-[72px]'
        }`}
      >
        <ul className="p-2 space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-5 py-3 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all text-left ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}

          {/* CV download — mobile */}
          <li className="pt-1 border-t border-gray-800/60">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold text-blue-400 hover:bg-blue-600/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiDownload size={16} />
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}