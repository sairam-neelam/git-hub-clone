import {
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_REPOS_FAILURE,
  FETCH_USER_REPOS_REQUEST,
  FETCH_USER_REPOS_SUCCESS,
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

export interface Repo {
  id: number;
  name: string;
  description: string;
  private: boolean;
  language: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number | null;
  archived: boolean;
  mirror_url: string | null;
  is_template: boolean;
  license: {
    key: string;
    name: string;
  };
}

export interface FetchUserReposSuccessPayload {
  data: Repo[];
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

export interface FetchUserReposRequest {
  type: typeof FETCH_USER_REPOS_REQUEST;
  [key: string]: any;
}

export interface FetchUserReposSuccess {
  type: typeof FETCH_USER_REPOS_SUCCESS;
  payload: FetchUserReposSuccessPayload;
}

export interface FetchUserReposFailure {
  type: typeof FETCH_USER_REPOS_FAILURE;
  payload: FetchFailurePayload;
}

export type RepositoryActions =
  | FetchUserDetailsRequest
  | FetchUserDetailsSuccess
  | FetchUserDetailsFailure
  | FetchUserReposRequest
  | FetchUserReposSuccess
  | FetchUserReposFailure;
