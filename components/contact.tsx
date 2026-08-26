"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="section-padding relative bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-500">Let's Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl border border-border bg-card shadow-lg hover:shadow-xl smooth-transition text-center hover:border-emerald-500/50 green-glow-hover"
          >
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="font-bold mb-2 text-foreground">Email</h3>
            <a
              href="mailto:melkamuwale485@gmail.com"
              className="text-emerald-400 hover:text-emerald-300 smooth-transition"
            >
              melkamuwale485@gmail.com
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl border border-border bg-card shadow-lg hover:shadow-xl smooth-transition text-center hover:border-emerald-500/50 green-glow-hover"
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold mb-2 text-foreground">Phone</h3>
            <a href="tel:+251953288832" className="text-emerald-400 hover:text-emerald-300 smooth-transition">
              +251 953 288 832
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl border border-border bg-card shadow-lg hover:shadow-xl smooth-transition text-center hover:border-emerald-500/50 green-glow-hover"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold mb-2 text-foreground">Telegram</h3>
            <a
              href="https://t.me/melkamu2330"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 smooth-transition"
            >
              @melkamu2330
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto p-8 md:p-12 rounded-xl border border-border bg-card shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none smooth-transition text-foreground placeholder-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none smooth-transition text-foreground placeholder-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none smooth-transition text-foreground placeholder-muted-foreground"
                placeholder="Project subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none smooth-transition text-foreground placeholder-muted-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 rounded-lg bg-emerald-500 text-white font-semibold smooth-transition hover:bg-emerald-600"
            >
              {submitted ? "✅ Message Sent!" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
