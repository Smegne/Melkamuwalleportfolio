"use client"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "Logo & Brand Identity",
      description: "Custom logo design and complete brand identity systems that reflect your unique vision.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
    },
    {
      icon: "📹",
      title: "Video Production & Editing",
      description: "Professional video editing with motion graphics and color grading for maximum impact.",
      features: ["Video Editing", "Motion Graphics", "Color Grading", "Sound Design"],
    },
    {
      icon: "📱",
      title: "Social Media Design",
      description: "Engaging social media content and graphics that boost your online presence.",
      features: ["Post Design", "Story Templates", "Reels Animation", "Feed Strategy"],
    },
    {
      icon: "⭐",
      title: "Branding & Strategy",
      description: "Strategic branding solutions that position your business for success.",
      features: ["Brand Strategy", "Market Research", "Positioning", "Brand Voice"],
    },
    {
      icon: "✨",
      title: "Motion Graphics",
      description: "Eye-catching animations and motion graphics for advertisements and promotions.",
      features: ["2D Animation", "3D Motion", "Logo Animation", "Title Sequences"],
    },
    {
      icon: "💼",
      title: "UI/UX Design",
      description: "User-friendly interface designs that combine aesthetics with functionality.",
      features: ["App Design", "Web UI", "Wireframing", "Prototyping"],
    },
  ]

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
    <section id="services" className="section-padding relative bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-500">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-8 rounded-xl border border-border bg-card shadow-lg hover:shadow-xl smooth-transition group hover:border-emerald-500/50 green-glow-hover"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 smooth-transition">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-xl border border-border bg-card shadow-lg text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your creative needs and find the perfect solution for your brand.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-emerald-500 text-white font-semibold smooth-transition hover:bg-emerald-600"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
