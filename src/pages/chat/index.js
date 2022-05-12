import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopHeader from 'components/common/topheader';
import useTranslation from 'hooks/useTranslation';
import { useGetChatMutation } from 'services/conversations/conversations';
import travel from 'assets/travel2.svg';
import './styles.scss';

const Chat = () => {
  const t = useTranslation();
  const location = useLocation();
  const [getChat] = useGetChatMutation();

  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let matchId = params.get('id');
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
      </div>
      <div className="chat-box">
        <div className="external-user">
          <p className="msg">¡Hola! A dónde querés viajar?</p>
          <span className="time">10.15 PM</span>
        </div>
        <div className="external-user">
          <p className="msg">Estoy buscando compañero de viaje</p>
          <span className="time">10.15 PM</span>
        </div>
        <div className="logged-user">
          <p className="msg">Hola! A mi me encantaría conocer Camboya</p>
          <span className="time">10.15 PM</span>
        </div>
        <div className="logged-user">
          <p className="msg">Vos?</p>
          <span className="time">10.15 PM</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
