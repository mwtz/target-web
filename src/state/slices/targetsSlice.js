import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createTargetFulfilled } from 'services/target/target';

const initialState = {
  targets: [],
};

const targetSlice = createSlice({
  name: 'target',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(createTargetFulfilled), (_state, { payload: { target } }) => {
      return {
        targets: [..._state.targets, target],
      };
    });
  },
});

export default targetSlice.reducer;
