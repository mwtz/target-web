import React from 'react';
import smiles from 'assets/smilies.svg';
import football from 'assets/football.svg';
import travel from 'assets/travel.svg';
import music from 'assets/music.svg';

import './styles.scss';

const NoTarget = () => {
  return (
    <div className="no-target">
      <h2 className="subtitle">Create your first target by clicking wherever on the map.</h2>
      <p className="suggestion">Psss!, these are the most popular targets:</p>
      <div className="list">
        <div className="list-item">
          <img src={football} alt="football bullet" className="list-bullet" />
          <p className="list-text">Football</p>
        </div>
        <div className="list-item">
          <img src={travel} alt="travel bullet" className="list-bullet" />
          <p className="list-text">Travel</p>
        </div>
        <div className="list-item">
          <img src={music} alt="music bullet" className="list-bullet" />
          <p className="list-text">Music</p>
        </div>
      </div>
      <img src={smiles} alt="smiles" className="smiles" />
    </div>
  );
};

export default NoTarget;
