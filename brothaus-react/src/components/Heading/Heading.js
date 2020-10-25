import React, { useState } from 'react';
import '../../css/Heading.css';
import { switchToRussian, switchToEnglish, switchToChinese } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Title from '../Title/Title';
import Welcome from '../Welcome/Welcome';
import { welcomeTextGA,
         russianIconGA,
         englishIconGA,
         chineseIconGA,
} from '../../googleAnalytics/heading';

export default function Heading(){
  const dispatch = useDispatch();
  const [ degrees, toggleDegreeType ] = useState({ isFahrenheit: true });

  const _toggleDegrees = () => {
    toggleDegreeType({isFahrenheit: !degrees.isFahrenheit});
  };

  return (
    <section data-test='heading' id='heading'>
      <Title/>
      <nav id='nav-items'>
        <WrappedWelcomeComponent/>
        {getLocalizationStrings(dispatch)}
        <div id='nav-items__weather' className='nav-item' onClick={_toggleDegrees} data-test='weather-display'>
          <WeatherDisplay {...degrees}/>
        </div>
      </nav>
    </section>
  );
};

const WrappedWelcomeComponent = () => <div id='nav-items__welcome'
                                              className='nav-item'
                                              onClick={welcomeTextGA}><Welcome/></div>;

const getLocalizationStrings = (dispatch) => {
  return (
    <div id='nav-items__language' className='nav-item'>
      <span id='rus' role='img' aria-label='russian flag' className='russian' onClick={()=>{
        russianIconGA();
        dispatch(switchToRussian());
      }}>🇷🇺</span>
      <span id='en' role='img' aria-label='american  flag' className='english' onClick={()=>{
        englishIconGA();
        dispatch(switchToEnglish());
      }}>🇺🇸</span>
      <span id='ch' role='img' aria-label='chinese flag' className='chinese' onClick={()=>{
        chineseIconGA();
        dispatch(switchToChinese())
      }}>🇹🇼</span>
    </div>
  );
}
