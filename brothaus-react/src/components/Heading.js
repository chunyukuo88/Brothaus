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
    <div data-testid='heading' id='heading'>
      <Title/>
      <nav id='nav-items'>
        <div id='nav-items__welcome' className='nav-item'>
              <Welcome/>
        </div>
        <div id='nav-items__code' className='nav-item'>
              <Code/>
        </div>
        <div id='nav-items__weather' className='nav-item' onClick={_toggleDegrees}>
              <WeatherDisplay {...degrees}/>
        </div>
        <div id='nav-items__language' onClick={_toggleLanguage} className='nav-item'>
              <span data-test='language-display'
                    className='nav-item' >{English ? 'EN' : '華語'}
              </span>
        </div>
      </nav>
    </div>
  );
};
