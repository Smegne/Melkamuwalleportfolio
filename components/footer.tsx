"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/melkamu4907", icon: "📸" },
    { label: "Telegram", href: "https://t.me/melkamu2330", icon: "💬" },
    { label: "Email", href: "mailto:melkamuwale485@gmail.com", icon: "✉️" },
  ]

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-2xl font-bold text-emerald-500 mb-2">Melkamu Wale</div>
            <p className="text-sm text-muted-foreground">Graphics Designer & Video Editor</p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-emerald-500 smooth-transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-emerald-500 smooth-transition">
                  Logo Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-emerald-500 smooth-transition">
                  Video Editing
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-emerald-500 smooth-transition">
                  Branding
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:border-emerald-500 hover:bg-emerald-500/10 smooth-transition text-lg green-glow-hover"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} Melkamu Wale. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
