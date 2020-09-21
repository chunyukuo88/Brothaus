import languageReducer from '../reducers/switchLanguage';
import { CHINESE } from '../actions/types';

describe('switchLanguage.js reducer:', ()=>{
  describe('When invoked with a valid action type such as CHINESE, ', ()=>{
    test('it handles the action and returns "chinese".', ()=>{
      const action = {
        type: CHINESE,
        payload: 'chinese'
      };
      const newState = languageReducer(undefined, action);
      expect(newState).toEqual('chinese');
    });
    describe('When invoked with an invalid type, ', ()=>{
      test('it handles the action and returns the default state.', ()=>{
        const action = {
          type: 'CRAP',
          payload: 'crap'
        };
        const newState = languageReducer(undefined, action);
        expect(newState).toEqual('english');
      });
    });
  });
});
