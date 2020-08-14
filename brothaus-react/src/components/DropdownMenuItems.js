import React, { useState } from "react";
import urls from '../urls';
import Settings from "./loginStatus/Settings";
import WeatherDisplay from "./WeatherDisplay";
import '../style/DropdownMenuItems.css';

export default function DropDownMenuItems () {
        const [ English, setEnglish ] = useState(true);

        const _toggleLanguage = () => {
          setEnglish(!English);
        };

        return (
            <div id='menu-items' className='mdc-drawer mdc-drawer--modal mdc-drawer--open' data-test='menu-items'>
              <Settings />
              <div className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'>
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">help</i>
                <span className="mdc-list-item__text" role="menuitem">About</span>
              </div>
                <a href={urls.githubRepo} id="repo" className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' target="_blank">
                  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">code</i>
                  <span className="mdc-list-item__text">Code</span>
                </a>
              <div className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' id="columbus-weather">
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">cloud</i>
                <span className="mdc-list-item__text">
                  <WeatherDisplay/>
                </span>
              </div>
              <div onClick={_toggleLanguage} id="chinese-or-english" className='mdc-list-item mdc-list-item--selected demo-drawer-list-item' data-test='language-display'>
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">language</i>
                <span className="mdc-list-item__text">{English ? 'English' : '華語版本'}</span>
              </div>
            </div>
        );
};

