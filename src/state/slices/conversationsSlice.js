import { createSlice } from '@reduxjs/toolkit';
import { conversationsFulfilled } from 'services/conversations/conversations';

const initialState = {
  conversations: [],
};

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(conversationsFulfilled, (_state, { payload: { matches } }) => {
      return {
        conversations: matches,
      };
    });
  },
});

export default conversationsSlice.reducer;
