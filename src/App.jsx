import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
