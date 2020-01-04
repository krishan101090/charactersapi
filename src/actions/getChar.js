import { GET_CHAR_DATA_BEGIN, GET_CHAR_DATA_SUCCESS } from "../actionTypes"

export function getCharDataBegin(param) {
  return {
    type: GET_CHAR_DATA_BEGIN,
    param
  }
}
export function getCharDataSuccess(payload) {
  return {
    type: GET_CHAR_DATA_SUCCESS,
    payload
  }
}
