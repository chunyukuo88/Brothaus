/*
 * action types
 */
export const RUSSIAN = 'RUSSIAN';
export const ENGLISH = 'ENGLISH';
export const CHINESE = 'CHINESE';

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
