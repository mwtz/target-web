import { useSelector } from 'react-redux';

import { selectConversation, useConversationsQuery } from 'services/conversations/conversations';

const useConversations = () => {
  useConversationsQuery();

  const { conversations } = useSelector(selectConversation);
  return {
    conversations,
  };
};

export default useConversations;
