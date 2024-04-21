import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUser } from "../../services/apiService";
import { FetchUserDetailsRequest } from "./types";
import { fetchUserDetailsFailure, fetchUserDetailsSuccess } from "./action";
import { FETCH_USER_DETAILS_REQUEST } from "./actionTypes";

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

export function* repoSagaWatcher() {
  yield all([takeLatest(FETCH_USER_DETAILS_REQUEST, fetchUserDetailsSaga)]);
}
