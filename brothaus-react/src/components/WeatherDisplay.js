import React, { useEffect, useState } from "react";
import urls from "../urls";

export default function WeatherDisplay (props) {
  const [ degreesKelvin, setDegreesKelvin] = useState(200);
  const [ weatherConditions, setWeatherConditions ] = useState('cloudy');

  const display = (props.isFahrenheit === true)
    ? getDisplayFahrenheit(getDegreesFahrenheit(degreesKelvin), weatherConditions)
    : getDisplayCelsius(getDegreesCelsius(degreesKelvin), weatherConditions);

  const getWeatherFromApi = async () => {
    const result = await fetch(urls.openWeatherUrl).then(res => res.json());
    setDegreesKelvin(result.main.temp);
    setWeatherConditions(result.weather[0].description);
  }

  useEffect(() => {
    getWeatherFromApi();
  },[]);

  return  <div>
            {display}
          </div>;
}

const getDegreesFahrenheit = degreesKelvin => (9/5) * (degreesKelvin - 273) + 32;
const getDegreesCelsius    = degreesKelvin => (degreesKelvin - 273.15);

const getDisplayFahrenheit = (temp, conditions) => `${Math.round(temp)}°F and ${conditions}.`;
const getDisplayCelsius    = (temp, conditions) => `${Math.round(temp)}°C and ${conditions}.`;

