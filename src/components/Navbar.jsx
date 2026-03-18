import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-anny">Anny</span>
          <span className="logo-festas"> Festas</span>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={toggleMenu}>Início</a>
          <a href="#sobre" onClick={toggleMenu}>Sobre</a>
          <a href="#servicos" onClick={toggleMenu}>Serviços</a>
          <a href="#contato" onClick={toggleMenu} className="btn-cta-mobile">Contratar</a>
        </div>

        <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="btn-cta">
          Contratar
        </a>

        <div className="burger" onClick={toggleMenu}>
          <div className={isOpen ? 'line1 toggle' : 'line1'}></div>
          <div className={isOpen ? 'line2 toggle' : 'line2'}></div>
          <div className={isOpen ? 'line3 toggle' : 'line3'}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
