import React from 'react';
import TopHeader from 'components/common/topheader';
import useTranslation from 'hooks/useTranslation';
import travel from 'assets/travel2.svg';
import './styles.scss';

const Chat = () => {
  const t = useTranslation();

  return (
    <div className="conversation-container">
      <TopHeader> {t('chatConversation.header')}</TopHeader>
      <div className="chat-header">
        <img src={travel} alt="" className="chat-topic" />
        <div className="info">
          <p className="user-name">{'Usuario Match'}</p>
          <p className="topic-title">{'Target Title'}</p>
        </div>
        <div className="chat-box"></div>
      </div>
    </div>
  );
};

export default Chat;
