import { Action } from './interface';
import { Component, FC } from 'react';

export const SHOW_MODAL = 'SHOW_MODAL';
export type ShowModalAction = Action<
  Partial<{
    heading: string;
    component: FC | Component;
    props: any;
    centered: boolean;
  }>
>;

export const HIDE_MODAL = 'HIDE_MODAL';
export type HideModalAction = Action<undefined>;

export type ModalAction = ShowModalAction | HideModalAction;
