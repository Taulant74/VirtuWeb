"use client";

import { FaFolderOpen, FaRocket, FaChartBar } from "react-icons/fa";

export default function Breakdown() {
  const steps = [
    {
      icon: <FaFolderOpen className="text-4xl text-purple-400" />,
      title: "Choose Your Career Path",
      description: "Browse through unique career paths and pick the one that matches your ambitions.",
    },
    {
      icon: <FaRocket className="text-4xl text-purple-400" />,
      title: "Start Your Journey",
      description: "Receive daily tasks tailored to your goals and enjoy a structured experience.",
    },
    {
      icon: <FaChartBar className="text-4xl text-purple-400" />,
      title: "Track Your Progress",
      description: "Analyze your performance and celebrate your progress with detailed insights.",
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
