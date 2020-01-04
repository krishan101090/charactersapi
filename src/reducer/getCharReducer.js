import { GET_CHAR_DATA_SUCCESS } from "../actionTypes"

const initialState = {
  data: {}
}

export default function getCharReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHAR_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
