import { useState, useEffect } from "react"
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheck, FiCalendar, FiX, FiMessageCircle, FiArrowRight } from "react-icons/fi"
import { SiWhatsapp } from "react-icons/si"
import emailjs from '@emailjs/browser'

// ── Floating WhatsApp Widget ─────────────────────────────────────────────────
function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const phone = "254746349486"
  const prefilledMsg = encodeURIComponent("Hi Leroy! I came across your portfolio and would love to connect.")

  return (
    <>
      {/* Chat popup */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-72 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/60 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#075e54]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <SiWhatsapp className="text-white" size={18} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Leroy Kirui</p>
                <p className="text-green-300 text-xs">Typically replies fast</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="bg-[#ece5dd] px-4 py-5">
            <div className="bg-white rounded-xl rounded-tl-none px-4 py-3 shadow-sm max-w-[90%]">
              <p className="text-gray-800 text-sm leading-relaxed">
                👋 Hey! Feel free to message me on WhatsApp — I'd love to chat about your project or opportunity.
              </p>
              <p className="text-gray-400 text-xs mt-1 text-right">just now</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${phone}?text=${prefilledMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-colors"
          >
            <SiWhatsapp size={18} />
            Start Chat on WhatsApp
          </a>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20bd5a] shadow-lg hover:shadow-[#25d366]/40 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        {open ? <FiX className="text-white" size={22} /> : <SiWhatsapp className="text-white" size={26} />}
      </button>
    </>
  )
}

// ── Main Contact Section ─────────────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        'service_no2zexu',
        'template_yq45nj4',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '8qQO1MLU1ZewzbMO2'
      )
      setStatus('success')
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: "delleroy04@gmail.com",
      link: "mailto:delleroy04@gmail.com",
      color: "text-red-400",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "github.com/Kiproy04",
      link: "https://github.com/Kiproy04",
      color: "text-purple-400",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "Leroy Kirui",
      link: "https://linkedin.com/in/leroy-kirui-1a4829249",
      color: "text-blue-400",
    },
  ]

  return (
    <>
      <section id="contact" className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-16">

          {/* ── Header ── */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <FiMail className="text-purple-400" size={16} />
              <span className="text-sm text-purple-400 font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Have a project in mind, a role to discuss, or just want to say hi?
              Drop me a message — I'm always open to new opportunities.
            </p>
          </div>

          {/* ── Main Grid ── */}
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Left — Contact info + Calendly + Location */}
            <div className="lg:col-span-2 space-y-5">

              {/* Contact channels */}
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-7">
                <h3 className="text-xl font-bold text-white mb-1">Contact Info</h3>
                <p className="text-gray-500 text-sm mb-5">Reach out through any of these channels</p>
                <div className="space-y-3">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-3 p-3 bg-black/30 border border-gray-800/60 hover:border-gray-600 rounded-xl transition-all"
                    >
                      <div className={`p-2 rounded-lg bg-gray-800 ${method.color} group-hover:scale-110 transition-transform`}>
                        <method.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500">{method.label}</p>
                        <p className="text-white text-sm font-medium truncate">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Calendly scheduling */}
              <a
                href="https://calendly.com/delleroy04/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-400/50 rounded-2xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-600/30 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                      <FiCalendar className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Schedule a Call</p>
                      <p className="text-gray-400 text-xs mt-0.5">Free · 30 minutes · Google Meet</p>
                    </div>
                  </div>
                  <FiArrowRight className="text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0" size={16} />
                </div>
                <div className="pt-1 border-t border-blue-500/20">
                  <span className="text-xs text-blue-300/80">Pick a time that works for you →</span>
                </div>
              </a>

              {/* Location & Availability */}
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-blue-400 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-white text-sm font-semibold">Location</p>
                    <p className="text-gray-400 text-sm">Kenya · Remote friendly</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <div>
                    <p className="text-white text-sm font-semibold">Availability</p>
                    <p className="text-gray-400 text-sm">Open for freelance & full-time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry / Job opportunity / Just saying hi"
                      className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or what you have in mind..."
                      className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                    />
                  </div>

                  {/* Status messages */}
                  {status === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <FiCheck className="text-green-400 flex-shrink-0" size={18} />
                      <p className="text-green-400 text-sm font-medium">Message sent! I'll get back to you within 24 hours.</p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <FiX className="text-red-400 flex-shrink-0" size={18} />
                      <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again or email me directly.</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl font-semibold text-white transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.01] group"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend className="group-hover:translate-x-1 transition-transform" size={17} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-600">Usually respond within 24 hours</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp widget — rendered outside section so it's always visible */}
      <WhatsAppWidget />
    </>
  )
}