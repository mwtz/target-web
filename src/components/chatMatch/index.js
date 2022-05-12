import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import useTranslation from 'hooks/useTranslation';
import smiles from 'assets/smilies.svg';

import './styles.scss';

const ChatMatch = ({ matchs = [] }) => {
  const t = useTranslation();

  return (
    <div className="chat-container">
      <p className="chat-title"> Chats </p>
      <div className="separator"></div>
      <div className="chat-list">
        {matchs.map(({ last_message, match_id, topic_icon, unread_messages, user }, index) => {
          const {
            avatar: { small_thumb_url: small },
            full_name,
            id,
          } = user;
          return (
            <Link to={`/chat?id=${match_id}`} key={index}>
              <div className="chat-box">
                <img src={small} alt="" className="chat-avatar" />
                <div className="chat">
                  <p className="user-name">{full_name}</p>
                  <p className="chat-text">{last_message}</p>
                </div>
                <div className="topic-notification">
                  <span className={cn('notification', { active: unread_messages })}>
                    {unread_messages}
                  </span>
                  <img src={topic_icon} alt="topic" className="chat-topic" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <img src={smiles} alt="smiles" className="smiles" />
    </div>
  );
};

export default ChatMatch;
