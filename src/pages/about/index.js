import React from 'react';
import { Link } from 'react-router-dom';

import useTranslation from 'hooks/useTranslation';
import smileIcon from 'assets/smilies.svg';
import Button from 'components/common/Button';
import routesPaths from 'routes/routesPaths';

import './styles.scss';

const About = () => {
  const t = useTranslation();

  return (
    <div className="about-container">
      <img className="smiles" src={smileIcon} alt="smileIcon" />
      <h1 className="title">{t('about.title')}</h1>
      <p className="text">{t('about.text')}</p>
      <div className="btn-got-it">
        <Link to={routesPaths.login}>
          <Button>{t('about.start')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
