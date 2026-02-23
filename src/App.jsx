import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main className="relative overflow-x-hidden">
        {/* Background orbs — fixed but contained, -z-10 keeps them behind everything */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App