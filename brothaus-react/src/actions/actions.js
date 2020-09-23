import axios from 'axios';
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
  const response = await fetch(urls.openWeatherUrl).then(res => res.json());
  console.log('getGlobalTemp(): ', response.main.temp);
  return {
    type: types.FETCH_TEMP,
    payload: response.main.temp,
  };
}
