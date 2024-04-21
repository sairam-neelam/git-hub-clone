import { Reducer } from "redux";
import {
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
} from "./actionTypes";
import { FetchUserDetailsSuccessPayload, RepositoryActions } from "./types";

export interface IGitHub {
  userDetails: FetchUserDetailsSuccessPayload;
}

const initialState: IGitHub = {
  userDetails: {
    data: {
      avatar_url: "",
      name: "",
      login: "",
      bio: "",
      company: "",
      location: "",
      email: "",
      followers: null,
      following: null,
      public_repos: null,
    },
    success: false,
    msg: "",
  },
};

const repoReducer: Reducer<IGitHub, RepositoryActions> = (
  state = initialState,
  action: RepositoryActions
) => {
  switch (action.type) {
    case FETCH_USER_DETAILS_REQUEST:
      return {
        ...state,
      };
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: {
          data: action.payload.data,
          success: true,
          msg: "",
        },
      };
    case FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        userDetails: {
          data: {
            avatar_url: "",
            name: "",
            login: "",
            bio: "",
            company: "",
            location: "",
            email: "",
            followers: null,
            following: null,
            public_repos: null,
          },
          success: false,
          msg: "Error",
        },
      };

    default:
      return state;
  }
};

export default repoReducer;
