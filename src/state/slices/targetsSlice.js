import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createTargetFulfilled,
  deleteTargetFulfilled,
  getTargetsFulfilled,
} from 'services/target/target';

const initialState = {
  targets: [],
};
const targetSlice = createSlice({
  name: 'target',
  initialState,
  extraReducers: builder => {
    // builder.addMatcher(isAnyOf(createTargetFulfilled), (_state, { payload }) => {
    //   const { target, match_conversation, matched_user } = payload;
    //   return {
    //     targets: [..._state.targets, { target, match_conversation, matched_user }],
    //   };
    // });
    builder.addMatcher(isAnyOf(createTargetFulfilled), (_state, { payload }) => {
      const { target } = payload;
      return {
        targets: [..._state.targets, target],
      };
    });
    builder.addMatcher(isAnyOf(getTargetsFulfilled), (_state, { payload: { targets } }) => {
      return {
        targets: targets.map(target => target.target),
      };
    });
    builder.addMatcher(deleteTargetFulfilled, (_state, action) => {
      const { originalArgs: targetId = '' } = action.meta?.arg;
      return {
        targets: _state.targets.filter(target => target.id !== targetId),
      };
    });
  },
});

export default targetSlice.reducer;
