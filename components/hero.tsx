"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 bg-background"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/30"
        >
          ✨ Welcome to my creative portfolio
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-foreground"
        >
          <span className="block">Creative Works</span>
          <span className="text-emerald-500">for Bold Brands</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          I'm <span className="font-semibold text-foreground">Melkamu Wale</span>, a graphics designer and video editor
          specializing in branding, motion graphics, and visual storytelling. Let's create something extraordinary
          together.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-emerald-500 text-white font-semibold text-lg smooth-transition hover:bg-emerald-600 w-full sm:w-auto"
          >
            📧 Hire Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg border-2 border-emerald-500 text-emerald-400 font-semibold text-lg smooth-transition hover:bg-emerald-500/10 w-full sm:w-auto"
          >
            ⬇️ View My Work
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="mt-12 flex justify-center gap-6">
          <Link
            href="https://t.me/melkamu2330"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-emerald-500 hover:bg-emerald-500/10 smooth-transition text-xl green-glow-hover"
          >
            💬
          </Link>
          <Link
            href="https://instagram.com/melkamu4907"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-emerald-500 hover:bg-emerald-500/10 smooth-transition text-xl green-glow-hover"
          >
            📸
          </Link>
          <Link
            href="mailto:melkamuwale485@gmail.com"
            className="p-3 rounded-lg border border-border hover:border-emerald-500 hover:bg-emerald-500/10 smooth-transition text-xl green-glow-hover"
          >
            ✉️
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-emerald-500/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-emerald-500/50 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
