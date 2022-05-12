import { createSlice } from '@reduxjs/toolkit';
import { chatFulfilled, conversationsFulfilled } from 'services/conversations/conversations';

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
    builder.addMatcher(chatFulfilled, (_state, { payload: { messages } }) => {
      return {
        currentChat: messages,
      };
    });
  },
});

export default conversationsSlice.reducer;
