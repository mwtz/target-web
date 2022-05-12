import { createSlice } from '@reduxjs/toolkit';
import { getChatFulfilled, conversationsFulfilled } from 'services/conversations/conversations';

const initialState = {
  conversations: [],
  currentChat: [],
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
    builder.addMatcher(getChatFulfilled, ({ conversations }, { payload: { messages } }) => {
      return {
        conversations,
        currentChat: messages,
      };
    });
  },
});

export default conversationsSlice.reducer;
