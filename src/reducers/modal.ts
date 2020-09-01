import * as actions from '../actionTypes';
import { mergeRight } from 'ramda';

export interface ModalState {
  show: boolean;
  data: actions.ShowModalAction['payload'];
}

const initialState: ModalState = {
  show: false,
  data: {
    centered: false,
  },
};

export default function modalReducer(state: ModalState = initialState, action: actions.ModalAction) {
  const { type, payload } = action;

  switch (type) {
    case actions.SHOW_MODAL:
      return {
        ...state,
        show: true,
        data: mergeRight(state.data, payload as actions.ShowModalAction['payload']),
      };
    case actions.HIDE_MODAL:
      return { ...state, show: false };
    default:
      return state;
  }
}
