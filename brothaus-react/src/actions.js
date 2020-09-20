/*
 * action types
 */
export const RUSSIAN = 'RUSSIAN';
export const ENGLISH = 'ENGLISH';
export const CHINESE = 'CHINESE';
export const UPDATE_FROM_S3 = 'UPDATE_FROM_S3';

/*
 * action creators
 */
export function switchToRussian(){
  return { type: RUSSIAN }
}
export function switchToEnglish(){
  return { type: ENGLISH }
}
export function switchToChinese(){
  return { type: CHINESE }
}
export function updateFotoCount(){
  return { type: UPDATE_FROM_S3 }
}
