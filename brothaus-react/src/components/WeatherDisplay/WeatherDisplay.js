import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { getDegreesF, getDegreesC } from './utils';
import { ChineseWeatherDisplay, 
         EnglishWeatherDisplay, 
         RussianWeatherDisplay, 
         WeatherStartingLabels } from './WeatherDisplayLocalizations';



export default function WeatherDisplay () {
  const [ degreesK, setDegreesK] = useState(275); // degreesKelvin
  const [ humidity, setHumidity ] = useState(50);
  const [ showWeather, setShowWeather ] = useState(false);
  const selectedLang = useSelector((state) => state.language);

  useEffect(() => {
    _buildWeatherData(setDegreesK, setHumidity);
  });

  const toggleDisplay = () => setShowWeather(!showWeather);

  return (
    <div onClick={toggleDisplay} className='weather'>
      {_buildDisplay(showWeather, selectedLang , degreesK, humidity)}
    </div>
    );
}



const _buildDisplay = (showWeather, selectedLang, degreesK, humidity) => {
  return showWeather 
          ? _buildWeatherDisplay(selectedLang, degreesK, humidity) 
          : _buildWeatherTitle(WeatherStartingLabels, selectedLang);
}

const _buildWeatherDisplay = (language, degreesK, humidity) => {
  const celsius = getDegreesC(degreesK);
  const fahrenheit = getDegreesF(degreesK);
  switch(language){
    case 'russian': return getRussianDisplay(celsius, humidity);
    case 'chinese': return getChineseDisplay(celsius, humidity);
    default: return getEnglishDisplay(fahrenheit, humidity);
  }
};

const _buildWeatherData = async (degreesSetter, humiditySetter) => {
  const fetchedWeatherData = await fetch(urls.openWeatherUrl).then(res => res.json());
  degreesSetter(fetchedWeatherData.main.temp);
  humiditySetter(fetchedWeatherData.main.humidity);
}

const _buildWeatherTitle = (WeatherStartingLabels, language) => {
  return (
    <div className={language}>
      {WeatherStartingLabels[language]}
    </div>
  );
};

const getEnglishDisplay = (temp, humidity) => {
  const props = { temp, humidity }
  return <EnglishWeatherDisplay {...props}/>
};

const getChineseDisplay = (temp, humidity) => {
  const props = { temp, humidity }
  return <ChineseWeatherDisplay {...props}/>
};

const getRussianDisplay = (temp, humidity) => {
  const props = { temp, humidity }
  return <RussianWeatherDisplay {...props}/>
};