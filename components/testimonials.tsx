"use client"
import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Devvoltz Technology",
      role: "Client",
      text: "Melkamu transformed our brand identity with his exceptional design skills. His attention to detail and creative vision exceeded our expectations",
      image: "/images/devvoltz.png",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      text: "Melkamu transformed our brand vision into reality. The designs are modern, impactful, and perfectly aligned with our company values.",
      image: "/professional-woman-avatar.jpg",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      role: "CEO, Creative Ventures",
      text: "Working with Melkamu was seamless. Their attention to detail and quick turnarounds made the project incredibly smooth.",
      image: "/professional-man-avatar.jpg",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Founder, Fashion Brand Co",
      text: "The video production was outstanding. Melkamu captured our brand essence perfectly with stunning cinematography.",
      image: "/professional-woman-avatar.jpg",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Product Manager, StartUp Inc",
      text: "Exceptional creativity and professionalism. Melkamu exceeded our expectations on every aspect of the project.",
      image: "/professional-man-avatar.jpg",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="testimonials" className="section-padding relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-500">What Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by brands and businesses to deliver exceptional creative work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-8 rounded-xl border border-border bg-card shadow-lg hover:shadow-xl smooth-transition hover:border-emerald-500/50"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500">
                  <img
                    src={testimonial.image || "/placeholder.svg?height=48&width=48"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
