export default function Comments() {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback:
        "VirtuPath AI has completely transformed my career. The daily tasks and structured learning paths are amazing!",
    },
    {
      name: "John Smith",
      feedback:
        "I love how easy it is to track my progress and stay motivated. The 365-day plan is a game-changer!",
    },
    {
      name: "Emily Johnson",
      feedback:
        "The personalized guidance and motivational boosts have helped me achieve my goals faster than I imagined.",
    },
  ];

  return (
    <section className="w-full py-24 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-extrabold mb-12 tracking-tight">What Our Users Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-white/90 dark:bg-black/40 backdrop-blur-lg shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-500/40"
            >
              {/* User Avatar */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-purple-500 text-white text-xl font-bold shadow-lg">
                {testimonial.name.charAt(0)}
              </div>

              <div className="mt-8">
                {/* Testimonial Text */}
                <p className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  &quot;{testimonial.feedback}&quot;
                </p>

                {/* User Name */}
                <h3 className="mt-6 text-xl font-semibold text-purple-600 dark:text-purple-400">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}