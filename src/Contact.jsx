import React from 'react';
import './Contact.css';

const Contact = () => {
  const whatsappNumber = '4915901014225';
  const whatsappMessage = 'Hallo! Ich interessiere mich für deine Arbeit.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="contact-page-wrapper">
      <section className="hero-static" style={{ height: '300px' }}>
        <div className="hero-image-bg"></div>
        <div className="heading-bar">
          <h1>KONTAKT</h1>
        </div>
      </section>

      <section className="contact-section">
        <h2>Schreib mir eine Nachricht</h2>
        <p className="contact-subtitle">
          Hast du Fragen zu meiner Arbeit oder Interesse an einer Zusammenarbeit?
        </p>
        <div className="contact-card">
          <p>E-Mail: kontakt@luminar-layers.de</p>
          <p>Ort: Freiburg</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1ebe57'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#25D366'}
          >
            <i className="bi bi-whatsapp"></i>
            Auf WhatsApp schreiben
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;