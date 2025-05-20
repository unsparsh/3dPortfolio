import React from "react";
import Hero from "./components/section/Hero";
import ShowcaseSection from "./components/section/ShowcaseSection";
import NavBar from "./components/Navbar";
import LogoShowcase from "./components/section/LogoShowcase";
import FeatureCards from "./components/section/FeatureCards";
import Experience from "./components/section/Experience";
import TechStack from "./components/section/TechStack";
import Testimonials from "./components/section/Testimonials";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";

const App = () => {
  return (
    <>
    <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <LogoShowcase/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
