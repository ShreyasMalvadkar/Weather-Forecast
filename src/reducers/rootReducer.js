import { combineReducers } from "redux-immutable";

import cityReducer from "../reducers/cityReducer";
import weatherInfoReducer from "../reducers/weatherInfoReducer";

export default combineReducers({
  cityReducer,
  weatherInfoReducer,
});
