import React from "react";
import HeroSection from "../components/HeroSection";
import Preview from "../components/Preview";
import About from "../components/About";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Preview />
      <About />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
