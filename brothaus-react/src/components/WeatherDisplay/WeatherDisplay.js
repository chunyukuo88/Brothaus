import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import urls from '../../urls';
import { ChineseWeatherDisplay, EnglishWeatherDisplay, RussianWeatherDisplay } from './WeatherDisplayLocalizations';

export default function WeatherDisplay () {
  const [ degreesKelvin, setDegreesKelvin] = useState(275);
  const [ startingDisplay, setStartingDisplay ] = useState(false);
  const [ humidity, setHumidity ] = useState(50);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {
    getWeatherFromApi();
  }, [degreesKelvin, humidity]);

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

  const weatherTitlePerLang = (language) => {
    switch(language){
      case 'russian': return <div className='russian'>местная погода</div>;
      case 'chinese': return <div className='chinese'>當地天氣</div>;;
      default:        return <div className='english'>Westerville Weather</div>;;
    }
  };

  return (
      <div onClick={()=> setStartingDisplay(!startingDisplay)} className='weather'>
        {startingDisplay ? weatherDisplayPerLang(selectedLanguage) : weatherTitlePerLang(selectedLanguage)}
      </div>
  );
}

const getDegreesFahrenheit = degreesKelvin => (9/5) * (degreesKelvin - 273) + 32;
const getDegreesCelsius = degreesKelvin => (degreesKelvin - 273.15);

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
