import endpoints from 'constants/endpoints';
import { api } from 'services/api';

const targetApi = api.injectEndpoints({
  endpoints: builder => ({
    createTarget: builder.mutation({
      query: target => ({
        url: endpoints.TARGETS,
        method: 'POST',
        body: { target },
      }),
    }),
    getTargets: builder.query({
      query: () => ({
        url: endpoints.TARGETS,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateTargetMutation,
  useGetTargetsQuery,
  endpoints: {
    createTarget: { matchFulfilled: createTargetFulfilled },
    getTargets: { matchFulfilled: getTargetsFulfilled },
  },
} = targetApi;

export const selectTarget = state => state.targets;
