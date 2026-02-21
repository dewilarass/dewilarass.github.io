import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeBanner from "./components/MarqueeBanner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SECTIONS = ["home", "about", "skills", "projects", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neo-bg">
      <Navbar activeSection={activeSection} />
      <Hero />
      <MarqueeBanner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
