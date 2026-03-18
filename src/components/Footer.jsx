import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="footer-content">
        <div className="footer-info">
          <div className="logo">
            <span className="logo-anny">Anny</span>
            <span className="logo-festas"> Festas</span>
          </div>
          <p>Criando memórias inesquecíveis para você e sua família.</p>
        </div>
        
        <div className="footer-contact">
          <h3>Fale Conosco</h3>
          <p>📍 Rua 12, St. Hab Vicente Pires loja 3.</p>
          <p>📞 (61) 3356-1079</p>
        </div>
        
        <div className="footer-cta">
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
            <span>Falar com Anny</span>
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Anny Festas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
