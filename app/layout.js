"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-theme text-theme transition-colors duration-300 antialiased">
        {/* Theme Toggle */}
        <div className="container mx-auto py-4 flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
