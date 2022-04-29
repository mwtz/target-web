import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { topicsFulfilled } from 'services/topics/topics';

const initialState = {
  topics: [],
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(topicsFulfilled), (_state, { payload: { topics } }) => {
      return {
        topics,
      };
    });
  },
});

export default topicsSlice.reducer;
