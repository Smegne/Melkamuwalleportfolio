"use client"
import { motion } from "framer-motion"

interface ThemeToggleProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-xl"
      aria-label="Toggle theme"
    >
      {isDark ? "☀️" : "🌙"}
    </motion.button>
  )
}
