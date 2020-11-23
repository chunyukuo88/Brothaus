import React from 'react';
import { switchToRussian, switchToEnglish, switchToChinese } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Title from '../Title/Title';
import Welcome from '../Welcome/Welcome';
import flag_kazakhstan from './flag_kazakhstan.png';
import flag_australia from './flag_australia.png';
import flag_taiwan from './flag_taiwan.png';
import * as GA from '../../googleAnalytics/events';
import '../../css/Heading.css';

function Heading(){
  const dispatch = useDispatch();

  return (
    <section id="heading" data-test='heading'>
      <div id="heading__title">
        <Title/>
      </div>
      <nav id='heading__nav-items'>
        <div id='nav-items__welcome' className='nav-item' onClick={GA.welcomeTextGA}>
          <Welcome/>
        </div>
        <div id='nav-items__weather' className='nav-item' data-test='weather-display'>
          <WeatherDisplay/>
        </div>
        <div id='nav-items__language' className='nav-item'>
          {_getLocalizationStrings(dispatch)}
        </div>
      </nav>
    </section>
  );
};

const _getLocalizationStrings = (dispatch) => {
  return (
    <>
      <div id='rus' role='img' aria-label='russian flag' className='russian' onClick={()=>{
        GA.russianIconGA();
        dispatch(switchToRussian());
      }}>
        <img className="national-flag-icon" src={flag_kazakhstan} alt="flag of Kazakhstan"/>
      </div>
      <div id='en' role='img' aria-label='american  flag' className='english' onClick={()=>{
        GA.englishIconGA();
        dispatch(switchToEnglish());
      }}>
        <img className="national-flag-icon" src={flag_australia} alt="flag of Australia"/>
      </div>
      <div id='ch' role='img' aria-label='chinese flag' className='chinese' onClick={()=>{
        GA.chineseIconGA();
        dispatch(switchToChinese())
      }}>
        <img className="national-flag-icon" src={flag_taiwan} alt="flag of Taiwan"/>
      </div>
    </>
  );
}

export default Heading;