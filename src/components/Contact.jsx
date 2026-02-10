import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-neutral-800 bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let’s work together
          </h2>
          <p className="text-gray-400 max-w-xl">
            Have a project in mind, a role to discuss, or just want to say hi?
            Drop me a message — I’m always open to new opportunities.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Email
              </p>
              <p className="text-white text-lg">
                leroy.dev@email.com
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Location
              </p>
              <p className="text-white text-lg">
                Kenya (Remote friendly)
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Availability
              </p>
              <p className="text-white text-lg">
                Open for freelance & full-time
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl border border-neutral-800 bg-neutral-900 p-8"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl
              bg-gradient-to-r from-blue-500/20 to-purple-500/20
              opacity-0 group-hover:opacity-100 blur-2xl transition"
            />

            <div className="relative z-10 space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-lg bg-blue-500 py-3 font-medium text-white transition hover:bg-blue-600"
              >
                Send message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

