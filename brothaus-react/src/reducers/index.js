import { combineReducers } from 'redux';
import languageReducer from './switchLanguage';


/*
* This combines multiple reducers into a single object.
* */

export default combineReducers({
  language: languageReducer
});
