export default function Hero() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-purple-600 to-purple-700 dark:from-purple-800 dark:to-purple-900 text-gray-100 transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Welcome to <span className="text-yellow-300">VirtuPath AI</span>
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Unlock your potential with personalized AI-driven guidance and structured learning paths.
        </p>
        <button className="px-8 py-4 bg-yellow-400 text-purple-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
