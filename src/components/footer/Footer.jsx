"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowUp,
  FaHeart,
  FaPaperPlane,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaCoffee,
  FaCheckCircle,
  FaFacebook,
} from "react-icons/fa"
import { HiSparkles, HiMail } from "react-icons/hi"
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from "react-icons/si"

const Footer = () => {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubscribing(true)

    // Simulate subscription
    setTimeout(() => {
      setIsSubscribing(false)
      setIsSubscribed(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }, 1500)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const navigationLinks = [
    { name: "Home", href: "#home", icon: FaRocket },
    { name: "About", href: "#about", icon: FaLightbulb },
    { name: "Skills", href: "#skills", icon: FaCode },
    { name: "Projects", href: "#projects", icon: FaRocket },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ]

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "Frontend Development", href: "#services" },
    { name: "Backend Development", href: "#services" },
    { name: "Full Stack Solutions", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-hasnain-web-developer-2184892b5/",
      color: "#0077B5",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/mohsinlegend3",
      color: "#333333",
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      url: "https://facebook.com/mohsinlegend3",
      color: "#1877F2",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://instagram.com/mohsinlegend3",
      color: "#E4405F",
    },
  ]

  const techStack = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <footer ref={footerRef} className="relative bg-white border-t border-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-green-50/30" />

      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full blur-3xl opacity-15" />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <div className="mb-6">
                <motion.h3
                  className="text-3xl font-bold text-gray-900 mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  M-Hasnain
                  <span className="text-emerald-600">.</span>
                </motion.h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Passionate MERN Stack Developer crafting digital experiences that make a difference. Let's build
                  something amazing together!
                </p>
              </div>

              {/* Tech Stack Icons */}
              <div className="flex space-x-3 mb-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <tech.icon className="text-lg" style={{ color: tech.color }} />
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 group"
                    variants={socialVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon
                      className="text-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FaRocket className="text-emerald-600 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-300 cursor-pointer group"
                    >
                      <link.icon className="text-sm mr-3 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCode className="text-emerald-600 mr-2" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <a
                      href={service.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block transition-transform duration-300"
                    >
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <HiMail className="text-emerald-600 mr-2" />
                Stay Updated
              </h4>
              <p className="text-gray-600 mb-6">
                Subscribe to get the latest updates on new projects and tech insights!
              </p>

              {isSubscribed && (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 flex items-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="text-green-600 mr-3" />
                  <div>
                    <p className="text-green-800 font-semibold">Successfully subscribed!</p>
                    <p className="text-green-600 text-sm">Thank you for joining!</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 cursor-pointer hover:border-emerald-300"
                    required
                  />
                  <HiSparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-400" />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 cursor-pointer hover:scale-105"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubscribing ? (
                    <>
                      <motion.div
                        className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="inline mr-2" />
                      Subscribe
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <motion.div className="py-8 border-t border-gray-200" variants={itemVariants} transition={{ delay: 0.8 }}>
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <motion.a
              href="mailto:mohsinlegend3@gmail.com"
              className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                <FaEnvelope className="text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm">mohsinlegend3@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+923001234567"
              className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <FaPhone className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm">+92 (300) 123-4567</p>
              </div>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=Islamabad,Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <FaMapMarkerAlt className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm">Islamabad, Pakistan</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div className="py-8 border-t border-gray-200" variants={itemVariants} transition={{ delay: 1 }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>and</span>
              <FaCoffee className="text-amber-600" />
              <span>by M-Hasnain</span>
            </div>

            <div className="flex items-center space-x-6">
              <p className="text-gray-600 text-sm">© 2024 M-Hasnain. All rights reserved.</p>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <FaArrowUp className="text-lg" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-emerald-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-3 h-3 bg-green-400 rounded-full opacity-50"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-2 h-2 bg-emerald-500 rounded-full opacity-40"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </footer>
  )
}

export default Footer;
