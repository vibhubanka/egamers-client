import { Action as ReduxAction } from 'redux';

export interface Action<T = string, P = any> extends ReduxAction<T> {
  payload?: P;
}
