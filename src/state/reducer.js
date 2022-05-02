import { combineReducers } from 'redux';

import { api } from 'services/api';
import authReducer from './slices/authSlice';
import topicsSlice from './slices/topicsSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  topics: topicsSlice,
});

export default rootReducer;
