import React from 'react';
import useTranslation from 'hooks/useTranslation';
import smiles from 'assets/smilies.svg';
import Bitmap from 'assets/Bitmap.png';
import music from 'assets/music.svg';

import './styles.scss';
import { Link } from 'react-router-dom';

const ChatMatch = () => {
  const t = useTranslation();
  return (
    <div className="chat-container">
      <p className="chat-title"> Chats </p>
      <div className="separator"></div>
      <div className="chat-list">
        <Link to={'/'}>
          <div className="chat-box">
            <img src={Bitmap} alt="userImg" className="chat-avatar" />
            <div className="chat">
              <p className="user-name">Juan Carlos</p>
              <p className="chat-text">Hola Juan Carlos, como estas ...</p>
            </div>
            <img src={music} alt="topic" className="chat-topic" />
          </div>
        </Link>
      </div>
      <img src={smiles} alt="smiles" className="smiles" />
    </div>
  );
};

export default ChatMatch;
