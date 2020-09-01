import { combineReducers } from 'redux';
import loadingReducer from './loading';
import userReducer from './user';
import modalReducer from './modal';

const reducers = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  modal: modalReducer,
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
