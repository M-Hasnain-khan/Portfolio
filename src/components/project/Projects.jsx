"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
} from "react-icons/si"
import { FaExternalLinkAlt, FaGithub, FaEye, FaRocket, FaStar } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"

// Import Trading image
import Trading from "@/assets/trading.png"
import Hospital from "@/assets/health.png"
import Store from "@/assets/store.png"
import Food from "@/assets/food.png"
import Tech from "@/assets/tech.png"

const Projects = () => {
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const [activeProject, setActiveProject] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Optimize mouse tracking with throttling
  useEffect(() => {
    let lastUpdate = 0
    const throttleDelay = 30 // ms

    const handleMouseMove = (e) => {
      const now = Date.now()
      if (now - lastUpdate < throttleDelay) return

      lastUpdate = now
      const rect = projectsRef.current?.getBoundingClientRect()
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Trading Platform",
      subtitle: "Financial Technology",
      description: "Advanced trading platform with real-time market data and AI-powered insights.",
      longDescription:
        "Comprehensive trading solution featuring real-time market data, interactive charts, AI-powered insights, and secure transaction processing for cryptocurrency and stock markets.",
      image: Trading,
      technologies: [
        { icon: SiReact, name: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      ],
      stats: { views: "18.7K", stars: "342", forks: "87" },
      color: "from-blue-500 to-purple-500",
      liveUrl: "https://trading-beta-hazel.vercel.app/home",
      githubUrl: "",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      subtitle: "Full Stack Solution",
      description: "Modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      longDescription:
        "Complete e-commerce ecosystem featuring intelligent product recommendations, real-time inventory management, secure payment processing, and comprehensive analytics dashboard.",
      image: Store,
      technologies: [
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
        { icon: SiExpress, name: "Express", color: "#000000" },
      ],
      stats: { views: "12.5K", stars: "234", forks: "45" },
      color: "from-purple-500 to-pink-500",
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 3,
      title: "Food Delivery App",
      subtitle: "Food",
      description: "AI-powered food delivery app with smart scheduling and real-time tracking.",
      longDescription:
        "Intelligent food delivery application featuring AI-driven order scheduling, real-time tracking, and personalized recommendations for a seamless user experience.",
      image: Food,
      technologies: [
        { icon: SiReact, name: "React", color: "#61DAFB" },
        { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
        { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      ],
      stats: { views: "8.3K", stars: "189", forks: "32" },
      color: "from-blue-500 to-cyan-500",
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 4,
      title: "Weather Analytics",
      subtitle: "Healthcare",
      description: "Hospital management system with real-time patient tracking and AI diagnostics.",
      longDescription:
        "Comprehensive hospital management system featuring real-time patient tracking, AI-powered diagnostics, and secure data management for efficient healthcare delivery.",
      image: Hospital,
      technologies: [
        { icon: SiReact, name: "React", color: "#61DAFB" },
        { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
      ],
      stats: { views: "15.7K", stars: "312", forks: "67" },
      color: "from-green-500 to-emerald-500",
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 5,
      title: "Technology Blog",
      subtitle: "Tech Blog",
      description: "Technology blog with AI-generated content and interactive features.",
      longDescription:
        "Dynamic technology blog platform featuring AI-generated content, interactive discussions, and personalized user experiences for tech enthusiasts.",
      image: Tech,
      technologies: [
        { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
        { icon: SiExpress, name: "Express", color: "#000000" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
        { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      ],
      stats: { views: "9.1K", stars: "156", forks: "28" },
      color: "from-orange-500 to-red-500",
      liveUrl: "",
      githubUrl: "",
    },
  ]

  // Reduced number of particles for better performance
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 8,
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-green-900/20" />

      {/* Reduced number of floating particles for better performance */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-emerald-400/30 rounded-full blur-sm pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      {/* Optimized Interactive Background Gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(15, 157, 88, 0.15), transparent 40%)`,
          willChange: "background",
        }}
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
              <FaRocket className="text-3xl text-white" />
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 160 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />

          <motion.p
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Discover my latest creations where innovation meets functionality. Each project represents a unique journey
            of problem-solving and creative development.
          </motion.p>
        </motion.div>

        {/* Projects Showcase */}
        <div className="relative">
          {/* Project Navigation */}
          <motion.div
            className="flex justify-center mb-12 relative z-20"
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-wrap justify-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                    activeProject === index
                      ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ willChange: "transform" }}
                >
                  <span className="hidden sm:block">{project.title}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Project Display */}
          <motion.div className="relative max-w-6xl mx-auto" variants={itemVariants} transition={{ delay: 0.4 }}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Project Image */}
              <motion.div
                className="relative group"
                key={`image-${activeProject}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {/* Use Next.js Image component for better performance */}
                  {typeof projects[activeProject].image === "string" ? (
                    <img
                      src={projects[activeProject].image || "/placeholder.svg"}
                      alt={projects[activeProject].title}
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={projects[activeProject].image || "/placeholder.svg"}
                      alt={projects[activeProject].title}
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      placeholder="blur"
                      priority
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating Action Buttons */}
                  <div className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={projects[activeProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                    <a
                      href={projects[activeProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      <FaEye className="inline mr-1" />
                      {projects[activeProject].stats.views}
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      <FaStar className="inline mr-1" />
                      {projects[activeProject].stats.stars}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${projects[activeProject].color} rounded-full blur-xl opacity-60`}
                />
              </motion.div>

              {/* Project Details */}
              <motion.div
                className="space-y-6"
                key={`details-${activeProject}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
              >
                <div>
                  <div className="text-emerald-400 font-semibold text-lg mb-2">{projects[activeProject].subtitle}</div>

                  <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">{projects[activeProject].title}</h3>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {projects[activeProject].longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold text-lg mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[activeProject].technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 flex items-center space-x-2 hover:bg-white/15 transition-colors duration-200 cursor-pointer"
                      >
                        <tech.icon className="text-xl" style={{ color: tech.color }} />
                        <span className="text-white font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={projects[activeProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
                  >
                    <FaEye className="inline mr-2" />
                    View Live Demo
                  </a>
                  <a
                    href={projects[activeProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-2xl font-bold text-lg text-center hover:bg-emerald-500/10 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
                  >
                    <FaGithub className="inline mr-2" />
                    Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  activeProject === index ? "bg-emerald-500 w-8" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div className="text-center mt-20" variants={itemVariants} transition={{ delay: 0.6 }}>
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
            {/* Shimmer effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                style={{
                  transform: "translateX(-100%)",
                  animation: "shimmer 3s infinite linear",
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
                Let's collaborate and create something extraordinary together. Your vision, my expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] cursor-pointer inline-block"
                >
                  <HiSparkles className="inline mr-2" />
                  Start Project
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer">
                  View All Projects
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}

export default Projects;
