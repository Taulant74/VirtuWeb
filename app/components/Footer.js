import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a href="#home" className="hover:text-white transition duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-white transition duration-300">
            About
          </a>
          <a href="#contact" className="hover:text-white transition duration-300">
            Contact
          </a>
          <a href="#privacy" className="hover:text-white transition duration-300">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-right">
          <p className="text-sm">&copy; {new Date().getFullYear()} VirtuPath AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}