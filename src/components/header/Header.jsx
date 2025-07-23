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

  // Optimized scroll detection with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Optimized scroll detection for header background
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function
  const handleNavClick = (e, href, id) => {
    e.preventDefault()
    setActiveSection(id)

    const element = document.getElementById(id)
    if (element) {
      const headerHeight = window.innerWidth >= 768 ? 80 : 0
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* === DESKTOP HEADER ONLY === */}
      <motion.header
        className={`fixed w-full top-0 z-50 border-b transition-all duration-300 ease-out hidden md:block ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-emerald-200/30"
            : "bg-white/80 backdrop-blur-md shadow-md border-emerald-200/20"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            className="text-2xl lg:text-3xl font-extrabold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <span className="text-gray-900">M-</span>
            <span className="text-emerald-600">Hasnain</span>
          </motion.h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`text-base lg:text-lg font-medium relative cursor-pointer transition-colors duration-200 ${
                  activeSection === link.id ? "text-emerald-600" : "text-gray-700"
                }`}
                whileHover={{
                  scale: 1.05,
                  color: "#0F9D58",
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {link.name}
                <motion.span
                  className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: activeSection === link.id ? "100%" : "0%",
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{
                    duration: 0.2,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact", "contact")}
            className="hidden md:block bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm lg:text-base shadow-lg cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.header>

      {/* === MOBILE/TABLET BOTTOM NAVIGATION ONLY === */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-emerald-200/30 md:hidden z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        <div className="flex justify-around items-center py-2 px-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.id)}
              className={`flex flex-col items-center py-2 px-2 rounded-xl transition-all duration-200 cursor-pointer relative ${
                activeSection === link.id
                  ? "text-emerald-600 bg-emerald-50/70"
                  : "text-gray-500 hover:text-emerald-600 hover:bg-emerald-50/30"
              }`}
              whileHover={{
                scale: 1.1,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Active indicator dot */}
              {activeSection === link.id && (
                <motion.div
                  className="absolute -top-1 w-1.5 h-1.5 bg-emerald-500 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                />
              )}

              {/* Icon */}
              <motion.div
                className="mb-1"
                animate={{
                  scale: activeSection === link.id ? 1.1 : 1,
                  color: activeSection === link.id ? "#0F9D58" : "inherit",
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <link.icon className="text-lg" />
              </motion.div>

              {/* Text */}
              <motion.span
                className="text-xs font-medium"
                animate={{
                  color: activeSection === link.id ? "#0F9D58" : "inherit",
                  fontWeight: activeSection === link.id ? 600 : 500,
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {link.name}
              </motion.span>

              {/* Active background glow */}
              {activeSection === link.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-emerald-100/50 to-transparent rounded-xl -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Bottom safe area for newer phones */}
        <div className="h-safe-area-inset-bottom bg-white/95" />
      </motion.div>
    </>
  )
}

export default Header
