"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-emerald-500">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 2 years of experience in creative design and video production, I've worked with diverse brands
              from startups to established corporations. My passion is transforming ideas into compelling visual
              narratives that resonate with audiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I specialize in creating cohesive brand identities, engaging video content, and motion graphics that tell
              your story. Every project is an opportunity to push creative boundaries and deliver excellence.
            </p>

          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl smooth-transition green-glow">
              <Image
                src="/images/melkamu2.JPG"
                alt="Melkamu Wale - Creative Professional"
                fill
                unoptimized
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
