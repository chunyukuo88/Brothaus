import * as actions from '../actions';
import urls from "../../urls";

describe('actions.js: ', ()=>{
  describe('The switchToRussian action creator', ()=>{
    const action = actions.switchToRussian();
    test('has the correct type,', ()=>{
      expect(action.type).toEqual('RUSSIAN');
    });
    test('and has the correct payload.', ()=>{
      expect(action.payload).toEqual('russian');
    });
  });
  describe('The switchToChinese action creator', ()=>{
    const action = actions.switchToChinese();
    test('has the correct type,', ()=>{
      expect(action.type).toEqual('CHINESE');
    });
    test('and has the correct payload.', ()=>{
      expect(action.payload).toEqual('chinese');
    });
  });
  describe('The switchToEnglish action creator', ()=>{
    const action = actions.switchToEnglish();
    test('has the correct type,', ()=>{
      expect(action.type).toEqual('ENGLISH');
    });
    test('and has the correct payload.', ()=>{
      expect(action.payload).toEqual('english');
    });
  });
  describe('The getGlobalTemp action creator', ()=>{
    const mockSuccessResponse = { temp: 50 };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const action = actions.getGlobalTemp();
    test('has the correct type', ()=>{
      expect(action.type).toEqual('FETCH_TEMP');
    });
    test('and has the correct payload.', ()=>{
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(urls.openWeatherUrl);
    });
  });
});

