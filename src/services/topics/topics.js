import endpoints from 'constants/endpoints';
import { api } from 'services/api';

const topicsApi = api.injectEndpoints({
  endpoints: builder => ({
    getTopics: builder.query({
      query: () => ({
        url: endpoints.GET_TOPICS,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetTopicsQuery,
  endpoints: {
    getTopics: { matchFulfilled: topicsFulfilled },
  },
} = topicsApi;

export const selectTopic = state => state.topics;
