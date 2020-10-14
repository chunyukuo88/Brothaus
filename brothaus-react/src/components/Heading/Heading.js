import React, { useState } from 'react';
import ReactGA from 'react-ga';
import '../../css/Heading.css';
import { switchToRussian, switchToEnglish, switchToChinese } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Title from '../Title/Title';
import Welcome from '../Welcome/Welcome';



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
        {getWrappedWelcomeComponent()}
        {getLocalizationStrings(dispatch)}
        <div id='nav-items__weather'
             className='nav-item'
             onClick={_toggleDegrees}
             data-test='weather-display'>
              <WeatherDisplay {...degrees}/>
        </div>
      </nav>
    </section>
  );
};

const googleAnalyticsHandler = () => {
  ReactGA.event({
    category: 'Button',
    action: 'User clicked the Welcome text.'
  });
}

const getWrappedWelcomeComponent = () => <div id='nav-items__welcome'
                                              className='nav-item'
                                              onClick={googleAnalyticsHandler}
                                          ><Welcome/></div>;

const getLocalizationStrings = (dispatch) => {
  return (
    <div id='nav-items__language' className='nav-item'>
      <span id='rus' className='localization russian' onClick={()=>dispatch(switchToRussian())}>🇷🇺</span>
      <span id='en' className='localization english' onClick={()=>dispatch(switchToEnglish())}>🇺🇸</span>
      <span id='ch' className='localization chinese' onClick={()=>dispatch(switchToChinese())}>🇹🇼</span>
    </div>
  );
}
