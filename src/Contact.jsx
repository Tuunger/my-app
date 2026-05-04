import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <section className="hero-static" style={{ height: '300px' }}>
        <div className="hero-image-bg"></div>
        <div className="heading-bar">
          <h1>KONTAKT</h1>
        </div>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
        <h2>Schreib mir eine Nachricht</h2>
        <p style={{ color: '#64B6AC', marginBottom: '40px' }}>
          Hast du Fragen zu meiner Arbeit oder Interesse an einer Zusammenarbeit?
        </p>
        <div style={{ background: '#4A5859', padding: '40px', borderRadius: '15px' }}>
          <p>E-Mail: kontakt@luminar-layers.de</p>
          <p>Ort: Deine Werkstatt / Stadt</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;