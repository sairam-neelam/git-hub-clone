import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUser, fetchUserRepos } from "../../services/apiService";
import { FetchUserDetailsRequest, FetchUserReposRequest } from "./types";
import {
  fetchUserDetailsFailure,
  fetchUserDetailsSuccess,
  fetchUserReposFailure,
  fetchUserReposSuccess,
} from "./action";
import {
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_REPOS_REQUEST,
} from "./actionTypes";

function* fetchUserDetailsSaga(action: FetchUserDetailsRequest): any {
  try {
    const response = yield call(fetchUser);
    yield put(
      fetchUserDetailsSuccess({
        data: response,
        success: true,
        msg: "",
      })
    );
  } catch (e) {
    yield put(
      fetchUserDetailsFailure({
        success: false,
        msg: "Error",
      })
    );
  }
}

function* fetchUserReposSaga(action: FetchUserReposRequest): any {
  try {
    const response = yield call(fetchUserRepos);
    yield put(
      fetchUserReposSuccess({
        data: response,
        success: true,
        msg: "",
      })
    );
  } catch (e) {
    yield put(
      fetchUserReposFailure({
        success: false,
        msg: "Error",
      })
    );
  }
}

export function* repoSagaWatcher() {
  yield all([
    takeLatest(FETCH_USER_DETAILS_REQUEST, fetchUserDetailsSaga),
    takeLatest(FETCH_USER_REPOS_REQUEST, fetchUserReposSaga),
  ]);
}
