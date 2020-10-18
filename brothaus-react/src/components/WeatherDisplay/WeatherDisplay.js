import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChineseWeatherDisplay, EnglishWeatherDisplay, RussianWeatherDisplay } from './WeatherDisplayLocalizations';

export default function WeatherDisplay () {
  const [ degreesKelvin, setDegreesKelvin] = useState(285);
  const [ humidity, setHumidity ] = useState(50);
  const selectedLanguage = useSelector((state) => state.language);

  const displayLanguage = (language) => {
    switch(language){
      case 'russian': return getRussianDisplay(getDegreesCelsius(degreesKelvin), humidity);
      case 'chinese': return getChineseDisplay(getDegreesCelsius(degreesKelvin), humidity);
      default:        return getEnglishDisplay(getDegreesFahrenheit(degreesKelvin), humidity);
    }
  }

  const getWeatherFromApi = async () => {
    const weatherUrl = `${process.env.REACT_APP_OPENWEATHER_URL}${process.env.REACT_APP_OPENWEATHER_KEY}`;
    const result = await fetch(weatherUrl).then(res => res.json());
    setDegreesKelvin(result.main.temp);
    setHumidity(result.main.humidity);
  }

  useEffect(() => {
    getWeatherFromApi();
  },[degreesKelvin]);

  return <div className='weather'>{displayLanguage(selectedLanguage)}</div>;
}

const getDegreesFahrenheit = degreesKelvin => (9/5) * (degreesKelvin - 273) + 32;
const getDegreesCelsius = degreesKelvin => (degreesKelvin - 273.15);

const getEnglishDisplay = (temp, humidity) => {
  const props = {temp, humidity}
  return <EnglishWeatherDisplay {...props}/>
}

const getChineseDisplay = (temp, humidity) => {
  const props = {temp, humidity};
  return <ChineseWeatherDisplay {...props}/>
}

const getRussianDisplay = (temp, humidity) => {
  const props = {temp, humidity};
  return <RussianWeatherDisplay {...props}/>
}
