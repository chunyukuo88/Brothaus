import React, { useState } from 'react';
import '../css/Heading.css';
import Popup from 'reactjs-popup';

import Hamburger from './Hamburger';
import Title from './Title';
import WeatherDisplay from './WeatherDisplay';
import AboutModal from './AboutModal';
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
        <Popup modal trigger={<span>Welcome</span>}>
          {close => <AboutModal close={close} />}
        </Popup>
        <a className='mdc-list-item' target='_blank' href={urls.githubRepo} rel='noopener noreferrer' id='repo' >
          <div className='mdc-list-item__text'>Code</div>
        </a>
        <div onClick={_toggleDegrees}><WeatherDisplay {...degrees}/></div>
        <div onClick={_toggleLanguage} data-test='language-display' className='mdc-list-item__text'>{English ? 'English' : '華語版本'}</div>
        <div id='hamburger'><Hamburger /></div>
      </nav>
    </div>
  );
};
