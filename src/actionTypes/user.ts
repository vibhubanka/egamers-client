import { Action } from './interface';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export type LoginRequestAction = Action<{
  mobile: string;
}>;

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LoginSuccessAction = Action<{}>;

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export type LoginFailureAction = Action<{}>;

export type UserAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;
