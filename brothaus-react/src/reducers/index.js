import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import globalTempReducer from './globalTempReducer';
import globalHumidityReducer from "./globalHumidityReducer";

/*
* This combines multiple reducers into a single object.
* */
export default combineReducers({
  language: languageReducer,
  globalTemp: globalTempReducer,
  globalHumidity: globalHumidityReducer,
});
