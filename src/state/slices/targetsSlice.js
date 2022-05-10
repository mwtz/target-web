import { createSlice } from '@reduxjs/toolkit';
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
    builder.addMatcher(createTargetFulfilled, (_state, { payload: { target } }) => {
      return {
        targets: [..._state.targets, target],
      };
    });
    builder.addMatcher(getTargetsFulfilled, (_state, { payload: { targets } }) => {
      return {
        targets: targets.map(({ target }) => target),
      };
    });
    builder.addMatcher(deleteTargetFulfilled, ({ targets }, action) => {
      const { originalArgs: targetId = '' } = action.meta?.arg;
      return {
        targets: targets.filter(({ id }) => id !== targetId),
      };
    });
  },
});

export default targetSlice.reducer;
