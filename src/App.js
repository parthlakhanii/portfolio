import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import resumeData from "./resumeData";
import ReactGA from "react-ga4";
import "./styles/theme.css";

ReactGA.initialize("G-7MQ75GGK4B");

function App() {
  ReactGA.send("pageview");

  return (
    <div className="app">
      <Navbar resumeData={resumeData} />
      <main>
        <Home resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Work resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Projects resumeData={resumeData} />
        <Contact resumeData={resumeData} />
      </main>
    </div>
  );
}

export default App;
