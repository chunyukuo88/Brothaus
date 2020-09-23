import globalTempReducer from './globalTempReducer';
import { FETCH_TEMP} from '../actions/types';

describe('globalTemp.js reducer:', ()=>{
  describe('When invoked with the valid action type GLOBAL_TEMP', ()=>{
    test('It sets the global temperature state.', ()=>{
      const dispatchedTemp = 40;
      const action = {
        type: FETCH_TEMP,
        payload: dispatchedTemp
      };
      const newState = globalTempReducer(undefined, action);
      expect(newState).toEqual(dispatchedTemp);
    });
  });
  describe('When invoked with an invalid action type GLOBAL_TEMP', ()=>{
    test('It handles the action and returns the default state', ()=>{
      const action = {
        type: 'CRAP',
        payload: 'crap'
      };
      const newState = globalTempReducer(undefined, action);
      expect(newState).toEqual(40);
    });
  });
});
