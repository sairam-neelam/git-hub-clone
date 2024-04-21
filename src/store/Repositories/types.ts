import {
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
} from "./actionTypes";

export interface FetchUserDetailsSuccessPayload {
  data: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    company: string;
    location: string;
    email: string;
    followers: number | null;
    following: number | null;
    public_repos: number | null;
  };
  success: boolean;
  msg: string;
}

export interface FetchFailurePayload {
  success: boolean;
  msg: string;
}

export interface FetchUserDetailsRequest {
  type: typeof FETCH_USER_DETAILS_REQUEST;
  [key: string]: any;
}

export interface FetchUserDetailsSuccess {
  type: typeof FETCH_USER_DETAILS_SUCCESS;
  payload: FetchUserDetailsSuccessPayload;
}

export interface FetchUserDetailsFailure {
  type: typeof FETCH_USER_DETAILS_FAILURE;
  payload: FetchFailurePayload;
}

export type RepositoryActions =
  | FetchUserDetailsRequest
  | FetchUserDetailsSuccess
  | FetchUserDetailsFailure;
