import urls from '../urls';
import ACTION_TYPES from './types';

export function switchToRussian(){
  return {
    type: ACTION_TYPES.RUSSIAN,
    payload: 'russian'
  };
}
export function switchToEnglish(){
  return {
    type: ACTION_TYPES.ENGLISH,
    payload: 'english'
  };
}
export function switchToChinese(){
  return {
    type: ACTION_TYPES.CHINESE,
    payload: 'chinese'
  };
}

export async function getGlobalTemp(){
  return {
    type: ACTION_TYPES.FETCH_TEMP,
    payload: {
      globalTemp: await fetchWeather('temp'),
    }
  };
}

export async function getGlobalHumidity(){
  return {
    type: ACTION_TYPES.FETCH_HUMIDITY,
    payload: {
      globalHumidity: await fetchWeather('humidity'),
    }
  };
}

async function fetchWeather(weatherAttribute){
  try {
    const data = await fetch(urls.openWeatherUrl)
      .then(res => res.json())
      .catch(e => console.error(e.message));
    const result = (weatherAttribute === 'temp')
        ? data.main.temp
        : data.main.humidity;
    console.log(`fetchWeather() successful. ${weatherAttribute}: `, result);
    return result;
  } catch (e) {
    console.error('fetchWeather() failed', e.message);
  }
}



