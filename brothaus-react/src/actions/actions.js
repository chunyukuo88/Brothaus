import urls from '../urls';
import * as types from './types';
import axios from 'axios';

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
export async function getGlobalTemp(){
  return {
    type: types.FETCH_TEMP,
    payload: await _fetchTemp(),
  };
}

//exported for testing purposes
export async function _fetchTemp(){
  try {
    const result = await fetch(urls.openWeatherUrl)
      .then(res => res.json());
    console.log('_fetchTemp() successful', result.main.temp);
    return result.main.temp;
  } catch (e) {
    console.log('_fetchTemp() failed', e.message);
  }
}
