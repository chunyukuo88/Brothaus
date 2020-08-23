import React, { useState } from 'react';
import '../css/Heading.css';

import Title from './Title';
import WeatherDisplay from './WeatherDisplay';
import Welcome from "./Welcome";
import urls from "../urls";

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
    <div id='heading'>
      <Title/>
      <nav id='nav-items'>
        <Welcome/>
        <a href={urls.githubRepo} target='_blank' rel='noopener noreferrer' id='repo' >Code</a>
        <div onClick={_toggleDegrees}><WeatherDisplay {...degrees}/></div>
        <div onClick={_toggleLanguage} data-test='language-display' className='mdc-list-item__text'>{English ? 'English' : '華語版本'}</div>
      </nav>
    </div>
  );
};
