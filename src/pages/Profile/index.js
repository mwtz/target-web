import React from 'react';
import { useHistory } from 'react-router';
import useTranslation from 'hooks/useTranslation';
import { useLogoutMutation } from 'services/auth/auth';
import Navbar from 'components/common/navbar';
import useAuth from 'hooks/useAuth';
import useConversations from 'hooks/useConversations';
import useTargets from 'hooks/useTargets';
import profile from 'assets/profile.svg';
import NoTarget from 'components/noTarget/NoTarget';
import NoMatch from 'components/noMatch/NoMatch';
import ChatMatch from 'components/chatMatch';

import './styles.scss';

const Profile = () => {
  const t = useTranslation();
  const [logout, { isLoading }] = useLogoutMutation();
  const { conversations } = useConversations();
  const { targets } = useTargets();

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
        {targets.length !== 0 ? (
          <>{conversations.length ? <ChatMatch matchs={conversations} /> : <NoMatch />}</>
        ) : (
          <NoTarget />
        )}
      </div>
    </>
  );
};

export default Profile;
