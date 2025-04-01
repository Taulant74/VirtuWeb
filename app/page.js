"use client";

import Hero from "./components/Hero";
import Breakdown from "./components/Breakdown";
import AboutUs from "./components/AboutUs";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Breakdown />
      <AboutUs />
      <Comments />
      <Footer />
    </div>
  );
}
