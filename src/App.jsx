import React from "react";
import "./assets/styles/global.css";

import Header from "./components/layout/Header";
import Home from "./components/layout/sections/Home";
import About from "./components/layout/sections/About";
import Skills from "./components/layout/sections/Skills";
import Projects from "./components/layout/sections/Projects";
import Contact from "./components/layout/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
