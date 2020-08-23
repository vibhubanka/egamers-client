import { Action } from './interface';

export const FETCH_TOURNAMENTS_REQUEST = 'FETCH_TOURNAMENTS_REQUEST';
export type FetchTournamentsRequest = Action<{}>;

export const FETCH_TOURNAMENTS_SUCCESS = 'FETCH_TOURNAMENTS_SUCCESS';
export type FetchTournamentsSuccess = Action<{}>;

export const FETCH_TOURNAMENTS_FAILURE = 'FETCH_TOURNAMENTS_FAILURE';
export type FetchTournamentsFailure = Action<undefined>;

export type TournamentAction = FetchTournamentsRequest | FetchTournamentsSuccess | FetchTournamentsFailure;
