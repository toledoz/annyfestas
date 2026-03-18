import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Aniversários Infantis',
    description: 'Transformamos o aniversário do seu filho em um mundo de magia e diversão.',
    icon: '🎈'
  },
  {
    title: 'Casamentos',
    description: 'Um cenário romântico e sofisticado para o dia mais importante da sua vida.',
    icon: '💍'
  },
  {
    title: 'Eventos Corporativos',
    description: 'Estrutura completa para reuniões, workshops e confraternizações.',
    icon: '💼'
  },
  {
    title: 'Festas de 15 Anos',
    description: 'O debut perfeito com toda a sofisticação que a data merece.',
    icon: '👸'
  }
];

const Services = () => {
  return (
    <section className="services" id="servicos">
      <div className="services-header">
        <h2 className="services-title">Nossos <span className="blue-text">Serviços</span></h2>
        <p className="services-subtitle">Oferecemos tudo o que você precisa para uma celebração inesquecível.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-text">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
