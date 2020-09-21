import '../actions';
import '../types';
import { switchToRussian, switchToChinese, switchToEnglish } from '../actions';

describe('actions.js: ', ()=>{
  describe('The switchToRussian action creator', ()=>{
    const action = switchToRussian();
    test('has the correct type,', ()=>{
      expect(action.type).toEqual('RUSSIAN');
    });
    test('and has the correct payload.', ()=>{
      expect(action.payload).toEqual('russian');
    });
  });
  describe('The switchToChinese action creator', ()=>{
    const action = switchToChinese();
    test('has the correct type,', ()=>{
      expect(action.type).toEqual('CHINESE');
    });
    test('and has the correct payload.', ()=>{
      expect(action.payload).toEqual('chinese');
    });
  });
  describe('The switchToEnglish action creator', ()=>{
    const action = switchToEnglish();
    test('has the correct type,', ()=>{
      expect(action.type).toEqual('ENGLISH');
    });
    test('and has the correct payload.', ()=>{
      expect(action.payload).toEqual('english');
    });
  });
});
