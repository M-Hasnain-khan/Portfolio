'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaLaptopCode,
  FaTools,
  FaEnvelope,
} from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#herosection',id: 'herosection',},
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#0F9D58',
      textShadow: '0 0 6px rgba(15, 157, 88, 0.4)',
      transition: { duration: 0.3 },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const hamburgerVariants = {
    hover: {
      scale: 1.2,
      color: '#0F9D58',
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      {/* === Desktop Header === */}
      <motion.header
      id="header"
        className="bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 z-50 border-b border-[#0F9D58]/20 hidden md:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            className="text-3xl font-extrabold text-black"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-black">M-</span>
            <span className="text-[#0F9D58] glow">Hasnain</span>
          </motion.h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-black text-lg font-medium relative group"
                variants={linkVariants}
                whileHover="hover"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0F9D58] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:block bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.header>

      {/* === Mobile Slide Menu === */}
      <motion.nav
        className={`md:hidden bg-white/95 backdrop-blur-md mt-14 ${isOpen ? 'block' : 'hidden'}`}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={menuVariants}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <motion.li key={link.name} variants={linkVariants} whileHover="hover">
              <a
                href={link.href}
                className="text-black text-lg font-medium relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0F9D58] group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
          <motion.li variants={linkVariants} whileHover={{ scale: 1.05 }}>
            <a
              href="#contact"
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.li>
        </ul>
      </motion.nav>

      {/* === Bottom Nav (Mobile / Tablet) === */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-t border-t border-[#0F9D58]/20 md:hidden z-50">
        <div className="flex justify-around items-center py-1.5 px-2">
          <a href="#home" className="flex flex-col items-center text-[#0F9D58]">
            <FaHome className="text-lg mb-0.5" />
            <span className="text-[9px] font-medium">Home</span>
          </a>
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-[#0F9D58] transition-all">
            <FaUser className="text-lg mb-0.5" />
            <span className="text-[9px] font-medium">About</span>
          </a>
          <a href="#skills" className="flex flex-col items-center text-gray-500 hover:text-[#0F9D58] transition-all">
            <FaTools className="text-lg mb-0.5" />
            <span className="text-[9px] font-medium">Skills</span>
          </a>
          <a href="#projects" className="flex flex-col items-center text-gray-500 hover:text-[#0F9D58] transition-all">
            <FaLaptopCode className="text-lg mb-0.5" />
            <span className="text-[9px] font-medium">Projects</span>
          </a>
          <a href="#contact" className="flex flex-col items-center text-gray-500 hover:text-[#0F9D58] transition-all">
            <FaEnvelope className="text-lg mb-0.5" />
            <span className="text-[9px] font-medium">Contact</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
