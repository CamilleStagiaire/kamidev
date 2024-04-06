import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import "./sass/style.scss";
import Header from "./components/Layout/Header";
import Home from "./pages/Home";
import Creation from "./pages/Creation";
import Formation from "./pages/Formation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Extrait le chemin de la location
    const path = location.pathname === '/' ? '.home' : location.pathname.replace('/', '.');
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location])
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Home />
        <Creation />
        <Formation />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

// Enveloppez votre App dans <Router> au niveau index.js ou là où vous effectuez le rendu de votre App
export default App;