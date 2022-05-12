import React from 'react';

import useTranslation from 'hooks/useTranslation';
import smiles from 'assets/smilies.svg';
import football from 'assets/football.svg';
import travel from 'assets/travel.svg';
import music from 'assets/music.svg';

import './styles.scss';

const NoTarget = () => {
  const t = useTranslation();

  return (
    <div className="no-target">
      <h2 className="subtitle">{t('noTarget.title')}</h2>
      <p className="suggestion">{t('noTarget.subtitle')}</p>
      <div className="list">
        <div className="list-item">
          <img src={football} alt="football bullet" className="list-bullet" />
          <p className="list-text">{t('noTarget.football')}</p>
        </div>
        <div className="list-item">
          <img src={travel} alt="travel bullet" className="list-bullet" />
          <p className="list-text">{t('noTarget.travel')}</p>
        </div>
        <div className="list-item">
          <img src={music} alt="music bullet" className="list-bullet" />
          <p className="list-text">{t('noTarget.music')}</p>
        </div>
      </div>
      <img src={smiles} alt="smiles" className="smiles" />
    </div>
  );
};

export default NoTarget;
