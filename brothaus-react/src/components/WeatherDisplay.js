import React, { useState } from "react";

function WeatherDisplay(){
  const [ weatherDisplay, setWeatherDisplay ] = useState('Weather');

  return (
    <div>
      {weatherDisplay}
    </div>
  );


}

export default WeatherDisplay;
