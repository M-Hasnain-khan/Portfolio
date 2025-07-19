'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb } from 'react-icons/si';

const HeroSection = () => {
  const roles = ['MERN Stack', 'Web Developer', 'Web Designer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0.5, x: 0, y: 0 },
    animate: (custom) => ({
      opacity: 0.9,
      scale: 1,
      x: custom.x,
      y: custom.y,
      transition: { duration: 1, delay: custom.delay, ease: 'easeOut' },
    }),
    hover: { scale: 1.3, transition: { duration: 0.3 } },
  };

  const mongodbVariants = {
    initial: { opacity: 0, scale: 0.5, x: 0, y: 0 },
    animate: (custom) => ({
      opacity: 0.9,
      scale: 1,
      x: custom.x,
      y: custom.y,
      transition: { duration: 1, delay: custom.delay, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.3,
      boxShadow: '0 0 10px rgba(0, 255, 178, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  const iconPositions = isMobile
    ? [
        { x: -150, y: -150, delay: 0.1 }, // HTML5
        { x: 150, y: -150, delay: 0.2 }, // CSS3
        { x: -150, y: 0, delay: 0.3 }, // React
        { x: 150, y: 100, delay: 0.4 }, // Next.js
        { x: 110, y: -290, delay: 0.5 }, // MongoDB (above underscore)
        { x: -150, y: 200, delay: 0.6 }, // Node.js
      ]
    : isTablet
    ? [
        { x: -200, y: 150, delay: 0.1 }, // HTML5
        { x: 200, y: -150, delay: 0.2 }, // CSS3
        { x: -300, y: -200, delay: 0.3 }, // React
        { x: 200, y: 200, delay: 0.4 }, // Next.js
        { x: -160, y: -140, delay: 0.5 }, // MongoDB (above underscore)
        { x: 300, y: 150, delay: 0.6 }, // Node.js
      ]
    : [
        { x: -350, y: 230, delay: 0.1 }, // HTML5
        { x: 220, y: -190, delay: 0.2 }, // CSS3
        { x: -580, y: -280, delay: 0.3 }, // React
        { x: 160, y: 240, delay: 0.4 }, // Next.js
        { x: -250, y: -170, delay: 0.5 }, // MongoDB (above underscore)
        { x: 520, y: 190, delay: 0.6 }, // Node.js
      ];

  const techIcons = [
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaReact />,
    <SiNextdotjs />,
    <SiMongodb />,
    <FaNodeJs />,
  ];

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 178, 0.5)' },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#f0fff5] to-white overflow-hidden flex items-center justify-center">
      {/* 🎇 Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e6ffee] via-[#f4fff9] to-[#e6ffee] opacity-70 z-0" />
      <div className="absolute w-full h-full bg-[radial-gradient(#0F9D5833_1px,transparent_1px)] [background-size:20px_20px] z-0" />
      <div className="absolute w-[300px] h-[300px] bg-green-200 rounded-full blur-3xl top-10 left-10 opacity-40 animate-pulse z-0" />
      <div className="absolute w-[250px] h-[250px] bg-green-400 rounded-full blur-2xl bottom-10 right-10 opacity-30 animate-spin-slow z-0" />

      {/* 💻 Icons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {techIcons.map((Icon, index) => (
          <motion.div
            key={index}
            custom={iconPositions[index]}
            variants={index === 4 ? mongodbVariants : iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="absolute"
          >
            <Icon.type
              size={isMobile ? 28 : isTablet ? 40 : 50}
              className={`text-[#0F9D58] opacity-90 cursor-pointer ${
                index === 4 ? 'drop-shadow-[0_0_5px_rgba(0,255,178,0.5)]' : ''
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* 👨‍💻 Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-20">
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-black"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="text-[#0F9D58] relative">M-Hasna_n</span>
          </motion.h1>

          <div className="h-16">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[currentRole]}
                className="text-2xl md:text-4xl font-semibold text-[#0F9D58]"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                I am a {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I build high-performance web apps using React, Next.js, Node, and MongoDB. Passionate about design and user experience.
          </motion.p>

          <div className="flex justify-center md:justify-start space-x-4">
            <motion.a
              href="#contact"
              className="bg-[#0F9D58] text-white px-6 py-3 rounded-full font-medium cursor-pointer hover:bg-[#066442]"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-[#0F9D58] text-[#0F9D58] px-6 py-3 rounded-full font-medium cursor-pointer hover:bg-[#0F9D58] hover:text-white"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View Projects
            </motion.a>
          </div>
        </div>

        {/* 🖼 Image */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-52 h-52 md:w-80 md:h-80 bg-white rounded-full border-4 border-[#0F9D58] shadow-2xl overflow-hidden flex items-center justify-center">
            <img
              src="https://via.placeholder.com/400"
              alt="M-Hasna_n"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;