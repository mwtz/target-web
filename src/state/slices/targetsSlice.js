import { createSlice } from '@reduxjs/toolkit';
import { createTargetFulfilled, getTargetsFulfilled } from 'services/target/target';

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
  },
});

export default targetSlice.reducer;
