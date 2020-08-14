import React, { useEffect, useState } from "react";
import urls from "../urls";

export default function WeatherDisplay () {
  const [ degreesKelvin, setDegreesKelvin] = useState(200);
  const [ weatherConditions, setWeatherConditions ] = useState('cloudy');

  const degreesFahrenheit = getDegreesFahrenheit(degreesKelvin);
  const temperatureAndConditions = getDisplayFahrenheit(degreesFahrenheit, weatherConditions);

  const getWeatherFromApi = async () => {
    const result = await fetch(urls.openWeatherUrl).then(res => res.json());
    setDegreesKelvin(result.main.temp);
    setWeatherConditions(result.weather[0].description);
  }

  useEffect(() => {
    getWeatherFromApi();
  },[]);

  return <div>{temperatureAndConditions}</div>;
}

const getDisplayFahrenheit = (temp, conditions) => `${Math.round(temp)}° and ${conditions}.`;

const getDegreesFahrenheit = degreesKelvin => (9/5) * (degreesKelvin - 273) + 32;
