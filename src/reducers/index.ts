import { combineReducers } from 'redux';
import loadingReducer from './loading';
import userReducer from './user';

const reducers = combineReducers({
  user: userReducer,
  loading: loadingReducer,
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
