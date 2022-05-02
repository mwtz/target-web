import { combineReducers } from 'redux';

import { api } from 'services/api';
import authReducer from './slices/authSlice';
import targetsSlice from './slices/targetsSlice';
import topicsSlice from './slices/topicsSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  topics: topicsSlice,
  targets: targetsSlice,
});

export default rootReducer;
