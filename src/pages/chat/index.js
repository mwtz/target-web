import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopHeader from 'components/common/topheader';
import useTranslation from 'hooks/useTranslation';
import travel from 'assets/travel2.svg';
import './styles.scss';
import { useGetChatMutation } from 'services/conversations/conversations';

const Chat = () => {
  const t = useTranslation();
  const location = useLocation();
  const [getChat] = useGetChatMutation();

  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let matchId = params.get('id');
    console.log(matchId);
    getChat(matchId)
      .unwrap()
      .catch(err => console.log(err));
  }, [location, getChat]);

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
