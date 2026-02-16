import { useState, useEffect } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [active, setActive] = useState("#home")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    setActive(href)
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800/50 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={() => handleClick("#home")}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <span className="relative text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Leroy
            </span>
          </div>
          <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === item.href 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {active === item.href && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-white hover:text-blue-400 transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`text-3xl font-bold transition-all ${
                active === item.href 
                  ? 'text-white scale-110' 
                  : 'text-gray-400 hover:text-white hover:scale-105'
              }`}
              style={{
                transitionDelay: mobileOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}