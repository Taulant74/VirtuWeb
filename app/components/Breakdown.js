"use client";

import { FaFolderOpen, FaRocket, FaChartBar } from "react-icons/fa";

export default function Breakdown() {
  const steps = [
    {
      icon: <FaFolderOpen className="text-primary dark:text-primary-dark text-4xl" />,
      title: "Choose Your Career Path",
      description: "Browse through unique career paths and pick the one that matches your ambitions.",
    },
    {
      icon: <FaRocket className="text-primary dark:text-primary-dark text-4xl" />,
      title: "Start Your Journey",
      description: "Receive daily tasks tailored to your goals and enjoy a structured experience.",
    },
    {
      icon: <FaChartBar className="text-primary dark:text-primary-dark text-4xl" />,
      title: "Track Your Progress",
      description: "Analyze your performance and celebrate your progress with detailed insights.",
    },
  ];

  return (
    <section className="w-full py-24 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText border-t border-purple-500/30">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-extrabold mb-12 tracking-tight">How It Works</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-10 rounded-xl shadow-md dark:shadow-lg transform hover:-translate-y-2 dark:hover:shadow-purple-500/40 hover:shadow-purple-300/40 border border-gray-200 dark:border-gray-700 bg-lightBackground dark:bg-darkBackground backdrop-blur-lg"
            >
              {/* Icon Wrapper */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-purple-600 rounded-full shadow-lg border-2 border-purple-400/30">
                  {step.icon}
                </div>
              </div>
              {/* Step Title */}
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              {/* Step Description */}
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}