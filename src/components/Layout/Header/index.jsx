import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import darkModeImg from "../../../assets/dark-theme-white.svg";
import lightModeImg from "../../../assets/dark-theme.svg";
import logoImg from "../../../assets/logo.svg"; 

const Header = ({ onSectionClick }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const navigate = useNavigate();

  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(sectionClass);
    const headerOffset = 150; 
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });
  
    // Logique pour mettre à jour l'URL
    const sectionId = sectionClass.replace('.', ''); // Convertit '.creation' en 'creation'
    window.history.pushState({}, '', `/${sectionId}`); // Change l'URL en '#creation', par exemple
  };
  

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
            const sectionId = section.substring(1); // retire le point du sélecteur
            setCurrentSection(sectionId);
            window.history.pushState({}, '', `/${sectionId}`);
          }
        }
      });
    });
  
    const handleScroll = () => {
      if (window.scrollY < 100) { // Un petit seuil pour s'assurer que nous sommes bien en haut
        setCurrentSection('home');
        window.history.pushState({}, '', '/'); // Met à jour l'URL pour refléter le retour à "home"
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  // useEffect(() => {
  //   const loadSectionFromURL = () => {
  //     const path = window.location.hash; // Obtient '#about' de l'URL, par exemple
  //     if (path) {
  //       scrollToSection(path.replace('#', '.')); // Convertit '#about' en '.about' et défile
  //     }
  //   };
  
  //   window.addEventListener('load', loadSectionFromURL);
  
  //   return () => {
  //     window.removeEventListener('load', loadSectionFromURL);
  //   };
  // }, []);
  

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