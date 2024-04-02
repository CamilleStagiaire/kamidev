const Header = () => {
    const scrollToSection = (sectionClass) => {
      const section = document.querySelector(sectionClass);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  
    return (
      <nav className="main-nav">
        <button onClick={() => scrollToSection('.home')}>Home</button>
        <button onClick={() => scrollToSection('.project')}>Projet</button>
        <button onClick={() => scrollToSection('.about')}>Qui suis-je</button>
        <button onClick={() => scrollToSection('.contact')}>Contact</button>
      </nav>
    );
  };
  
  export default Header;
  