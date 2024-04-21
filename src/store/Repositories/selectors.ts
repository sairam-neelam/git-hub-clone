import { AppState } from "../rootReducer";
import { createSelector } from "reselect";

const usersData = (state: AppState) => state?.gitHub?.userDetails;
const userReposData = (state: AppState) => state?.gitHub?.userRepos;

export const usersDataSelector = createSelector(
  usersData,
  (userDetails) => userDetails
);
export const userReposDataSelector = createSelector(
  userReposData,
  (userRepos) => userRepos
);
