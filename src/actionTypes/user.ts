import { Action } from './interface';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export type LoginRequestAction = Action<
  typeof LOGIN_REQUEST,
  {
    mobile: string;
  }
>;

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LoginSuccessAction = Action<typeof LOGIN_SUCCESS, {}>;

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export type LoginFailureAction = Action<typeof LOGIN_FAILURE, {}>;

export type UserAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;
