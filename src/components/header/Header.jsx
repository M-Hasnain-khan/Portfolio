import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
    <motion.header
      className="bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 z-50 border-b border-[#0F9D58]/20"
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
          <span className="text-[#0F9D58]">M-</span>Hasnain
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
          className="hidden md:block bg-[#0F9D58] text-white px-5 py-2 rounded-full font-medium hover:bg-[#0c7b45] transition-colors shadow-md"
          whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(15, 157, 88, 0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-black p-2 rounded-full hover:bg-[#0F9D58]/10"
          onClick={toggleMenu}
          variants={hamburgerVariants}
          whileHover="hover"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className={`md:hidden bg-white/95 backdrop-blur-md ${isOpen ? 'block' : 'hidden'}`}
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
          <motion.li
            variants={linkVariants}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#contact"
              className="bg-[#0F9D58] text-white px-5 py-2 rounded-full font-medium hover:bg-[#0c7b45]"
            >
              Contact Me
            </a>
          </motion.li>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
