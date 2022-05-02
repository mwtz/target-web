import React from 'react';
import backarrow from 'assets/backarrow.svg';
import closeicon from 'assets/closeicon.svg';

import './styles.scss';

const TopHeader = ({ children, arrowIcon = true, closeIcon = true }) => {
  return (
    <div className="topheader">
      {arrowIcon && <img src={backarrow} alt="back" className="back-arrow" />}
      <p className="text">{children}</p>
      {closeIcon && <img src={closeicon} alt="close" className="close" />}
    </div>
  );
};

export default TopHeader;
