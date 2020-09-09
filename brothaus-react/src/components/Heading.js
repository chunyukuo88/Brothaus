import React, {useState} from 'react';
import '../css/Heading.css';
import { switchToRussian, switchToEnglish, switchToChinese } from '../actions';
import { useDispatch } from 'react-redux';

import Title from './Title/Title';
import WeatherDisplay from './WeatherDisplay';
import Welcome from './Welcome';
import Code from './Code';

export default function Heading(){
  const dispatch = useDispatch();
  const [ degrees, toggleDegreeType ] = useState({isFahrenheit: true});

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
        <div id='nav-items__weather'
             className='nav-item'
             onClick={_toggleDegrees}
             data-test='weather-display'>
              <WeatherDisplay {...degrees}/>
        </div>
        <div id='nav-items__language' className='nav-item'>
              <span id='rus' className='nav-item russian' onClick={()=>dispatch(switchToRussian())}>🇷🇺</span>
              <span id='en' className='nav-item english' onClick={()=>dispatch(switchToEnglish())}>🇺🇸</span>
              <span id='ch' className='nav-item chinese' onClick={()=>dispatch(switchToChinese())}>🇹🇼</span>
        </div>
      </nav>
    </div>
  );
};
