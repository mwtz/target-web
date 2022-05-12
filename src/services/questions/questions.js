import endpoints from 'constants/endpoints';
import { api } from 'services/api';

const questionsApi = api.injectEndpoints({
  endpoints: builder => ({
    question: builder.mutation({
      query: question => ({
        url: endpoints.QUESTIONS,
        method: 'POST',
        body: { question },
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useQuestionMutation,
  endpoints: {
    question: { matchFulfilled: questionFulfilled },
  },
} = questionsApi;
