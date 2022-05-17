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
  }),
  overrideExisting: true,
});

export const {
  useConversationsQuery,
  endpoints: {
    conversations: { matchFulfilled: conversationsFulfilled },
  },
} = conversationsApi;

export const selectConversation = state => state.conversations;
