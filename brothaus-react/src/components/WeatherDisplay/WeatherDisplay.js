import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { getDegreesFahrenheit, getDegreesCelsius } from './utils';
import { ChineseWeatherDisplay, 
         EnglishWeatherDisplay, 
         RussianWeatherDisplay, 
         WeatherStartingLabel } from './WeatherDisplayLocalizations';



export default function WeatherDisplay () {
  const [ degreesK, setDegreesK] = useState(275); // degreesKelvin
  const [ humidity, setHumidity ] = useState(50);
  const [ showWeather, setShowWeather ] = useState(false);
  const selectedLang = useSelector((state) => state.language);

  useEffect(() => {
    getWeatherFromApi(setDegreesK, setHumidity);
  });

  const toggleDisplay = () => setShowWeather(!showWeather);

  return (
    <div onClick={toggleDisplay} className='weather'>
      {_buildDisplay(showWeather, selectedLang , degreesK, humidity)}
    </div>
    );
}



const _buildDisplay = (showWeather, selectedLang , degreesK, humidity) => {
  return showWeather 
          ? weatherDisplayPerLang(selectedLang , degreesK, humidity) 
          : weatherTitlePerLang(WeatherStartingLabel, selectedLang);
}

const weatherDisplayPerLang = (language, degreesK, humidity) => {
  switch(language){
    case 'russian': return getRussianDisplay(getDegreesCelsius(degreesK), humidity);
    case 'chinese': return getChineseDisplay(getDegreesCelsius(degreesK), humidity);
    default: return getEnglishDisplay(getDegreesFahrenheit(degreesK), humidity);
  }
};

const getWeatherFromApi = async (degreesSetter, humiditySetter) => {
  const fetchResult = await fetch(urls.openWeatherUrl).then(res => res.json());
  degreesSetter(fetchResult.main.temp);
  humiditySetter(fetchResult.main.humidity);
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
