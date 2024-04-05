//import { useState, useEffect } from "react";
//import gsap from "gsap";
//import ScrollTrigger from "gsap/ScrollTrigger";
import "./sass/style.scss";
import Header from "./components/Layout/Header";
import Home from "./pages/Home";
import Creation from "./pages/Creation";
import Formation from "./pages/Formation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="page">
          <Home />
        </div>
        <div className="page">
          <Creation />
        </div>
        <div className="page">
          <Formation />
        </div>
        <div className="page">
          <About />
        </div>
        <div className="page">
          <Portfolio />
        </div>
        <div className="page">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
