import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="pt-24 space-y-32">
        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-7xl mx-auto px-6">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto px-6">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
