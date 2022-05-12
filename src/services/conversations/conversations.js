import endpoints from 'constants/endpoints';
import { api } from 'services/api';

const conversationsApi = api.injectEndpoints({
  endpoints: builder => ({
    conversations: builder.query({
      query: () => ({
        url: endpoints.MATCH_CONVERSATIONS,
        method: 'GET',
      }),
    }),
    getChat: builder.mutation({
      query: id => ({
        url: `${endpoints.MATCH_CONVERSATIONS}/${id}/messages?page=1`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useConversationsQuery,
  useGetChatMutation,
  endpoints: {
    conversations: { matchFulfilled: conversationsFulfilled },
    getChat: { matchFulfilled: getChatFulfilled },
  },
} = conversationsApi;

export const selectConversation = state => state.conversations;
