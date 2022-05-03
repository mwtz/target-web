import React from 'react';
import { useHistory } from 'react-router';
import useTranslation from 'hooks/useTranslation';
import { useLogoutMutation } from 'services/auth/auth';
import useAuth from 'hooks/useAuth';
import profile from 'assets/profile.svg';
import NoTarget from 'components/noTarget/NoTarget';
import NoMatch from 'components/noMatch/NoMatch';
import ChatMatch from 'components/chatMatch/ChatMatch';

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
      {false && <NoTarget />}
      {false && <NoMatch />}
      {true && <ChatMatch />}
    </div>
  );
};

export default Profile;
