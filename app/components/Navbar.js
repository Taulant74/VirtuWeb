"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // Import icons
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
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

  // Toggle dark mode and persist preference in localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, [setDarkMode]);

  if (!isScrolled) {
    return null; // Do not render the navbar if not scrolled
  }

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                    px-6 py-3 flex items-center justify-center gap-6 
                    rounded-full transition-all duration-300 shadow-lg
                    bg-darkBackground/70 backdrop-blur-md`}
      >
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {["About", "Projects", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${
                darkMode ? "text-gray-200" : "text-gray-900"
              } hover:text-purple-400 transition font-medium`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${
            darkMode ? "text-gray-200" : "text-gray-900"
          } focus:outline-none`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 w-60 ${
            darkMode ? "bg-darkBackground" : "bg-gray-100"
          } rounded-xl p-5 flex flex-col space-y-4 transition-transform duration-300 shadow-xl ${
            isMenuOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
          }`}
        >
          {["About", "Projects", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${
                darkMode ? "text-gray-200" : "text-gray-700"
              } hover:text-purple-400 transition text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Floating Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        className="fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
      >
        {darkMode ? (
          <FaMoon className="h-6 w-6 transition-transform duration-300" />
        ) : (
          <FaSun className="h-6 w-6 transition-transform duration-300" />
        )}
      </button>
    </>
  );
}
