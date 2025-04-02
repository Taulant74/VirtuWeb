export default function Hero() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="text-center px-6">
        <p className="uppercase text-sm tracking-wide text-gray-400 mb-2">
          Your journey to greatness begins here
        </p>
        <h1 className="text-6xl font-extrabold">
          Virtu Path AI
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Unleash your potential. Elevate your skills. Master your field.
        </p>
        <button className="mt-6 px-8 py-4 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
          Choose your career path
        </button>
      </div>
    </section>
  );
}
