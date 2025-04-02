"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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

  if (!isScrolled) {
    return null; // Do not render the navbar if not scrolled
  }

  return (
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
            className="text-gray-200 hover:text-purple-400 transition font-medium"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-200 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 w-60 bg-darkBackground rounded-xl
                    p-5 flex flex-col space-y-4 transition-transform duration-300 shadow-xl
                    ${isMenuOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"}`}
      >
        {["About", "Projects", "Testimonials", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-200 hover:text-purple-400 transition text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
