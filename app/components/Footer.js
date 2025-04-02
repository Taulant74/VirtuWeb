import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText py-12 border-t border-gray-700/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Branding */}
          <div>
            <h2 className="text-2xl font-bold text-purple-500">VirtuPath AI</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Empowering careers with structured learning paths and AI-driven insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-purple">About Us</a></li>
              <li><a href="#careers" className="hover:text-purple">Careers</a></li>
              <li><a href="#blog" className="hover:text-purple">Blog</a></li>
              <li><a href="#contact" className="hover:text-purple">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-purple">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-purple">Terms of Service</a></li>
              <li><a href="#support" className="hover:text-purple">Support</a></li>
              <li><a href="#faq" className="hover:text-purple">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
              />
              <button className="px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 ">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 ">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaLinkedin className="text-xl" />
            </a>
          </div>

          {/* Payment Methods */}
          <div className="flex space-x-4">
            <FaCcVisa className="text-2xl text-gray-500 dark:text-gray-400" />
            <FaCcMastercard className="text-2xl text-gray-500 dark:text-gray-400" />
            <FaCcPaypal className="text-2xl text-gray-500 dark:text-gray-400" />
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} VirtuPath AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
