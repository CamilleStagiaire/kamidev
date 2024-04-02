import { useState, useEffect } from "react";
import "./sass/style.scss";
import Header from "./components/Layout/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
 
        <Header />
        <div className="toggle-dark-mode-button">
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
   

      <div className="container">
      <div className="home">
          <Home />
        </div>
        <div className="section-divider"></div>
        <div className="project">
          <Project />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
