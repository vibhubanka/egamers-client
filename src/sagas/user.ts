import * as actions from 'actionTypes';
import { takeLatest } from 'redux-saga/effects';

function* loginUser() {}

export default [takeLatest(actions.LOGIN_REQUEST, loginUser)];
