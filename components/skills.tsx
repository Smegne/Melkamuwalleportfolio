"use client"
import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    {
      category: "Graphic Design",
      items: ["Logo Design", "Brand Identity", "Packaging", "Print Design", "UI/UX Design"],
      icon: "🎨",
    },
    {
      category: "Video Editing",
      items: ["Cinematic Videos", "Social Media Reels", "Motion Graphics", "Color Grading", "Sound Design"],
      icon: "🎬",
    },
    {
      category: "Branding",
      items: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Messaging", "Logo Animation"],
      icon: "⭐",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="section-padding relative bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-500">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of creative and technical skills to bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-8 rounded-xl border border-border bg-card shadow-lg hover:shadow-xl smooth-transition hover:border-emerald-500/50 green-glow-hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{skillGroup.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{skillGroup.category}</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground hover:text-emerald-500 smooth-transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
