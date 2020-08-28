import React, { useState } from 'react';
import '../css/Heading.css';

import Title from './Title';
import WeatherDisplay from './WeatherDisplay';
import Welcome from "./Welcome";
import Code from "./Code";

export default function Heading(){
  const [ English, setEnglish ] = useState(true);
  const [ degrees, toggleDegreeType ] = useState({isFahrenheit: true});

  const _toggleLanguage = () => {
    setEnglish(!English);
  };

  const _toggleDegrees = () => {
    toggleDegreeType({isFahrenheit: !degrees.isFahrenheit});
  };

  return (
    <div data-testid='heading'>
      <Title/>
      <nav id='nav-items'>
        <div className='nav-item'>
              <Welcome/>
        </div>
        <div className='nav-item'>
              <Code/>
        </div>
        <div className='nav-item' onClick={_toggleDegrees}>
              <WeatherDisplay {...degrees}/>
        </div>
        <div onClick={_toggleLanguage} >
              <span data-test='language-display'
                    className='nav-item' >{English ? 'English' : '華語版本'}
              </span>
        </div>
      </nav>
    </div>
  );
};
