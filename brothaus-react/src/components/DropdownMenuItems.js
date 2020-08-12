import Settings from "./loginStatus/Settings";
import React, { useState, useEffect } from "react";
import '../style/DropdownMenuItems.css';
import urls from '../urls';
import axios from 'axios';

export default () => {
        const [ English, setEnglish ] = useState(true);
        const [ weather, setWeather ] = useState('Weather');

        const getWeatherFromApi = async () => {
          const apiKey = 'eb366c82727f387afc53658766e245e8';
          const url = 'https://api.openweathermap.org/data/2.5/weather?q=Columbus,Ohio&appid=' + apiKey;
          return await axios.get(url);
        }

        useEffect(() => {
            getWeatherFromApi();
        },[]);

        const _toggleWeatherDisplay = () => {
          if (weather === 'Weather')
            setWeather('meow');
          else
            setWeather('Weather');
        }

        // const _toggleLanguage = () => {
        //   setEnglish(!English);
        // };

        const repo = urls.repo;

        return (
            <div id='menu-items'
                 className='mdc-drawer mdc-drawer--dismissible demo-drawer mdc-drawer--modal mdc-drawer--open'
                 data-test='menu-items'
                 data-testid='menu-items'>
                {/*<Settings />*/}
                {/*<div className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'>*/}
                {/*        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">help</i>*/}
                {/*        <span className="mdc-list-item__text">About</span>*/}
                {/*</div>*/}
                {/*<a className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'*/}
                {/*   id="repo" href={{repo}} target="_blank" rel="noopener noreferrer">*/}
                {/*        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">code</i>*/}
                {/*        <span className="mdc-list-item__text">Code</span>*/}
                {/*</a>*/}
                <div className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'
                   id="columbus-weather"
                   onClick={_toggleWeatherDisplay}
                  >
                        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">cloud</i>
                        <span className="mdc-list-item__text">
                                {weather}
                        </span>
                </div>
                {/*<div className='mdc-list-item mdc-list-item--selected demo-drawer-list-item'*/}
                {/*   id="chinese-or-english"*/}
                {/*   data-test='language-display'*/}
                {/*   onClick={_toggleLanguage}>*/}
                {/*        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">language</i>*/}
                {/*        <span className="mdc-list-item__text">{English ? 'English' : '華語版本'}</span>*/}
                {/*</div>*/}
            </div>
        );
};

