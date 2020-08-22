import React, { useEffect, useState } from "react";
import urls from "../urls";

export default function WeatherDisplay (props) {
  const [ degreesKelvin, setDegreesKelvin] = useState(200);
  const [ humidity, setHumidity ] = useState(50);

  const display = (props.isFahrenheit === true)
    ? getDisplayFahrenheit(getDegreesFahrenheit(degreesKelvin), humidity)
    : getDisplayCelsius(getDegreesCelsius(degreesKelvin), humidity);

  const getWeatherFromApi = async () => {
    const result = await fetch(urls.openWeatherUrl).then(res => res.json());
    setDegreesKelvin(result.main.temp);
    setHumidity(result.main.humidity);
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

const getDisplayFahrenheit = (temp, humidity) => `${Math.round(temp)}°F & ${humidity}% humidity.`;
const getDisplayCelsius    = (temp, humidity) => `${Math.round(temp)}°C & ${humidity}% humidity.`;

