import { Action } from './interface';

export const FETCH_TOURNAMENTS_REQUEST = 'FETCH_TOURNAMENTS_REQUEST';
export type FetchTournamentsRequest = Action<typeof FETCH_TOURNAMENTS_REQUEST, {}>;

export const FETCH_TOURNAMENTS_SUCCESS = 'FETCH_TOURNAMENTS_SUCCESS';
export type FetchTournamentsSuccess = Action<typeof FETCH_TOURNAMENTS_SUCCESS, {}>;

export const FETCH_TOURNAMENTS_FAILURE = 'FETCH_TOURNAMENTS_FAILURE';
export type FetchTournamentsFailure = Action<typeof FETCH_TOURNAMENTS_FAILURE, undefined>;

export type TournamentAction = FetchTournamentsRequest | FetchTournamentsSuccess | FetchTournamentsFailure;
