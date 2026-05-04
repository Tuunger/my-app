import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Dropdown onToggle={(nextShow) => setIsOpen(nextShow)}>
        <Dropdown.Toggle className="dropdown-toggle-custom" id="dropdown-basic">
          <i className={`bi ${isOpen ? 'bi-list-nested' : 'bi-list'} icon-transition`}></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-custom shadow">

          {/* Link zur Startseite */}
          <Dropdown.Item as={Link} to="/" className="dropdown-item-custom">
            <i className="bi bi-house me-2"></i>Startseite
          </Dropdown.Item>

          {/* Link zur Über Mich Seite */}
          <Dropdown.Item as={Link} to="/über-mich" className="dropdown-item-custom">
            <i className="bi bi-person me-2"></i>Über mich
          </Dropdown.Item>
          
          {/* Link zur Galerie */}
          <Dropdown.Item as={Link} to="/galerie" className="dropdown-item-custom">
            <i className="bi bi-lamp me-2"></i>Galerie
          </Dropdown.Item>

          {/* Link zur Kontaktseite */}
          <Dropdown.Item as={Link} to="/contact" className="dropdown-item-custom">
            <i className="bi bi-envelope me-2"></i>Kontakt
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};

export default Header;