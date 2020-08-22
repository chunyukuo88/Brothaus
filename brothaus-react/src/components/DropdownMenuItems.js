import React, { useState } from 'react';
import urls from '../urls';
import Popup from 'reactjs-popup';
import WeatherDisplay from './WeatherDisplay';
import AboutModal from './AboutModal';

export default function DropDownMenuItems () {
        const [ English, setEnglish ] = useState(true);
        const [ degrees, toggleDegreeType ] = useState({isFahrenheit: true});

        const _toggleLanguage = () => {
          setEnglish(!English);
        };

        const _toggleDegrees = () => {
          toggleDegreeType({isFahrenheit: !degrees.isFahrenheit});
        };

        return (
            <aside id='menu-items' className='mdc-drawer mdc-drawer--modal mdc-drawer--open' data-test='menu-items'>

              <div className='mdc-list-item'>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>help</i>
                <Popup modal trigger={<span>About this site</span>}>
                  {close => <AboutModal close={close} />}
                </Popup>
              </div>


              <a className='mdc-list-item' target='_blank' href={urls.githubRepo} rel='noopener noreferrer' id='repo' >
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>code</i>

              </a>


              <div onClick={_toggleDegrees} className='mdc-list-item' id='columbus-weather'>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>cloud</i>
                <span className='mdc-list-item__text'>
                  <WeatherDisplay {...degrees}/>
                </span>
                <i className='material-icons mdc-text-field__icon mdc-text-field__icon--trailing'>autorenew</i>
              </div>


              <div onClick={_toggleLanguage} id='chinese-or-english' className='mdc-list-item'>
                <i className='material-icons mdc-list-item__graphic' aria-hidden='true'>translate</i>
                <div data-test='language-display' className='mdc-list-item__text'>{English ? 'English' : '華語版本'}</div>
              </div>
            </aside>
        );
};

