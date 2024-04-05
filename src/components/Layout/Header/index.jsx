import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import darkModeImg from "../../../assets/dark-theme-white.svg";
import lightModeImg from "../../../assets/dark-theme.svg";
import logoImg from "../../../assets/logo.svg"; 

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const sections = ['.creation', '.formation', '.about', '.portfolio', '.contact'];
  
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: self => {
          if (self.isActive) {
            setCurrentSection(section.substring(1));
          }
        }
      });
    });
  
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setCurrentSection('home');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  

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

  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(sectionClass);
    const headerOffset = 150; 
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = sectionPosition - headerOffset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  

  return (
    <nav className="main-nav">
      <div className="toggle-container">
        <img
          src={darkMode ? darkModeImg : lightModeImg}
          alt="Toggle Dark Mode"
          onClick={toggleDarkMode}
          className="toggle-icon"
        />
      </div>
      
      <div className="logo-container" onClick={() => scrollToSection('.home')} style={{cursor: 'pointer'}}>
        <img src={logoImg} alt="Logo" className="logo" />
        <span className="title">Kamidev</span>
      </div>
      
      <div className="navigation">
        <button onClick={() => scrollToSection('.creation')} className={`link-button ${currentSection === 'creation' ? 'active' : ''}`}>Création de sites</button>
        <button onClick={() => scrollToSection('.formation')} className={`link-button ${currentSection === 'formation' ? 'active' : ''}`}>Formation</button>
        <button onClick={() => scrollToSection('.about')} className={`link-button ${currentSection === 'about' ? 'active' : ''}`}>Qui suis-je</button>
        <button onClick={() => scrollToSection('.portfolio')} className={`link-button ${currentSection === 'portfolio' ? 'active' : ''}`}>Portfolio</button>
        <button onClick={() => scrollToSection('.contact')} className={`contact-button ${currentSection === 'contact' ? 'active' : ''}`}>Contact</button>
      </div>
    </nav>
  );
};

export default Header;
