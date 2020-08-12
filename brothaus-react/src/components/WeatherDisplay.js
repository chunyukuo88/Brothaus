import React from "react";



function WeatherDisplay(){
  const [ weatherDisplay, setWeatherDisplay ] = useState('Weather');

  // let axiosedWeather = getWeatherFromApi();
  let axiosedWeather = 'mork';

  return (
    <div>
      {weatherDisplay}
    </div>
  );

}

export const getWeatherFromApi = async () => {
  const apiKey = 'eb366c82727f387afc53658766e245e8';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Columbus,Ohio&appid=' + apiKey;
  return await axios.get(url);
}

export default WeatherDisplay;
