import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiMessageCircle } from 'react-icons/fi'

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

            {/* Right side — Let's Talk + mobile toggle */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Let's Talk button — desktop (scrolls to contact) */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600/30 to-violet-600/30 hover:from-blue-600/50 hover:to-violet-600/50 border border-blue-500/40 hover:border-blue-400/70 text-blue-300 hover:text-white text-xs font-semibold rounded-full transition-all shadow-[0_0_12px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                aria-label="Go to contact"
              >
                <FiMessageCircle size={13} />
                Let's Talk
              </button>

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

          {/* Bottom actions — mobile */}
          <li className="pt-1 border-t border-gray-800/60">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600/20 to-violet-600/20 hover:from-blue-600/40 hover:to-violet-600/40 border border-blue-500/30 hover:border-blue-400/60 text-blue-300 hover:text-white transition-all shadow-[0_0_12px_rgba(99,102,241,0.15)]"
            >
              <FiMessageCircle size={16} />
              Let's Talk
            </button>
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