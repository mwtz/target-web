import cn from 'classnames';
import useAuth from 'hooks/useAuth';
import React from 'react';
import { dateFormat } from 'utils/dateHelper';
import './styles.scss';

const ChatMessage = ({ content, date, userId }) => {
  const {
    user: { id },
  } = useAuth();
  return (
    <div className={cn('msg-box', userId === id ? 'logged-user' : 'external-user')}>
      <p className="msg">{content}</p>
      <span className="time">{dateFormat(date)}</span>
    </div>
  );
};

export default ChatMessage;
