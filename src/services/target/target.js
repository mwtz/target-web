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
    deleteTarget: builder.mutation({
      query: id => ({
        url: `${endpoints.TARGETS}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateTargetMutation,
  useGetTargetsQuery,
  useDeleteTargetMutation,
  endpoints: {
    createTarget: { matchFulfilled: createTargetFulfilled },
    getTargets: { matchFulfilled: getTargetsFulfilled },
    deleteTarget: { matchFulfilled: deleteTargetFulfilled },
  },
} = targetApi;

export const selectTarget = state => state.targets;
