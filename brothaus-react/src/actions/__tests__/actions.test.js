import * as actions from '../actions';
import urls from '../../urls';

global.fetch = jest.fn(() =>
  setTimeout( ()=>{
    Promise.resolve({
      json: ()=> Promise.resolve({ data: { main: { temp: 50 }}}),
    })
  }, 100)
);


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
    const action = actions.getGlobalTemp();
    test('has the correct type', ()=>{
      setTimeout(()=>{
        console.log(action.type);
        expect(action.type).toEqual('FETCH_TEMP');
      }, 100);
    });
    test('and calls the correct URL.', ()=>{
        expect(global.fetch).toHaveBeenCalledWith(urls.openWeatherUrl);
    });
    test('and has the correct payload.', ()=>{
        const result = action.payload;
        expect(result).toBe({ temp: 20 });
    });
  });
  describe('The _fetchTemp helper function', ()=>{
    test('handles exception with null', async () => {
      fetch.mockImplementationOnce(() => Promise.reject('Api failure'));
      const result = await actions._fetchTemp();
      expect(result).not.toBeDefined();
    });
  });
});

