import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-24 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/im1.jpg"
            alt="About Us"
            width={500}
            height={300}
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* Right Column: Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About VirtuPath AI</h2>
          <p className="text-lg leading-relaxed mb-4">
            At VirtuPath AI, we believe in empowering individuals to achieve their dreams through personalized, AI-driven guidance. Our platform provides structured learning paths tailored to your unique goals, ensuring you stay motivated and on track.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you&apos;re looking to advance your career, learn a new skill, or simply explore your potential, VirtuPath AI is here to guide you every step of the way. Join us and start your journey toward success today!
          </p>
        </div>
      </div>
    </section>
  );
}