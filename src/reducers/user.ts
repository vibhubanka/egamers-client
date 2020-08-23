import * as actions from '../actionTypes';

export type UserState =
  | {}
  | {
      id: number;
      name: string;
    };

const initialState = {};

export default function userReducer(state: UserState = initialState, action: actions.UserAction): UserState {
  const { type, payload } = action;

  switch (type) {
    case actions.LOGIN_REQUEST:
      return state;
    default:
      return state;
  }
}
