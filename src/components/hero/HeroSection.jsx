"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
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

  const roles = ["MERN Stack Developer", "Full Stack Developer", "Web Developer", "UI/UX Designer"]

  // Show content after initial delay
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Smooth typewriter effect
  useEffect(() => {
    if (!showContent) return

    const typeText = () => {
      const text = roles[currentRole]
      let i = 0
      setIsTyping(true)

      const type = setInterval(() => {
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i))
          i++
        } else {
          clearInterval(type)
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            const erase = setInterval(() => {
              setDisplayedText((prev) => {
                if (prev.length > 0) return prev.slice(0, -1)
                clearInterval(erase)
                setCurrentRole((prev) => (prev + 1) % roles.length)
                return ""
              })
            }, 30) // Faster erasing
          }, 1000)
        }
      }, 60) // Smoother typing
    }

    const timer = setTimeout(typeText, 1000)
    return () => clearTimeout(timer)
  }, [currentRole, showContent])

  // Responsive orbital layers
  const getOrbitalLayers = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const isTablet = typeof window !== "undefined" && window.innerWidth < 1024

    if (isMobile) {
      return [
        {
          radius: 120,
          icons: [
            { icon: FaReact, name: "React", color: "#61DAFB", angle: 0 },
            { icon: SiNextdotjs, name: "Next.js", color: "#000000", angle: 120 },
            { icon: SiMongodb, name: "MongoDB", color: "#47A248", angle: 240 },
            { icon: FaCss3Alt, name: "CSS3", color: "#1572B6", angle: 90 },

          ],
          duration: 10,
        },
        {
          radius: 180,
          icons: [
            { icon: FaHtml5, name: "HTML5", color: "#E34F26", angle: 0 },

            { icon: FaNodeJs, name: "Node.js", color: "#339933", angle: 60 },
            { icon: FaJs, name: "JavaScript", color: "#F7DF1E", angle: 180 },
          ],
          duration: 17,
        },
      ]
    }

    if (isTablet) {
      return [
        {
          radius: 200,
          icons: [
            { icon: FaHtml5, name: "HTML5", color: "#E34F26", angle: 0 },
            { icon: FaCss3Alt, name: "CSS3", color: "#1572B6", angle: 90 },
            { icon: FaJs, name: "JavaScript", color: "#F7DF1E", angle: 180 },
            { icon: SiTypescript, name: "TypeScript", color: "#3178C6", angle: 270 },
          ],
          duration: 19,
        },
        {
          radius: 280,
          icons: [
            { icon: FaReact, name: "React", color: "#61DAFB", angle: 45 },
            { icon: SiNextdotjs, name: "Next.js", color: "#000000", angle: 135 },
            { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", angle: 225 },
          ],
          duration: 20,
        },
        {
          radius: 360,
          icons: [
            { icon: FaNodeJs, name: "Node.js", color: "#339933", angle: 0 },
            { icon: SiMongodb, name: "MongoDB", color: "#47A248", angle: 180 },
          ],
          duration: 23,
        },
      ]
    }

    // Desktop
    return [
      {
        radius: 280,
        icons: [
          { icon: FaHtml5, name: "HTML5", color: "#E34F26", angle: 0 },
          { icon: FaCss3Alt, name: "CSS3", color: "#1572B6", angle: 90 },
          { icon: FaJs, name: "JavaScript", color: "#F7DF1E", angle: 180 },
          { icon: SiTypescript, name: "TypeScript", color: "#3178C6", angle: 270 },
        ],
        duration: 15,
      },
      {
        radius: 380,
        icons: [
          { icon: FaReact, name: "React", color: "#61DAFB", angle: 45 },
          { icon: SiNextdotjs, name: "Next.js", color: "#000000", angle: 135 },
          { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", angle: 225 },
        ],
        duration: 19,
      },
      {
        radius: 480,
        icons: [
          { icon: FaNodeJs, name: "Node.js", color: "#339933", angle: 0 },
          { icon: SiMongodb, name: "MongoDB", color: "#47A248", angle: 180 },
        ],
        duration: 24,
      },
    ]
  }

  const [orbitalLayers, setOrbitalLayers] = useState(getOrbitalLayers())

  // Update orbital layers on resize
  useEffect(() => {
    const handleResize = () => {
      setOrbitalLayers(getOrbitalLayers())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section
      ref={containerRef}
      id="herosection"
      className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center -mt-20 md:mt-0 lg:-mt-1 md:pt-20"
    >
      {/* Background with side glows */}
      <div className="absolute inset-0">
        {/* Main background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/20 to-green-50/30" />

        {/* Left side glow */}
        <div className="absolute left-0 top-0 w-48 md:w-96 h-full bg-gradient-to-r from-emerald-500/10 via-emerald-300/5 to-transparent blur-3xl" />

        {/* Right side glow */}
        <div className="absolute right-0 top-0 w-48 md:w-96 h-full bg-gradient-to-l from-green-500/10 via-green-300/5 to-transparent blur-3xl" />

        {/* Top glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 md:h-64 bg-gradient-to-b from-emerald-400/5 to-transparent blur-2xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      {showContent && (
        <motion.div
          className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="text-center">
            {/* Responsive Orbital System Container */}
            <div className="relative inline-block mb-8 md:mb-16">
              {/* Responsive Orbital Rings */}
              {[1, 2, 3, 4].map((ring) => {
                const baseSize =
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? 100
                    : typeof window !== "undefined" && window.innerWidth < 1024
                      ? 150
                      : 200
                return (
                  <motion.div
                    key={ring}
                    className="absolute top-1/2 left-1/2 border border-emerald-200/30 rounded-full"
                    style={{
                      width: `${baseSize + ring * (window.innerWidth < 768 ? 60 : window.innerWidth < 1024 ? 80 : 120)}px`,
                      height: `${baseSize + ring * (window.innerWidth < 768 ? 60 : window.innerWidth < 1024 ? 80 : 120)}px`,
                      marginTop: `${-(baseSize / 2 + ring * (window.innerWidth < 768 ? 30 : window.innerWidth < 1024 ? 40 : 60))}px`,
                      marginLeft: `${-(baseSize / 2 + ring * (window.innerWidth < 768 ? 30 : window.innerWidth < 1024 ? 40 : 60))}px`,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1.8,
                      delay: 0.3 + ring * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                )
              })}

              {/* Ultra Smooth Glowing Orbital Rings */}
              {[1, 2, 3].map((ring) => {
                const baseSize =
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? 150
                    : typeof window !== "undefined" && window.innerWidth < 1024
                      ? 250
                      : 300
                return (
                  <motion.div
                    key={`glow-${ring}`}
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                      width: `${baseSize + ring * (window.innerWidth < 768 ? 80 : window.innerWidth < 1024 ? 100 : 140)}px`,
                      height: `${baseSize + ring * (window.innerWidth < 768 ? 80 : window.innerWidth < 1024 ? 100 : 140)}px`,
                      marginTop: `${-(baseSize / 2 + ring * (window.innerWidth < 768 ? 40 : window.innerWidth < 1024 ? 50 : 70))}px`,
                      marginLeft: `${-(baseSize / 2 + ring * (window.innerWidth < 768 ? 40 : window.innerWidth < 1024 ? 50 : 70))}px`,
                      background: `conic-gradient(from 0deg, 
                        transparent, 
                        rgba(16, 185, 129, 0.12), 
                        transparent, 
                        rgba(34, 197, 94, 0.08), 
                        transparent,
                        rgba(6, 182, 212, 0.1),
                        transparent
                      )`,
                      filter: "blur(2px)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30 + ring * 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                )
              })}

              {/* Planetary Orbiting Tech Icons - NO HOVER INTERFERENCE */}
              {orbitalLayers.map((layer, layerIndex) =>
                layer.icons.map((tech, iconIndex) => {
                  const iconSize =
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? "w-10 h-10"
                      : typeof window !== "undefined" && window.innerWidth < 1024
                        ? "w-12 h-12"
                        : "w-14 h-14"
                  const iconTextSize =
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? "text-lg"
                      : typeof window !== "undefined" && window.innerWidth < 1024
                        ? "text-xl"
                        : "text-2xl"

                  return (
                    <motion.div
                      key={`${layerIndex}-${tech.name}`}
                      className="absolute top-1/2 left-1/2 pointer-events-none"
                      style={{
                        marginTop: typeof window !== "undefined" && window.innerWidth < 768 ? "-20px" : "-28px",
                        marginLeft: typeof window !== "undefined" && window.innerWidth < 768 ? "-20px" : "-28px",
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: layer.duration + iconIndex * 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <motion.div
                        className="relative"
                        style={{
                          transform: `translateX(${layer.radius}px) rotate(${tech.angle}deg)`,
                        }}
                      >
                        <motion.div
                          className={`${iconSize} rounded-full flex items-center justify-center shadow-xl border-2 border-white/90 backdrop-blur-sm`}
                          style={{
                            background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}20)`,
                            boxShadow: `0 8px 32px ${tech.color}35, 0 0 20px ${tech.color}25`,
                            opacity: 1,
                          }}
                          animate={{
                            rotate: -360,
                            y: [0, -2, 0],
                            boxShadow: [
                              `0 8px 32px ${tech.color}35, 0 0 20px ${tech.color}25`,
                              `0 12px 40px ${tech.color}45, 0 0 25px ${tech.color}35`,
                              `0 8px 32px ${tech.color}35, 0 0 20px ${tech.color}25`,
                            ],
                          }}
                          transition={{
                            rotate: {
                              duration: layer.duration + iconIndex * 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            },
                            y: {
                              duration: 4 + iconIndex * 0.3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            },
                            boxShadow: {
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            },
                          }}
                        >
                          <tech.icon className={iconTextSize} style={{ color: tech.color }} />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )
                }),
              )}

              {/* Central Name with MongoDB Icon */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.8,
                  delay: 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <h1 className="text-4xl sm:text-6xl flex mt-18 md:text-7xl lg:text-8xl xl:text-8xl font-black text-gray-900 leading-none">
                   <p className="text-emerald-600"> M- </p>
                  <span className="relative">
                  Hasna
                    {/* MongoDB Icon replacing "i" */}
                    <motion.div
                      className="inline-block align-middle mx-1 sm:mx-2 relative"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, #47A248, #4CAF50)",
                          boxShadow: "0 8px 32px rgba(71, 162, 72, 0.4), 0 0 25px rgba(71, 162, 72, 0.3)",
                        }}
                        animate={{
                          boxShadow: [
                            "0 8px 32px rgba(71, 162, 72, 0.4), 0 0 25px rgba(71, 162, 72, 0.3)",
                            "0 12px 40px rgba(71, 162, 72, 0.6), 0 0 35px rgba(71, 162, 72, 0.5)",
                            "0 8px 32px rgba(71, 162, 72, 0.4), 0 0 25px rgba(71, 162, 72, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <SiMongodb className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" />
                      </motion.div>
                    </motion.div>
                    n
                  </span>
                </h1>

                {/* Ultra Smooth Animated Role Typewriter */}
                <motion.div
                  className="h-12 sm:h-16 mt-4 sm:mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
                    <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      {displayedText}
                    </span>
                    <motion.span
                      className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 lg:h-10 bg-emerald-500 ml-1 sm:ml-2"
                      animate={{
                        opacity: isTyping ? [0, 1, 0] : [1, 0, 1],
                      }}
                      transition={{
                        duration: isTyping ? 0.8 : 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </h2>
                </motion.div>

                {/* Glowing accent line */}
                <motion.div
                  className="w-24 sm:w-32 md:w-40 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mt-4 sm:mt-6 md:mt-8 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      typeof window !== "undefined" && window.innerWidth < 768
                        ? 96
                        : window.innerWidth < 1024
                          ? 128
                          : 160,
                  }}
                  transition={{ duration: 1.5, delay: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
                  }}
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Crafting exceptional digital experiences with modern web technologies. Specialized in building scalable,
              high-performance applications that drive innovation and transform businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 3.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.a
                href="#contact"
                className="group relative px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-sm sm:text-lg rounded-full shadow-xl overflow-hidden cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Let's Work Together</span>
              </motion.a>

              <motion.a
                href="#projects"
                className="px-6 sm:px-10 py-3 sm:py-5 border-2 border-emerald-500 text-emerald-600 font-bold text-sm sm:text-lg rounded-full hover:bg-emerald-50 transition-all duration-500 cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  boxShadow: "0 12px 30px rgba(16, 185, 129, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Profile Image at Bottom */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 3.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative">
                {/* Ultra smooth rotating gradient ring */}
                <motion.div
                  className="absolute -inset-2 sm:-inset-4 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #10b981, #06b6d4, #8b5cf6, #f59e0b, #10b981)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="absolute inset-1 sm:inset-2 rounded-full bg-white blur-sm" />
                </motion.div>

                {/* Profile image container */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl border-2 sm:border-4 border-white shadow-2xl overflow-hidden">
                    <Image
                      src={Hasnain || "/placeholder.svg"}
                      alt="Hasnain - MERN Stack Developer"
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                      priority
                    />
                  </div>

                  {/* Ultra smooth pulsing glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400/15 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
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

export default HeroSection
