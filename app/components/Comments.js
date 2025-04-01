export default function Comments() {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "VirtuPath AI has completely transformed my career. The daily tasks and structured learning paths are amazing!",
    },
    {
      name: "John Smith",
      feedback: "I love how easy it is to track my progress and stay motivated. The 365-day plan is a game-changer!",
    },
    {
      name: "Emily Johnson",
      feedback: "The personalized guidance and motivational boosts have helped me achieve my goals faster than I imagined.",
    },
  ];

  return (
    <section className="w-full py-24 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg bg-lightBackground dark:bg-darkBackground shadow-lg"
            >
              <p className="text-lg italic mb-4">&quot;{testimonial.feedback}&quot;</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
