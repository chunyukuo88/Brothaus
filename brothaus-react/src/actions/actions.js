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
export async function getGlobalTemp(){
  return {
    type: types.FETCH_TEMP,
    payload: await fetchTemp(),
  };
}

async function fetchTemp(){
  try {
    const data = await fetch(urls.openWeatherUrl)
      .then(res => res.json())
      .catch(e => console.error(e.message));
    const result = data.main.temp;
    console.log('_fetchTemp() successful', result);
    return result;
  } catch (e) {
    console.error('_fetchTemp() failed', e.message);
  }
}
