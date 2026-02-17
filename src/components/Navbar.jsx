import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import gsap from 'gsap'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  // Handle scroll to update active section and navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const currentSection = sections.find(section => {
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navbarHeight = 80
      const targetPosition = section.offsetTop - navbarHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  // Animate pill hover effect
  const handlePillHover = (e) => {
    const pill = e.currentTarget
    const hoverCircle = pill.querySelector('.hover-circle')
    
    gsap.to(hoverCircle, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const handlePillLeave = (e) => {
    const pill = e.currentTarget
    const hoverCircle = pill.querySelector('.hover-circle')
    
    gsap.to(hoverCircle, {
      scale: 0,
      duration: 0.3,
      ease: 'power2.in'
    })
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Go to home"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white">
              
              </div>
              <span className="text-xl font-bold hidden sm:block">leedev</span>
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-full p-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={handlePillHover}
                    onMouseLeave={handlePillLeave}
                    className={`relative px-6 py-2 rounded-full font-semibold text-sm uppercase transition-all overflow-hidden ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="hover-circle absolute inset-0 bg-neutral-800 rounded-full scale-0"></div>
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-blue-500 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="text-blue-400" size={20} />
              ) : (
                <FiMenu className="text-blue-400" size={20} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-4 right-4 bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="p-2 space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-6 py-3 rounded-full font-semibold text-sm uppercase transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  )
}