import { all } from "redux-saga/effects"
import charDataWatcher from "./charDataSaga"

export default function* rootSaga() {
  yield all([charDataWatcher()])
}
