import { all } from "redux-saga/effects";
import { repoSagaWatcher } from "./Repositories/saga";
export function* rootSaga() {
  yield all([repoSagaWatcher()]);
}
