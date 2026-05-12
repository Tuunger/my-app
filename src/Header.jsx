import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Verhindert das Scrollen des Bodys, wenn die Sidebar offen ist
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header className="header">
        <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menü umschalten">
          <i className={`bi ${isOpen ? 'bi-list-nested' : 'bi-list'} icon-transition`}></i>
        </button>
      </header>

      {/* Sidebar Overlay: Schließt das Menü bei Klick in den leeren Bereich */}
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={() => setIsOpen(false)}></div>

      {/* Die eigentliche Sidebar */}
      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-link" onClick={() => setIsOpen(false)}>
            <i className="bi bi-house me-2"></i>Startseite
          </Link>
          <Link to="/über-mich" className="sidebar-link" onClick={() => setIsOpen(false)}>
            <i className="bi bi-person me-2"></i>Über mich
          </Link>
          <Link to="/galerie" className="sidebar-link" onClick={() => setIsOpen(false)}>
            <i className="bi bi-lamp me-2"></i>Galerie
          </Link>
          <Link to="/contact" className="sidebar-link" onClick={() => setIsOpen(false)}>
            <i className="bi bi-envelope me-2"></i>Kontakt
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;