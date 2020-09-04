import * as actions from '../actionTypes';
import { ModalPayload } from 'interface';

export interface ModalState {
  show: boolean;
  data: ModalPayload;
}

const initialState: ModalState = {
  show: false,
  data: {},
};

export default function modalReducer(state: ModalState = initialState, action: actions.ModalAction) {
  const { type, payload } = action;

  switch (type) {
    case actions.SHOW_MODAL:
      return {
        ...state,
        show: true,
        data: payload || {},
      };
    case actions.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
