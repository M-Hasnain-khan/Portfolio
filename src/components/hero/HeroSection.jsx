"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs } from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si"
import Image from "next/image"

// ASSETS
import Hasnain from "@/assets/hasnain.jpg"

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const containerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const roles = ["MERN Stack Developer", "Full Stack Developer", "Web Developer", "UI/UX Designer"]

  // Optimized debouncer
  const debounce = useMemo(() => {
    return (func, wait) => {
      let timeout
      return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
      }
    }
  }, [])

  // Cache window size
  const getWindowSize = useMemo(() => () => ({
    isMobile: typeof window !== "undefined" && window.innerWidth < 768,
    isTablet: typeof window !== "undefined" && window.innerWidth < 1024,
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
  }), [])

  const [windowSize, setWindowSize] = useState(getWindowSize())

  // Show content after initial delay
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Optimized typewriter effect
  useEffect(() => {
    if (!showContent) return

    let typeTimer, eraseTimer
    const typeText = () => {
      const text = roles[currentRole]
      let i = 0
      setIsTyping(true)

      typeTimer = setInterval(() => {
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i))
          i++
        } else {
          clearInterval(typeTimer)
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            eraseTimer = setInterval(() => {
              setDisplayedText((prev) => {
                if (prev.length > 0) return prev.slice(0, -1)
                clearInterval(eraseTimer)
                setCurrentRole((prev) => (prev + 1) % roles.length)
                return ""
              })
            }, 60)
          }, 800)
        }
      }, 100)
    }

    const timer = setTimeout(typeText, 800)
    return () => {
      clearTimeout(timer)
      clearInterval(typeTimer)
      clearInterval(eraseTimer)
    }
  }, [currentRole, showContent])

  // Multi-layered planetary orbits
  const getOrbitalLayers = useMemo(() => () => {
    const { isMobile, isTablet } = getWindowSize()
    const baseRadius = isMobile ? 80 : isTablet ? 120 : 180
    const baseDuration = isMobile ? 10 : isTablet ? 12 : 15

    return [
      { icon: FaHtml5, name: "HTML5", color: "#E34F26", radius: baseRadius, angle: 0, duration: baseDuration, delay: 0 },
      { icon: FaCss3Alt, name: "CSS3", color: "#1572B6", radius: baseRadius + 20, angle: 40, duration: baseDuration + 2, delay: 0.5 },
      { icon: FaJs, name: "JavaScript", color: "#F7DF1E", radius: baseRadius + 40, angle: 80, duration: baseDuration + 4, delay: 1 },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6", radius: baseRadius + 60, angle: 120, duration: baseDuration + 1, delay: 1.5 },
      { icon: FaReact, name: "React", color: "#61DAFB", radius: baseRadius + 80, angle: 160, duration: baseDuration + 3, delay: 2 },
      { icon: SiNextdotjs, name: "Next.js", color: "#000000", radius: baseRadius + 100, angle: 200, duration: baseDuration + 5, delay: 2.5 },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", radius: baseRadius + 120, angle: 240, duration: baseDuration + 2.5, delay: 3 },
      { icon: FaNodeJs, name: "Node.js", color: "#339933", radius: baseRadius + 140, angle: 280, duration: baseDuration + 1.5, delay: 3.5 },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248", radius: baseRadius + 160, angle: 320, duration: baseDuration + 3.5, delay: 4 },
    ]
  }, [getWindowSize])

  const [orbitalLayers, setOrbitalLayers] = useState(getOrbitalLayers())

  // Optimized resize handler
  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize(getWindowSize())
      setOrbitalLayers(getOrbitalLayers())
    }, 150)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [debounce, getWindowSize, getOrbitalLayers])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const ringVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 0.2,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  const glowVariants = {
    animate: {
      rotate: shouldReduceMotion ? 0 : 360,
      transition: {
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear"
      }
    }
  }

  return (
    <section
      ref={containerRef}
      id="herosection"
      className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center -mt-20 md:mt-0 lg:-mt-1 md:pt-20"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/10 to-green-50/10" />
        <div className="absolute left-0 top-0 w-48 md:w-96 h-full bg-gradient-to-r from-emerald-500/5 to-transparent blur-2xl" />
        <div className="absolute right-0 top-0 w-48 md:w-96 h-full bg-gradient-to-l from-green-500/5 to-transparent blur-2xl" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 md:h-64 bg-gradient-to-b from-emerald-400/3 to-transparent blur-xl" />
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {showContent && (
        <motion.div
          className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <div className="relative inline-block mb-8 md:mb-16">
              {orbitalLayers.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="absolute top-1/2 left-1/2 border border-emerald-200/20 rounded-full"
                  style={{
                    width: `${tech.radius * 2}px`,
                    height: `${tech.radius * 2}px`,
                    marginTop: `-${tech.radius}px`,
                    marginLeft: `-${tech.radius}px`,
                  }}
                  variants={ringVariants}
                  initial="hidden"
                  animate="visible"
                />
              ))}
              <motion.div
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{
                  width: `${orbitalLayers[orbitalLayers.length - 1].radius * 2 + 20}px`,
                  height: `${orbitalLayers[orbitalLayers.length - 1].radius * 2 + 20}px`,
                  marginTop: `-${orbitalLayers[orbitalLayers.length - 1].radius + 10}px`,
                  marginLeft: `-${orbitalLayers[orbitalLayers.length - 1].radius + 10}px`,
                  background: `conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.1), transparent)`,
                  filter: "blur(1px)",
                }}
                variants={glowVariants}
                animate="animate"
              />

              {orbitalLayers.map((tech, index) => {
                const iconSize = windowSize.isMobile ? "w-10 h-10" : windowSize.isTablet ? "w-12 h-12" : "w-14 h-14"
                const iconTextSize = windowSize.isMobile ? "text-lg" : windowSize.isTablet ? "text-xl" : "text-2xl"

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      marginTop: windowSize.isMobile ? "-20px" : "-28px",
                      marginLeft: windowSize.isMobile ? "-20px" : "-28px",
                    }}
                    animate={{
                      rotate: shouldReduceMotion ? tech.angle : [tech.angle, tech.angle + 360],
                      opacity: shouldReduceMotion ? 1 : [0, 1, 1, 0],
                    }}
                    transition={{
                      rotate: { duration: tech.duration, delay: tech.delay, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      opacity: { duration: tech.duration, times: [0, 0.1, 0.9, 1], delay: tech.delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }}
                  >
                    <motion.div
                      className="relative"
                      style={{
                        transform: `translateX(${tech.radius}px) rotate(${tech.angle}deg)`,
                      }}
                    >
                      <motion.div
                        className={`${iconSize} rounded-full flex items-center justify-center shadow-xl border-2 border-white/90 backdrop-blur-sm`}
                        style={{
                          background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}20)`,
                          boxShadow: `0 8px 32px ${tech.color}35, 0 0 20px ${tech.color}25`,
                        }}
                        animate={{
                          rotate: shouldReduceMotion ? -tech.angle : [-tech.angle, -tech.angle - 360],
                          y: shouldReduceMotion ? 0 : [0, -2, 0],
                          boxShadow: shouldReduceMotion 
                            ? `0 8px 32px ${tech.color}35, 0 0 20px ${tech.color}25`
                            : [
                                `0 8px 32px ${tech.color}35, 0 0 20px ${tech.color}25`,
                                `0 12px 40px ${tech.color}45, 0 0 25px ${tech.color}35`,
                                `0 8px 32px ${tech.color}35, 0 0 20px ${tech.color}25`,
                              ],
                        }}
                        transition={{
                          rotate: { duration: tech.duration, delay: tech.delay, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                          y: { duration: 4 + index * 0.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                          boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        }}
                      >
                        <tech.icon className={iconTextSize} style={{ color: tech.color }} />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
              })}

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-4xl sm:text-6xl flex mt-18 md:text-7xl lg:text-8xl xl:text-8xl font-black text-gray-900 leading-none">
                  <p className="text-emerald-600">M-</p>
                  <span className="relative">
                    Hasna
                    <motion.div
                      className="inline-block align-middle mx-1 sm:mx-2 relative"
                      animate={{ rotate: shouldReduceMotion ? 0 : [0, 5, -5, 0] }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <motion.div
                        className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, #47A248, #4CAF50)",
                          boxShadow: "0 2px 12px rgba(71, 162, 72, 0.2)",
                        }}
                        animate={{
                          boxShadow: shouldReduceMotion 
                            ? "0 2px 12px rgba(71, 162, 72, 0.2)"
                            : [
                                "0 2px 12px rgba(71, 162, 72, 0.2)",
                                "0 4px 16px rgba(71, 162, 72, 0.3)",
                                "0 2px 12px rgba(71, 162, 72, 0.2)",
                              ],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        <SiMongodb className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" />
                      </motion.div>
                    </motion.div>
                    n
                  </span>
                </h1>

                <motion.div
                  className="h-12 sm:h-16 mt-4 sm:mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, ease: "easeOut" }}
                >
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
                    <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      {displayedText}
                    </span>
                    <motion.span
                      className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 lg:h-10 bg-emerald-500 ml-1 sm:ml-2"
                      animate={{ opacity: isTyping ? [0, 1, 0] : [1, 0, 1] }}
                      transition={{ duration: isTyping ? 0.7 : 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                  </h2>
                </motion.div>

                <motion.div
                  className="w-24 sm:w-32 md:w-40 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mt-4 sm:mt-6 md:mt-8 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: windowSize.isMobile ? 96 : windowSize.isTablet ? 128 : 160 }}
                  transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                  style={{ boxShadow: "0 0 8px rgba(16, 185, 129, 0.3)" }}
                />
              </motion.div>
            </div>

            <motion.p
              className="text-sm sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2, ease: "easeOut" }}
            >
              Crafting exceptional digital experiences with modern web technologies. Specialized in building scalable,
              high-performance applications that drive innovation and transform businesses.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-16 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
            >
              <motion.a
                href="#contact"
                className="group relative px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-sm sm:text-lg rounded-full shadow-sm overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="relative z-10">Let's Work Together</span>
              </motion.a>

              <motion.a
                href="#projects"
                className="px-6 sm:px-10 py-3 sm:py-5 border-2 border-emerald-500 text-emerald-600 font-bold text-sm sm:text-lg rounded-full hover:bg-emerald-50 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-2 sm:-inset-4 rounded-full"
                  style={{ background: "conic-gradient(from 0deg, #10b981, #06b6d4, #10b981)" }}
                  animate={{ rotate: shouldReduceMotion ? 0 : 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="absolute inset-1 sm:inset-2 rounded-full bg-white blur-sm" />
                </motion.div>

                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-md border-2 sm:border-4 border-white shadow-sm overflow-hidden">
                    <Image
                      src={Hasnain || "/placeholder.svg"}
                      alt="Hasnain - MERN Stack Developer"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      priority
                    />
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400/05 blur-md"
                    animate={{ scale: shouldReduceMotion ? 1 : [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default HeroSection;