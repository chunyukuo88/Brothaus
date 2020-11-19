import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { getDegreesFahrenheit, getDegreesCelsius } from './utils';
import { ChineseWeatherDisplay, 
         EnglishWeatherDisplay, 
         RussianWeatherDisplay, 
         WeatherStartingLabel } from './WeatherDisplayLocalizations';



export default function WeatherDisplay () {
  const [ degreesKelvin, setDegreesKelvin] = useState(275);
  const [ humidity, setHumidity ] = useState(50);
  const [ startingDisplay, setStartingDisplay ] = useState(false);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {
    getWeatherFromApi(setDegreesKelvin, setHumidity);
  });

  const weatherDisplayPerLang = (language) => {
    switch(language){
      case 'russian': return getRussianDisplay(getDegreesCelsius(degreesKelvin), humidity);
      case 'chinese': return getChineseDisplay(getDegreesCelsius(degreesKelvin), humidity);
      default: return getEnglishDisplay(getDegreesFahrenheit(degreesKelvin), humidity);
    }
  };

  return (<div onClick={()=> setStartingDisplay(!startingDisplay)} className='weather'>
            {startingDisplay ? weatherDisplayPerLang(selectedLanguage) : weatherTitlePerLang(WeatherStartingLabel, selectedLanguage)}
          </div>);
}



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
