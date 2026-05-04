import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import portrait from './assets/general/portrait.jpg';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            {/* ROUTE: STARTSEITE (Nur Hero) */}
            <Route path="/" element={
              <section className="hero-static">
                <div className="hero-image-bg"></div>
                <div className="heading-bar">
                  <h1>LUMINAR LAYERS</h1>
                </div>
              </section>
            } />

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