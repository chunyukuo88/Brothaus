import { combineReducers } from 'redux';
import languageReducer from './switchLanguage';
import globalTempReducer from './globalTempReducer';

/*
* This combines multiple reducers into a single object.
* */
export default combineReducers({
  language: languageReducer,
  globalTemp: globalTempReducer
});
