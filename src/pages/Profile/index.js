import React from 'react';
import { useHistory } from 'react-router';

import useTranslation from 'hooks/useTranslation';
import { useLogoutMutation } from 'services/auth/auth';
import Navbar from 'components/common/navbar';
import useAuth from 'hooks/useAuth';
import profile from 'assets/profile.svg';
import smiles from 'assets/smilies.svg';
import football from 'assets/football.svg';
import travel from 'assets/travel.svg';
import music from 'assets/music.svg';

import './styles.scss';

const Profile = () => {
  const t = useTranslation();
  const [logout, { isLoading }] = useLogoutMutation();

  const { avatar, username } = useAuth();
  const history = useHistory();
  const handleLogout = () =>
    logout()
      .then(() => localStorage.removeItem('user'))
      .then(() => {
        history.push('/');
      })
      .catch(err => console.log(err));

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <h1 className="title">Target</h1>
        <img src={avatar?.url || profile} alt="" className="avatar-img" />
        <p className="username">{username}</p>
        <div className="actions">
          <a href="/profile" className="edit-profile">
            Edit
          </a>
          <span className="slash">/</span>

          <button className="logout" onClick={handleLogout} disabled={isLoading}>
            {t('home.logoutBtn')}
          </button>
        </div>
        <span className="separator" />
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
    </>
  );
};

export default Profile;
