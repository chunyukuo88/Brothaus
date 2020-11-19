import React from 'react';
import '../../css/Heading.css';
import { switchToRussian, switchToEnglish, switchToChinese } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Title from '../Title/Title';
import Welcome from '../Welcome/Welcome';
import * as GA from '../../googleAnalytics/events';

export default function Heading(){
  const dispatch = useDispatch();

  return (
    <section data-test='heading'>
      <Title/>
      <nav id='nav-items'>
        <WrappedWelcomeComponent/>
        {_getLocalizationStrings(dispatch)}
        <div id='nav-items__weather' className='nav-item' data-test='weather-display'>
          <WeatherDisplay/>
        </div>
      </nav>
    </section>
  );
};

const WrappedWelcomeComponent = () => <div id='nav-items__welcome'
                                            className='nav-item'
                                            onClick={GA.welcomeTextGA}><Welcome/></div>;

const _getLocalizationStrings = (dispatch) => {
  return (
    <div id='nav-items__language' className='nav-item'>
      <span id='rus' role='img' aria-label='russian flag' className='russian' onClick={()=>{
        GA.russianIconGA();
        dispatch(switchToRussian());
      }}>🇷🇺</span>
      <span id='en' role='img' aria-label='american  flag' className='english' onClick={()=>{
        GA.englishIconGA();
        dispatch(switchToEnglish());
      }}>🇺🇸</span>
      <span id='ch' role='img' aria-label='chinese flag' className='chinese' onClick={()=>{
        GA.chineseIconGA();
        dispatch(switchToChinese())
      }}>🇹🇼</span>
    </div>
  );
}
