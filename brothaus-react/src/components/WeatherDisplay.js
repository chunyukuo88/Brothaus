import React, {useEffect, useState} from "react";

export default function WeatherDisplay () {
  const [ temperature, setTemperature ] = useState(73);
  const [ weatherConditions, setWeatherConditions ] = useState('cloudy');

  let temperatureInFahrenheit = (9/5) * (temperature - 273) + 32;
  let displayFahrenheit = `${Math.round(temperatureInFahrenheit)}° and ${weatherConditions} here.`

  const getWeatherFromApi = async () => {
    const myOpenWeatherApiKey = 'eb366c82727f387afc53658766e245e8';
    const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Columbus,Ohio&appid=' + myOpenWeatherApiKey;
    const result = await fetch(openWeatherUrl).then(res => res.json());
    setTemperature(result.main.temp);
    setWeatherConditions(result.weather[0].description);
  }

  useEffect(() => {
    getWeatherFromApi();
  },[]);

  return <div>{displayFahrenheit}</div>;
}
