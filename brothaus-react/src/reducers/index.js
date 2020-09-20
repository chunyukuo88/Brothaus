import { combineReducers } from 'redux';
import languageReducer from './switchLanguage';
import fotoCountReducer from './fotoCount';

export default combineReducers({
  language: languageReducer,
  fotoCount: fotoCountReducer
});
