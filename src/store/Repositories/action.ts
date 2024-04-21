import {
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_REPOS_FAILURE,
  FETCH_USER_REPOS_REQUEST,
  FETCH_USER_REPOS_SUCCESS,
} from "./actionTypes";
import {
  FetchFailurePayload,
  FetchUserDetailsFailure,
  FetchUserDetailsRequest,
  FetchUserDetailsSuccess,
  FetchUserDetailsSuccessPayload,
  FetchUserReposFailure,
  FetchUserReposRequest,
  FetchUserReposSuccess,
  FetchUserReposSuccessPayload,
} from "./types";

export const fetchUserDetailsRequest = (): FetchUserDetailsRequest => ({
  type: FETCH_USER_DETAILS_REQUEST,
});

export const fetchUserDetailsSuccess = (
  payload: FetchUserDetailsSuccessPayload
): FetchUserDetailsSuccess => ({
  type: FETCH_USER_DETAILS_SUCCESS,
  payload,
});

export const fetchUserDetailsFailure = (
  payload: FetchFailurePayload
): FetchUserDetailsFailure => ({
  type: FETCH_USER_DETAILS_FAILURE,
  payload,
});

export const fetchUserReposRequest = (): FetchUserReposRequest => ({
  type: FETCH_USER_REPOS_REQUEST,
});

export const fetchUserReposSuccess = (
  payload: FetchUserReposSuccessPayload
): FetchUserReposSuccess => ({
  type: FETCH_USER_REPOS_SUCCESS,
  payload,
});

export const fetchUserReposFailure = (
  payload: FetchFailurePayload
): FetchUserReposFailure => ({
  type: FETCH_USER_REPOS_FAILURE,
  payload,
});
