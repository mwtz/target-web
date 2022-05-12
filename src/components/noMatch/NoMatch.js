import React from 'react';
import useTranslation from 'hooks/useTranslation';
import smiles from 'assets/smilies.svg';

import './styles.scss';

const NoMatch = () => {
  const t = useTranslation();
  return (
    <div className="no-match">
      <h2 className="message"> {t('noMatch.message')}</h2>
      <img src={smiles} alt="smiles" className="smiles" />
    </div>
  );
};

export default NoMatch;
