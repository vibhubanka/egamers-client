import { Action } from 'actionTypes/interface';
import { camelize } from 'humps';

interface LoadingState {
  [key: string]: boolean;
}

const req = /(.+)_REQUEST$/;
const success = /(.+)_SUCCESS$/;
const fail = /(.+)_FAILURE$/;

const indicatorName = (pattern: RegExp, type: Action['type']) => {
  let arr = pattern.exec(type);
  return arr ? camelize(arr[1].toLowerCase()) : '';
};

export default function loadingReducer(state: LoadingState = {}, action: Action): LoadingState {
  const { type } = action;

  switch (true) {
    case req.test(type):
      return { ...state, [indicatorName(req, type)]: true };
    case success.test(type):
      return { ...state, [indicatorName(success, type)]: false };
    case fail.test(type):
      return { ...state, [indicatorName(fail, type)]: false };
    default:
      return state;
  }
}
