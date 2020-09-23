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
  const fetchedWeatherObject = await fetch(urls.openWeatherUrl).then(res => res.json());
  const temp = fetchedWeatherObject.main.temp;
  console.log('getGlobalTemp(): ', temp);
  return {
    type: types.FETCH_TEMP,
    payload: temp,
  };
}
