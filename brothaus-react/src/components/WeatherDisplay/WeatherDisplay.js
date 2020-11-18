import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { ChineseWeatherDisplay, EnglishWeatherDisplay, RussianWeatherDisplay, WeatherStartingLabel } from './WeatherDisplayLocalizations';
import { getDegreesFahrenheit, getDegreesCelsius } from './utils';

export default function WeatherDisplay () {
  const [ degreesKelvin, setDegreesKelvin] = useState(275);
  const [ startingDisplay, setStartingDisplay ] = useState(false);
  const [ humidity, setHumidity ] = useState(50);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {
    getWeatherFromApi();
  });

  const getWeatherFromApi = async () => {
    const result = await fetch(urls.openWeatherUrl).then(res => res.json());
    setDegreesKelvin(result.main.temp);
    setHumidity(result.main.humidity);
  };

  const weatherDisplayPerLang = (language) => {
    switch(language){
      case 'russian': return getRussianDisplay(getDegreesCelsius(degreesKelvin), humidity);
      case 'chinese': return getChineseDisplay(getDegreesCelsius(degreesKelvin), humidity);
      default:        return getEnglishDisplay(getDegreesFahrenheit(degreesKelvin), humidity);
    }
  };

  return (
      <div onClick={()=> setStartingDisplay(!startingDisplay)} className='weather'>
        {startingDisplay ? weatherDisplayPerLang(selectedLanguage) : weatherTitlePerLang(WeatherStartingLabel, selectedLanguage)}
      </div>
  );
}

const weatherTitlePerLang = (WeatherStartingLabel, language) => {
  return <div className={language}>{WeatherStartingLabel[language]}</div>;
};

const getEnglishDisplay = (temp, humidity) => {
  const props = {temp, humidity}
  return <EnglishWeatherDisplay {...props}/>
};

const getChineseDisplay = (temp, humidity) => {
  const props = {temp, humidity};
  return <ChineseWeatherDisplay {...props}/>
};

const getRussianDisplay = (temp, humidity) => {
  const props = {temp, humidity};
  return <RussianWeatherDisplay {...props}/>
};
