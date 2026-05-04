import React from 'react';
import portrait from './assets/general/portrait.jpg';
import './App.css';

const About = () => {
  return (
    <div className="about-page-wrapper">
      {/* Hero Section für den schwarzen Balken mit Knockout-Effekt */}
      <section className="hero-static" style={{ height: '300px' }}>
        <div className="hero-image-bg"></div>
        <div className="heading-bar">
          <h1>ÜBER MICH</h1>
        </div>
      </section>

      <section className="about-me">
        <div className="about-container">
          <div className="about-image">
            <img src={portrait} alt="Raphael Münch"/>
          </div>
          
          <div className="about-text">
            <h2>Meine Geschichte</h2>
            <p>
              Aktuell teile ich meine Zeit zwischen sozialem Engagement und Technik auf. In einer Werkstatt, die 
              hochwertige Schreinerei mit Integrationsarbeit verbindet, arbeite ich als Elektroniker und begleite 
              junge Geflüchtete bei ihrem Einstieg in das Berufsleben. 
            </p>
            <p>
              Parallel dazu baue ich meine Selbstständigkeit weiter aus. Mein Ziel ist es, in vier Monaten den Fokus 
              komplett auf meine eigenen Projekte zu legen und den Schritt in die volle Selbstständigkeit zu gehen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;