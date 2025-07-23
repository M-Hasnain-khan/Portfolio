"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaHeart, FaCoffee, FaGamepad, FaMusic, FaPalette, FaBrain } from "react-icons/fa"
import { HiLightBulb, HiCode, HiSparkles } from "react-icons/hi"

const AboutSection = () => {
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" })

  const traits = [
    { icon: FaHeart, title: "Passionate", desc: "Love what I do", color: "#EF4444", pos: { top: "20%", left: "10%" } },
    {
      icon: FaCoffee,
      title: "Coffee Lover",
      desc: "Fuel for creativity",
      color: "#8B4513",
      pos: { top: "15%", right: "15%" },
    },
    {
      icon: HiLightBulb,
      title: "Creative",
      desc: "Think outside the box",
      color: "#F59E0B",
      pos: { top: "60%", left: "5%" },
    },
    {
      icon: FaGamepad,
      title: "Gamer",
      desc: "Strategic thinking",
      color: "#8B5CF6",
      pos: { bottom: "25%", right: "10%" },
    },
    {
      icon: FaMusic,
      title: "Music Lover",
      desc: "Rhythm in code",
      color: "#06B6D4",
      pos: { bottom: "15%", left: "20%" },
    },
    {
      icon: FaBrain,
      title: "Problem Solver",
      desc: "Logic meets creativity",
      color: "#10B981",
      pos: { top: "40%", right: "5%" },
    },
  ]

  const journey = [
    { year: "2022", title: "Started Journey", desc: "Began with HTML, CSS, JS", icon: HiCode, color: "#3B82F6" },
    { year: "2023", title: "First Framework", desc: "Mastered React.js", icon: HiSparkles, color: "#10B981" },
    { year: "2024", title: "Full Stack", desc: "Built full MERN apps", icon: FaPalette, color: "#F59E0B" },
    {
      year: "Now",
      title: "Professional",
      desc: "Creating stunning digital solutions",
      icon: HiLightBulb,
      color: "#EF4444",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-green-50 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 via-white/50 to-green-100/20 z-0" />
      <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full blur-2xl sm:blur-3xl top-10 right-10 opacity-30" />
      <div className="absolute w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full blur-xl sm:blur-2xl bottom-20 left-10 opacity-25" />

      {/* Floating Icons - Only animate when in view - Hidden on mobile */}
      {traits.map((t, i) => (
        <motion.div
          key={t.title}
          className="absolute hidden lg:block z-20 group"
          style={t.pos}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
          transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.2, rotate: 15, y: -10 }}
        >
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg cursor-pointer backdrop-blur-sm border border-white/20"
            style={{ backgroundColor: `${t.color}15` }}
          >
            <t.icon className="text-xl sm:text-2xl" style={{ color: t.color }} />
          </div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg whitespace-nowrap">
              <div className="font-bold text-gray-800">{t.title}</div>
              <div className="text-sm text-gray-600">{t.desc}</div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Grid Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 mb-16 sm:mb-20 lg:mb-24">
          {/* Left: Story */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              The Story Behind <span className="text-emerald-600">The Code</span>
            </h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Hi, I'm <strong>Muhammad Hasnain</strong>, a passionate web developer based in{" "}
              <strong className="text-green-500">Islamabad, Pakistan</strong>. With over{" "}
              <strong className="text-emerald-600">2 years of hands-on experience</strong> in web development, I
              specialize in building modern, fast, and visually stunning websites.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              I love turning creative <span className="text-emerald-600">IDEAS</span> into{" "}
              <span className="text-emerald-600">REAL</span> digital products. From small concepts to full-scale
              projects, I enjoy bringing imagination to life through code and design.
            </p>
            <motion.div
              className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl sm:text-5xl font-bold opacity-20 mb-2">"</div>
              <p className="italic text-sm sm:text-base">
                "In the future, I aspire to build my own tech company where innovation meets execution. I'm always eager
                to learn, grow, and collaborate on meaningful projects that challenge the norm and push boundaries."
              </p>
              <p className="mt-2 text-emerald-100 text-sm sm:text-base">
                Let's connect and bring ideas to reality together.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Code Block */}
          <motion.div className="space-y-6 sm:space-y-8" variants={itemVariants}>
            <motion.div
              className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 font-mono text-xs sm:text-sm relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <div className="text-gray-400">// About M-Hasnain</div>
                <div className="text-blue-400">
                  const <span className="text-yellow-400">developer</span> = {"{"}
                </div>
                <div className="ml-2 sm:ml-4 text-green-400">
                  name: <span className="text-orange-400">"M-Hasnain"</span>,
                </div>
                <div className="ml-2 sm:ml-4 text-green-400">
                  passion: <span className="text-orange-400">"Creating Digital Magic"</span>,
                </div>
                <div className="ml-2 sm:ml-4 text-green-400">
                  mission: <span className="text-orange-400">"Building Tomorrow's Web"</span>,
                </div>
                <div className="ml-2 sm:ml-4 text-green-400">
                  superpower: <span className="text-orange-400">"Turning Ideas into Reality"</span>
                </div>
                <div className="text-blue-400">{"}"}</div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <motion.div
                className="bg-white/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center shadow-lg border border-emerald-100"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                variants={itemVariants}
              >
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">∞</div>
                <div className="text-gray-600 text-sm sm:text-base">Cups of Coffee</div>
              </motion.div>
              <motion.div
                className="bg-white/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center shadow-lg border border-emerald-100"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                variants={itemVariants}
              >
                <div className="text-2xl sm:text-3xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600 text-sm sm:text-base">Learning Mode</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div className="mb-16 sm:mb-20 lg:mb-24 relative" variants={itemVariants}>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-4">
            My <span className="text-emerald-600">Journey</span>
          </h3>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-emerald-500 to-green-500 rounded-full"></div>
          <div className="space-y-8 sm:space-y-12">
            {journey.map((s, i) => (
              <motion.div
                key={s.year}
                className={`flex items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-4 sm:pr-8" : "text-left pl-4 sm:pl-8"}`}>
                  <div className="bg-white/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{s.year}</div>
                    <div className="text-lg sm:text-xl font-semibold text-emerald-600 mb-2">{s.title}</div>
                    <div className="text-gray-700 text-sm sm:text-base">{s.desc}</div>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-white"
                    style={{ backgroundColor: s.color }}
                  >
                    <s.icon className="text-lg sm:text-2xl text-white" />
                  </div>
                </div>
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center px-4" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden max-w-4xl mx-auto"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(15, 157, 88, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full -translate-y-24 sm:-translate-y-32 translate-x-24 sm:translate-x-32"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Let's Create Something Amazing!</h3>
              <p className="text-emerald-100 text-base sm:text-lg lg:text-xl mb-6 max-w-2xl mx-auto">
                Ready to turn your ideas into digital reality? Let's collaborate and build something extraordinary
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#projects"
                  className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg cursor-pointer inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg cursor-pointer inline-block hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutSection
