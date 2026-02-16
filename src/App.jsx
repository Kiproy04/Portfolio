import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}