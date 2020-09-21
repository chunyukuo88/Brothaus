import { RUSSIAN, ENGLISH, CHINESE } from './types';

export function switchToRussian(){
  return { type: RUSSIAN, payload: 'russian' }
}
export function switchToEnglish(){
  return { type: ENGLISH, payload: 'english'  }
}
export function switchToChinese(){
  return { type: CHINESE, payload: 'chinese' }
}
