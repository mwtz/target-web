import React from 'react';
import { Link } from 'react-router-dom';

import backarrow from 'assets/backarrow.svg';
import closeicon from 'assets/closeicon.svg';

import './styles.scss';

const TopHeader = ({ children, arrowIcon = true, closeIcon = true }) => {
  return (
    <div className="topheader">
      {arrowIcon && (
        <Link to="/profile">
          <img src={backarrow} alt="back" className="back-arrow" />
        </Link>
      )}
      <p className="text">{children}</p>

      {closeIcon && (
        <Link to="/profile">
          <img src={closeicon} alt="close" className="close" />
        </Link>
      )}
    </div>
  );
};

export default TopHeader;
