"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Portfolio() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Logo Design", "Posters", "Social Media", "Video Editing"]

  const portfolioItems = [
    {
      id: 1,
      title: "Social Media Project 1",
      category: "Social Media",
      image: "/images/1.png",
      description: "Social media design showcase",
    },
    {
      id: 2,
      title: "Social Media Project 2",
      category: "Social Media",
      image: "/images/2.png",
      description: "Social media design showcase",
    },
    {
      id: 3,
      title: "Social Media Project 3",
      category: "Social Media",
      image: "/images/3.png",
      description: "Social media design showcase",
    },
    {
      id: 4,
      title: "Social Media Project 4",
      category: "Social Media",
      image: "/images/4.png",
      description: "Social media design showcase",
    },
    {
      id: 5,
      title: "Poster Design 1",
      category: "Posters",
      image: "/images/5.png",
      description: "Poster design showcase",
    },
    {
      id: 6,
      title: "Poster Design 2",
      category: "Posters",
      image: "/images/6.png",
      description: "Poster design showcase",
    },
    {
      id: 7,
      title: "Poster Design 3",
      category: "Posters",
      image: "/images/7.png",
      description: "Poster design showcase",
    },
    {
      id: 8,
      title: "Logo Design 1",
      category: "Logo Design",
      image: "/images/8.png",
      description: "Logo design and branding showcase",
    },
    {
      id: 9,
      title: "Logo Design 2",
      category: "Logo Design",
      image: "/images/9.png",
      description: "Logo design and branding showcase",
    },
    {
      id: 10,
      title: "Mockup Design",
      category: "Logo Design",
      image: "/images/mockup.png",
      description: "Brand mockup presentation",
    },
    {
      id: 11,
      title: "Mockup Showcase",
      category: "Logo Design",
      image: "/images/mockup2.png",
      description: "Detailed brand showcase",
    },
    {
      id: 12,
      title: "Video Editing Project 1",
      category: "Video Editing",
      image: "/images/vid1.jpg",
      description: "Video editing work showcase",
      link: "https://drive.google.com/file/d/12Bp-Ba6GwemOBrOC80RncKEiyRXN__jN/view?usp=drive_link",
    },
    {
      id: 13,
      title: "Video Editing Project 2",
      category: "Video Editing",
      image: "/images/vid2.jpg",
      description: "Video editing work showcase",
      link: "https://drive.google.com/file/d/1LhTrNAc5M8M72D6ajxrMwquxesrcZ8C1/view?usp=drive_link",
    },
    {
      id: 14,
      title: "Video Editing Project 3",
      category: "Video Editing",
      image: "/images/vid3.jpg",
      description: "Video editing work showcase",
      link: "https://drive.google.com/file/d/1y58mQLqw1jHkycpJMKnkmfqc2BxLrVuW/view?usp=drive_link",
    },
    {
      id: 15,
      title: "Video Editing Project 4",
      category: "Video Editing",
      image: "/images/vid4.jpg",
      description: "Video editing work showcase",
      link: "https://drive.google.com/file/d/1S2vGKCENWgQ6LhMXDjZ_OGbjzbTuUNDf/view?usp=sharing",
    },
    {
      id: 16,
      title: "Video Editing Project 5",
      category: "Video Editing",
      image: "/images/vid5.jpg",
      description: "Video editing work showcase",
      link: "https://drive.google.com/file/d/1uq-pgN-ZhpojFUHuPsV3Smg1hcksbaLL/view?usp=sharing",
    }
  ]

  const filteredItems = filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="portfolio" className="section-padding relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-500">Recent Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my latest projects showcasing diverse creative capabilities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-medium smooth-transition border ${
                filter === category
                  ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/30"
                  : "border-border text-muted-foreground hover:border-emerald-500 hover:text-emerald-500"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item: any) => (
              <motion.div 
                key={item.id} 
                variants={itemVariants} 
                whileHover={{ y: -8 }} 
                className="group cursor-pointer"
                onClick={() => item.link && window.open(item.link, '_blank', 'noopener,noreferrer')}
              >
                <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-lg hover:shadow-xl h-64 md:h-80 smooth-transition hover:border-emerald-500/50">
                  <img
                    src={item.image || "/placeholder.svg?height=320&width=320&query=portfolio"}
                    alt={item.title}
                    className="w-full h-full object-contain smooth-transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">Want to see more? Let's talk about your next project.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-emerald-500 text-white font-semibold smooth-transition hover:bg-emerald-600"
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
