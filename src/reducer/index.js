import { combineReducers } from "redux"
import getCharReducer from "./getCharReducer"

const rootReducer = combineReducers({
  data: getCharReducer
})

export default rootReducer
