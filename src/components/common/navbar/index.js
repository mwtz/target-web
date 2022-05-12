import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';
import menu from 'assets/menuicon.svg';
import close from 'assets/close.svg';
import './styles.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(current => !current);
  const handleContact = () => null;
  return (
    <div className="navbar-container">
      <div className="menu-icon" onClick={handleClick} aria-hidden="true">
        <img src={isActive ? close : menu} alt="menu" className="menu" />
      </div>
      {isActive && (
        <div className="links">
          <Link to={routesPaths.about} className="about">
            About
          </Link>
          <button onClick={handleContact} className="contact">
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
