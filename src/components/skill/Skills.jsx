"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiFigma,
  SiPostman,
} from "react-icons/si"
import { FaDatabase, FaCode, FaTools, FaTerminal } from "react-icons/fa"

const SkillsSection = () => {
  const skillsRef = useRef(null)
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: FaCode,
      color: "#3B82F6",
      skills: [
        { name: "React.js", icon: SiReact, level: 95, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#000000" },
        { name: "JavaScript", icon: SiJavascript, level: 95, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, level: 85, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "#06B6D4" },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: FaDatabase,
      color: "#10B981",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 88, color: "#339933" },
        { name: "Express.js", icon: SiExpress, level: 85, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, level: 90, color: "#47A248" },
      ],
    },
    tools: {
      title: "Tools & Design",
      icon: FaTools,
      color: "#F59E0B",
      skills: [
        { name: "Git", icon: SiGit, level: 85, color: "#F05032" },
        { name: "VS Code", icon: FaTerminal, level: 95, color: "#007ACC" },
        { name: "Figma", icon: SiFigma, level: 80, color: "#F24E1E" },
        { name: "Postman", icon: SiPostman, level: 85, color: "#FF6C37" },
      ],
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -15, scale: 0.95 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: custom * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const SkillCard = ({ skill, index }) => (
    <motion.div
      custom={index}
      variants={skillVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group"
    >
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-2xl transition-all duration-200 ease-out"
        whileHover={{
          scale: 1.03,
          y: -8,
          boxShadow: "0 25px 50px rgba(15, 157, 88, 0.12)",
          borderColor: "rgba(15, 157, 88, 0.2)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.8,
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
              style={{ backgroundColor: `${skill.color}15` }}
              whileHover={{
                rotate: [0, -10, 10, 0],
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
            >
              <skill.icon className="text-2xl" style={{ color: skill.color }} />
            </motion.div>
            <div>
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors duration-200">
                {skill.name}
              </h4>
              <p className="text-sm text-gray-600">{skill.level}% Proficiency</p>
            </div>
          </div>
          <motion.div
            className="text-2xl font-bold text-emerald-600"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {skill.level}%
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-4">
          <motion.div
            className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 relative overflow-hidden"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{
              duration: 1.2,
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={isInView ? { x: "100%" } : { x: "-100%" }}
              transition={{
                duration: 1.5,
                delay: index * 0.1 + 0.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Hover Description */}
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="text-sm text-gray-600 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-3 border border-emerald-100">
            <span className="font-semibold" style={{ color: skill.color }}>
              {skill.name}
            </span>{" "}
            - Professional level experience with real-world projects and best practices
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-green-50 py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 via-white/50 to-green-100/20 z-0" />

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full blur-3xl top-10 right-10 opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full blur-2xl bottom-20 left-10 opacity-25"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
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
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
          <motion.p
            className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Expertise in modern web technologies with hands-on experience in building scalable applications
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-emerald-100">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                  <category.icon className="text-xl" />
                </motion.div>
                <span className="hidden sm:block">{category.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6" variants={itemVariants}>
          {[
            { number: "2+", label: "Years Experience", color: "#3B82F6" },
            { number: "50+", label: "Projects Built", color: "#10B981" },
            { number: "15+", label: "Technologies", color: "#F59E0B" },
            { number: "100%", label: "Client Satisfaction", color: "#EF4444" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-emerald-100"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(15, 157, 88, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <motion.div
                className="text-3xl font-bold mb-2"
                style={{ color: stat.color }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden max-w-4xl mx-auto"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(15, 157, 88, 0.25)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Build Something Great?</h3>
              <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto">
                Let's leverage these skills to create amazing digital experiences that drive results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#projects"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg cursor-pointer inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  Start a Project
                </motion.a>
                <motion.a
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg cursor-pointer inline-block hover:bg-white/10 transition-colors duration-300"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SkillsSection
