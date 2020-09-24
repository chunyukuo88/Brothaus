import urls from '../urls';
import * as types from './types';

export function switchToRussian(){
  return {
    type: types.RUSSIAN,
    payload: 'russian'
  };
}
export function switchToEnglish(){
  return {
    type: types.ENGLISH,
    payload: 'english'
  };
}
export function switchToChinese(){
  return {
    type: types.CHINESE,
    payload: 'chinese'
  };
}
export function getGlobalTemp(){
  return {
    type: types.FETCH_TEMP,
    payload: _fetchTemp(),
  };
}

export async function _fetchTemp(){
  try {
    const result = await fetch(urls.openWeatherUrl);
    const data = await result.json();
    console.log('_fetchTemp()', data.main.temp);
    return data.main.temp;
  } catch (e) {
    console.log(e);
    console.log(e.message);
  }
}
