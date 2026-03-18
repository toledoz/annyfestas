import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Transforme seu Sonho em <span className="highlight">Festa!</span>
        </h1>
        <p className="hero-subtitle">
          O melhor espaço para aniversários, casamentos e eventos corporativos em um ambiente sofisticado e acolhedor.
        </p>
        <div className="hero-btns">
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
            Solicitar Orçamento
          </a>
          <a href="#servicos" className="hero-btn-secondary">
            Ver Serviços
          </a>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
