import * as actions from '../actions';
import urls from '../../urls';
import 'fetch';

const action = actions.getGlobalTemp();
jest.mock('fetch', () => ({
  __esModule: true,
  default: () => {
    return mockSuccessResponse
  }
}));
let mockSuccessResponse = {
  main:  {
    temp: 50
  }
};

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
    // const mockSuccessResponse = { temp: 50 };
    // const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    // const mockFetchPromise = Promise.resolve({
    //   json: () => mockJsonPromise,
    // });
    // jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    test('has the correct type', ()=>{
      expect(action.type).toEqual('FETCH_TEMP');
    });
    test('and calls the correct URL.', ()=>{
      expect(global.fetch).toHaveBeenCalledWith(urls.openWeatherUrl);
    });
    test('and has the correct payload.', ()=>{
      console.log('\n=== action.payload ===\n', action);
      // expect(action.payload.temp).toBe(50);
      expect(action).toBe(50);
    });
  });
});

