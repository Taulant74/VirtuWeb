import Hero from "./components/Hero";
import Breakdown from "./components/Breakdown";
import AboutUs from "./components/AboutUs";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Hero />
      <Breakdown />
      <AboutUs />
      <Comments />
      <Footer />
    </div>
  );
}
