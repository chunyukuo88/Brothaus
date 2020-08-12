import React, {useEffect, useState} from "react";



function WeatherDisplay(){
  const [ temperature, setTemperature ] = useState(73);

  let fahrenheit = (9/5) * (temperature - 273) + 32;
  // let celsius = fahrenheit - 32 * (5/9);

  let displayFahrenheit = `${Math.round(fahrenheit)}° in Columbus`
  // let displayCelsius = `${Math.round(celsius)}° in Columbus`

  const getWeatherFromApi = async () => {
    const apiKey = 'eb366c82727f387afc53658766e245e8';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Columbus,Ohio&appid=' + apiKey;
    const result = await fetch(url)
      .then(res => res.json());
    setTemperature(result.main.temp);
  }

  useEffect(() => {
    getWeatherFromApi();
  },[]);

  return (
    <div>
      {displayFahrenheit}
    </div>
  );

}

export default WeatherDisplay;
