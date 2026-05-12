import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import './App.css';
import './index.css';

// Bilder-Imports
import img1 from './assets/lamps_disco/1000000338.jpg';
import img2 from './assets/lamps_disco/1000000353.jpg';
import img3 from './assets/lamps_disco/1000001457.jpg';
import img4 from './assets/lamps_disco/1000005154.jpg';
import img5 from './assets/lamps_disco/IMG_2981.JPG';
import img6 from './assets/lamps_disco/IMG_2983.JPG';

// Wiederverwendbare Hero-Komponente mit verbesserter Overlap-Logik
export const Hero = ({ title, height }) => {
  const heroImages = [img1, img2, img3, img4, img5, img6];

  // Initialer Zustand: Das erste Bild startet sichtbar, alle anderen unsichtbar
  const [imgStates, setImgStates] = useState(() =>
    heroImages.map((_, i) => ({
      opacity: i === 0 ? 0.8 : 0,
      zIndex: i === 0 ? 1 : 0,
    }))
  );

  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => {
        const nextStep = prevStep + 1;
        const nextIndex = nextStep % heroImages.length;

        setImgStates((prevImgStates) =>
          prevImgStates.map((state, i) => {
            if (i === nextIndex) {
              // Das NEUE Bild wird oben draufgelegt (höchster zIndex bisher)
              // Wir nutzen 0.8 Opacity, damit man durch das neue Bild hindurchsieht
              return { opacity: 0.8, zIndex: nextStep + 1 };
            } else {
              // Die ALTEN Bilder verblassen sehr langsam (-0.05 statt -0.15)
              // Dadurch bleiben 3-4 Schichten gleichzeitig sichtbar (Seamless Layering)
              return { ...state, opacity: Math.max(0, state.opacity - 0.05) };
            }
          })
        );
        return nextStep;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="hero-static" style={height ? { height } : {}}>
      {heroImages.map((img, index) => (
        <div
          key={index}
          className="hero-slide"
          style={{
            backgroundImage: `url(${img})`,
            opacity: imgStates[index].opacity,
            zIndex: imgStates[index].zIndex,
          }}
        />
      ))}
      <div className="heading-bar">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            {/* ROUTE: STARTSEITE */}
            <Route path="/" element={<Hero title="LUMINAR LAYERS" />} />

            {/* ROUTE: ÜBER MICH */}
            <Route path="/über-mich" element={<About />} />

            {/* ROUTE: GALERIE */}
            <Route path="/galerie" element={<Gallery />} />

            {/* ROUTE: KONTAKT */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;