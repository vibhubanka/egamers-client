import { all } from 'redux-saga/effects';
import userSaga from './user';

const tasks = [...userSaga];

export default function* rootSaga() {
  yield all(tasks);
}
