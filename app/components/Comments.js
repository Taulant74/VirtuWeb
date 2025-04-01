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
    {
      name: "Michael Brown",
      feedback: "VirtuPath AI&apos;s AI-driven guidance is unmatched. It has helped me stay focused and achieve my dreams.",
    },
    {
      name: "Sarah Wilson",
      feedback: "The platform is intuitive and the support team is fantastic. Highly recommend VirtuPath AI!",
    },
    {
      name: "David Lee",
      feedback: "The structured learning paths are exactly what I needed to stay on track and achieve my goals.",
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-white dark:bg-gray-900 shadow-md"
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
