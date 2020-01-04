import { call, put, takeEvery } from "redux-saga/effects"
import { getCall } from "./api"

import * as types from "../actionTypes"

function* getDataChar(action) {
  const { response, error } = yield call(
    getCall,
    "https://rickandmortyapi.com/api/character/",
    action.param
  )
  if (response) {
    yield put({ type: types.GET_CHAR_DATA_SUCCESS, payload: response.data })
  } else {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export default function* charDataWatcher() {
  yield takeEvery(types.GET_CHAR_DATA_BEGIN, getDataChar)
}
