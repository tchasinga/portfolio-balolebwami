import { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/layouts/Footer";
import { Analytics } from '@vercel/analytics/react';

function App({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "dark";
  });

  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "dark" : "light");
    const localTheme = localStorage.getItem("darkMode");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} font-Poppins`}>
      {children}
      <Analytics />
      <Navbar dark={handleDarkMode} data={darkMode} />
      <main>
        <Hero />
        <About /> 
        <Skill /> 
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
