import languageReducer from '../reducers/switchLanguage';
import { RUSSIAN, CHINESE, English } from '../actions/types';

describe('switchLanguage.js reducer:', ()=>{
  describe('When invoked, ', ()=>{
    test('it handles actions of type CHINESE', ()=>{
      const action = {
        type: CHINESE,
        payload: 'russian'
      };
      const newState = languageReducer('english', action);
      expect(newState).toEqual(action.payload);
    });
  });
});
