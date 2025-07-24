"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaHome, FaUser, FaLaptopCode, FaTools, FaEnvelope } from "react-icons/fa"

const Header = () => {
  const [activeSection, setActiveSection] = useState("herosection")
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: "Home", href: "#herosection", id: "herosection", icon: FaHome },
    { name: "About", href: "#about", id: "about", icon: FaUser },
    { name: "Skills", href: "#skills", id: "skills", icon: FaTools },
    { name: "Projects", href: "#projects", id: "projects", icon: FaLaptopCode },
    { name: "Contact", href: "#contact", id: "contact", icon: FaEnvelope },
  ]

  // Fixed scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = window.innerWidth >= 768 ? 80 : 0
      const offsetPosition = element.offsetTop - headerHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  // Shared styles for active/hover states
  const activeHoverStyles = {
    color: "#0F9D58",
    textShadow: "0 0 8px rgba(15, 157, 88, 0.4)",
    scale: 1.05,
  }

  return (
    <>
      {/* DESKTOP HEADER */}
      <motion.header
        className={`fixed w-full top-0 z-50 border-b transition-all duration-300 hidden md:block ${
          scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg" : "bg-white/80 backdrop-blur-md shadow-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-gray-900">M-</span>
            <span className="text-emerald-600">Hasnain</span>
          </motion.h1>

          {/* Desktop Nav */}
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-lg font-medium relative cursor-pointer"
                animate={
                  activeSection === link.id ? activeHoverStyles : { color: "#374151", textShadow: "none", scale: 1 }
                }
                whileHover={activeHoverStyles}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {link.name}
                <motion.span
                  className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                  animate={{ width: activeSection === link.id ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.header>

      {/* MOBILE BOTTOM NAV */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-emerald-200/30 md:hidden z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-around items-center py-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className="flex flex-col items-center py-2 px-3 rounded-xl cursor-pointer relative"
              animate={
                activeSection === link.id
                  ? {
                      color: "#0F9D58",
                      scale: 1.1,
                      y: -2,
                      textShadow: "0 0 8px rgba(15, 157, 88, 0.4)",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                    }
                  : {
                      color: "#6B7280",
                      scale: 1,
                      y: 0,
                      textShadow: "none",
                      backgroundColor: "transparent",
                    }
              }
              whileHover={{
                color: "#0F9D58",
                scale: 1.1,
                y: -2,
                textShadow: "0 0 8px rgba(15, 157, 88, 0.4)",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Active/Hover Glow Effect */}
              {activeSection === link.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-emerald-100/50 to-emerald-50/30 rounded-xl -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Active Indicator Dot */}
              {activeSection === link.id && (
                <motion.div
                  className="absolute -top-1 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)" }}
                />
              )}

              {/* Icon */}
              <link.icon className="text-lg mb-1" />

              {/* Text */}
              <span className="text-xs font-medium">{link.name}</span>

              {/* Underline Animation */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                animate={{
                  width: activeSection === link.id ? "80%" : "0%",
                  opacity: activeSection === link.id ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Header
