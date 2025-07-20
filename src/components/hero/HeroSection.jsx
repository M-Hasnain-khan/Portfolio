"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiMongodb } from "react-icons/si"

const HeroSection = () => {
  const roles = ["MERN Stack Developer", "Full Stack Developer", "Web Designer"]
  const [currentRole, setCurrentRole] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const nameRef = useRef(null)

  // Handle window resize and set device states
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640)
      setIsTablet(width >= 640 && width < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  }

  const iconVariants = {
    initial: { opacity: 0, scale: 0.3, rotate: -180 },
    animate: (custom) => ({
      opacity: 0.8,
      scale: 1,
      rotate: 0,
      x: custom.x,
      y: custom.y,
      transition: {
        duration: 1.2,
        delay: custom.delay,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.4,
      rotate: 15,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  // Dynamic icon positions based on device
  const getIconPositions = () => {
    if (isMobile) {
      return [
        { x: -190, y: -260, delay: 0.1 },
        { x: 190, y: -80, delay: 0.2 },
        { x: -150, y: 140, delay: 0.3 },
        { x: 180, y: 100, delay: 0.4 },
        { x: -150, y: -100, delay: 0.5 },
      ]
    } else if (isTablet) {
      return [
        { x: -220, y: 200, delay: 0.1 },
        { x: 280, y: -240, delay: 0.2 },
        { x: -160, y: -50, delay: 0.3 },
        { x: 220, y: -50, delay: 0.4 },
        { x: -300, y: -250, delay: 0.5 },
      ]
    } else {
      return [
        { x: -500, y: 230, delay: 0.1 },
        { x: 280, y: 260, delay: 0.2 },
        { x: -600, y: -30, delay: 0.3 },
        { x: 620, y: -240, delay: 0.4 },
        { x: 30, y: 90, delay: 0.5 },
      ]
    }
  }

  const techIcons = [
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaCss3Alt, color: "#1572B6" },
    { icon: FaReact, color: "#61DAFB" },
    { icon: SiNextdotjs, color: "#000000" },
    { icon: FaNodeJs, color: "#339933" },
  ]

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(15, 157, 88, 0.4)",
      y: -2,
    },
    tap: { scale: 0.98, y: 0 },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden flex items-center justify-center">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/30 via-white to-green-100/30 z-0" />
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,#0F9D5815_1px,transparent_1px)] [background-size:30px_30px] z-0" />

      {/* Animated Background Elements */}
      <div className="absolute w-72 h-72 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full blur-3xl top-20 left-10 opacity-40 animate-pulse z-0" />
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full blur-2xl bottom-20 right-10 opacity-30 animate-bounce z-0"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="absolute w-48 h-48 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-xl top-1/2 right-20 opacity-20 animate-pulse z-0"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating Tech Icons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {techIcons.map(({ icon: Icon, color }, index) => (
          <motion.div
            key={index}
            custom={getIconPositions()[index]}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="absolute cursor-pointer"
          >
            <div className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
              <Icon size={isMobile ? 24 : isTablet ? 32 : 40} style={{ color }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-20 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6 lg:space-y-8">
          <motion.div variants={itemVariants}>
         <motion.h1
  ref={nameRef}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight whitespace-nowrap"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Hi, I'm{" "}
  <span className="text-emerald-600 inline-flex items-center gap-1 whitespace-nowrap">
    M-Hasna
    <span className="inline-block align-middle">
      <SiMongodb className="text-green-600 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]" />
    </span>
    n
  </span>
</motion.h1>
          </motion.div>

          <motion.div className="h-16 sm:h-20 lg:h-24" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[currentRole]}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-600 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                I am a {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed"
            variants={itemVariants}
          >
            I build high-performance, scalable web applications using React, Next.js, Node.js, and MongoDB. Passionate
            about creating exceptional user experiences with modern design principles.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div className="lg:w-1/2 flex justify-center items-center" variants={itemVariants}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            {/* Decorative rings */}
            <div
              className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-emerald-200 animate-spin-slow opacity-30"
              style={{ animationDuration: "20s" }}
            />
            <div
              className="absolute inset-2 w-44 h-44 sm:w-60 sm:h-60 lg:w-76 lg:h-76 xl:w-92 xl:h-92 rounded-full border-2 border-green-300 animate-spin-slow opacity-40"
              style={{ animationDuration: "15s", animationDirection: "reverse" }}
            />

            {/* Main image container */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-white to-emerald-50 rounded-full border-4 border-emerald-600 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-green-600/10 rounded-full" />
              <img
                src="/placeholder.svg?height=400&width=400&text=M-Hasnain"
                alt="M-Hasnain - MERN Stack Developer"
                className="w-full h-full object-cover relative z-10"
              />

              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full animate-bounce opacity-80" />
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-bounce opacity-80"
                style={{ animationDelay: "1s" }}
              />
              <div className="absolute top-1/4 -left-6 w-4 h-4 bg-emerald-400 rounded-full animate-pulse opacity-60" />
              <div
                className="absolute bottom-1/4 -right-6 w-5 h-5 bg-green-400 rounded-full animate-pulse opacity-60"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-600 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
