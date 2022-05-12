import { useSelector } from 'react-redux';

import { selectConversation, useConversationsQuery } from 'services/conversations/conversations';

const useConversations = () => {
  useConversationsQuery();

  const { conversations, currentChat } = useSelector(selectConversation);
  return {
    conversations,
    currentChat,
  };
};

export default useConversations;
