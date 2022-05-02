import React from 'react';
import { Link } from 'react-router-dom';

import useTranslation from 'hooks/useTranslation';
import smileIcon from 'assets/smilies.svg';
import Button from 'components/common/Button';
import routesPaths from 'routes/routesPaths';

import './styles.scss';

const Sidebar = () => {
  const t = useTranslation();

  return (
    <div className="sidebar-container">
      <img className="smiles" src={smileIcon} alt="smileIcon" />
      <h1 className="message">{t('home.welcomeMsg')}</h1>
      <h2 className="title">{t('home.title')}</h2>
      <ul className="list">
        <li className="item">{t('home.textItem1')}</li>
        <li className="item">{t('home.textItem2')}</li>
      </ul>
      <div className="btn-got-it">
        <Link to={routesPaths.profile}>
          <Button>{t('home.gotitBtn')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
