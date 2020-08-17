import React, { useState } from "react";
import urls from '../urls';
import WeatherDisplay from "./WeatherDisplay";
import '../style/DropdownMenuItems.css';

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
              <div className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'>
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">help</i>
                <span className="mdc-list-item__text" role="menuitem">About</span>
              </div>


              <a   className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' target="_blank" href={urls.githubRepo} rel="noopener noreferrer" id="repo" >
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">code</i>
                <span className="mdc-list-item__text">Code</span>
              </a>


              <div onClick={_toggleDegrees} className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' id="columbus-weather">
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">cloud</i>
                <span className="mdc-list-item__text">
                  <WeatherDisplay {...degrees}/>
                </span>
                <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">autorenew</i>
              </div>


              <div onClick={_toggleLanguage} id="chinese-or-english" className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' data-test='language-display'>
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">translate</i>
                <span className="mdc-list-item__text">{English ? 'English' : '華語版本'}</span>
              </div>
            </aside>
        );
};

