"use client";

import { useState, useEffect, memo } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-5000 bg-[var(--color-light-bg)] dark:bg-[var(--color-dark-bg)]text-lightText dark:text-darkText transition-colors duration-50 ${
        isScrolled ? "h-12 shadow-md" : "h-16"
        
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">VirtuPath AI</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-purple-400 transition-colors duration-150">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400 transition-colors duration-150">
            About
          </a>
          <a href="#services" className="hover:text-purple-400 transition-colors duration-150">
            Services
          </a>
          <a href="#contact" className="hover:text-purple-400 transition-colors duration-150">
            Contact
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode((prevMode) => !prevMode)}
            className="ml-4 p-2 rounded-full text-gray-800 dark:text-gray-200 transition-colors duration-150"
            >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none transition-colors duration-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-all duration-150 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a
            href="#home"
            className="hover:text-purple-400 transition-colors duration-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-purple-400 transition-colors duration-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-purple-400 transition-colors duration-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors duration-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setDarkMode((prevMode) => !prevMode)}
            className="p-2 rounded-full text-gray-800 dark:text-gray-100 transition-colors duration-100"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);