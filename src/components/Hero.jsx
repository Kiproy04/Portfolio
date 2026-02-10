export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-blue-500">Leroy</span>
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-8">
        I build modern web interfaces with React & Tailwind CSS.
      </p>

      <div className="flex gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
