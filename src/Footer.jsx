import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Alle Rechte vorbehalten</p>
        <ul className="footer-links">
          <li><a href="#filler" className="footer-link">Filler</a></li>
          
          
        </ul>
      </div>
    </footer>
  );
};
export default Footer;