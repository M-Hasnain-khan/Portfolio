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
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCheckCircle,
  FaSpinner,
  FaFacebook,
  FaExclamationTriangle,
} from "react-icons/fa"
import { HiSparkles, HiLightBulb } from "react-icons/hi"

const Contact = () => {
  const contactRef = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(contactRef, { once: true, margin: "-100px" })
  const isFormInView = useInView(formRef, { once: true, margin: "-50px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
    if (submitError) {
      setSubmitError("")
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Portfolio Contact Form`)

      const mailtoLink = `mailto:mohsinlegend3@gmail.com?subject=${subject}&body=${body}`
      window.location.href = mailtoLink

      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })

        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }, 2000)
    } catch (error) {
      console.error("Email sending failed:", error)
      setIsSubmitting(false)
      setSubmitError("Failed to open email client. Please try again or contact me directly via email.")
    }
  }

  const getGmailComposeUrl = () => {
    const subject = encodeURIComponent("Hello from your Portfolio Website!")
    const body = encodeURIComponent(`Hi Mohsin,

I just visited your portfolio website and I'm impressed with your work! I'd like to discuss a potential project/opportunity with you.

Best regards,
[Your Name]`)

    return `https://mail.google.com/mail/?view=cm&fs=1&to=mohsinlegend3@gmail.com&su=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "mohsinlegend3@gmail.com",
      link: `mailto:mohsinlegend3@gmail.com`,
      color: "#EF4444",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+92 (300) 123-4567",
      link: "tel:+923001234567",
      color: "#3B82F6",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Islamabad, PAKISTAN",
      link: "https://maps.google.com/?q=Islamabad,Pakistan",
      color: "#10B981",
    },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative min-h-screen bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-green-50/50" />

      {/* Floating Background Shapes */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full blur-2xl sm:blur-3xl opacity-30" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full blur-2xl sm:blur-3xl opacity-25" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full blur-xl sm:blur-2xl opacity-20" />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <motion.div
            className="inline-block mb-4 sm:mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
              <FaEnvelope className="text-2xl sm:text-3xl text-white" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Touch</span>
          </motion.h2>

          <motion.div
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: "8rem" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />

          <motion.p
            className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together. I'm
            always excited to work on new challenges!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div className="space-y-6 sm:space-y-8" variants={itemVariants} transition={{ delay: 0.3 }}>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100">
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <HiLightBulb className="text-emerald-600 mr-3" />
                Let's Connect
              </motion.h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.title === "Email" ? "_blank" : "_self"}
                    rel={info.title === "Email" ? "noopener noreferrer" : ""}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${info.color}15` }}
                    >
                      <info.icon className="text-xl sm:text-2xl" style={{ color: info.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300 text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base break-all">
                        {info.value}
                      </p>
                      {info.title === "Email" && <p className="text-xs text-emerald-600 mt-1">Click to send email</p>}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-emerald-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Follow Me</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    >
                      <social.icon
                        className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300"
                        style={{ color: social.color }}
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">24h</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">Response Time</div>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">100%</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100"
            variants={formVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
          >
            <motion.div className="flex items-center mb-6 sm:mb-8" variants={inputVariants}>
              <HiSparkles className="text-emerald-600 text-xl sm:text-2xl mr-3" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Send Message</h3>
            </motion.div>

            {isSubmitted && (
              <motion.div
                className="bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 flex items-start"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaCheckCircle className="text-green-600 text-lg sm:text-xl mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 text-sm sm:text-base">Email Client Opened!</h4>
                  <p className="text-green-600 text-sm">
                    Your email client should open with the message pre-filled. Send it to reach me at
                    mohsinlegend3@gmail.com!
                  </p>
                </div>
              </motion.div>
            )}

            {submitError && (
              <motion.div
                className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 flex items-start"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaExclamationTriangle className="text-red-600 text-lg sm:text-xl mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-800 text-sm sm:text-base">Unable to Open Email Client</h4>
                  <p className="text-red-600 text-sm">{submitError}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div variants={inputVariants}>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    <FaUser className="inline mr-2 text-emerald-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 cursor-pointer text-sm sm:text-base ${
                      errors.name ? "border-red-500" : "border-gray-200 hover:border-emerald-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <motion.p
                      className="text-red-500 text-xs sm:text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={inputVariants}>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    <FaEnvelope className="inline mr-2 text-emerald-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 cursor-pointer text-sm sm:text-base ${
                      errors.email ? "border-red-500" : "border-gray-200 hover:border-emerald-300"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <motion.p
                      className="text-red-500 text-xs sm:text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div variants={inputVariants}>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  <HiSparkles className="inline mr-2 text-emerald-600" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 cursor-pointer text-sm sm:text-base ${
                    errors.subject ? "border-red-500" : "border-gray-200 hover:border-emerald-300"
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <motion.p
                    className="text-red-500 text-xs sm:text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={inputVariants}>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  <FaComment className="inline mr-2 text-emerald-600" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none cursor-pointer text-sm sm:text-base ${
                    errors.message ? "border-red-500" : "border-gray-200 hover:border-emerald-300"
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                />
                {errors.message && (
                  <motion.p
                    className="text-red-500 text-xs sm:text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:scale-105"
                variants={inputVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="inline mr-2 animate-spin" />
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="inline mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            <motion.div
              className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 text-center"
              variants={inputVariants}
            >
              <p className="text-gray-600 text-sm sm:text-base">
                Prefer direct email?{" "}
                <a
                  href={getGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 cursor-pointer underline break-all"
                >
                  mohsinlegend3@gmail.com
                </a>
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">Click to compose email directly in Gmail</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full -translate-y-24 sm:-translate-y-32 translate-x-24 sm:translate-x-32" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Ready to Start Something Great?
              </h3>
              <p className="text-emerald-100 text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
                Whether it's a simple website or a complex web application, I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={getGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer inline-flex items-center justify-center"
                >
                  <HiSparkles className="inline mr-2" />
                  Start Project
                </a>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
