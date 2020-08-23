import { Action } from 'actionTypes/interface';
import { camelize } from 'humps';

interface LoadingState {
  [key: string]: boolean;
}

const r = /(.+)_REQUEST$/;
const s = /(.+)_SUCCESS$/;
const f = /(.+)_FAILURE$/;

const indicatorName = (pattern: RegExp, type: Action['type']) => {
  let arr = pattern.exec(type);
  return arr ? camelize(arr[1]) : '';
};

export default function loadingReducer(state: LoadingState, action: Action): LoadingState {
  const { type } = action;

  switch (true) {
    case r.test(type):
      return { ...state, [indicatorName(r, type)]: true };
    case s.test(type):
      return { ...state, [indicatorName(s, type)]: true };
    case f.test(type):
      return { ...state, [indicatorName(f, type)]: true };
    default:
      return state;
  }
}
