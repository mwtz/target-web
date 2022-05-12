import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';
import Modal from 'components/modal';
import menu from 'assets/menuicon.svg';
import close from 'assets/close.svg';
import './styles.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const handleClick = () => setIsActive(current => !current);
  const handleContact = () => {
    setShowContact(true);
  };
  const handleCloseModal = () => setShowContact(false);

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
          {showContact && <Modal handleCloseModal={handleCloseModal} />}
        </div>
      )}
    </div>
  );
};

export default Navbar;
