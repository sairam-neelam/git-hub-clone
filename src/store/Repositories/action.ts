import {
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
} from "./actionTypes";
import {
  FetchFailurePayload,
  FetchUserDetailsFailure,
  FetchUserDetailsRequest,
  FetchUserDetailsSuccess,
  FetchUserDetailsSuccessPayload,
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
