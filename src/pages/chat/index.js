import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';

import TopHeader from 'components/common/topheader';
import ChatMessage from 'components/chatMessage';
import Loader from 'components/common/loader';
import useTranslation from 'hooks/useTranslation';
import { useGetChatMutation } from 'services/conversations/conversations';
import useConversations from 'hooks/useConversations';
import travel from 'assets/travel2.svg';

import './styles.scss';

const Chat = () => {
  const [matchId, setMatchId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const t = useTranslation();
  const location = useLocation();
  const [getChat, { isSuccess }] = useGetChatMutation();
  const { currentChat } = useConversations();
  const cableRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let matchId = params.get('id');
    setMatchId(matchId);
    getChat(matchId)
      .unwrap()
      .catch(err => console.log(err));
  }, [location, getChat]);

  useEffect(() => {
    if (isSuccess) {
      setMessages(currentChat);
    }
  }, [isSuccess]);

  const handleReceivedChat = messageData => {
    setMessages(oldMessages => [...oldMessages, messageData]);
    bottomRef.current?.scrollIntoView();
  };

  const sendMessage = ({ key }) => {
    if (key === 'Enter') {
      if (message === '') return;
      cableRef.current.perform('send_message', {
        content: message,
        match_conversation_id: matchId,
      });
      setMessage('');
    }
  };

  return (
    <div className="conversation-container">
      <TopHeader> {t('chatConversation.header')}</TopHeader>
      <ActionCableConsumer
        ref={cableRef}
        channel={{
          channel: 'ChatChannel',
          match_conversation_id: matchId,
        }}
        key={matchId}
        onReceived={handleReceivedChat}
      />
      <div className="chat-header">
        <img src={travel} alt="" className="chat-topic" />
        <div className="info">
          <p className="user-name">{'Usuario Match'}</p>
          <p className="topic-title">{'Target Title'}</p>
        </div>
      </div>
      {isSuccess ? (
        <>
          <div className="chat-box">
            {messages.map(({ id, content, date, user: { id: userId } }) => {
              return <ChatMessage key={id} userId={userId} content={content} date={date} />;
            })}

            <div className="bottom-chat" ref={bottomRef}></div>
          </div>
          <div className="input-container">
            <input
              className="message-input"
              value={message}
              onKeyPress={sendMessage}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Chat;
