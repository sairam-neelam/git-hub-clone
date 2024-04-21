import { AppState } from "../rootReducer";
import { createSelector } from "reselect";

const usersData = (state: AppState) => state?.gitHub?.userDetails;

export const usersDataSelector = createSelector(
  usersData,
  (userDetails) => userDetails
);
