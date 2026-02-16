import { useState } from "react"
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheck } from "react-icons/fi"
import { SiWhatsapp } from "react-icons/si"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState(null) // 'success', 'error', or null
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setLoading(false)
      setFormData({ name: "", email: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(null), 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: "leroy.dev@email.com",
      link: "mailto:leroy.dev@email.com",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "Kiproy04",
      link: "https://github.com/Kiproy04",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/yourprofile",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: SiWhatsapp,
      label: "WhatsApp",
      value: "+254 XXX XXX XXX",
      link: "https://wa.me/254XXXXXXXXX",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-neutral-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <FiMail className="text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind, a role to discuss, or just want to say hi? 
            Drop me a message — I'm always open to new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Contact Info</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out through any of these channels
              </p>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 p-4 ${method.bgColor} border ${method.borderColor} rounded-xl hover:scale-105 transition-all`}
                  >
                    <div className={`p-3 bg-neutral-900 rounded-lg ${method.color} group-hover:scale-110 transition-transform`}>
                      <method.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{method.label}</p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <FiMapPin className="text-blue-400 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Kenya (Remote friendly)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="relative flex h-5 w-5 mt-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Availability</h4>
                  <p className="text-gray-400">Open for freelance & full-time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
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
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl animate-fade-in">
                    <FiCheck className="text-green-400" size={20} />
                    <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] group"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="group-hover:translate-x-1 transition-transform" size={18} />
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                Usually respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}