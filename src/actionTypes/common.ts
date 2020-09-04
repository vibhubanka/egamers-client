import { Action } from './interface';
import { ModalPayload } from 'interface';

export const SHOW_MODAL = 'SHOW_MODAL';
export type ShowModalAction = Action<typeof SHOW_MODAL, ModalPayload>;
export const showModal = (payload: ModalPayload): ShowModalAction => ({
  type: SHOW_MODAL,
  payload,
});

export const HIDE_MODAL = 'HIDE_MODAL';
export type HideModalAction = Action<typeof HIDE_MODAL, undefined>;
export const hideModal = (): HideModalAction => ({
  type: HIDE_MODAL,
});

export type ModalAction = ShowModalAction | HideModalAction;
